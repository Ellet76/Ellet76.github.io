import { GOOGLE_EMAIL } from '$env/static/private'
import transporter from '$lib/emailSetup.server.js'

export const  actions = {
    default: async ({ request }) => {
        const formData = await request.formData()
        const email = "email@email.se";
        const subject = formData.get("subject");
        const body = formData.get("body");

        const message = {
            from: GOOGLE_EMAIL,
            to: email,
            subject: subject,
            text: body
        };

        // @ts-ignore
        const sendEmail = async (message) => {
            await new Promise((resolve, reject) => {
                transporter.sendMail(message, (err, info) => {
                    if (err) {
                        console.error(err);
                        reject(err);
                    } else {
                        resolve(info);
                    }
                });
            });
        };

        await sendEmail(message);

        return {
            success: "Email is sent",
        };
    }
}
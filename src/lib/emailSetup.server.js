import nodemailer from "nodemailer";
import { GOOGLE_EMAIL, GOOGLE_EMAIL_PASSWORD } from "$env/static/private";

let transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  auth: {
    user: GOOGLE_EMAIL,
    pass: GOOGLE_EMAIL_PASSWORD,
  },
  connectionTimeout: 100000, 
});

transporter.verify(function (error, success) {
  if (error) {
    console.error(error, "IT IS HORRIBLE");
  } else {
    console.log("Server is ready to take our messages");
  }
});

export default transporter;
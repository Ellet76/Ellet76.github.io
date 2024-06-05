<script>
    export let form;
</script>

<div class="wrapper">
    <div class="border">
        <fieldset>
            <div class="align-all">
                <legend>Send Emails To Me</legend>
                <br>
                <form method="POST" class="container" on:submit={()=>(alert("Email sent"))}>    
                    <div>
                        <label for="">Subject:</label>
                        <input name="subject" type="text" value="" />
                    </div>

                    <div>
                        <label for="">Text:</label>
                        <textarea name="body" rows="6" value="" />
                    </div>
                    <button type="submit">Send</button>
                </form>
                <p class="success">{form?.success || ""}</p>
            </div>
        </fieldset>
    </div>
</div>

<style>
    .border{
        border-width: 10px;
        border-radius: 20px;
        border-color: black;
        background-color: white;
        opacity: 60%;
    }
    .wrapper {
        max-width: 800px;
        margin: 2em auto;
    }
    fieldset {
        width: 100%;
        padding: 2em;
        box-shadow: 0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;
    }
    .align-all {
        width: 400px;
        margin: auto;
    }
    legend {
        font-weight: bold;
        font-size: 2em;
        color: #333;
        margin: auto;
        width: 300px;
    }
    .container {
        max-width: 400px;
    }
    label {
        font-weight: 600;
        margin-bottom: 0.25em;
        color: #555;
    }
    input {
        border-width: 1px;
        border-color: black;
        width: 100%;
        padding: 5px;
        color: black;
    }
    textarea{
        border-width: 1px;
        border-color: black;
        width: 100%;
        color: black;
    }
    button {
        width: 100px;
        cursor: pointer;
        padding: 0.5em 1em;
        border-radius: 4px;
        border: 1px solid rgb(5, 191, 64);
        background-color: rgb(5, 191, 64);
        color: white
    }
    button:hover{
        width: 100px;
        cursor: pointer;
        padding: 0.5em 1em;
        border-radius: 4px;
        border: 1px solid rgb(5, 151, 64);
        background-color: rgb(5, 151, 64);
        color: white
    }
    .success {
        color: #0a5;
    }
</style>
const nodemailer=require("nodemailer");

async function sendEmail(){
// emailconfiguration=>transport
try{
    const transport=nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "4c403701c6202a",
          pass: "67fa189be6b233"
        }
    })
    
    // eamil options
    const emailOptions={
        from:"rahulpunia1010@gmail.com",
        to:"abc@gmail.com",
        subject:"My first Email",
        text:"I am testing email",
        html:"<h1>I am testing email</h1>"
    }
    
    // send email
    
    await transport.sendMail(emailOptions);
    }catch(err){
        console.log(err);
    }
}

sendEmail().then(function(){
    console.log("email has been sended")
}).catch(function(err){
    console.log(err)
})
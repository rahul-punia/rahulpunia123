const nodemailer=require("nodemailer");

async function sendEmail(){
// emailconfiguration=>transport
try{
    const transport=nodemailer.createTransport({
        service:"gmail",
        host: "smtp.gmail.com",
        secure: false,
        auth: {
          user: "rahulpunia1011@gmail.com",
          pass: "occqshrmeddwhlqh"
        }
        // host: "smtp.mailtrap.io",
        // port: 2525,
        // auth: {
        //   user: "4c403701c6202a",
        //   pass: "67fa189be6b233"
        // }
    })
    
    // email options
    const emailOptions={
        from:"abc@gmail.com",
        to:"puniaakshay30@gmail.com",
        subject:"My first Email",
        text:"Your Order one full paneeer and four nan.I am testing email",
        html:"<h1>Hi Akshay Your Order one full paneeer and four nans.I am testing email</h1>"
    }
    
    // send email
    await transport.sendMail(emailOptions);
    }catch(err){
        console.log(err);
    }
}

//call function
sendEmail().then(function(){
    console.log("email has been sended")
}).catch(function(err){
    console.log(err)
})
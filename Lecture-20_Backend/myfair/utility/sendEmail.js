const nodemailer=require("nodemailer");
const secrets=require("../config/secrets");

module.exports = async function sendEmail(option) {
    try {
      // email configuration=> transport
      const transport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        secure: true,
        auth: {
          user: "rahulpunia1011@gmail.com",
          pass: secrets.APP_PASSWORD
        }
      })
      // email options
      const emailOptions = {
        from: "everyone@gmail.com",
        to: option.to,
        subject: option.subject,
        text:option.text,
        html: option.html
      }
      // send mail
      await transport.sendMail(emailOptions);
    } catch (err) {
      console.log(err);
    }
  }




//POC
// const nodemailer=require("nodemailer");
// async function sendEmail(){
// // emailconfiguration=>transport
// try{
//     const transport=nodemailer.createTransport({
//         service:"gmail",
//         host: "smtp.gmail.com",
//         secure: false,
//         auth: {
//           user: "rahulpunia1011@gmail.com",
//           pass: config.APP_PASSWORD
//         }
//        })
    
//     // email options
//     const emailOptions={
//         from:"abc@gmail.com",
//         to:"puniaakshay30@gmail.com",
//         subject:"My first Email",
//         text:"Your Order one full paneeer and four nan.I am testing email",
//         html:"<h1>Hi Akshay Your Order one full paneeer and four nans.I am testing email</h1>"
//     }
    
//     // send email
//     await transport.sendMail(emailOptions);
//     }catch(err){
//         console.log(err);
//     }
// }

// //call function
// sendEmail().then(function(){
//     console.log("email has been sended")
// }).catch(function(err){
//     console.log(err)
// })
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
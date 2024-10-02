const nodemailer = require("nodemailer");
const emailVerificationModel = require('../model/emailVerfication')
const genCode = `1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`
let codeGot = ''
const accountActiveMailer = async(email)=>{
    codeGot = '';
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'ruhitbaidya01@gmail.com',
        pass: 'vcddhlnsjxwjqwvy'
    }
      });

      for(let i = 0; i < 6; i++){
        codeGot += genCode[Math.floor(Math.random()*62)];
      }
      console.log(codeGot)
      const info = await transporter.sendMail({
        from: '"Hi This Is Your Verify Code 👻" <ruhitbaidya01@gmail.com>',
        to: email, 
        subject: "Hello ✔", 
        text: "Your Verify Code", 
        html: `This Is Your Verification Code <h4>${codeGot}</h4>`, 
      });

      if(info.messageId){
        const getCode = new emailVerificationModel({email : email, otpCode: codeGot})
         await getCode.save();
      }
}

module.exports = accountActiveMailer
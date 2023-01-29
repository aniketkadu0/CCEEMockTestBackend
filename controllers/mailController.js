"use strict";
const nodemailer = require("nodemailer");

async function mailer(req, res, next) {

  let transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: 'admin@cceestudy.online',
      pass: 'Baby1996@',
    },
  });

  await transporter.sendMail({
    from: `"Admin | cceestudy.online" <admin@cceestudy.online>`,
    to: req.user.email,
    subject: "Registered successfully in cceestudy.online!",
    html: `<div style="font-size: 16px;">
    <p>I'm so glad you registered for the mock tests!</p> 
    <p><strong>Registered email : </strong>${req.user.email}</p>
    <p><strong>Password : </strong>${req.body.password}</p>

    <p>Please click on below link to verify your email address</p>
    <a href="https://cceemocktest.online/user/verify?id=${req.user._id}">Verify email</a>

    <p>After verifying, sign in & proceed for payment by clicking on 
    "Pay now" button.</p>
    <p>Wish you all the best for the tests!</p>
    </div>
    
    <div style="color: #6600cc; margin-top: 50px;">
    <h3>Thanks & Regards,</h3>
    <h3>Admin</h3>
    <img src="https://cceestudy.online/images/book-reading.png"
    style="width : 50px" >
    <a href="https://cceestudy.online"><img src="https://cceestudy.online/images/email.png"
    style="width : 200px"></a><br>
    Email : <a href="mailto:admin@cceestudy.online"> admin@cceestudy.online</a><br>
    <p style="font-style: italic;">"Action is the foundational key to all succeess." <br>
    - Pablo Picasso</p>
	  </div>`
  })

}

module.exports = { mailer }

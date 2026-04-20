const nodemailer = require("nodemailer");

module.exports = async function sendEmail(
  message,
  sub,
  cate,
  UserEmail
) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_ID,
        pass: process.env.MAIL_PASS,
      },
    });                                                                     

    const mailOptions = {
      from: {
        name: "CoolManagement - Don't reply",
        address: process.env.GMAIL_USER,
      },
      to: UserEmail,
      subject: sub,
      html: message,
      headers: { "X-Category": cate },
    };

    await transporter.sendMail(mailOptions);

    console.log("Email sent successfully");
    return 1;
  } catch (error) {
    console.error("Nodemailer error:", error.message);
    return 0;
  }
};

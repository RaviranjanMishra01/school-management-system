const VERIFICATION_EMAIL_TEMPLATE = require("./emailTemp.js");
const sendEmail = require("./user.mailtrap.js");

async function sendVerificationEmail(verificationToken, email, schoolName, accountId) {
  try {

    const htmlContent = VERIFICATION_EMAIL_TEMPLATE
      .replace('{verificationCode}', verificationToken)
      .replace('{accountId}', accountId || "Unknown ID")
      .replace('{schoolName}', schoolName || "Cool Management");

    const response = await sendEmail(
      htmlContent,
      `Verify Your Email - ${schoolName || "Cool Management"}`,
      "Account Verification",
      email
    );

    if (!response) {
      throw new Error("Failed to send verification email");
    }

    return true;
  } catch (error) {
    throw new Error(`Error sending verification email: ${error.message}`);
  }
}

module.exports = sendVerificationEmail;

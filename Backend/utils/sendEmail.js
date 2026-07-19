const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
 host: "smtp.gmail.com",
    port: 465,
    secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
  family: 4, // Use IPv4
  connectionTimeout: 10000,
});

console.log("EMAIL_USER:", process.env.EMAIL);
console.log("EMAIL_PASS:", process.env.EMAIL_PASSWORD ? "Loaded ✅" : "Not Loaded ❌");
// Verify SMTP connection
transporter.verify((error) => {
    if (error) {
        console.log("❌ SMTP Error");
        console.log(error);
    } else {
        console.log("✅ Gmail SMTP Connected");
    }
});

const sendEmail = async ({ email, subject, message }) => {
  if (!process.env.EMAIL || !process.env.EMAIL_PASSWORD) {
    console.log("⚠️ SMTP credentials not configured. Skipping email send.");
    return false;
  }

  if (!email) {
    console.log("⚠️ Recipient email missing. Skipping email send.");
    return false;
  }

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject,
      html: message,
    });

    console.log("✅ Email Sent Successfully");
    console.log(info.response);
    return true;
  } catch (error) {
    console.log("❌ Email Error");
    console.log(error);
    return false;
  }
};

module.exports = sendEmail;
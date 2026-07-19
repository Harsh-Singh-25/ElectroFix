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

const sendEmail = async (options) => {
  try {
    console.log("📧 Sending email...");
    console.log("To:", options.email);
    console.log("Subject:", options.subject);

    const info = await transporter.sendMail({
      from: `ElectroFix <${process.env.EMAIL}>`,
      to: options.email,
      subject: options.subject,
      html: options.message,
    });

    console.log("✅ Email Sent Successfully");
    console.log(info);

  } catch (error) {
    console.error("❌ Email Error");
    console.error(error);

    throw error;
  }
};

module.exports = sendEmail;
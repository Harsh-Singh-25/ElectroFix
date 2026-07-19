const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_USER,
    pass: process.env.BREVO_PASS,
  },
});

console.log("BREVO_USER:", process.env.BREVO_USER ? "Loaded ✅" : "Not Loaded ❌");
console.log("BREVO_PASS:", process.env.BREVO_PASS ? "Loaded ✅" : "Not Loaded ❌");
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
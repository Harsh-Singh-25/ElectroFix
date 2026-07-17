const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

// Verify SMTP connection when server starts
transporter.verify((error, success) => {
    if (error) {
        console.log("❌ SMTP Error:");
        console.log(error);
    } else {
        console.log("✅ SMTP Server Ready");
    }
});

const sendEmail = async (options) => {
    try {

        const info = await transporter.sendMail({
            from: `ElectroFix <${process.env.EMAIL}>`,
            to: options.email,
            subject: options.subject,
            html: options.message
        });

        console.log("✅ Email Sent Successfully");
        console.log("Sending To:", options.email);
console.log("Accepted:", info.accepted);
console.log("Rejected:", info.rejected);
console.log("Response:", info.response);
    } catch (error) {

        console.error("❌ Email Error");
        console.error(error);

        throw error;
    }
};

module.exports = sendEmail;
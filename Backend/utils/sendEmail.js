const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    family: 4,

    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000,

    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

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
        const info = await transporter.sendMail({
            from: `ElectroFix <${process.env.EMAIL}>`,
            to: options.email,
            subject: options.subject,
            html: options.message
        });

        console.log("✅ Email Sent Successfully");
        console.log(info.response);

    } catch (error) {
        console.log("❌ Email Error");
        console.log(error);
        throw error;
    }
};

module.exports = sendEmail;
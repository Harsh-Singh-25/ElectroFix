const axios = require("axios");

async function sendEmail(options) {
  try {
    console.log("🚀 Sending email...");
    console.log("API Key:", process.env.BREVO_API_KEY ? "Loaded ✅" : "Missing ❌");
    console.log("From:", process.env.EMAIL_FROM);
    console.log("To:", options.email);

    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "ElectroFix",
          email: process.env.EMAIL_FROM,
        },
        to: [
          {
            email: options.email,
          },
        ],
        subject: options.subject,
        htmlContent: options.message,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        timeout: 15000,
      }
    );

    console.log("✅ Email sent");
    console.log(response.data);

    return response.data;
  } catch (err) {
    console.log("========== BREVO ERROR ==========");

    if (err.response) {
      console.log("Status:", err.response.status);
      console.log("Data:", JSON.stringify(err.response.data, null, 2));
    } else {
      console.log(err.message);
    }

    console.log("================================");

    throw err;
  }
}

module.exports = sendEmail;
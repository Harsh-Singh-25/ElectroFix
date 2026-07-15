const Booking = require("../models/Booking");

const createBooking = async (req, res) => {
    console.log("➡️ Request received");
    console.log("Body:", req.body);

    try {
        console.log("Creating booking...");

        const booking = await Booking.create(req.body);

        console.log("✅ Booking created");

        return res.status(201).json({
            success: true,
            booking
        });

    } catch (error) {
        console.error("❌ Error:", error);

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = { createBooking };
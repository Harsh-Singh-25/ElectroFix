const Booking = require("../models/booking");
const sendEmail = require("../utils/sendEmail");

const mongoose = require("mongoose");

const createBooking = async (req, res) => {
  try {
    console.log("1. Request received");

    const booking = await Booking.create(req.body);
    console.log("2. Booking saved");

    try {
      console.log("Sending email to:", booking.email);

      await sendEmail({
        email: "harshsingh252003@gmail.com",
        subject: `New Booking ${booking.ticketId}`,
        message: "<h1>Test</h1>",
      });

      console.log("4. Admin email sent");
    } catch (err) {
      console.error("Admin email failed:", err.message);
    }

    console.log("5. Sending response");

    return res.status(201).json({
      success: true,
      booking,
    });

  } catch (err) {
    console.error("Create booking error:", err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};


const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateBooking = async (req, res) => {
  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Booking ID"
      });
    }

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Booking Updated Successfully",
      booking
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

const deleteBooking = async (req, res) => {

  try {

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Booking ID"
      });
    }

    const booking = await Booking.findByIdAndDelete(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Booking Deleted Successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};

module.exports = {
  createBooking,

  getBookings,

  updateBooking,

  deleteBooking,
};

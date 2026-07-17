const Booking = require("../models/Booking");
const sendEmail = require("../utils/sendEmail");

const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);

    await sendEmail({
      email: process.env.EMAIL,
      subject: `🔧 New Booking Received — ${booking.ticketId}`,
      message: `
        <h2>📋 New Service Booking</h2>
        <p><strong>Ticket ID:</strong> ${booking.ticketId}</p>

        <table border="1" cellpadding="10" cellspacing="0" style="border-collapse:collapse;font-family:Arial;">
          <tr>
            <th align="left">Customer Name</th>
            <td>${booking.fullName}</td>
          </tr>
          <tr>
            <th align="left">Mobile</th>
            <td>${booking.mobile}</td>
          </tr>
          <tr>
            <th align="left">Email</th>
            <td>${booking.email}</td>
          </tr>
          <tr>
            <th align="left">Service</th>
            <td>${booking.service}</td>
          </tr>
          <tr>
            <th align="left">Problem</th>
            <td>${booking.problem}</td>
          </tr>
          <tr>
            <th align="left">Date</th>
            <td>${booking.date}</td>
          </tr>
          <tr>
            <th align="left">Time</th>
            <td>${booking.time}</td>
          </tr>
          <tr>
            <th align="left">Address</th>
            <td>${booking.address}</td>
          </tr>
          <tr>
            <th align="left">Status</th>
            <td>${booking.status}</td>
          </tr>
        </table>

        <br>
        <p><b>Booking Time:</b> ${booking.createdAt}</p>
      `,
    });

    if (booking.email) {
      await sendEmail({
        email: booking.email,
        subject: `Your ElectroFix Ticket ${booking.ticketId}`,
        message: `
          <h2>✅ Booking Confirmed</h2>
          <p>Hi ${booking.fullName},</p>
          <p>Your booking ticket <strong>${booking.ticketId}</strong> has been received.</p>
          <p><strong>Service:</strong> ${booking.service}</p>
          <p><strong>Date:</strong> ${booking.date}</p>
          <p><strong>Time:</strong> ${booking.time}</p>
          <p><strong>Address:</strong> ${booking.address}</p>
          <p>Our technician will contact you shortly.</p>
          <p>If you need to update your booking, reply to this email.</p>
        `,
      });
    }

    res.status(201).json({
      success: true,
      message: "Booking Created Successfully",
      booking,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,

      message: error.message,
    });
  }
};
const mongoose = require("mongoose");


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

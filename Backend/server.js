const express = require("express");

const cors = require("cors");

const dotenv = require("dotenv");

const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

const allowedOrigins = [
    "http://127.0.0.1:5500",
    "http://localhost:5500",
    "https://electro-fix-nu.vercel.app",
    "https://electro-fix-tawny.vercel.app"
];

dotenv.config();

connectDB();

const app = express();

app.use(cors({
    origin: function(origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
}));

app.use(express.json());
app.get("/", (req, res) => {
    res.send("Server is working");
});

app.use("/api/booking",require("./routes/bookingRoutes"));

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});;
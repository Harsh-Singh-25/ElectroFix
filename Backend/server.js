const express = require("express");

const cors = require("cors");

const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());
app.get("/", (req, res) => {
    res.send("Server is working");
});

app.use("/api/booking",require("./routes/bookingRoutes"));

app.listen(process.env.PORT,()=>{

console.log("Server Running");

});
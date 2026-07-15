const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

    name:String,

    phone:String,

    email:String,

    service:String,

    problem:String,

    date:String,

    time:String,

    address:String,

    status:{
        type:String,
        default:"Pending"
    }

},{
    timestamps:true
});

module.exports=mongoose.model("Booking",bookingSchema);
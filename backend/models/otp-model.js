const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 2, // The document will be automatically deleted after 5 minutes of its creation time
  },
});


const otpModel = new mongoose.model("Otp",otpSchema);

module.exports = otpModel;

const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  ownerId: {
    type: mongoose.ObjectId,
    required: true,
    ref: 'User'
  },
  sitterId: {
    type: mongoose.ObjectId,
    required: true,
    ref: 'User'
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true
  },
  accepted: {
    type: Boolean,
    default: null,
  },  
  paid: {
    type: Boolean,
    default: false,
  },
});

module.exports = Request = mongoose.model("Request", requestSchema);

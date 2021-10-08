const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    birth: {
      type: String,
      required: true,
    },
    photos: [String],
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      default: "Male",
    },
    availability: [String],
    isSitter: {
      type: Boolean,
      default: false,
    },
    hourlyWage: {
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = Profile = mongoose.model("profile", profileSchema);

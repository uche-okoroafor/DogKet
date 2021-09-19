const mongoose = require("mongoose");
Schema = mongoose.Schema;
const User = require("./User");

const profileSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: User,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: String,
  phone: String,
  description: String,
  birth: String,
  gender: String,
  availability: [Date],
});

module.exports = Profile = mongoose.model("profile", profileSchema);

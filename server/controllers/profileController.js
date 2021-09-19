const Profile = require("../models/ProfileModel");

// create new profile using given arguments
const addProfile = async (props) => {
  let newProfile = await new Profile(props);
  let profile = await newProfile.save();
  return profile;
};
exports.createProfile = async (req, res, next) => {
  try {
    let response = await addProfile(req.body);
    res.status(201).json(response);
  } catch (err) {
    next(err);
  }
};

// updating existing profile using given id and new data
const changeProfile = async (id, newData) => {
  await Profile.findByIdAndUpdate(id, newData);
};
exports.updateProfile = (req, res, next) => {
  try {
    changeProfile(req.body.id, req.body);
    res.status(201).json({ message: " your profile is updated" });
  } catch (err) {
    next(err);
  }
};

// find a profile using its id
const searchProfile = async (id) => {
  let profile = await Profile.findById(id);
  return profile;
};
exports.findProfile = async (req, res, next) => {
  try {
    let response = await searchProfile(req.body.id);
    res.status(201).json(response);
  } catch (err) {
    next(err);
  }
};

// Get All profiles
exports.getAllProfiles = async (req, res, next) => {
  try {
    let profiles = await Profile.find();
    res.status(201).json(profiles);
  } catch (err) {
    next(err);
  }
};

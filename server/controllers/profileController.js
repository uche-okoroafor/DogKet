const Profile = require("../models/ProfileModel");
const mongoose = require("mongoose");
const { capitalize, formatAddress } = require("../utils/helperFunctions");
const asyncHandler = require("express-async-handler");

// @route POST /profile
// @access private
// @desc Create a default profile of a logged-in user. Note: this profile is not a 'Sitter' profile
exports.createProfile = asyncHandler(async (req, res, next) => {
  try {
    const { firstName, lastName, gender, birth, phone, address, description } =
      req.body;

    const userId = req.user.id;

    let profile = await Profile.findOne({ userId });

    if (profile) {
      res.status(409);
      throw new Error("Profile already exists");
    }

    const data = {
      userId,
      firstName: capitalize(firstName),
      lastName: capitalize(lastName),
      gender,
      birth,
      phone,
      address: formatAddress(address),
      description,
    };

    profile = new Profile(data);
    await profile.save();
    res.status(201).json(profile);
  } catch (err) {
    next(err);
  }
});

// @route PUT /profile/:profileId
// @access private
// @desc Update a profile of a logged-in user ONLY. It should not be able to update other user's profile.
exports.updateProfile = asyncHandler(async (req, res, next) => {
  try {
    const { profileId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(profileId)) {
      res.status(400);
      throw new Error("Invalid profileId");
    }

    const userId = req.user.id;

    const {
      firstName,
      lastName,
      gender,
      birth,
      phone,
      address,
      description,
      isSitter,
      title,
      hourlyWage,
      availability,
    } = req.body;

    const data = {
      userId,
      firstName: capitalize(firstName),
      lastName: capitalize(lastName),
      gender,
      birth,
      phone,
      address: formatAddress(address),
      description,
      title,
      isSitter,
      hourlyWage,
      availability,
    };

    const updatedProfile = await Profile.findOneAndUpdate(
      { _id: profileId, userId },
      data,
      {
        new: true,
      }
    );

    if (!updatedProfile) {
      res.status(404);
      throw new Error(
        "Couldn't find a profile with the profileId for this user"
      );
    }

    res.status(200).json(updatedProfile);
  } catch (err) {
    next(err);
  }
});

// @route GET /profile/:profileId
// @access private
// @desc Get a profile with given profileId. profileId can be either a logged in user's profileId or other user's profileId.
exports.findProfile = asyncHandler(async (req, res, next) => {
  try {
    const { profileId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(profileId)) {
      res.status(400);
      throw new Error("Invalid profileId");
    }

    const profile = await Profile.findOne({ _id: profileId });

    if (!profile) {
      res.status(404);
      throw new Error("Profile not found");
    }

    res.status(200).json(profile);
  } catch (err) {
    next(err);
  }
});

// @route GET /profile
// @access private
// @desc Get all sitter profiles only.
exports.getAllProfiles = asyncHandler(async (req, res, next) => {
  try {
    const profiles = await Profile.find({ isSitter: true });

    if (profiles.length === 0) {
      res.status(404);
      throw new Error("No Sitter Profiles");
    }

    res.status(200).json(profiles);
  } catch (err) {
    next(err);
  }
});

// @route GET /profile/search
// @desc Search for sitters
// @access Private
exports.searchSittersByCity = asyncHandler(async (req, res, next) => {
  const { city, startDate, endDate } = req.query;

  let sitters;

  if (city) {
    sitters = await Profile.find({
      isSitter: true,
      address: { $regex: city, $options: "i" },
    });
  }

  if (!sitters) {
    res.status(404);
    throw new Error("No sitters found in search");
  }

  res.status(200).json(sitters);
});

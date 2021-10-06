const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const profileController = require("../controllers/profileController");
const { validateProfile, validateSitterProfile } = require("../validate");
// uploadController doesn't exist in the current main branch.
// const uploadController = require("../controllers/uploadController");
router.post("/", protect, validateProfile, profileController.createProfile);
router.put(
  "/:profileId",
  protect,
  validateProfile,
  validateSitterProfile,
  profileController.updateProfile
);
router.get("/search", protect, profileController.searchSittersByCity);
router.get("/:profileId", protect, profileController.findProfile);
router.get("/", protect, profileController.getAllProfiles);

// router.post("/upload", uploadController.setUpload);

module.exports = router;

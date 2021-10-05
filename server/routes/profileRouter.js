const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");
const { validateProfile, validateSitterProfile } = require("../validate");
// uploadController doesn't exist in the current main branch.
// const uploadController = require("../controllers/uploadController");
router.post("/", validateProfile, profileController.createProfile);
router.put(
  "/:profileId",
  validateProfile,
  validateSitterProfile,
  profileController.updateProfile
);
router.patch("/:profileId", profileController.patchProfile);
router.get("/:profileId", profileController.findProfile);
router.get("/", profileController.getAllProfiles);
// router.post("/upload", uploadController.setUpload);

module.exports = router;
j;

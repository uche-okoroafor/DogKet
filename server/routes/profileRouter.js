const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");
const uploadController = require("../controllers/uploadController");

router.post("/:id", profileController.createProfile);
router.put("/update:id", profileController.updateProfile);
router.get("/:id", profileController.findProfile);
router.get("/all:id", profileController.getAllProfiles);
router.post("/upload:id", uploadController.setUpload);

module.exports = router;

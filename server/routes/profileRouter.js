const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");

router.post("/", profileController.createProfile);
router.put("/update", profileController.updateProfile);
router.get("/", profileController.findProfile);
router.get("/all", profileController.getAllProfiles);

module.exports = router;

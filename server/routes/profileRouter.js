const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");

router.post("/:id", profileController.createProfile);
router.put("/update/:id", profileController.updateProfile);
router.get("/:id", profileController.findProfile);
router.get("/all:id", profileController.getAllProfiles);

module.exports = router;

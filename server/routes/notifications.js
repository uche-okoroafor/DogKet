const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");

const {
  createNotification,
  notificationList,
  updateReadStatus,
} = require("../controllers/notifications");

router.route("/").post(protect, createNotification);
router.route("/").get(protect, notificationList);
router.route("/:notificationId").patch(protect, updateReadStatus);

module.exports = router;

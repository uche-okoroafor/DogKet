const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");

const { 
    createNotification,
    notificationList,
    updateReadStatus,
} = require("../controllers/notifications");

router.route("/create").post(protect, createNotification);
router.route("/all").get(protect, notificationList);
router.route("/read/:notification_id").patch(protect, updateReadStatus);

module.exports = router;

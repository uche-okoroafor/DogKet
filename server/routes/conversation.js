const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const {
  getAllConversations,
  getConversation,
} = require("../controllers/conversation");

router.route("/").get(protect, getAllConversations);

router.route("/:conversationId").get(protect, getConversation);

module.exports = router;

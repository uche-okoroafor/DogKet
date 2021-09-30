const express = require("express");
const router = express.Router();
const { validateCreateConversation } = require("../validate");
const {
  getAllConversations,
  getConversation,
  createConversation,
} = require("../controllers/conversation");

router.route("/").get(getAllConversations);

router.route("/:conversationId").get(getConversation);

router.route("/").post(validateCreateConversation, createConversation);

module.exports = router;

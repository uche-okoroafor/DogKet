const express = require("express");
const router = express.Router();
const { validateSendMessage } = require("../validate");
const { sendMessage } = require("../controllers/message");

router.route("/").post(validateSendMessage, sendMessage);

module.exports = router;

const mongoose = require("mongoose");
const Conversation = require("../models/Conversation");
const asyncHandler = require("express-async-handler");

// @route GET /conversations
// @desc Get all conversations of a logged-in user
// @access private
exports.getAllConversations = asyncHandler(async (req, res, next) => {
  try {
    const userId = req.user.id;

    const conversations = await Conversation.find({
      $or: [{ user1: userId }, { user2: userId }],
    })
      .populate("messages")
      .populate("user1", "-password -register_date -__v")
      .populate("user2", "-password -register_date -__v");

    res.status(200).json(conversations);
  } catch (error) {
    next(error);
  }
});

// @route GET /conversations/:conversationId
// @desc Get a conversation (all messages in the conversation) of a logged-in user
// @access private
exports.getConversation = asyncHandler(async (req, res, next) => {
  try {
    const { conversationId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(conversationId)) {
      res.status(400);
      throw new Error("Invalid conversationId");
    }

    const userId = req.user.id;

    let conversation;

    conversation = await Conversation.findOne({
      _id: conversationId,
      $or: [{ user1: userId }, { user2: userId }],
    });

    if (!conversation) {
      res.status(404);
      throw new Error(
        "Couldn't find a conversation for the user with the conversationId"
      );
    }

    conversation = await Conversation.findById(conversationId)
      .populate("messages")
      .populate("user1", "-password -register_date")
      .populate("user2", "-password -register_date");

    res.status(200).json(conversation);
  } catch (error) {
    next(error);
  }
});

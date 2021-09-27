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
    })
      .populate("messages")
      .populate("user1", "-password -register_date")
      .populate("user2", "-password -register_date");

    if (!conversation) {
      res.status(404);
      throw new Error(
        "Couldn't find a conversation for the user with the conversationId"
      );
    }

    res.status(200).json(conversation);
  } catch (error) {
    next(error);
  }
});

// @route POST /conversations
// @desc Create a conversation between a logged-in user and the other user (recipient)
// @access private
exports.createConversation = asyncHandler(async (req, res, next) => {
  try {
    const { recipientId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(recipientId)) {
      res.status(400);
      throw new Error("Invalid recipientId");
    }

    const userId = req.user.id;

    let conversation;

    conversation = await Conversation.findOne({
      $or: [
        { $and: [{ user1: userId }, { user2: recipientId }] },
        { $and: [{ user1: recipientId }, { user2: userId }] },
      ],
    });

    if (conversation) {
      res.status(404);
      throw new Error(
        "Conversation between this user and recipient already exists."
      );
    }

    conversation = await Conversation.create({
      user1: userId,
      user2: recipientId,
    });

    conversation = await conversation
      .populate("user1", "-password -register_date")
      .populate("user2", "-password -register_date")
      .execPopulate();

    res.status(200).json(conversation);
  } catch (error) {
    next(error);
  }
});

const mongoose = require("mongoose");
const Message = require("../models/Message");
const asyncHandler = require("express-async-handler");
const Conversation = require("../models/Conversation");

// @route POST /messages
// @desc Send a message
// @access private
exports.sendMessage = asyncHandler(async (req, res, next) => {
  try {
    const { conversationId, text, recipientId } = req.body;

    if (conversationId && !mongoose.Types.ObjectId.isValid(conversationId)) {
      res.status(400);
      throw new Error("Invalid conversationId");
    }

    if (!mongoose.Types.ObjectId.isValid(recipientId)) {
      res.status(400);
      throw new Error("Invalid recipientId");
    }

    const userId = req.user.id;
    let conversation;
    let message;

    if (conversationId) {
      // To make sure that the current user and recipient belong to this conversation
      conversation = await Conversation.findOne({
        _id: conversationId,
        $or: [
          { $and: [{ user1: userId }, { user2: recipientId }] },
          { $and: [{ user1: recipientId }, { user2: userId }] },
        ],
      });

      if (conversation) {
        // Add a new message into existing conversation
        message = await createMessage(userId, text, recipientId, conversation);
      } else {
        res.status(404);
        throw new Error(
          "Couldn't find a conversation for the user with the conversationId"
        );
      }
    } else {
      // Create a new conversation and add a new message into the new conversation
      message = await createMessage(userId, text, recipientId, conversation);
    }
    res.status(200).json(message);
  } catch (error) {
    next(error);
  }
});

// helper function
const createMessage = async (sender, text, recipientId, conversation) => {
  try {
    const message = await Message.create({
      sender,
      text,
      recipientRead: false,
    });

    if (!conversation) {
      conversation = await Conversation.create({
        user1: sender,
        user2: recipientId,
      });
    }

    conversation.messages.push(message._id);
    await conversation.save();
    return message;
  } catch (error) {
    console.log(error);
  }
};

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

    if (!mongoose.Types.ObjectId.isValid(conversationId)) {
      res.status(400);
      throw new Error("Invalid conversationId");
    }

    if (!mongoose.Types.ObjectId.isValid(recipientId)) {
      res.status(400);
      throw new Error("Invalid recipientId");
    }

    const userId = req.user.id;

    const conversation = await Conversation.findOne({
      _id: conversationId,
      $or: [
        { $and: [{ user1: userId }, { user2: recipientId }] },
        { $and: [{ user1: recipientId }, { user2: userId }] },
      ],
    });

    if (!conversation) {
      res.status(404);
      throw new Error(
        "Couldn't find a conversation with the conversationId and participants"
      );
    }

    let message = await Message.create({
      conversation: conversation._id,
      sender: userId,
      text,
      recipientRead: false,
    });

    conversation.latestMessage = message._id;
    await conversation.save();
    message = await message
      .populate("sender", "-password -register_date")
      .execPopulate();

    res.status(200).json(message);
  } catch (error) {
    next(error);
  }
});

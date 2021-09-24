const Notification = require("../models/Notifications");
const asyncHandler = require("express-async-handler");
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

// @route POST /notification
// @desc create a new notification
// @access Private
exports.createNotification = asyncHandler(async (req, res, next) => {
  try {
    const userId = req.user.id;
    
    const { type, date, title, description } = req.body;
    const notificatonModel = {
        userId: ObjectId(userId),
        date: new Date(date),
        type,
        title,
        description
    };
    
    const notification = await Notification.create(notificatonModel); 
    res.status(201).json({
      success: { notification }
    });
  } catch (error) {
    next(error);
  } 
});

// @route GET /notification/all
// @desc list of notifications; only get read if query provided 
// @access Private
exports.notificationList = asyncHandler(async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { unread } = req.query; // query = {unread:"true"}
    
    const options = { userId: ObjectId(userId) };
    if (unread == 'true') options.read = true;
  
    const notifications = await Notification.find( options );
    res.status(200).json({
      success: { notifications }
    });
  } catch (error) {
      next(error);
  } 
});

// @route UPDATE /notification/read
// @desc Update notification as read
// @access Private
exports.updateReadStatus = asyncHandler(async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { notificationId } = req.body;
    
    const notification = await Notification.findById(notificationId);
    if (!notification) {
      return res
        .status(404)
        .json({ message: "Request does not exists"});
    }

    if (notification.userId !== userId) {
      return res
        .status(401)
        .json({ message: 'Not authorized' });
    }

    notification.read = true;
    await notification.save();

    res.status(200).json({
      success: { notification }
    });
  } catch (error) {
    next(error);
  }
});


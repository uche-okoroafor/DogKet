const Notification = require("../models/Notifications");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

// @route POST /notification
// @desc create a new notification
// @access Private
exports.createNotification = asyncHandler(async (req, res, next) => {
  try {
    const userId = req.user.id;

    const { type, title, description } = req.body;
    const notificatonModel = {
      userId: ObjectId(userId),
      type,
      title,
      description,
    };

    const notification = await Notification.create(notificatonModel);
    res.status(201).json({
      success: { notification },
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
    const { unread } = req.query;
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const skipIndex = (page - 1) * limit;

    console.log(req.query);
    const options = { userId: ObjectId(userId) };
    if (unread === "true") options.read = false;

    const notifications = await Notification.find(options)
      .sort({ createdAt: "desc" })
      .limit(limit)
      .skip(skipIndex)
      .exec();

    // console.log(options, unread)
    res.status(200).json({
      success: { notifications },
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
    // const { notificationId } = req.params;
    const { notificationsToUpd } = req.body;
    console.log(notificationsToUpd);
    if (notificationsToUpd.length <= 0) {
      return res.status(200).json({
        success: { notifications: [] },
      });
    }

    // const notification = await Notification.findOne({ notificationId, userId });
    // if (!notification) {
    //   return res.status(404).json({ message: "Notification not found" });
    // }
    const updateRes = await Notification.updateMany(
      {
        _id: { $in: notificationsToUpd },
        userId,
      },
      { read: true }
    );

    console.log(updateRes);
    res.status(200).json({
      success: { notifications: notificationsToUpd },
    });
  } catch (error) {
    next(error);
  }
});

// @route GET /notification/count
// @desc get count of notifications
// @access Private
exports.notificationCount = asyncHandler(async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { unread } = req.query;
    // const { notificationId } = req.params;
    // const { notificationsToUpd  } = req.body;
    // console.log(notificationsToUpd);

    // const notification = await Notification.findOne({ notificationId, userId });
    // if (!notification) {
    //   return res.status(404).json({ message: "Notification not found" });
    // }

    const options = { userId: ObjectId(userId) };
    if (unread === "true") options.read = false;

    const count = await Notification.countDocuments(options);
    console.log(options, count);
    res.status(200).json({
      success: { count },
    });
  } catch (error) {
    next(error);
  }
});

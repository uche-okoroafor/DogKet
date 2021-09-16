const Request = require("../models/Request");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

// @route POST /request/
// @desc create a new request 
// @access Private
exports.createRequest = asyncHandler(async (req, res, next) => {
   try {
      const user = await User.findById(req.user.id);
      if (!user) {
        return res
          .status(401)
          .json({ message: 'Not authorized' });
      }

      const { sitterId, startDate, endDate } = req.body;
      const requestModel = {
          user_id: user._id, 
          sitter_id: sitterId,
          start_date: startDate,
          end_date: endDate,
      };

      const requestExists = await Request.findOne(requestModel);
      if (requestExists) {
        return res
            .status(400) 
            .json({ message: 'You have already made a request' });
      }

      const sitterRequest = await Request.create(requestModel); 
      res.status(201).json({ sitterRequest });
    } catch (error) {
      next(error);
    } 
  
});

// @route GET /request
// @desc list of requests made for logged in user
// @access Private
exports.userRequests = asyncHandler(async (req, res, next) => {
  try {
      const user = await User.findById(req.user.id);
      if (!user) {
        return res
          .status(401)
          .json({ message: 'Not authorized' });
    }
    
      const requestsByUser = await Request.find({ user_id: user.id });
      if (!requestsByUser) {
        return res
          .status(200)
          .json({ message: "There are no requests"});
      }

      res.status(200).json({ requestsByUser });
    } catch (error) {
      next(error);
    } 

});

// @route UPDATE /request/accepted
// @desc Update request with approved or decline
// @access Private
exports.updateAccept = asyncHandler(async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res
        .status(401)
        .json({ message: 'Not authorized' });
  }

    const { requestId, accepted } = req.body;

    const request = await Request.findOne({ _id: requestId });
    if (!request) {
      return res
        .status(404)
        .json({ message: "Request does not exists"});
    }

    request.accepted = accepted;
    await request.save();

    res.status(200).json({ request });
  } catch (error) {
    next(error);
  } 
  
});


const Request = require("../models/Request");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const { protect } = require("./middleware/auth");

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
        // throw new Error("Not authorized");
    }

    const { sitterId, startId, endDate } = req.body;
    const requestModel = {
        user_id: user.id, 
        sitter_id: sitterId,
        start_date: startId,
        end_date: endDate,
    }
    // check if user made a request already? 
    const requestExists = await Request.findOne(requestModel);

    if (requestExists) {
      return res
          .status(400) //?
          .json({ message: 'You have already made a request' });
    }

    const sitterRequest = await Request.create(requestModel) 
    
    console.log(sitterRequest);

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
      // const {  } = req.body;

      const requestsByUser = await Request.find({ user_id: user.id });
    
      if (!requestsByUser) {
          return res
            .status(200)
            .json({ message: "There are no requests"});
      }

      console.log(requestsByUser)
      res.status(200).json({requestsByUser, message: "Success" });
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
      // throw new Error("Not authorized");
  }

    const { id, accepted } = req.body;

    const request = await Request.findOne({ _id: id });

    if (!request) {
      return res
      .status(404)
      .json({ message: "Request does not exists"});
    }

    request.accepted = accepted;
    await request.save();

    console.log(request)
    res.status(200).json({ request });

  } catch (error) {
    next(error);
  } 
  
});


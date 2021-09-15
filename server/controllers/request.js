const Request = require("../models/Request");
const asyncHandler = require("express-async-handler");
const { protect } = require("./middleware/auth");

// @route POST /request/
// @desc create a new request 
// @access Private
exports.createRequest = asyncHandler(protect, async (req, res, next) => {
   try {
    const user = await User.findById(req.user.id);

    if (!user) {
        res.status(401);
        throw new Error("Not authorized");
    }

    const { sitter_id, start_date, end_date } = req.body;
    
    // check if user made a request already?
    const requestExists = await User.findOne({ sitter_id, start_date, end_date });

    if (requestExists) {
        res.status(400);
        throw new Error("You have already made a request");
    }


    const sitterRequest = await Request.create({
        user_id: new mongoose.Types.ObjectId() ,
        sitter_id: new mongoose.Types.ObjectId(), 
        start_date: Date.now(),
        end_date: Date.now()
      }) 
    
    console.log(sitterRequest);
    

    res.status(201).json({});
    } catch(e) {
        res.status(400);
        throw new Error(e);
    } 
  
});

// @route POST /auth/login
// @desc Login user
// @access Public
// exports.loginUser = asyncHandler(async (req, res, next) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });

//   if (user && (await user.matchPassword(password))) {
//     const token = generateToken(user._id);
//     const secondsInWeek = 604800;

//     res.cookie("token", token, {
//       httpOnly: true,
//       maxAge: secondsInWeek * 1000
//     });

//     res.status(200).json({
//       success: {
//         user: {
//           id: user._id,
//           username: user.username,
//           email: user.email
//         }
//       }
//     });
//   } else {
//     res.status(401);
//     throw new Error("Invalid email or password");
//   }
// });

// @route UPDATE /request/accepted
// @desc Update request with approved or decline
// @access Private
exports.loadUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("Not authorized");
  }

  res.status(200).json({
    success: {
      user: {
        id: user._id,
        username: user.username,
        email: user.email
      }
    }
  });
});


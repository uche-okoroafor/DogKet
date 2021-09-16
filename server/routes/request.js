const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");

const { 
    createRequest,
    userRequests,
    updateAccept
    } = require("../controllers/request");

router.route("/create").post(protect, createRequest);
router.route("/list").get(protect, userRequests);
router.route("/accept").put(protect, updateAccept);

module.exports = router;

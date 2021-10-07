const express = require("express");
const router = express.Router();
const { createPaymentIntent } = require("../controllers/payment");

router.post("/create-payment-intent/:amount", createPaymentIntent);
module.exports = router;

const stripe = require("stripe")(process.env.STRIPE_SK);
const asyncHandler = require("express-async-handler");

exports.createPaymentIntent = asyncHandler(async (req, res) => {
  const { amount, paymentMethodId, customer } = req.body;
  console.log(amount, paymentMethodId, customer);
  if (!amount) {
    return res.status(400).json({ err: "amount is undefined" });
  }
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      customer,
      amount,
      currency: "USD",
      payment_method: paymentMethodId,
      // confirm: 'true'
    });
    res.status(200).send(paymentIntent.client_secret);
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
});

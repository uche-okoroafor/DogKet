const stripe = require('stripe')(process.env.STRIPE_SK)
const asyncHandler = require('express-async-handler')

exports.createPaymentIntent = asyncHandler(async (req, res) => {
if (req.method === "POST"){
  try {
const {amount} = req.body
const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "usd"
      });

   res.status(200).send(paymentIntent.client_secret);

    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
}
 else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
})





// const getDonutPrice = numDonuts =>
//   (Math.round(numDonuts * 1.5 * 100) / 100).toFixed(2);

// export default getDonutPrice;


// const stripe = require('stripe')('sk_test_51JdfCrHTISnlklzNChwlgWyDi3oCf1XjQfAqEyjs9ORRytdI3iAhKbBkCBuwTlkOGVKj3bKWsgS2gTh37u33XbrY00kvuSDCjL');

// const paymentMethod = await stripe.paymentMethods.attach(
//   'pm_1JekSXHTISnlklzNIe7951ii',
//   {customer: 'cus_KIbJeXgkn8YNfA'}
// );

// const paymentMethods = await stripe.paymentMethods.list({
//   customer: 'cus_KIbJeXgkn8YNfA',
//   type: 'card',
// });
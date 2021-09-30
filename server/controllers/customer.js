const stripe = require('stripe')(process.env.STRIPE_SK)
const asyncHandler = require('express-async-handler')
const User = require('../models/User')

exports.createCustomer = asyncHandler(async (req, res) => {
  const { billing_details, id } = req.body

  try {
    const customer = await stripe.customers.create(billing_details)

    const paymentMethods = await stripe.paymentMethods.attach(id, {
      customer: customer.id
    })

 await Users.updateOne(
      { _id: req.params.userId },
      {
        $set: {
          stripeId:customer.id,
        },
      }
    );

    res.status(201).json(paymentMethods)
  } catch (err) {
    res.status(400).json({ err: err.message })
  }
})


exports.addPaymentprofile= asyncHandler(async (req, res) => {
  const { id ,stripeId} = req.body

  try {
    const paymentMethods = await stripe.paymentMethods.attach(id, {
      customer: stripeId
    })

    res.status(201).json(paymentMethods)
  } catch (err) {
    res.status(400).json({ err: err.message })
  }
})


exports.retrieveCustomer = asyncHandler(async (req, res) => {
  const { customerId } = req.params

  try {
    if (customerId) {
      const paymentMethods = await stripe.paymentMethods.list({
        customer: customerId,
        type: 'card'
      })
      res.status(200).json(paymentMethods)
    } else {
      res.status(400).json({ err: 'customerId undefined' })
    }
  } catch (err) {
    res.status(400).json({ err: err.message })
  }
})

exports.getUserStripeId = asyncHandler(async (req, res, next) => {
  const { userId } = req.params

  try {
    const user = await User.findById(userId)

    res.status(200).json({
      stripeId: user.stripeId
    })
  } catch (err) {
    res.status(401).json({ stripeId: false })
  }
})

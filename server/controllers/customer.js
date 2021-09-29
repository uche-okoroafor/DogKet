const stripe = require('stripe')(process.env.STRIPE_SK)
const asyncHandler = require('express-async-handler')

exports.createCustomer = asyncHandler(async (req, res) => {
  const { billing_details, id } = req.body

  try {
    const customer = await stripe.customers.create(billing_details)

    const paymentMethods = await stripe.paymentMethods.attach(id, {
      customer: customer.id
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
      res.status(200).json(paymentMethods )
    } else {
      res.status(400).json({ err: 'customerId undefined' })
    }
  } catch (err) {
    res.status(400).json({ err: err.message })
  }
})

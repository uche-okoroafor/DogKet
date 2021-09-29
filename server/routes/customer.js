const express = require('express');
const router = express.Router();
const { createCustomer, retrieveCustomer,retrieveAllCustomers } = require('../controllers/customer');

router.post('/create', createCustomer);
router.get('/retrieve/:customerId', retrieveCustomer);
 
module.exports = router;
  
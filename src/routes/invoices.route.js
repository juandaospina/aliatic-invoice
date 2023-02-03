const express = require('express');
const router = express.Router();

const { getInvoices, createInvoice } = require('../controller/invoices.controller');

router.get('/invoices', getInvoices)
router.post('/invoices', createInvoice)

module.exports = router

const express = require("express");
const router = express.Router();
// const cors = require("cors");

const {
  getInvoices,
  createInvoice,
  deleteInvoice,
} = require("../controller/invoices.controller");

router.get("/invoices", getInvoices);
router.post("/invoices", createInvoice);
router.post("/delete", deleteInvoice);

module.exports = router;

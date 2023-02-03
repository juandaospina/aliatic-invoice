const sql = require("mssql");

const { getConnection } = require("../database/db");
const { GET_INVOICES, CREATE_INVOICE } = require("../database/queries");

const getInvoices = async (req, res) => {
  try {
    const connect = await getConnection();
    const request = new sql.Request(connect);
    const result = await request.query(GET_INVOICES);

    if (!!result) {
      res.status(200).json(result.recordset);
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createInvoice = async (req, res) => {
  const { customer, date } = req.body;
  if (customer === undefined || date === undefined) {
    res.status(400).json({
      status: 400,
      message: "Bad request",
    });
  }

  try {
    const connect = await getConnection();
    const request = new sql.Request(connect);
    request.input("customer", sql.VarChar, customer);
    request.input("date", sql.Date, date);
    const response = request.query(CREATE_INVOICE);

    if(!!response) {
      res.status(200).json({
        status: 200,
        invoice: {
          customer,
          date
        }
      });
    }
  } catch (error) {
    res.status(400).json("Bad request");
  }
};

module.exports = {
  getInvoices,
  createInvoice,
};

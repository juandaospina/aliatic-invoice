const express = require("express");
const cors = require("cors");

const invoicesRoutes = require("../src/routes/invoices.route");

const whiteList = [
    'http://localhost:5173/'
]

const app = express();
app.use(cors(whiteList))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(invoicesRoutes);

module.exports = { app };

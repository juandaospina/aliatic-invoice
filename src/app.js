const express = require('express');
const invoicesRoutes = require('../src/routes/invoices.route');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(invoicesRoutes);

module.exports = { app }
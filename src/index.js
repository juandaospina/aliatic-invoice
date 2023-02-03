const { app } = require('./app');
require('dotenv').config();
// require('../src/database/db');

app.listen(process.env.PORT, () => {
    console.log(`App running in http://localhost:${process.env.PORT}`)
})
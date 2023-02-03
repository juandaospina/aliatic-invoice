const sql = require("mssql");
require("dotenv").config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  server: process.env.SERVER,
  options: {
    trustServerCertificate: true,
  },
};

// console.log({
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   server: process.env.SERVER,
// });

const getConnection = async () => {
  try {
    const connect = await sql.connect(config);
    return connect;
  } catch (error) {
    console.log(error.message);
    // throw new Error("Error in connection");
  }
};

// getConnection();

module.exports = { getConnection };

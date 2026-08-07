const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "90494404",
  database: "airbnb",
});

module.exports = pool.promise();

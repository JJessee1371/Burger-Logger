const mysql = require('mysql');
require('dotenv').config();
let connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      port: 3306,
      password: process.env.DB_PASS,
      database: "burger_db"
  });
};

// Connect to the database
connection.connect();
  
// Export connection
module.exports = connection;
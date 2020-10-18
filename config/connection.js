const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: process.env.DB_PASS,
    database: "burger_db"
});

// Connect to the database
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
// Export connection
module.exports = connection;
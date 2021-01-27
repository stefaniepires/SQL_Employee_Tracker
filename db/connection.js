const mysql = require('mysql2');
const dotenv = require('dotenv').config()


// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  // Your MySQL username
  user: 'root',
  // Your MySQL password
  password: process.env.DB_PASS,
  database: 'employees'
});

connection.connect((err) => {
  if(err) {
    throw err;
  }
})

module.exports = connection;
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Manju@123', // your password
  database: 'testdb'     // your DB
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to DB:', err);
    process.exit(1); // Stop the server if connection fails
  }
  console.log('Connected to the database!');
});

module.exports = connection;

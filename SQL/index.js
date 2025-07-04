const express = require('express');
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Manju@123',
  database: 'testdb'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.log('Error connecting to MySQL:', err);
    return;
  }
  console.log(" MySQL connection established.");

  // Create a table if it doesn't exist
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS products (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      price DECIMAL(10, 2),
      in_stock BOOLEAN DEFAULT true
    )
  `;

  connection.query(createTableQuery, (err, results) => {
    if (err) {
      console.log('Error creating table:', err);
      return;
    }
    console.log("Table 'products' ensured.");

    // Start the Express server after table creation
    app.listen(3000, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(" Server is running on http://localhost:3000");
    });
  });
});

// Example route
app.get('/', (req, res) => {
  res.send("Hello World");
});

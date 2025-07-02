const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse JSON and form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files like main.js
app.use(express.static(path.join(__dirname, 'public')));

// Serve HTML form with GET
app.get('/api/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'VIEW', 'products.html'));
});

// Handle POST from Axios
app.post('/api/products', (req, res) => {
  const { productName } = req.body;
  console.log(`Product received: ${productName}`);
  res.send(`Product "${productName}" added successfully!`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

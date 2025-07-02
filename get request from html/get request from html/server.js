const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse form data if needed
app.use(express.urlencoded({ extended: true }));

// GET endpoint to serve HTML file
app.get('/api/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'VIEW', 'products.html'));
});

// Optional: POST handler to see form data in console
app.post('/api/products', (req, res) => {
  const { productName } = req.body;
  console.log(`Product received: ${productName}`);
  res.send(`Product "${productName}" added successfully!`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

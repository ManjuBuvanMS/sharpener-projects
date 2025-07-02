const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// GET endpoint to serve the HTML file
app.get('/api/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'VIEW', 'products.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

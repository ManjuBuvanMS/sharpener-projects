const express = require('express');
const app = express();
const port = 3000;

// Custom middleware function
const addUserMiddleware = (req, res, next) => {
  req.user = 'Guest';
  next();
};

// Apply middleware to /welcome route only
app.get('/welcome', addUserMiddleware, (req, res) => {
  res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

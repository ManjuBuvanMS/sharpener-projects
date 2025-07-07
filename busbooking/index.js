const express = require('express');
const db = require('./utils/db-connection');
const userRoutes = require('./routes/userRoutes');
const busRoutes = require('./routes/busRoutes');

const app = express();

app.use(express.json()); // Important for POST body parsing

app.get('/', (req, res) => {
  res.send('Bus Booking System API is running 🚍');
});

app.use('/users', userRoutes);
app.use('/buses', busRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

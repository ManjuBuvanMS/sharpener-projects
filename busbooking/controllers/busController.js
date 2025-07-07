const db = require('../utils/db-connection');

// Add a new bus
const addBus = (req, res) => {
  const { bus_number, total_seats, available_seats } = req.body;

  if (!bus_number || !total_seats || !available_seats) {
    return res.status(400).send('Bus number, total seats, and available seats are required.');
  }

  db.query(
    'INSERT INTO Buses (bus_number, total_seats, available_seats) VALUES (?, ?, ?)',
    [bus_number, total_seats, available_seats],
    (err, result) => {
      if (err) {
        console.error('Error inserting bus:', err);
        return res.status(500).send('Error inserting bus');
      }
      res.send(`Bus added with ID: ${result.insertId}`);
    }
  );
};

// Get buses with available seats > :seats
const getAvailableBuses = (req, res) => {
  const minSeats = parseInt(req.params.seats);

  db.query(
    'SELECT * FROM Buses WHERE available_seats > ?',
    [minSeats],
    (err, results) => {
      if (err) {
        console.error('Error fetching buses:', err);
        return res.status(500).send('Error fetching buses');
      }
      res.json(results);
    }
  );
};

module.exports = {
  addBus,
  getAvailableBuses
};
 
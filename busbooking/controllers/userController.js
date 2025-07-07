const db = require('../utils/db-connection');

const addUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).send('Name and email are required.');
  }

  db.query(
    'INSERT INTO Users (name, email) VALUES (?, ?)',
    [name, email],
    (err, result) => {
      if (err) {
        console.error('Error inserting user:', err);
        return res.status(500).send('Error inserting user');
      }
      res.send(`User added with ID: ${result.insertId}`);
    }
  );
};

const getAllUsers = (req, res) => {
  db.query('SELECT * FROM Users', (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      return res.status(500).send('Error fetching users');
    }
    res.json(results);
  });
};

module.exports = {
  addUser,
  getAllUsers
};

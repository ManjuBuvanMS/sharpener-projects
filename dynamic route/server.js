const express = require('express');
const app = express();
const port = 3000;

app.get('/welcome/:username', (req, res) => {
 
  const username = req.params.username;

  const role = req.query.role || 'Guest'; 
  res.send(`<h1>Welcome ${username}, your role is ${role}</h1>`);
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

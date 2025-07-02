const express = require('express');
const app = express();
const PORT = 4000;


app.use(express.json());


const booksRouter = require('./routes/books');

app.use('/books', booksRouter);

app.listen(PORT, () => {
  console.log(`Library server running at http://localhost:${PORT}`);
});

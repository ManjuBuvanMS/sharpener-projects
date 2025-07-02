const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');

app.use(express.json()); // to parse JSON body

app.use('/', productRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

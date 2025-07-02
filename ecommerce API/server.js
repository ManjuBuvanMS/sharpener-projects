const express = require('express');
const app = express();
const PORT = 4000;

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

app.listen(PORT, () => {
  console.log(`E-Commerce API running at http://localhost:${PORT}`);
});

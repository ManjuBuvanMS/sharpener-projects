const express = require('express');
const app = express();
const PORT = 4000;

// Import your router
const productsRouter = require('./routes/products');

// Mount the router — base path: /products
app.use('/products', productsRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

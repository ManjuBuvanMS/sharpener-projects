// controllers/productController.js
const productService = require('../services/productService');

exports.getAllProducts = (req, res) => {
  const products = productService.getAllProducts();
  res.json(products);
};

exports.getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  const product = productService.getProductById(id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
};

exports.addProduct = (req, res) => {
  const productData = req.body;
  const newProduct = productService.addProduct(productData);
  res.status(201).json(newProduct);
};

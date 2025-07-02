// services/productService.js

// Dummy database (array) for example
const products = [
  { id: 1, name: 'Laptop', price: 50000 },
  { id: 2, name: 'Phone', price: 20000 },
];

// Get all products
exports.getAllProducts = () => {
  return products;
};

// Get product by ID
exports.getProductById = (id) => {
  return products.find((product) => product.id === id);
};

// Add a new product
exports.addProduct = (productData) => {
  const newProduct = {
    id: products.length + 1,
    ...productData,
  };
  products.push(newProduct);
  return newProduct;
};

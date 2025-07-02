document.getElementById('productForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const productName = document.getElementById('product').value;

  try {
    const response = await axios.post('/api/products', { productName });
    console.log('Server response:', response.data);
    document.getElementById('response').innerText = `Server says: ${response.data}`;
  } catch (error) {
    console.error('Error:', error);
  }
});

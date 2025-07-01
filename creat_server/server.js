const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  res.setHeader('Content-Type', 'text/plain');

  if (url === '/home') {
    res.statusCode = 200;
    res.end('Welcome home');
  } else if (url === '/about') {
    res.statusCode = 200;
    res.end('Welcome to About Us');
  } else if (url === '/node') {
    res.statusCode = 200;
    res.end('Welcome to my Node Js project');
  } else {
    res.statusCode = 404;
    res.end('Page Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

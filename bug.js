const http = require('http');

const server = http.createServer((req, res) => {
  // This is the problematic line
  res.write('Hello, world!');
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
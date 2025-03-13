const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.end('Hello, World FIAP1');
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}/`);
});

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(JSON.stringify({
    mensagem: 'DevFlow Solutions - E-commerce funcionando!'
  }));
});

if (require.main === module) {
  server.listen(3000, () => {
    console.log('Servidor funcionando em http://localhost:3000');
  });dir
}

module.exports = server;

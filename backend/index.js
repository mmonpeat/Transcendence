//const fastify = require('fastify')();
//const https = require('https');
//const jwt = require('@fastify/jwt');

console.log("holiii");

// curl -k https://localhost:8000/
const https = require('node:https');
const fs = require('node:fs');

const options = {
  key: fs.readFileSync('/app/keys/fd_trascendence.key'),
  cert: fs.readFileSync('/app/keys/fd_trascendence.crt'),
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  console.log("patata");
  res.end('hello world\n');
}).listen(443);
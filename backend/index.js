//const fastify = require('fastify')();
//const https = require('https');
//const jwt = require('@fastify/jwt');

console.log("holiii");

// curl -k https://localhost:8000/
const https = require('node:https');
//const log = require('pino')({ level: 'info' })
//const fs = require('fastify')({ logger: log })
/*
    "start": "node index.js"
    "build": "docker build -t node .",
    "run": "docker run -p 4443:443 node"
*/
const fs = require('node:fs');

const options = {
  key: fs.readFileSync('/app/keys/fd_trascendence.key'),
  cert: fs.readFileSync('/app/keys/fd_trascendence.crt'),
};

https.createServer(options, (req, res) => {
  console.log("Request incoming:", req.method, req.url);
  res.writeHead(200);
  console.log("patata");
  res.end('hello world\n');
}).listen(4443, () => {
  console.log("server https escolta port 443");
});
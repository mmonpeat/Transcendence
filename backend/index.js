//UTILITZEM COMON JS, NO ESM
//The Node.js File System module (fs), proporciona methods per treballar amb file system. 
const fs = require('fs');
const https = require('https');
//const jwt = require('@fastify/jwt');

const options = {
  key: fs.readFileSync('/app/keys/fd_trascendence.key'),
  cert: fs.readFileSync('/app/keys/fd_trascendence.crt'),
};

https.createServer(options, (req, res) => {
  console.log("Request incoming:", req.method, req.url);
  res.end('hello world\n');
}).listen(4443, () => {
  console.log("server https escolta port 4443");
});

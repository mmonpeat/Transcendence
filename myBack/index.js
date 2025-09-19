//UTILITZEM COMON JS, NO ESM
//The Node.js File System module (fs), proporciona methods per treballar amb file system. 
const fs = require('fs');
const https = require('https');

//const { WebSocketServer } = require('wss');

//const app = fastify();
//const server = https.createServer(app);
//const wss = new WebSocketServer({ server });
//video ??? https://youtu.be/r6gA1NCfvYA
//https://www.rfc-editor.org/rfc/rfc6455

const options = {
  key: fs.readFileSync('/app/keys/fd_trascendence.key'),
  cert: fs.readFileSync('/app/keys/fd_trascendence.crt')
};

https.createServer(options, (req, res) => {
  res.end('hello world\n');
}).listen(4443, () => {
  console.log("server https escolta port 4443");
});

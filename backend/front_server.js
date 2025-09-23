import FastifyHttpsAlways from "fastify-https-always";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Fastify from 'fastify';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const key = fs.readFileSync(path.join(__dirname, "/usr/src/app/certs/fd_trascendence.key"));
const cert = fs.readFileSync(path.join(__dirname, "/usr/src/app/certs/fd_trascendence.crt"));

console.log({ key, cert });

// Inicialitzem Fastify amb HTTPS
const fastify = Fastify({ 
  logger: true, 
  trustProxy: true,
  https: {
    key,
    cert
  }
});

fastify.register(fastifyStatic, {
  root: path.join(__dirname, '..', 'frontend'),
  prefix: '/frontend/',
  decorateReply: false,
});

fastify.listen({ port: 8081, host: '0.0.0.0' }, function(err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`server listening on ${address}`);
});
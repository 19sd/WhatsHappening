import config from './config';
import express from 'express';
import apiRouter from './api';
const server = express();

server.set('view engine', 'ejs');

server.use(express.static('public'));
server.use('/api', apiRouter);
server.use(require('./routes/index.js'));

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});

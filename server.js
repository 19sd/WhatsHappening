import config from './config';
import express from 'express';
import apiRouter from './api';
const server = express();



server.set('view engine', 'ejs');

server.get('/', (req,res) => {
  res.render('index', {
    content: 'Hello Express and <em>EJS</em>!'
  });
});

server.use(express.static('public'));
server.use('/api', apiRouter);

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});

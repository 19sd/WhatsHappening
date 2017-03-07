import config from './config';
import express from 'express';
import apiRouter from './api';
import compression from 'compression';
import React from 'react';
import path from 'path';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './src/components/routes';
import sassMiddleware from 'node-sass-middleware';

const server = express();

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

server.get(['/','/home','/aboutus','/createevent','/profile','/settings'], (req,res) => {
  match({routes:routes, location: req.url}, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {
      const appHtml = renderToString(<RouterContext {...props}/>);
      res.render('index', {
        content: appHtml
      });
    } else {
      res.status(404).send('Not Found');
    }

  });

});

server.use(express.static(path.join(__dirname, 'public'), {index: false}));
server.use('/api', apiRouter);
server.use(compression());

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});

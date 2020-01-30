const express = require('express'); 
const nunjucks = require('nunjucks'); 
const routes = require('./routes'); 

const server = express(); 

server.set('view engine', 'njk'); 

nunjucks.configure('src/views', {
  autoescape: true,
  express: server,
  noCache: true,
});

server.use(express.static('public'));

server.use(routes); 

server.listen(3000, () => console.log('server is running...'));
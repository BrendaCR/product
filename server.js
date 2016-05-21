'use strict';

var glee = require('glee');
var server = glee.server('product');

server.register([{
  register: require('./resource/products'),
  routes: { prefix: '/products' }
}, {
  register: require('./resource/reviews'),
  routes: { prefix: '/reviews' }
}], (err) => {
  if (err) {
    console.error('could not register routes', err);
  }
});


server.start();

module.exports = server;

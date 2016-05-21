'use strict';

var get = require('./get');
var nameSearch = require('./nameSearch');

exports.register = function (server, options, next) {
  server.route({
    method: 'GET',
    path: '/{id}',
    handler: (request, reply) => {
      get.execute(request.params.id).then(
        (res) => { reply(res); },
        (error) => { reply(error); }
      );
    }
  });

  server.route({
    method: 'GET',
    path: '/search/name/{name}',
    handler: (request, reply) => {
      nameSearch.execute(request.params.name).then(
        (res) => { reply(res); },
        (error) => { reply(error); }
      );
    }
  });

  next();
};

exports.register.attributes = {
  name: 'products',
  version: '1.0.0'
};

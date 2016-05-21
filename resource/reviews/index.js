'use strict';

var get = require('./get');

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

  next();
};

exports.register.attributes = {
  name: 'reviews',
  version: '1.0.0'
};


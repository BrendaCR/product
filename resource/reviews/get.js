'use strict';

var elasticClient = require('glee').elasticClient;

var get = function(id) {
  return elasticClient.get({
    index: 'product',
    type: 'review',
    id: id
  }).then(
    (response) => { return response._source; },
    (err) => { console.log(err); return err; }
  );
}

exports.execute = get;

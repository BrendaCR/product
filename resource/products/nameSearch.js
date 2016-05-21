'use strict';

var _ = require('lodash');
var elasticClient = require('glee').elasticClient;

var nameSearch = function(name) {
  return elasticClient.search({
    index: 'products',
    q: 'name:' + name
  }).then(
    (response) => {
      return _.pluck(response.hits.hits, '_source');
    }
  );
};

exports.execute = nameSearch;

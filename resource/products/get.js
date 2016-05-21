var elasticClient = require('glee').elasticClient;

var get = function(id) {
  return elasticClient.get({
    index: 'product',
    type: 'products',
    id: id
  }).then(
    (response) => {
      return response._source;
    }
  );
}

exports.execute = get;

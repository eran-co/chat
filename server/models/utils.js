var cassandra = require('cassandra-driver');

exports.getClient = () => {
    return new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'test'});
};

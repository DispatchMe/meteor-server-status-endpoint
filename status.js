// We just need this to get the _mongo
var col = new Mongo.Collection('server_status');

var doPing = Meteor.wrapAsync(function(callback) {
  var start = new Date();
  col.find()._mongo.db.admin().ping(function(err) {
    if (err) {
      return callback(err);
    }
    var end = new Date();
    callback(null, end - start);
  });
});

Meteor.method('serverStatus', function() {
  var status = {
    mongo: {
      status: ''
    }
  };

  try {
    var latency = doPing();
    status.mongo.status = 'ok';
    status.mongo.latency = latency.toString() + 'ms';
  } catch (err) {
    status.mongo.status = 'error';
    status.mongo.error = err.message;
  }

  return status;
}, {
  url: 'server-status',
  httpMethod: 'get'
});

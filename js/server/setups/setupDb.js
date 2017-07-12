// jshint esversion: 6

var r = require(global.paths.root + '/requires');

module.exports = function(cb) {

	r.mongoose.Promise = global.Promise;
    r.mongoose.connect(process.env.MONGO_URL, { useMongoClient: true });
	r.mongoose.connection.once('open', function() { console.log(process.env.MONGO_URL); });
	cb();
};
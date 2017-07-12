// jshint esversion: 6

var r = require(global.paths.root + '/requires');

module.exports = function(cb) {

	let hostname = 'localhost';
	let port = 27017;
	let db = 'test';

	r.mongoose.Promise = global.Promise;

    r.mongoose.connect(`mongodb://${hostname}:${port}/${db}`);
	r.mongoose.connection.once('open', function() { console.log(`MongoDb connected to ${hostname}:${port}/${db}`); });

	cb();
};
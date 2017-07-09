// jshint esversion: 6

var r = require(global.paths.root + '/requires');

module.exports = function(cb) {

	let hostname = 'localhost';
	let port = 27017;
	let db = 'test';

    var dbPromise = r.mongoose.createConnection(`mongodb://${hostname}:${port}/${db}`);
	dbPromise.once('open', function() { console.log(`MongoDb connected to ${hostname}:${port}/${db}`); });

	cb();
};
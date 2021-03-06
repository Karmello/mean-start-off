var r = require(global.paths.root + '/requires');

module.exports = function(app, route) {

	var rest = r.restful.model('entity', app.models.Entity).methods(['get']);
	rest.register(app, route);
	return function(req, res, next) { next(); };
};
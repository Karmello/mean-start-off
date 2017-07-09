// jshint esversion: 6

var r = require(global.paths.root + '/requires');

module.exports = function(cb) {

    let app = global.app;

    app.models = require(global.paths.root + '/models');

    r._.each(require(global.paths.root + '/routes'), function(controller, apiRoute) {
        app.use('/api' + apiRoute, controller(app, '/api' + apiRoute));
    });

    app.get('/', function(req, res, next) {
        res.sendFile(r.path.resolve(global.paths.root, './../../templates/index.html'));
    });

    app.use('/node_modules', r.express.static(r.path.resolve(global.paths.root, './../../node_modules')));
    app.use('/public', r.express.static(r.path.resolve(global.paths.root, './../../public')));

    cb();
};
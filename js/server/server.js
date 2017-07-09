// jshint esversion: 6

global.paths = { root: __dirname };

const r = require('./requires');
const app = r.express();

global.app = app;

app.use(r.morgan('dev'));
app.use(r.bodyParser.urlencoded({ extended: true }));
app.use(r.bodyParser.json());
app.use(r.methodOverride('X-HTTP-Method-Override'));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

require('./setups/setupRoutes')(() => {
	require('./setups/setupDb')(() => {

		r.http.createServer(app).listen(8080);
	});
});
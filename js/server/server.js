// jshint esversion: 6

const r = require('./requires');
const app = r.express();

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

app.get('/', function(req, res, next) {

	res.sendFile(r.path.resolve(__dirname, './../../templates/index.html'));
});

app.use('/node_modules', r.express.static(r.path.resolve(__dirname, './../../node_modules')));
app.use('/public', r.express.static(r.path.resolve(__dirname, './../../public')));

var dbPromise = r.mongoose.createConnection('mongodb://127.0.0.1:27017/test');
dbPromise.once('open', function() { console.log('connected to MongoDb'); });

const server = r.http.createServer(app);
server.listen(8080);
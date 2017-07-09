// jshint esversion: 6

const path = require('path');
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const app = express();



app.get('/', function(req, res, next) {

	res.sendFile(path.resolve(__dirname, './../../templates/index.html'));
});

app.use('/node_modules', express.static(path.resolve(__dirname, './../../node_modules')));
app.use('/public', express.static(path.resolve(__dirname, './../../public')));

var promise = mongoose.createConnection('mongodb://127.0.0.1:27017/test');
promise.once('open', function() { console.log('connected to MongoDb'); });

const server = http.createServer(app);
server.listen(8080);
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var websockets = require('./websockets');

var app = express();
app.use(logger('dev'));

app.use(require('./controllers'));

var port = process.env.port || 3000;

var server = app.listen(port, function () {
    console.log('Server', process.pid, 'listening on', port);
});

websockets.connect(server);
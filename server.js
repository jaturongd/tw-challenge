var express = require('express');
var index = require('./routes/index');
var favicon = require('serve-favicon');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + "/views");
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.get("/", index);

console.log('start server port '+ app.get('port'));
app.listen(app.get('port'));



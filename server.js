var express = require('express');
var app = express();
var port = 8000;
var routes = require('./app/routes/index.js');
var path = require('path');

// view engine setup
app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'ejs');

// setup static files
app.use(express.static(path.join(__dirname, 'views/js')));
app.use(express.static(path.join(__dirname, "views/assets/")));
app.use(express.static(path.join(__dirname, "views/css")));

routes(app);

app.listen(port);

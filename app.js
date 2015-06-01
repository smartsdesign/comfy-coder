var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');

// connect to database
var mongo = require('mongoskin');
var db = mongo.db('mongodb://smuhangi:JavaScript1@ds037581.mongolab.com:37581/discov-ed', { native_parser: true })

//routes modules
var routes = require('./routes/index');
var glossary = require('./routes/glossary');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//make db accessible to router
app.use(function (res, req, next){
    req.db = db;
    next();
});

app.use('/', routes);
app.use('/glossary', glossary);
app.use('/users', users);

//middleware: point to index page for all points of entry. - Fixes 404 errors om refresh
//since routes are not .html pages, they will 404 if requested directly i.e not accessed via the index page.
app.get('*', function(req, res){
    res.render('index', { 
    'title': 'Web terminology wiki',
    'description': 'A definition list of commonly used development terminology' 
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

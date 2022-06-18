var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var galeriaRouter = require('./routes/galeria');
var nosotrosRouter = require('./routes/nosotros');
var contactoRouter = require('./routes/contacto');
//var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/galeria', galeriaRouter);
app.use('/nosotros', nosotrosRouter);
app.use('/contacto', contactoRouter);
//app.use('/users', usersRouter);

app.get('/prueba', function (req, res) {res.send('hola pagina de prueba');
});

app.get('/hola', function (req, res) {res.send('hola pagina de hola');
});

app.get('/servicios', function (req, res) {res.send('hola pagina de servicios');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

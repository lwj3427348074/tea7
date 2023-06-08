var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var homeApiRouter = require('./routes/api/home')
var searchApiRouter = require('./routes/api/search')
var listApiRouter = require('./routes/api/list')
var sgiApiRouter = require('./routes/api/sGoodsId')
var loginApiRouter = require('./routes/api/login')
var cartApiRouter = require('./routes/api/cart')
var addressApiRouter = require('./routes/api/address')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/api', homeApiRouter)
app.use('/api', searchApiRouter)
app.use('/api', listApiRouter)
app.use('/api', sgiApiRouter)
app.use('/api', loginApiRouter)
app.use('/api', cartApiRouter)
app.use('/api', addressApiRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//文件上传下载中间件
//var multiparty = require('connect-multiparty');

//后端处理逻辑
var routes = require('./routes/index');
var users = require('./routes/users');

//采用connect-mongodb中间件作为Session存储
var session = require('express-session');
var Settings = require('./database/settings');
var MongoStore = require('connect-mongodb');
var db = require('./database/settings');

var app = express();
//设置监听端口
//app.listen(1001);

//设置视图模版以及路径
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//装载中间件
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//设置上传文件的临时存储目录
//app.use(multiparty({uploadDir:'./temp', keepExtensions:true}));

app.use(cookieParser());

//session配置
app.use(session({
    secret: Settings.COOKIE_SECRET,
    cookie: { maxAge: 600000 },
    store: new MongoStore({
        username: Settings.USERNAME,
        password: Settings.PASSWORD,
        url: Settings.URL,
        db: db})
}));

//静态文件存放的根路径
app.use(express.static(path.join(__dirname, 'public')));

//请求路由转发设置
app.use('/', routes);
app.use('/users', users);

//数据库配置

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

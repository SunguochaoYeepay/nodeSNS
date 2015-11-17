var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页' });
    console.log('首页')
});

/* GET home page. */
router.post('/post', function(req, res, next) {
    res.render('post', { title: 'Express' });
});

/* GET home page. */
router.get('/reg', function(req, res, next) {
    res.render('reg', { title: '注册' });
});

/* 注册成功 */
router.post('/reg', function(req, res, next) {


    res.render('reg', {
        title: '注册成功',
        success:'true',
        message:"😊 注册成功！欢迎加入nodeJS社区！"
    });
});


/* GET home page. */
router.get('/login', function(req, res) {
    res.render('login', {
        title: '登录成功！',
        success:'false'
    });
});

/* GET home page. */
router.get('/logout', function(req, res, next) {
    res.render('logout', { title: '退出！' });
});







module.exports = router;

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


/* GET home page. */
router.get('/login', function(req, res) {
    res.render('login', { title: '登录成功！' });
});

/* GET home page. */
router.get('/logout', function(req, res, next) {
    res.render('logout', { title: '退出！' });
});







module.exports = router;

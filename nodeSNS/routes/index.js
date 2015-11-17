var express = require('express');
var router = express.Router();
var user = require('../database/db').user;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页' });
<<<<<<< Updated upstream
    console.log('首页')
=======
});

/* GET Login page. */
router.get('/login', function(req, res) {
  res.render('login', { title: '登录' });
});


/* GET ucenter page. */
router.get('/ucenter', function(req, res) {

  var query = {name: req.body.name, password: req.body.password};

  //闭包查询用户数据信息
  (function(){
    user.count(query, function(err, doc){    //count返回集合中文档的数量，和 find 一样可以接收查询条件。query 表示查询的条件
      if(doc == 1){
        console.log(query.name + ": 登陆成功 " + new Date());
        res.render('ucenter', { title:'ucenter' });
      }else{
        console.log(query.name + ": 登陆失败 " + new Date());
        res.redirect('/login');
      }
    });
  })(query);

>>>>>>> Stashed changes
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

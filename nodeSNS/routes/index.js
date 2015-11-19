var express = require('express');
var router = express.Router();

/* 首页 */
router.get('/', function(req, res, next) {
  res.render('index', { title: '首页' });
    console.log('首页')
});


/* 登录首页 */
router.home = function(req,res){
    var user = {
        username:'admin',
        password:'admin'
    }
    res.render('home',{title:'Home',user:user});
};

/* 提交文章 */
router.post('/post', function(req, res, next) {
    res.render('post', { title: 'Express' });
});

/* 注册 */
router.get('/reg', function(req, res, next) {
    //req.flash('success', '');
    res.render('reg', {title: '注册',success:'',messages:'' });
});

/* 注册成功 */
router.post('/reg', function(req, res, next) {
    var user = {
        username:"1111@yee.com",
        password:"123qwe"
    }
    var success;
    var messages;

    if(req.body.username===user.username && req.body.password===user.password){
        //req.session.user=user;
        //return res.redirect('/home');
        success=0;
        messages="😊️ 恭喜你，注册成功！"


    } else {
        success=1;
        messages="😢 很遗憾注册失败了！"
    }
    console.log(success);
    console.log(messages);

    res.render('reg', {
        title: '注册！',
        success:success,
        messages:messages
    });
    //return res.redirect('/login');

});

/* 用户登录 */
router.get('/login', function(req, res) {
    var user = {
        username:"admin",
        password:"admin"
    }
    if(req.body.username==user.username && req.body.password==user.password){
        res.redirect('/home');
    }
    res.redirect('/login');
});

/* 退出登录 */
router.logout = function(req,res){
    req.session.user=null;
    res.redirect('/');
};










module.exports = router;

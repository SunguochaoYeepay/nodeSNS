var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:user', function(req, res, next) {
//  res.send('respond with a resource');
    res.render('login', {
        title: '用户登录',
        name: '国超'
    });
    console.log(name)
});





module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Você está em login' })
});

router.get('/cadastro', function(req, res, next) {
  res.render('cadastro', { title: 'Você está no cadastro' })
});

module.exports = router;

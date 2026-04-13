var express = require('express');
var router = express.Router();

/* GET página conserto */
router.get('/', function(req, res, next) {
  res.render('conserto', { title: 'Você está na página Conserto' });
});

module.exports = router;
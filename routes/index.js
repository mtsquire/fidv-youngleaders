var express = require('express');
var router = express.Router();

var data = require('../data/example.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', data : data });
});

router.get('/donate', function(req, res, next) {
    console.log('hellooooo');
  res.render('donate/index', { title: 'Express', data : data });
});

router.get('/become-a-sponsor', function(req, res, next) {
  res.render('become-a-sponsor/index', { title: 'Express', data : data });
});

module.exports = router;

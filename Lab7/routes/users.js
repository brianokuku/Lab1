var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var ejs = require('ejs');

// GET users listing. 
router.get('/users', function(req, res, next) {
  res.render('secret', { secret: 'The answer is' });  
 
});

module.exports = router;

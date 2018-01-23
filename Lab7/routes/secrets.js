var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var ejs = require('ejs');

router.get('/', function(req, res, next) {
    res.render('index', { secret: 'The answer is' });

});

module.exports = router;

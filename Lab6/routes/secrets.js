var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var ejs = require('ejs');

router.get('/', function(req, res, next) {
    res.render('secret', { secret: 'The answer is almost here' });

});

module.exports = router;

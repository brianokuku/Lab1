var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var ejs = require('ejs');

// GET users listing. 
router.get('/', function(req, res, next) {
  //This is in form of a Observable with Promise. It returns the entire object as an array
  
  
  fetch('http://jsonplaceholder.typicode.com/users/')
    .then(function(res) {
        return res.text();
    }).then(function(body) {
        //res.send(body);
        //const theData = [{"name":"Brian Thomas", title:"This is the title 1"}, {"name":"Brian Smith 2", title:"This is the title 2"}];
        console.log(body);
        const theData = body;
        res.render('index', {
          show_data: theData});
    });

});

module.exports = router;

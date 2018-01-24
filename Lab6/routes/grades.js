const express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var ejs = require('ejs');
const bodyParser= require('body-parser')
const app = express();

router.get('/', function(req, res, next) {
    //res.render('grades', { secret: 'The answer is almost here' });
    //res.send("Hello");

    res.setHeader('Content-Type', 'application/json'); //Need this to read in JSON form
    
    var grades = [{
        id: 1,
        name: "Brian John",
        course: "MWA",
        grade: "B"
    }];

    console.log(grades);

    res.send(JSON.stringify(grades));
});

module.exports = router;

/*   
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//This is the entity  [{id: 1, name: "Brian Okuku", course: CS572, grade:95}]

// CRUD operations include: Create, Read, Update and Delete

//GET is a read opertaion
//Post is a Create operation. It later adds content to the database
//Put is an update operation
//Delete is a delete operations

//This is the Create POST request
app.post('/grade/add', (req, res, next) => {
    
    var grades = [{
        id: req.body.id,
        name: req.body.name,
        course: req.body.course,
        grade: req.body.grade
    }];

    res.send('name added successfully');
  });


  //This is for reading an entity. We use Get to read and it returns this in JSON form
  app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json'); //Need this to read in JSON form
    
    var grades = [{
        id: 1,
        name: "Brian John",
        course: "MWA",
        grade: "B"
    }];

    console.log(grades);

    res.send(JSON.stringify(grades));
    /*
    dbase.collection('name').find().toArray( (err, results) => {
      res.send(results)
    });
    
});

module.exports = router;



router.get('/', function(req, res, next) {
    res.render('grades', { secret: 'The answer is almost here 1' });

});

router.post('/', function(req, res, next) {
    res.render('grades', { secret: 'The answer is almost here 2' });

});

router.put('/', function(req, res, next) {
    res.render('grades', { secret: 'The answer is almost here 3' });

});

router.delete('/', function(req, res, next) {
    res.render('grades', { secret: 'The answer is almost here 4' });

});
*/



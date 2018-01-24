var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var lessMiddleware = require('less-middleware');
var morgan  = require('morgan');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

var cache = require('memory-cache');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Requirements of the homework
app.enable('case sensitive routing');
app.set('strict routing', true);
app.set('env', 'production');
app.disable('x-powered-by');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'))

app.use('/', index);
app.use('/users', users);

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });

app.get('/read', function(req, res, next) {

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

app.post('/post', (req, res, next) => {

  //This will fetch the data in an array form and then save it in json

  const searchParams = Object.keys(params).map((key) => {
    return encodeURIComponent(key) + ':' + encodeURIComponent(params[key]);
  }).join('&');
        
  fetch(req.url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
    body: searchParams
  }).then(data => console.log(data));
  //Data ready to be saved
  res.send('Grade added successfully');
});

//The delete request
app.delete('/delete/:id', (req, res, next) => {
        let id = ObjectID(req.params.id);
    
        //Query to delete a Grade from the storage
        res.send('Grade successfully successfully');
     });


app.put('/name/update/:id', (req, res, next) => {
  let id = ObjectID(req.params.id)
  
      //Query to update the Grade with the id passed in 
      res.send('user updated sucessfully');
  });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

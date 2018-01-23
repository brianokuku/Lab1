var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
const crypto = require('crypto');
const decipher = crypto.createDecipher('aes256', 'asaadsaad');


/* GET home page. */
router.get('/secret', function(req, res, next) {

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("homework7");
  dbo.collection("homework7").findOne({}, function(err, result) {
    if (err) throw err;
    //console.log(result.message);
    let decrypted = '';

    decipher.on('readable', () => {
      const data = decipher.read();
      if (data)
        decrypted += data.toString('utf8');
    });
    decipher.on('end', () => {
      console.log(decrypted);
      res.render('secret', { secret: decrypted });
    });

  const encrypted = result.message;
  decipher.write(encrypted, 'hex');
  decipher.end();
  db.close();
  });
});

});

module.exports = router;

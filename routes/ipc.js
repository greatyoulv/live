var express = require('express');
var router = express.Router();
var process = require('child_process');

/* GET users listing. */
router.get('/', function(req, res, next) {
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ipcs', function (err, client) {
  if (err) throw err

  var db = client.db('ipcs')
  
  db.collection('ipc').find({}).toArray(function (err, result) {
    if (err) throw err

    console.log(result)
    db.close()
  });
});
  res.render('ipc', { title: 'Express' });
});

router.get('/ipc', function(req, res, next) {
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ipcs', function (err, client) {
  if (err) throw err

  var db = client.db('ipcs')
  
  db.collection('ip').find().toArray(function (err, result) {
    if (err) throw err

    console.log(result)
  });
});
});

module.exports = router;

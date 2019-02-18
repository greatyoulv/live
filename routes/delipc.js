var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectId;

/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  res.send('ok');
});

*/
router.post('/:id', function(req, res, next) {
  var ID = req.params.id;
  //console.log(ID)

  MongoClient.connect('mongodb://localhost:27017/ipcs', function (err, client) {
    if (err) throw err

    var db = client.db('ipcs')
    //var myobj = { ip: IP, username: UserName, password: Password, streamname: StreamName };
    var myobj =new Object();
    myobj._id= objectId(ID);
    db.collection('ipc').deleteOne(myobj, function (err, result) {
      if (err) throw err

      console.log("ok")
    });
  });
  res.redirect('/ipc');
  //res.render('delipc', { title: 'Express' });
});


module.exports = router;

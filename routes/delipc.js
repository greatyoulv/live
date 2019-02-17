var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('addipc', { title: 'Express' });
});

router.post('/add', function(req, res, next) {
  var IP = req.body.IP;
  var UserName = req.body.UserName;
  var Password = req.body.Password;
  var StreamName = req.body.IpcName;

  MongoClient.connect('mongodb://localhost:27017/ipcs', function (err, client) {
    if (err) throw err

    var db = client.db('ipcs')
    //var myobj = { ip: IP, username: UserName, password: Password, streamname: StreamName };
    var myobj =new Object();
    myobj.ip= IP;
    myobj.username= UserName;
    myobj.password= Password;
    myobj.streamname= StreamName;
  
    db.collection('ipc').insertOne(myobj, function (err, result) {
      if (err) throw err

      console.log("ok")
    });
  });
  res.redirect('/ipc');
});

module.exports = router;

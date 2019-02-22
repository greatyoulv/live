var express = require('express');
var router = express.Router();
var process = require('child_process');

var MongoClient = require('mongodb').MongoClient;
/* GET users listing. */

router.get('/', function(req, res, next) {
  //var MongoClient = require('mongodb').MongoClient;

  MongoClient.connect('mongodb://localhost:27017/ipcs', function (err, client) {
    if (err) throw err

    var db = client.db('ipcs')
  
    db.collection('ipc').find().toArray(function (err, result) {
      if (err) throw err
      console.log(result)
      
      res.render('ipc', { datas:result });
    });
  });
 // res.render('ipc', { datas: result });
});

router.get('/ipc', function(req, res, next) {
  //var MongoClient = require('mongodb').MongoClient;

  MongoClient.connect('mongodb://localhost:27017/ipcs', function (err, client) {
    if (err) throw err

    var db = client.db('ipcs')
  
    db.collection('ipc').find().toArray(function (err, result) {
      if (err) throw err
//
       var IP = result[0].ip;
       var UserName = result[0].username;
       var Password = result[0].password;
       var StreamName = result[0].streamname;
       var Ffmpeg =  "ffmpeg -hwaccel vaapi -vaapi_device /dev/dri/renderD128 -threads 2 "
       var Rtsp = "-re -rtsp_transport tcp -i 'rtsp://"
       var StreamApp = ":554/h264/1/main/av_stream' -vf 'format=nv12,hwupload' -c:v h264_vaapi -f flv  -r 25 -b:v 4M -an rtmp://127.0.0.1:1935/live/";
       var cmdStr = Ffmpeg + Rtsp + UserName + ':' + Password + '@' + IP + StreamApp + StreamName
       function ffmpeg(){
         var worker = process.exec(cmdStr,function(error,stdout,stderr){
           if(error !== null){
           console.log('exec error: '+ error);
           }
         });
         worker.on('exit',(code) => {
           ffmpeg();
         });
       }
       ffmpeg();    

//
      console.log(result)
      
    });
  });
  res.redirect('/ipc');
});

module.exports = router;

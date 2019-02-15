var express = require('express');
var router = express.Router();
var process = require('child_process')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('ffmpeg', { title: 'Express' });
});

router.post('/ipc', function(req, res, next) {
  var IP = req.body.IP;
  var UserName = req.body.UserName;
  var Password = req.body.Password;
  var StreamName = req.body.IpcName;
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
  res.send('摄像头已发布');
});

module.exports = router;

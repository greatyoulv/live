var express = require('express');
var router = express.Router();
var http = require('http');

var options = {
  hostname: 'localhost',
  port: 1985,
  path: '/api/v1/streams/',
};
var body =new Object();
var myArray =new Array();
var myObject = new Object();
var callback = function(res){
  // 不断更新数据
  res.on('data', function(chunk) {
    body = JSON.parse(chunk);
  //for(var i in data.streams) {
    //console.log(data.streams[i].app +':' + data.streams[i].name);
    //x = data.streams[i].app + ":" + data.streams[i].name ;
    //console.log(myObject);
    //myObject.app = data.streams[i].app;
    //myObject.name = data.streams[i].name;
    //var myArray2 = myArray.push(myObject);
    //console.log(myArray);
  //};
 // console.log(data);
  //body = {streams:myArray};
  });
  
  res.on('end', function() {
  // 数据接收完成
  console.log(body);
  });
}
  // 向服务端发送请求
//var req = http.request(options, callback);
//req.end();

/* GET home page. */
router.get('/', function(req, res, next) {
  var req = http.request(options, callback);
  req.end();
  res.render('streams', {data:JSON.stringify(body)});
  
  //res.send(body.streams[1].app + ' ' + body.streams[1].name);
});

module.exports = router;

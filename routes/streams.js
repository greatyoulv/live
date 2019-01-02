var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var ua = req.headers['user-agent'];
  /Android|webOS|iPhone|iPod|BlackBerry/i.test(ua) ? res.redirect('/phonestreams') : res.redirect('/pcstreams') ;
  //res.render('streams',{title: 'youlv' });
  
  //res.send(body.streams[1].app + ' ' + body.streams[1].name);
});

module.exports = router;

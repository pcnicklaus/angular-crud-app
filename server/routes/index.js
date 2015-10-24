//var express = require('express');
//var router = express.Router();
//
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});
//
//module.exports = router;

var path = require('path');
var express = require('express');
var router = express.Router();

router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/views/index.html'));
});

module.exports = router;

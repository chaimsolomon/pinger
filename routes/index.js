var express = require('express');
var requestIp = require('request-ip');
var connect = require('connect');
var app = connect();
app.use(requestIp.mw());
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { ip_address: req.clientIp });
});

module.exports = router;

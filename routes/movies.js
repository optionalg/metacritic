var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var keys = require('../public/javascripts/keys')

router.get('/list', function(req, res, next) {
  unirest.post("https://byroredux-metacritic.p.mashape.com/find/movie")
  .header("X-Mashape-Key", "1t37z6ZtlvmshEIKo41r9f2yjIh1p14TpsnjsnnL0F5emFdSPa")
  .header("Content-Type", "application/x-www-form-urlencoded")
  .header("Accept", "application/json")
  .send({"platform":1, "retry":4, "title":"Ghostbusters"})
  .end(function (result) {
    console.log(result.status, result.headers, result.body);
    res.render('movies', { title: 'Movies', data: result.body} );
  });
});

module.exports = router;

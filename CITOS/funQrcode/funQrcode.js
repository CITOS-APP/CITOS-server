var express = require('express');
var router = express.Router();
var QRCode = require('qrcode');

var fn = {};
fn.mkqrcode =  function (req, res, next) {
  var
    price = req.body.price,
    userinfo = req.body.userinfo,
    params = [price,userinfo];
    console.log(params);
QRCode.toDataURL(params, function(err, url){
  if(err){
    console.log(err);
    res.send(err);
  }else{
    console.log(url);
    res.send(url);
  }
});
}

module.exports = fn;
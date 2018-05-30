var http = require('http');
var https = require('https');
var url = require('url');
var fetch = require('node-fetch');
var fs = require('fs');
var key = fs.readFileSync('/etc/httpd/certs/214695288340202.key');
var cert = fs.readFileSync('/etc/httpd/certs/public.pem');
var ca = fs.readFileSync('/etc/httpd/certs/214695288340202.pem');
var options = {
	key:key,
	cert:cert,
	ca:ca
};

var count = 1;
var resJSON="";
var city="";
var lon=121.48;
var lat=31.22;

https.createServer(options,(req,res)=>{
	res.writeHead(200,{
		'Content-Type':'application/json',
		'Access-Control-Allow-Origin':'https://www.yemaoteng.tech',
		'Access-COntrol-Allow-Methods':'GET',
		'Access-Control-Allow-Headers':'NCZ,Origin, X-Requested-With, Content-Type, Accept, Connection, User-Agent, Cookie',
		'Access-Control-Max-Age':1728000
	});
  
  var q = url.parse(req.url,true);
  if(Object.prototype.hasOwnProperty.call(q.query, 'lon')&&
     Object.prototype.hasOwnProperty.call(q.query, 'lat')){
    lon=q.query.lon;
    lat=q.query.lat; 
    console.log(q.query.lon);
    console.log(q.query.lat);
  }
  //latitude纬度
  //longitude经度
  //阿里云的接口，lat+lon
  
  queryurl ="http://jisutqybmf.market.alicloudapi.com/weather/query?location="+lat+"%2C"+lon;
  console.log(queryurl);
  fetch(queryurl,{
    method:'GET',
    headers:{
      "Content-Type":"application/json; charset=utf-8",
      "Authorization":"APPCODE 5ba28e0dea174aad9abd6dfd0a9d57ca",
    }
  })
  .then(function(resss) {
    return resss.json();
  })
  .then(function(data) {
    resJSON = JSON.stringify(data);
    console.log(resJSON);
    res.end(resJSON);
  })
  .catch(function (err) {
    console.error(err);
  });


}).listen(7788);


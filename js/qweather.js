var lat, lon, queryurl, country, city, temperature, windspeed, mainWeather;

var shanghai=JSON.parse('{"status":"0","msg":"ok","result":{"city":"上海","cityid":"24","citycode":"101020100","date":"2018-06-01","week":"星期五","weather":"晴","temp":"26","temphigh":"26","templow":"19","img":"0","humidity":"37","pressure":"1015","windspeed":"1.3","winddirect":"静风","windpower":"0级","updatetime":"2018-06-01 13:59:00","index":[{"iname":"空调指数","ivalue":"较少开启","detail":"您将感到很舒适，一般不需要开启空调。"},{"iname":"运动指数","ivalue":"较适宜","detail":"天气较好，但风力较大，推荐您进行室内运动，若在户外运动请注意防风。"},{"iname":"紫外线指数","ivalue":"强","detail":"紫外线辐射强，建议涂擦SPF20左右、PA++的防晒护肤品。避免在10点至14点暴露于日光下。"},{"iname":"感冒指数","ivalue":"少发","detail":"各项气象条件适宜，无明显降温过程，发生感冒机率较低。"},{"iname":"洗车指数","ivalue":"较适宜","detail":"较适宜洗车，未来一天无雨，风力较小，擦洗一新的汽车至少能保持一天。"},{"iname":"空气污染扩散指数","ivalue":"良","detail":"气象条件有利于空气污染物稀释、扩散和清除，可在室外正常活动。"},{"iname":"穿衣指数","ivalue":"舒适","detail":"建议着长袖T恤、衬衫加单裤等服装。年老体弱者宜着针织长袖衬衫、马甲和长裤。"}],"aqi":{"so2":"6","so224":"7","no2":"32","no224":"31","co":"0.600","co24":"0.610","o3":"72","o38":"75","o324":"94","pm10":"33","pm1024":"34","pm2_5":"29","pm2_524":"36","iso2":"3","ino2":"16","ico":"6","io3":"23","io38":"38","ipm10":"31","ipm2_5":"42","aqi":"42","primarypollutant":"PM2.5","quality":"优","timepoint":"2018-05-19 21:00:00","aqiinfo":{"level":"一级","color":"#00e400","affect":"空气质量令人满意，基本无空气污染","measure":"各类人群可正常活动"}},"daily":[{"date":"2018-06-01","week":"星期五","sunrise":"04:51","sunset":"18:53","night":{"weather":"晴","templow":"19","img":"0","winddirect":"东北风","windpower":"3-5级"},"day":{"weather":"晴","temphigh":"26","img":"0","winddirect":"东北风","windpower":"3-5级"}},{"date":"2018-06-02","week":"星期六","sunrise":"04:51","sunset":"18:53","night":{"weather":"多云","templow":"19","img":"1","winddirect":"东南风","windpower":"3-5级"},"day":{"weather":"多云","temphigh":"27","img":"1","winddirect":"东风","windpower":"3-5级"}},{"date":"2018-06-03","week":"星期日","sunrise":"04:51","sunset":"18:54","night":{"weather":"多云","templow":"21","img":"1","winddirect":"东南风","windpower":"3-5级"},"day":{"weather":"多云","temphigh":"27","img":"1","winddirect":"东南风","windpower":"3-5级"}},{"date":"2018-06-04","week":"星期一","sunrise":"04:50","sunset":"18:54","night":{"weather":"中雨","templow":"21","img":"8","winddirect":"东北风","windpower":"微风"},"day":{"weather":"小雨","temphigh":"28","img":"7","winddirect":"东南风","windpower":"微风"}},{"date":"2018-06-05","week":"星期二","sunrise":"04:50","sunset":"18:55","night":{"weather":"阴","templow":"21","img":"2","winddirect":"东北风","windpower":"微风"},"day":{"weather":"中雨","temphigh":"26","img":"8","winddirect":"东北风","windpower":"微风"}},{"date":"2018-06-06","week":"星期三","sunrise":"04:50","sunset":"18:55","night":{"weather":"多云","templow":"22","img":"1","winddirect":"东北风","windpower":"微风"},"day":{"weather":"小雨","temphigh":"26","img":"7","winddirect":"东风","windpower":"微风"}},{"date":"2018-06-07","week":"星期四","sunrise":"04:50","sunset":"18:56","night":{"weather":"阴","templow":"20","img":"2","winddirect":"持续无风向","windpower":"微风"},"day":{"weather":"小雨","temphigh":"25","img":"7","winddirect":"东风","windpower":"微风"}}],"hourly":[{"time":"13:00","weather":"晴","temp":"27","img":"0"},{"time":"14:00","weather":"晴","temp":"27","img":"0"},{"time":"15:00","weather":"晴","temp":"26","img":"0"},{"time":"16:00","weather":"晴","temp":"26","img":"0"},{"time":"17:00","weather":"晴","temp":"25","img":"0"},{"time":"18:00","weather":"晴","temp":"24","img":"0"},{"time":"19:00","weather":"晴","temp":"22","img":"0"},{"time":"20:00","weather":"晴","temp":"21","img":"0"},{"time":"21:00","weather":"多云","temp":"21","img":"1"},{"time":"22:00","weather":"多云","temp":"20","img":"1"},{"time":"23:00","weather":"多云","temp":"20","img":"1"},{"time":"0:00","weather":"多云","temp":"20","img":"1"},{"time":"1:00","weather":"多云","temp":"20","img":"1"},{"time":"2:00","weather":"多云","temp":"20","img":"1"},{"time":"3:00","weather":"多云","temp":"19","img":"1"},{"time":"4:00","weather":"多云","temp":"19","img":"1"},{"time":"5:00","weather":"多云","temp":"20","img":"1"},{"time":"6:00","weather":"多云","temp":"20","img":"1"},{"time":"7:00","weather":"多云","temp":"22","img":"1"},{"time":"8:00","weather":"多云","temp":"23","img":"1"},{"time":"9:00","weather":"多云","temp":"25","img":"1"},{"time":"10:00","weather":"多云","temp":"26","img":"1"},{"time":"11:00","weather":"多云","temp":"27","img":"1"},{"time":"12:00","weather":"多云","temp":"27","img":"1"}]}}');
var anshun = JSON.parse('{"status":"0","msg":"ok","result":{"city":"安顺","cityid":"111","citycode":"101260301","date":"2018-06-01","week":"星期五","weather":"阴","temp":"18","temphigh":"19","templow":"15","img":"2","humidity":"84","pressure":"857","windspeed":"3.4","winddirect":"东北风","windpower":"1级","updatetime":"2018-06-01 13:55:00","index":[{"iname":"空调指数","ivalue":"较少开启","detail":"您将感到很舒适，一般不需要开启空调。"},{"iname":"运动指数","ivalue":"较适宜","detail":"阴天，较适宜进行各种户内外运动。"},{"iname":"紫外线指数","ivalue":"最弱","detail":"属弱紫外线辐射天气，无需特别防护。若长期在户外，建议涂擦SPF在8-12之间的防晒护肤品。"},{"iname":"感冒指数","ivalue":"较易发","detail":"天气较凉，较易发生感冒，请适当增加衣服。体质较弱的朋友尤其应该注意防护。"},{"iname":"洗车指数","ivalue":"不宜","detail":"不宜洗车，未来24小时内有雨，如果在此期间洗车，雨水和路上的泥水可能会再次弄脏您的爱车。"},{"iname":"空气污染扩散指数","ivalue":"较差","detail":"气象条件较不利于空气污染物稀释、扩散和清除，请适当减少室外活动时间。"},{"iname":"穿衣指数","ivalue":"较舒适","detail":"建议着薄外套、开衫牛仔衫裤等服装。年老体弱者应适当添加衣物，宜着夹克衫、薄毛衣等。"}],"aqi":{"so2":"18","so224":"5","no2":"13","no224":"7","co":"0.580","co24":"0.480","o3":"88","o38":"109","o324":"112","pm10":"102","pm1024":"66","pm2_5":"68","pm2_524":"40","iso2":"6","ino2":"7","ico":"6","io3":"28","io38":"58","ipm10":"76","ipm2_5":"91","aqi":"91","primarypollutant":"PM2.5","quality":"良","timepoint":"2018-05-19 21:00:00","aqiinfo":{"level":"二级","color":"#FFFF00","affect":"空气质量可接受，但某些污染物可能对极少数异常敏感人群健康有较弱影响","measure":"极少数异常敏感人群应减少户外活动"}},"daily":[{"date":"2018-06-01","week":"星期五","sunrise":"06:04","sunset":"19:44","night":{"weather":"阵雨","templow":"15","img":"3","winddirect":"持续无风向","windpower":"微风"},"day":{"weather":"阴","temphigh":"19","img":"2","winddirect":"持续无风向","windpower":"微风"}},{"date":"2018-06-02","week":"星期六","sunrise":"06:04","sunset":"19:44","night":{"weather":"阵雨","templow":"16","img":"3","winddirect":"持续无风向","windpower":"微风"},"day":{"weather":"阵雨","temphigh":"20","img":"3","winddirect":"持续无风向","windpower":"微风"}},{"date":"2018-06-03","week":"星期日","sunrise":"06:04","sunset":"19:45","night":{"weather":"大到暴雨","templow":"15","img":"23","winddirect":"持续无风向","windpower":"微风"},"day":{"weather":"阴","temphigh":"21","img":"2","winddirect":"持续无风向","windpower":"微风"}},{"date":"2018-06-04","week":"星期一","sunrise":"06:04","sunset":"19:45","night":{"weather":"阴","templow":"14","img":"2","winddirect":"持续无风向","windpower":"微风"},"day":{"weather":"大到暴雨","temphigh":"19","img":"23","winddirect":"持续无风向","windpower":"微风"}},{"date":"2018-06-05","week":"星期二","sunrise":"06:03","sunset":"19:46","night":{"weather":"阴","templow":"14","img":"2","winddirect":"持续无风向","windpower":"微风"},"day":{"weather":"多云","temphigh":"24","img":"1","winddirect":"持续无风向","windpower":"微风"}},{"date":"2018-06-06","week":"星期三","sunrise":"06:03","sunset":"19:46","night":{"weather":"阴","templow":"14","img":"2","winddirect":"持续无风向","windpower":"微风"},"day":{"weather":"多云","temphigh":"25","img":"1","winddirect":"持续无风向","windpower":"微风"}},{"date":"2018-06-07","week":"星期四","sunrise":"06:03","sunset":"19:47","night":{"weather":"中雨","templow":"15","img":"8","winddirect":"持续无风向","windpower":"微风"},"day":{"weather":"多云","temphigh":"25","img":"1","winddirect":"持续无风向","windpower":"微风"}}],"hourly":[{"time":"13:00","weather":"多云","temp":"17","img":"1"},{"time":"14:00","weather":"多云","temp":"18","img":"1"},{"time":"15:00","weather":"多云","temp":"18","img":"1"},{"time":"16:00","weather":"多云","temp":"19","img":"1"},{"time":"17:00","weather":"多云","temp":"19","img":"1"},{"time":"18:00","weather":"多云","temp":"18","img":"1"},{"time":"19:00","weather":"阵雨","temp":"17","img":"3"},{"time":"20:00","weather":"多云","temp":"17","img":"1"},{"time":"21:00","weather":"多云","temp":"16","img":"1"},{"time":"22:00","weather":"多云","temp":"16","img":"1"},{"time":"23:00","weather":"阵雨","temp":"16","img":"3"},{"time":"0:00","weather":"多云","temp":"15","img":"1"},{"time":"1:00","weather":"多云","temp":"15","img":"1"},{"time":"2:00","weather":"多云","temp":"15","img":"1"},{"time":"3:00","weather":"多云","temp":"15","img":"1"},{"time":"4:00","weather":"多云","temp":"15","img":"1"},{"time":"5:00","weather":"多云","temp":"15","img":"1"},{"time":"6:00","weather":"多云","temp":"15","img":"1"},{"time":"7:00","weather":"多云","temp":"15","img":"1"},{"time":"8:00","weather":"多云","temp":"15","img":"1"},{"time":"9:00","weather":"多云","temp":"15","img":"1"},{"time":"10:00","weather":"阵雨","temp":"15","img":"3"},{"time":"11:00","weather":"阵雨","temp":"16","img":"3"},{"time":"12:00","weather":"多云","temp":"16","img":"1"}]}}');
console.log(shanghai);

new Vue({
  el:'#vapp',
  data: {
    vshanghai:{"status":"0","msg":"ok","result":{"city":"上海","cityid":"24","citycode":"101020100","date":"2018-06-01","week":"星期五","weather":"晴","temp":"26","temphigh":"26","templow":"19","img":"0","humidity":"37","pressure":"1015","windspeed":"1.3","winddirect":"静风","windpower":"0级","updatetime":"2018-06-01 13:59:00","index":[{"iname":"空调指数","ivalue":"较少开启","detail":"您将感到很舒适，一般不需要开启空调。"},{"iname":"运动指数","ivalue":"较适宜","detail":"天气较好，但风力较大，推荐您进行室内运动，若在户外运动请注意防风。"},{"iname":"紫外线指数","ivalue":"强","detail":"紫外线辐射强，建议涂擦SPF20左右、PA++的防晒护肤品。避免在10点至14点暴露于日光下。"},{"iname":"感冒指数","ivalue":"少发","detail":"各项气象条件适宜，无明显降温过程，发生感冒机率较低。"},{"iname":"洗车指数","ivalue":"较适宜","detail":"较适宜洗车，未来一天无雨，风力较小，擦洗一新的汽车至少能保持一天。"},{"iname":"空气污染扩散指数","ivalue":"良","detail":"气象条件有利于空气污染物稀释、扩散和清除，可在室外正常活动。"},{"iname":"穿衣指数","ivalue":"舒适","detail":"建议着长袖T恤、衬衫加单裤等服装。年老体弱者宜着针织长袖衬衫、马甲和长裤。"}],"aqi":{"so2":"6","so224":"7","no2":"32","no224":"31","co":"0.600","co24":"0.610","o3":"72","o38":"75","o324":"94","pm10":"33","pm1024":"34","pm2_5":"29","pm2_524":"36","iso2":"3","ino2":"16","ico":"6","io3":"23","io38":"38","ipm10":"31","ipm2_5":"42","aqi":"42","primarypollutant":"PM2.5","quality":"优","timepoint":"2018-05-19 21:00:00","aqiinfo":{"level":"一级","color":"#00e400","affect":"空气质量令人满意，基本无空气污染","measure":"各类人群可正常活动"}},"daily":[{"date":"2018-06-01","week":"星期五","sunrise":"04:51","sunset":"18:53","night":{"weather":"晴","templow":"19","img":"0","winddirect":"东北风","windpower":"3-5级"},"day":{"weather":"晴","temphigh":"26","img":"0","winddirect":"东北风","windpower":"3-5级"}},{"date":"2018-06-02","week":"星期六","sunrise":"04:51","sunset":"18:53","night":{"weather":"多云","templow":"19","img":"1","winddirect":"东南风","windpower":"3-5级"},"day":{"weather":"多云","temphigh":"27","img":"1","winddirect":"东风","windpower":"3-5级"}},{"date":"2018-06-03","week":"星期日","sunrise":"04:51","sunset":"18:54","night":{"weather":"多云","templow":"21","img":"1","winddirect":"东南风","windpower":"3-5级"},"day":{"weather":"多云","temphigh":"27","img":"1","winddirect":"东南风","windpower":"3-5级"}},{"date":"2018-06-04","week":"星期一","sunrise":"04:50","sunset":"18:54","night":{"weather":"中雨","templow":"21","img":"8","winddirect":"东北风","windpower":"微风"},"day":{"weather":"小雨","temphigh":"28","img":"7","winddirect":"东南风","windpower":"微风"}},{"date":"2018-06-05","week":"星期二","sunrise":"04:50","sunset":"18:55","night":{"weather":"阴","templow":"21","img":"2","winddirect":"东北风","windpower":"微风"},"day":{"weather":"中雨","temphigh":"26","img":"8","winddirect":"东北风","windpower":"微风"}},{"date":"2018-06-06","week":"星期三","sunrise":"04:50","sunset":"18:55","night":{"weather":"多云","templow":"22","img":"1","winddirect":"东北风","windpower":"微风"},"day":{"weather":"小雨","temphigh":"26","img":"7","winddirect":"东风","windpower":"微风"}},{"date":"2018-06-07","week":"星期四","sunrise":"04:50","sunset":"18:56","night":{"weather":"阴","templow":"20","img":"2","winddirect":"持续无风向","windpower":"微风"},"day":{"weather":"小雨","temphigh":"25","img":"7","winddirect":"东风","windpower":"微风"}}],"hourly":[{"time":"13:00","weather":"晴","temp":"27","img":"0"},{"time":"14:00","weather":"晴","temp":"27","img":"0"},{"time":"15:00","weather":"晴","temp":"26","img":"0"},{"time":"16:00","weather":"晴","temp":"26","img":"0"},{"time":"17:00","weather":"晴","temp":"25","img":"0"},{"time":"18:00","weather":"晴","temp":"24","img":"0"},{"time":"19:00","weather":"晴","temp":"22","img":"0"},{"time":"20:00","weather":"晴","temp":"21","img":"0"},{"time":"21:00","weather":"多云","temp":"21","img":"1"},{"time":"22:00","weather":"多云","temp":"20","img":"1"},{"time":"23:00","weather":"多云","temp":"20","img":"1"},{"time":"0:00","weather":"多云","temp":"20","img":"1"},{"time":"1:00","weather":"多云","temp":"20","img":"1"},{"time":"2:00","weather":"多云","temp":"20","img":"1"},{"time":"3:00","weather":"多云","temp":"19","img":"1"},{"time":"4:00","weather":"多云","temp":"19","img":"1"},{"time":"5:00","weather":"多云","temp":"20","img":"1"},{"time":"6:00","weather":"多云","temp":"20","img":"1"},{"time":"7:00","weather":"多云","temp":"22","img":"1"},{"time":"8:00","weather":"多云","temp":"23","img":"1"},{"time":"9:00","weather":"多云","temp":"25","img":"1"},{"time":"10:00","weather":"多云","temp":"26","img":"1"},{"time":"11:00","weather":"多云","temp":"27","img":"1"},{"time":"12:00","weather":"多云","temp":"27","img":"1"}]}}
  },
  method:{
    lo:function(){
      vshanghai = shanghai;
    },
    sw:function(){
      vshanghai = anshun;
    }
  },
  computed: {
    vcshanghai: function(){
      return this.vshanghai;
    },   

  }
});

function sw () {
  shanghai = anshun;
  console.log(shanghai);
}



function upup() {
  if (navigator.geolocation) {
    console.log("navigator.geolocation>Enable!29333");
    navigator.geolocation.getCurrentPosition(qqweather);
    console.log("called qweather and wait");
  }else{
    console.log("can not get navigator.geolocation");
  }
  console.log("upup() end");
}

function showPosition(position) {
  document.getElementById('lat').innerHTML=lat;
  document.getElementById('lon').innerHTML=lon;
}

function qqweather(position) {
  console.log("position in");
  
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  showPosition();
  queryurl ="https://www.yemaoteng.tech:7788/?lon="+lon+"&lat="+lat;
  console.log(queryurl);
  
  fetch(queryurl,{
    method:'GET',
    headers:{
      "Content-Type":"application/json",
      "Origin":"https://www.yemaoteng.tech",
      "Access-Control-Request-Method":"GET",
      "Access-Control-Request-Headers":"NCZ"
    }
  })
  .then(function(res) {
    console.log("fetch weather");
    return res.json();
  })
  .then(function (data){
    console.log(data);
    displayWeather(data);    
  })
  .catch(function (err) {
    console.error(err);
  });
  
}

function displayWeather(dadada){
  console.log("display");

  //处理主要显示内容
  document.getElementsByClassName('city')[0].innerHTML=dadada.result.city;
  document.getElementsByClassName('main_temp')[0].innerHTML=dadada.result.temp+"°C";
  document.getElementsByClassName('main_weather')[0].innerHTML=dadada.result.weather;
  document.getElementsByClassName('main_winddirect')[0].innerHTML = dadada.result.winddirect;
  document.getElementsByClassName('main_windspeed')[0].innerHTML=' '+dadada.result.windspeed+'m/s';
  document.getElementsByClassName('main_humidity')[0].innerHTML=" 湿度："+dadada.result.humidity+'%';
  document.getElementsByClassName('main_icon')[0].src='./pics/'+dadada.result.img+'.png';

  //处理今明两天显示
  document.getElementsByClassName('today_temphl')[0].innerHTML=dadada.result.daily[0].day.temphigh+'~'+dadada.result.daily[0].night.templow;
  document.getElementsByClassName('today_weather')[0].innerHTML = dadada.result.daily[0].day.weather;
  document.getElementsByClassName('today_icon')[0].src = "./pics/"+dadada.result.daily[0].day.img+".png";
  document.getElementsByClassName('tomorrow_temphl')[0].innerHTML=dadada.result.daily[1].day.temphigh+'~'+dadada.result.daily[1].night.templow;                                                          
  document.getElementsByClassName('tomorrow_weather')[0].innerHTML = dadada.result.daily[1].day.weather;
  document.getElementsByClassName('tomorrow_icon')[0].src = "./pics/"+dadada.result.daily[1].day.img+".png";
 
  //处理24小时天气预报    
  for(let k=0;k<24;k++){
    document.getElementsByClassName('hour_icon')[k].src = "./pics/"+dadada.result.hourly[k].img+".png";
    document.getElementsByClassName('hour_temp')[k].innerHTML = dadada.result.hourly[k].temp;
    document.getElementsByClassName('hour_weather')[k].innerHTML = dadada.result.hourly[k].weather;
    document.getElementsByClassName('hour_time')[k].innerHTML = dadada.result.hourly[k].time;
  }


  //处理一周天气预报
  for(let j=0;j<7;j++){
    document.getElementsByClassName('week_name')[j].innerHTML = dadada.result.daily[j].week;
    document.getElementsByClassName('week_day_weather')[j].innerHTML = dadada.result.daily[j].day.weather;
    document.getElementsByClassName('week_day_icon')[j].src = "./pics/"+dadada.result.daily[j].day.img+".png";
    document.getElementsByClassName('week_day_wind')[j].innerHTML = dadada.result.daily[j].day.windpower;
    document.getElementsByClassName('week_day_temphigh')[j].innerHTML = dadada.result.daily[j].day.temphigh+"°C";
    document.getElementsByClassName('week_night_templow')[j].innerHTML = dadada.result.daily[j].night.templow+"°C";
    document.getElementsByClassName('week_night_wind')[j].innerHTML = dadada.result.daily[j].night.windpower;
    document.getElementsByClassName('week_night_icon')[j].src = "./pics/"+dadada.result.daily[j].night.img+".png";
    document.getElementsByClassName('week_night_weather')[j].innerHTML = dadada.result.daily[j].night.weather;
  }

  //处理生活指数
  for(let i=0;i<7;i++){
    document.getElementsByClassName('index_text')[i].innerHTML = dadada.result.index[i].detail;
  }


  

}

function qweatherFail(position){
  console.log("fail");
}
var loc = geoplugin_city() + ", " + geoplugin_region();
document.getElementById("location").innerHTML = loc;
var degree = "F";

function getTime() {
  var date = Date();
  document.getElementById("date").innerHTML = date.slice(0, 3) + ", " + date.slice(4, 10) + "<br>" + date.slice(15, 25) + "<br>" + date.slice(35, 38);
  var t = setTimeout(getTime, 100)
}

function getWeather() {
  var apikey = "780b37618279e09b517121e0ce1d8008"
  var temp = "";
  var weather = new XMLHttpRequest();
  weather.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + geoplugin_city() + "&APPID=" + apikey, false);
  weather.send();
  var weatherArr = JSON.parse(weather.responseText);
console.log(weatherArr);
  if (degree == "F") {
    temp = Math.floor(((weatherArr.main.temp) - 273.15) * 1.8000 + 32.00) + "\u00B0 ";

  } else {
    temp = Math.floor((weatherArr.main.temp) - 273.15) + "\u00B0 ";
  }

  document.getElementById("temp").innerHTML = temp + degree;
  document.getElementById("temp").onclick = function change() {
    if (degree == "F") {
      degree = "C";
    } else {
      degree = "F"
    };
    document.getElementById("temp").innerHTML =  temp + degree;
    getWeather();
  }
  var conditions = weatherArr.weather[0].description;
  document.getElementById("conditions").innerHTML = conditions;
  var humidity = weatherArr.main.humidity;
  document.getElementById("humidity").innerHTML = humidity + "% humidity";
  var wID = weatherArr.weather[0].id;
  console.log(wID);
  var pic = "";
  switch (wID) {
    case 200: //thunderstorm
    case 201:
    case 202:
    case 210:
    case 211:
    case 212:
    case 221:
    case 230:
    case 231:
    case 232:
      pic = "http://image005.flaticon.com/1/svg/15/15814.svg";
      break;
    case 300: //light rain
    case 301:
    case 302:
    case 310:
    case 311:
    case 312:
    case 313:
    case 314:
    case 321:
      pic = "http://image005.flaticon.com/1/svg/1/1801.svg";
      break;
    case 500: //rain
    case 501:
    case 502:
    case 503:
    case 504:
    case 511:
    case 520:
    case 521:
    case 522:
    case 531:
      pic = "http://image005.flaticon.com/1/svg/99/99566.svg";
      break;
    case 600: //snow
    case 601:
    case 602:
    case 611:
    case 612:
    case 615:
    case 616:
    case 620:
    case 621:
    case 622:
      pic = "http://image005.flaticon.com/120/svg/110/110315.svg";
      break;
    case 701: //mist
    case 711: //smoke
    case 721: pic =  "http://image.flaticon.com/icons/svg/134/134120.svg";
      break;//haze
    case 731: //sand
    case 741: //fog
      pic = "http://image005.flaticon.com/1/svg/106/106055.svg"
      break;
    case 751: //sand
    case 761: //dust
    case 762: //volcanic ash
    case 771: //squalls
    case 781: //tornado!
      pic = "http://image005.flaticon.com/73/svg/70/70205.svg"
      break;
    case 800: //clear sky
      pic = "http://image005.flaticon.com/59/svg/63/63366.svg";
      break;
    case 801: //partly cloudy
    case 802:
    case 803:
    case 804:
      pic = "http://image005.flaticon.com/1/svg/2/2015.svg";
      break;
  }
  
  $("#main").css("background-image", "url(" + pic + ")");
  
}
console.log("weather api");
var url = "http://api.openweathermap.org/data/2.5/weather?";
var apiKey = "34af04e7087783be92496c2a33100782";
var apiUrl;

var xmlhttp = new XMLHttpRequest();

var latitude = 0.0;
var longitude = 0.0;

getLocation();

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(savePosition,showLocationError);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function savePosition(position) {
    latitude = position.coords.latitude,
    longitude = position.coords.longitude;
    console.log("Lat "+latitude);
    apiUrl = url + "lat=" + latitude +"&"+ "lon=" + longitude +"&"+ "APPID=" + apiKey;
    getWeather(apiUrl);
}

function getWeather(url) {

    xmlhttp.onreadystatechange = function (){

        if (this.status == 200 && this.readyState == 4) {
            console.log("Info: "+this.responseText);
            var res = JSON.parse(this.responseText);
            showWeather(res);
        } else {
            console.log("Ready state: " + this.readystate);
            console.log("Status: " + this.status);
            if (this.readyState != "undefined" && this.status > 200) {
                showRequestError();
            }
        }
    };

    console.log(apiUrl);
    xmlhttp.open("GET", apiUrl, true);
    xmlhttp.send();
}

function showWeather(info){
    var weatherValue = info.main.temp;
    var description = info.weather[0].main;
    console.log("Weather: "+weatherValue);
    weatherValue = weatherValue - 273.15;
    weatherValue = Math.round(weatherValue*100) / 100;
    weatherValue = weatherValue + "°C";
    document.getElementById("weather-value").innerHTML = "<h2>"+description+"    "+weatherValue+"</h2>";
    
}

/*
    0 - There was and error in the request or the api service
    1 - The user blocked the location tool
*/

function showLocationError(){
    document.getElementById("weather-value").innerHTML = "<h2>Location blocked or not supported</h2>";
    
}

function showRequestError(){
    document.getElementById("weather-value").innerHTML = "<h2>The weather service is not working</h2>";
    
}



function weatherBalloon(Usercity) {

    // setting local variables for the function
    //var key = '34af04e7087783be92496c2a33100782';
    //var latLonURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key;

    fetch('https://api.openweathermap.org/data/2.5/weather?id =') + Usercity + "&appid="+key;
    var key = '34af04e7087783be92496c2a33100782'
    .then(function(resp) {return resp.json()})
    .then(function(data) {
        drawWeather(data);
        
    })
    .catch(function() {

    });
}

function drawWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	var description = d.weather[0].description;
	
	document.getElementById('description').innerHTML = description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;
	
	if( description.indexOf('rain') > 0 ) {
  	document.body.className = 'the weather will be rainy';
  } else if( description.indexOf('cloud') > 0 ) {
  	document.body.className = 'the weather will be cloudy';
  } else if( description.indexOf('sunny') > 0 ) {
  	document.body.className = 'the weather will be sunny';
  }
}
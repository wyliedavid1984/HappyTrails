function weatherBalloon(city) {

    // setting local variables for the function
    var key = '34af04e7087783be92496c2a33100782';
    var latLonURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key;

    fetch('https://api.openweathermap.org/data/2.5/weather?id =') + city + "&appid="+key;
    .then(function(resp) {return.resp.json})
    .then(function(data) {
        drawWeather(data);
    })
    .catch(function() {

    });
    
    // first ajax to get the city's lat and lon
    $.ajax({
        url: latLonURL,
        method: "GET"
    }).then(function (res) {

        // setting the lon and lat variable to the city's lat and lon
        var lon = JSON.stringify(res.coord.lon);
        var lat = JSON.stringify(res.coord.lat);
        var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&appid=" + key;

        // second ajax to get the a future forecast as well as regular data
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

        });
    
    });

    $.ajax()
}

//function displayWeather(city){
    //$('.weather-result').html(weatherBalloon(city));
    //for i+2 
    
}

function drawWeather( weatherdraw ) {
    var celcius = Math.round(parseFloat(weatherdraw.main.temp)-273.15);
    var farenheit = Math.round(((parseFloat(weatherdraw.maintemp)-273.15)*1.8)+32);

    document.getElementById('description').innerHTML = description;
    document.getElementById('temp').innerHTML = celsius + '&deg;';
    document.getElementById('location').innerHTML = weatherdraw.name;

    if (description.indexOf('rain') > 0){
        document.body.className = 'It Is Raining! Not Good Weather For Hiking';


    }
}



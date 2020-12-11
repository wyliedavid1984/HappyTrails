$(document).ready(function () {

    getLocation();
    var distanceTravel;
    var userDistance;
    var timeHiking;

    function getLocation() {
        // Make sure browser supports this feature
        if (navigator.geolocation) {
            // Provide our showPosition() function to getCurrentPosition
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    // This will get called after getCurrentPosition()
    function showPosition(position) {
        console.log(position);
        // Grab coordinates from the given object
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var userDistance = 20;
        console.log("Your coordinates are Latitude: " + lat + " Longitude " + lon);


        if (position) {
            var hikeURL = "https://www.hikingproject.com/data/get-trails?lat=" + lat + "&lon=" + lon + "&maxDistance=" + userDistance + "&key=200992005-36cef2b40b13fda0780742aba62d29e7";

            $.ajax({
                url: hikeURL,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                if (trailsobjectdistance < userDistance) {
                    for (var i = 0; i < 4; i++) {
                        $("#divfortrails").append(trails.trail);
                        // or should we push to an array??
                         // need to select which keys will be appended and what wont be.
                    }
                }
            });
        } else {
            $("#userCity").removeClass(".hidden");
            $(document).on("click", "#cityName", function (e) {
                e.preventDefault();
                var weatherKey = "34af04e7087783be92496c2a33100782";
                var city = $(this).sibling("#city");
                var latLonURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherKey;

                // first ajax to get the city's lat and lon
                $.ajax({
                    url: latLonURL,
                    method: "GET"
                }).then(function (res) {

                    // setting the lon and lat variable to the city's lat and lon
                    var lon = JSON.stringify(res.coord.lon);
                    var lat = JSON.stringify(res.coord.lat);
                    var hikeURL = "https://www.hikingproject.com/data/get-trails?lat=" + lat + "&lon=" + lon + "&maxDistance=" + userDistance + "&key=200992005-36cef2b40b13fda0780742aba62d29e7";

                    $.ajax({
                        url: hikeURL,
                        method: "GET"
                    }).then(function (response) {
                        console.log(response);
                        if (trailsobjectdistance < userDistance) {
                            for (var i = 0; i < 4; i++) {
                                $("#divfortrails").append(trails.trail)
                                // need to select which keys will be appended and what wont be.
                                // or should we push to an array??
                            }
                        }
                    });
                })
            })
        }
    }

    // function getDistance() {
    //     $(".lengthTime").on("click", function () {
    //         distanceTravel = $(this).sibling(".lengthTime").val();
    //         timeHiking = $(this).sibling("#selected time frame");
    //         userDistance = timeHiking / 15;

    //     })
    // }

    function weatherBalloon(city) {

        // setting local variables for the function
        var key = '34af04e7087783be92496c2a33100782';
        var latLonURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key;

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
                console.log(response)
            });

        });
    }
    weatherBalloon("wilmington");
})
$(document).ready(function () {

    getLocation();
    var userDistance;
    var timeHike;


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

        console.log("Your coordinates are Latitude: " + lat + " Longitude " + lon);

        if (position) {
            console.log("trusting");
            $("#cityName").on("click", function (e) {
                e.preventDefault();
                console.log("gps");
                $("#userCity").addClass("hidden");
                $("#hikingParameters").removeClass("hidden");
                $("#parameters").on("click", function (e) {
                    e.preventDefault();

                    timeHike = $(".lengthTime").val();
                    console.log(timeHike);
                    userDistance = $("#radius").val();
                    console.log(userDistance);
                    console.log(typeof (userDistance));
                    $("#hikingParameters").addClass("hidden");
                    $("#userTrails").removeClass("hidden");

                    var hikeURL = "https://www.hikingproject.com/data/get-trails?lat=" + lat + "&lon=" + lon + "&maxDistance=" + userDistance + "&key=200992005-36cef2b40b13fda0780742aba62d29e7";
                    console.log(hikeURL);
                    $.ajax({
                        url: hikeURL,
                        method: "GET"
                    }).then(function (response) {
                        console.log(response);
                        for (var i = 0; i < 4; i++) {
                            $("#trailName" + i).append(response.trails[i])
                        }
                    })
                });
            })
        }
    }

    $("#cityName").on("click", function (e) {
        e.preventDefault();
        console.log("no gps");
        // we are getting the value of the city from the user.
        var city = $("#city").val();
        var weatherKey = "34af04e7087783be92496c2a33100782";

        var latLonURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherKey;
        $("#userCity").addClass("hidden");
        $("#hikingParameters").removeClass("hidden");
        // first ajax to get the city's lat and lon
        $("#parameters").on("click", function (e) {
            e.preventDefault();
            console.log("hello")
            timeHike = $(".lengthTime").val();
            console.log(timeHike);
            userDistance = $("#radius").val();
            console.log(userDistance);
            $("#hikingParameters").addClass("hidden");
            $("#userTrails").removeClass("hidden");
            $.ajax({
                url: latLonURL,
                method: "GET"
            }).then(function (res) {
                // setting the lon and lat variable to the city's lat and lon
                var lon = JSON.stringify(res.coord.lon);
                var lat = JSON.stringify(res.coord.lat);
                var hikeLength = timeHike / 12;
                console.log(length);
                var hikeURL = "https://www.hikingproject.com/data/get-trails?lat=" + lat + "&lon=" + lon + "&maxDistance=" + userDistance + "&key=200992005-36cef2b40b13fda0780742aba62d29e7";

                $.ajax({
                    url: hikeURL,
                    method: "GET"
                }).then(function (response) {
                    console.log(response);
                    for (var i = 0; i < response.trails.length; i++) {
                        if (response.trails[i].length < hikeLength) {
                            $("#trailName"+i).prepend("Trail Name: "+response.trails[i].name+"<br>")
                            $("#length"+i).append("Trail Length: "+response.trails[i].length+"<br>");
                            $("#difficulty"+i).append("Difficulty: "+response.trails[i].difficulty+"<br><br>")
                        }
                    }
                });
            })
        })
    })
    console.log("hello");




})
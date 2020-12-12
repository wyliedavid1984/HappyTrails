$(document).ready(function () {


    var userDistance;
    var timeHike;
    var lat;
    var lon;
    console.log("I loaded")

    function getLocation() {
        // Make sure browser supports this feature
        if (navigator.geolocation) {
            // Provide our showPosition() function to getCurrentPosition
            navigator.geolocation.getCurrentPosition(showPosition, console.log);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    // This will get called after getCurrentPosition()
    function showPosition(position) {
        console.log(position);
        // Grab coordinates from the given object
        lat = position.coords.latitude;
        lon = position.coords.longitude;

        console.log("Your coordinates are Latitude: " + lat + " Longitude " + lon);
        // if user blocks show location
        if (!position) {
            alert("You didn't share you're location.")
            return
        } 
    }

    // setting button clicks to specific functions
    $("#no-gps").on("click", noGps)
    $("#gps").on("click", gps)

    function gps(e) {
        e.preventDefault();
        // calling function to get user lat and lon
        console.log("gps");
        getLocation();
        
        // hiding previous div and show the next
        $("#userCity").addClass("hidden");
        $("#hikingParameters").removeClass("hidden");

        $(document).on("click", "#parameters", function (e) {
            e.preventDefault();
            
            // setting value to variables
            timeHike = $(".lengthTime").val();
            userDistance = $("#radius").val();
            var hikeURL = "https://www.hikingproject.com/data/get-trails?lat=" + lat + "&lon=" + lon + "&maxDistance=" + userDistance + "&key=200992005-36cef2b40b13fda0780742aba62d29e7";
            
            // hiding previous div and show the next
            $("#hikingParameters").addClass("hidden");
            $("#userTrails").removeClass("hidden");

            // ajax request to get api data
            $.ajax({
                url: hikeURL,
                method: "GET"
            }).then(function (response) {
                console.log(response);
            
                // looping through api to gather relevant data.
                for (var i = 0; i < 4; i++) {
                    if (response.trails[i].length < hikeLength) {
                        $("#trailName" + i).prepend("Trail Name: " + response.trails[i].name + "<br>")
                        $("#length" + i).append("Trail Length: " + response.trails[i].length + "<br>");
                        $("#difficulty" + i).append("Difficulty: " + response.trails[i].difficulty + "<br><br>")
                    }
                }
            })
        });
    }

    function noGps(e) {
        e.preventDefault();
        console.log("no gps");
        // we are getting the value of the city from the user.
        var city = $("#city").val();
        var weatherKey = "34af04e7087783be92496c2a33100782";
        var latLonURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherKey;
        // hiding previous div and show the next
        $("#userCity").addClass("hidden");
        $("#hikingParameters").removeClass("hidden");
        // first ajax to get the city's lat and lon
        $(document).on("click", "#parameters", function (e) {

            e.preventDefault();
            // setting values to variables to get lat and lon
            console.log("hello")
            timeHike = $(".lengthTime").val();
            userDistance = $("#radius").val();

            // hiding previous div and show the next
            $("#hikingParameters").addClass("hidden");
            $("#userTrails").removeClass("hidden");

            // ajax request to get api data
            $.ajax({
                url: latLonURL,
                method: "GET"
            }).then(function (res) {
            
                // setting the all variables to get hiking trails
                var lon = JSON.stringify(res.coord.lon);
                var lat = JSON.stringify(res.coord.lat);
                var hikeLength = timeHike / 12;
                var hikeURL = "https://www.hikingproject.com/data/get-trails?lat=" + lat + "&lon=" + lon + "&maxDistance=" + userDistance + "&key=200992005-36cef2b40b13fda0780742aba62d29e7";

                $.ajax({
                    url: hikeURL,
                    method: "GET"
                }).then(function (response) {
                    console.log(response);
            
                    // looping through api to gather relevant data.
                    for (var i = 0; i < response.trails.length; i++) {
                        if (response.trails[i].length < hikeLength) {
                            $("#trailName" + i).prepend("Trail Name: " + response.trails[i].name + "<br>")
                            $("#length" + i).append("Trail Length: " + response.trails[i].length + "<br>");
                            $("#difficulty" + i).append("Difficulty: " + response.trails[i].difficulty + "<br><br>")
                        }
                    }
                });
            })
        })
    }



})
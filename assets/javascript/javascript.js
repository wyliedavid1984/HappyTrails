$(document).ready(function () {


    var userDistance;
    var timeHike;
    var lat;
    var lon;
    var map;
    var trailLocation = [];
    var trailCoord = {
        lat: "",
        long: "",
    }
    var weatherKey = "34af04e7087783be92496c2a33100782";

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

    // this function used the parameter 
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
            var hikeLength = timeHike / 12;
            var hikeURL = `https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&maxDistance=${userDistance}&key=200992005-36cef2b40b13fda0780742aba62d29e7`;

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
                for (var i = 0; i < response.trails.length; i++) {
                    // looping through api to gather relevant data.
                    if (response.trails[i].length < hikeLength) {
                        $("#trailName" + i).prepend("Trail Name: " + responsep.trails[i].name + "<br>")
                        $("#length" + i).append("Trail Length: " + responsep.trails[i].length + "<br>");
                        $("#difficulty" + i).append("Difficulty: " + responsep.trails[i].difficulty + "<br><br>")
                        var myObj = {}
                        myObj.lat = response.trails[i].latitude
                        myObj.long = response.trails[i].longitude
                        trailLocation.push(myObj)
                    }
                }
                console.log(trailLocation);
                initMap(lat, lon);
            })
        });
    }

    // another user input function takes in zip code.
    function zipCode(e) {
        e.preventDefault();
        console.log("zipcode")
        var zip = $("#zip").val();
        var countryCode = "us";
        var zipURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},${countryCode}&appid=${weatherKey}`;

        //hides first section and show second section 
        $("#userCity").addClass("hidden");
        $("#hikingParameters").removeClass("hidden");

        // first ajax to get the city's lat and lon
        $(document).on("click", "#parameters", function (e) {
            e.preventDefault();
            console.log("zipcode1");

            // getting the users data
            timeHike = $(".lengthTime").val();
            userDistance = $("#radius").val();

            // hiding previous div and show the next
            $("#hikingParameters").addClass("hidden");
            $("#userTrails").removeClass("hidden");

            // ajax request to get api data
            $.ajax({
                url: zipURL,
                method: "GET"
            }).then(function (res) {
                console.log(res);
                console.log("zipCode2")

                // setting the all variables to get hiking trails
                var lon = JSON.stringify(res.coord.lon);
                var lat = JSON.stringify(res.coord.lat);
                var hikeLength = timeHike / 12;
                var hikeURL = `https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&maxDistance=${userDistance}&key=200992005-36cef2b40b13fda0780742aba62d29e7`;

                // this request gets the hiking trails
                $.ajax({
                    url: hikeURL,
                    method: "GET"
                }).then(function (response) {
                    console.log("zipCode3");

                    // looping through api to gather relevant data.
                    for (var i = 0; i < response.trails.length; i++) {
                        // looping through api to gather relevant data.
                        if (response.trails[i].length < hikeLength) {
                            $("#trailName" + i).prepend("Trail Name: " + response.trails[i].name + "<br>")
                            $("#length" + i).append("Trail Length: " + response.trails[i].length + "<br>");
                            $("#difficulty" + i).append("Difficulty: " + response.trails[i].difficulty + "<br><br>")
                            var myObj = {}
                            myObj.lat = response.trails[i].latitude
                            myObj.long = response.trails[i].longitude
                            trailLocation.push(myObj);

                        }
                    }   
                    console.log(trailLocation);
                    initMap(lat, lon);

                });
            })
        })

    }

    // function that takes in parameter if the user doesn't want to share location
    function noGps(e) {
        e.preventDefault();
        console.log("no gps");

        // we are getting the value of the city from the user.
        var city = $("#city").val();

        var latLonURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}`;

        // hiding previous div and show the next
        $("#userCity").addClass("hidden");
        $("#hikingParameters").removeClass("hidden");

        // first ajax to get the city's lat and lon
        $(document).on("click", "#parameters", function (e) {
            console.log("no gps1")
            e.preventDefault();

            // setting values to variables to get lat and lon
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
                console.log("no gps2")

                // setting the all variables to get hiking trails
                var lon = JSON.stringify(res.coord.lon);
                var lat = JSON.stringify(res.coord.lat);
                var hikeLength = timeHike / 12;
                var hikeURL = `https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&maxDistance=${userDistance}&key=200992005-36cef2b40b13fda0780742aba62d29e7`;

                // gets all the trails from the hiking api
                $.ajax({
                    url: hikeURL,
                    method: "GET"
                }).then(function (response) {
                    console.log("no gps3");
                    for (var i = 0; i < response.trails.length; i++) {

                        // looping through api to gather relevant data.
                        if (response.trails[i].length < hikeLength) {
                            $("#trailName" + i).prepend("Trail Name: " + response.trails[i].name + "<br>")
                            $("#length" + i).append("Trail Length: " + response.trails[i].length + "<br>");
                            $("#difficulty" + i).append("Difficulty: " + response.trails[i].difficulty + "<br><br>")
                            var myObj = {}
                            myObj.lat = response.trails[i].latitude
                            myObj.long = response.trails[i].longitude
                            trailLocation.push(myObj)
                        }
                    }
                    console.log(trailLocation);
                    initMap(lat, lon);

                });
            })
        })
    }


    function initMap(lati, long) {
        L.mapquest.key = 'cm7WzOvDimLpim8JOVFjDAfuIwV2e5h4';

        // 'map' refers to a <div> element with the ID map
        map = L.mapquest.map('map', {
            center: [lati, long],
            layers: L.mapquest.tileLayer('map'),
            zoom: 12,
        });
        setmarkers(trailLocation);
    }

    function setmarkers(array) {
        console.log("trailLocation", trailLocation);
        console.log("argument:", array)
        for (var i = 0; i < array.length; i++) {
            L.marker([array[i].lat, array[i].long], {
                icon: L.mapquest.icons.marker(),
                draggable: false
            }).addTo(map);
        }
    }

    // This get all trail data and pushes it to the dom.
    function trailList(resp) {
        for (var i = 0; i < resp.trails.length; i++) {
            // looping through api to gather relevant data.
            
            if (resp.trails[i].length < hikeLength) {
                $("#trailName" + i).prepend("Trail Name: " + resp.trails[i].name + "<br>")
                $("#length" + i).append("Trail Length: " + resp.trails[i].length + "<br>");
                $("#difficulty" + i).append("Difficulty: " + resp.trails[i].difficulty + "<br><br>")
                var myObj = {}
                myObj.lat = response.trails[i].latitude
                myObj.long = response.trails[i].longitude
                trailLocation.push(myObj)
            }
        }
    }

    // this function will get lat and long to put together a hiking URL
    function getLocal() {
        var lon = JSON.stringify(res.coord.lon);
        var lat = JSON.stringify(res.coord.lat);
        var hikeLength = timeHike / 12;
        var hikeURL = `https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&maxDistance=${userDistance}&key=200992005-36cef2b40b13fda0780742aba62d29e7`;
    }

    // setting button clicks to specific functions
    $("#no-gps").on("click", noGps);
    $("#gps").on("click", gps);
    $("#zipCode").on("click", zipCode);

})
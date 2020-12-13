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

    // uses the geolocation built in func to get lat and long coordinates
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

        // Grab coordinates from the given object
        lat = position.coords.latitude;
        lon = position.coords.longitude;

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
        getLocation();

        // hiding previous div and show the next
        $("#userCity").addClass("hidden");
        $("#hikingParameters").removeClass("hidden");

        $(document).on("click", "#parameters", function (e) {
            e.preventDefault();

            // setting value to variables
            timeHike = $(".lengthTime").val();
            userDistance = $("#radius").val();
            
            // hiding previous div and show the next
            $("#hikingParameters").addClass("hidden");
            $("#userTrails").removeClass("hidden");

            var hikeURL = `https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&maxDistance=${userDistance}&key=200992005-36cef2b40b13fda0780742aba62d29e7`;

            // ajax call to create the map and trails
            
            createMapTrails(hikeURL);
        });
    }

    // another user input function takes in zip code.
    function zipCode(e) {
        e.preventDefault();

        // user input
        var zip = $("#zip").val();
        
        // making a url with user input
        var zipURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${weatherKey}`;
        // getting together all map, markers, and trail data to append to dom.
        getLocal(zipURL)

    }

    // function that takes in parameter if the user doesn't want to share location
    function noGps(e) {
        e.preventDefault();

        // we are getting the value of the city from the user.
        var city = $("#city").val();
        
        // Making a url with user input
        var latLonURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}`;
        // getting together all map, markers, and trail data to append to dom.
        getLocal(latLonURL);
    }


    // creates the map and calls the marker function
    function initMap(lati, long) {
        // the key for access to mapquest api
        L.mapquest.key = 'cm7WzOvDimLpim8JOVFjDAfuIwV2e5h4';

        // 'map' refers to a <div> element with the ID map
        map = L.mapquest.map('map', {
            center: [lati, long],
            layers: L.mapquest.tileLayer('map'),
            zoom: 12,
        });
        setmarkers(trailLocation);
        
    }

    // set all marker locations.
    function setmarkers(array) {
        // loops through the array to set markers
        for (var i = 0; i < array.length - 1; i++) {
            L.marker([array[i].lat, array[i].long], {
                icon: L.mapquest.icons.marker(),
                draggable: false
            }).addTo(map);
        }
    }
    
    // This get all trail data and pushes it to the dom.
    function trailList(resp) {
        var hikeLength = timeHike / 12;
        for (var i = 0; i < resp.trails.length; i++) {
            // looping through api to gather relevant data.

            if (resp.trails[i].length < hikeLength) {
                $("#trailName" + i).prepend("Trail Name: " + resp.trails[i].name + "<br>")
                $("#length" + i).append("Trail Length: " + resp.trails[i].length + "<br>");
                $("#difficulty" + i).append("Difficulty: " + resp.trails[i].difficulty + "<br><br>")
                var myObj = {}
                myObj.lat = resp.trails[i].latitude
                myObj.long = resp.trails[i].longitude
                trailLocation.push(myObj)
            }
        }
    }

    // this function will get lat and long to put together a hiking URL
    function getLocal(URL) {
        // hiding previous div and show the next
        $("#userCity").addClass("hidden");
        $("#hikingParameters").removeClass("hidden");

        // first ajax to get the city's lat and lon
        $(document).on("click", "#parameters", function (e) {

            e.preventDefault();

            // setting values to variables to get lat and lon
            timeHike = $(".lengthTime").val();
            userDistance = $("#radius").val();

            // hiding previous div and show the next
            $("#hikingParameters").addClass("hidden");
            $("#userTrails").removeClass("hidden");

            // ajax request to get api data
            $.ajax({
                url: URL,
                method: "GET"
            }).then(function (res) {

                console.log(res)

                // setting the all variables to get hiking trails
                var lon = JSON.stringify(res.coord.lon);
                var lat = JSON.stringify(res.coord.lat);
                // url to get hiking api
                var hikeURL = `https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&maxDistance=${userDistance}&key=200992005-36cef2b40b13fda0780742aba62d29e7`;
                createMapTrails(hikeURL);

            })
        })
    }

    // this function uses the hike url to create our map and trail list
    function createMapTrails(hikeURL) {


        // gets all the trails from the hiking api
        $.ajax({
            url: hikeURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            // looping through api to gather relevant data.
            trailList(response);
            // makes map and creates markers
            initMap(lat, lon);

        });
    }

    // setting button clicks to specific functions
    $("#no-gps").on("click", noGps);
    $("#gps").on("click", gps);
    $("#zipCode").on("click", zipCode);

})
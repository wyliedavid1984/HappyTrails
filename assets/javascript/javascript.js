$(document).ready(function () {

    // all global variables
    var userDistance;
    var timeHike;
    var lat;
    var lon;
    var map;
    var trailLocation = [];
    // var weatherKey = "34af04e7087783be92496c2a33100782";
    var weatherKey = "43150bac67a6b6bc9ffc3d398fb24e60";

    // setting button clicks to specific functions
    $("#gps").on("click", gps);

    // this is for if the user doesn't enter anything in the fields.
    $("#zipCode").on("click", function (event) {
        event.preventDefault();

        if ($("#zip").val() === "") {

            // show error div and then reload the screen
            $("#userCity").addClass("hidden");
            $("#error").removeClass("hidden");
            setTimeout(function () {
                location.reload();
            }, 1000);
        } else {

            // hiding previous div and show the next
            $("#userCity").addClass("hidden");
            $("#hikingParameters").removeClass("hidden");
            zipCode();

        }
    });

    // this is for if the user doesn't enter anything in the fields.
    $("#no-gps").on("click", function (event) {
        event.preventDefault();
        if ($("#city").val() === "") {

            // show error div and then reload the screen
            $("#userCity").addClass("hidden");
            $("#error").removeClass("hidden");
            setTimeout(function () {
                location.reload();
            }, 1000);
        } else {

            // hiding previous div and show the next
            $("#userCity").addClass("hidden");
            $("#hikingParameters").removeClass("hidden");
            noGps();
        }
    });

    // uses the geolocation built in func to get lat and long coordinates
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

            createMapTrails(hikeURL, lat, lon);
        });
    }


    // another user input function takes in zip code.
    function zipCode() {

        // user input
        var zip = $("#zip").val();

        // making a url with user input
        var zipURL = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${weatherKey}`;
        // getting together all map, markers, and trail data to append to dom.
        getLocal(zipURL)

    }


    // function that takes in parameter if the user doesn't want to share location
    function noGps() {

        // we are getting the value of the city from the user.
        var city = $("#city").val();

        // Making a url with user input
        var latLonURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}`;

        // getting together all map, markers, and trail data to append to dom.
        getLocal(latLonURL);
    }


    // this function will get lat and long to put together a hiking URL
    function getLocal(URL) {
        
        // first ajax to get the city's lat and lon
        $("#parameters").on("click", function (e) {

            e.preventDefault();
            if (!$(".lengthTime").is(":checked") || $("#radius").val() === "") {
                $("#hikingParameters").addClass("hidden");
                $("#error2").removeClass("hidden");
                setTimeout(function () {
                    $("#hikingParameters").removeClass("hidden");
                    $("#error2").addClass("hidden");
                }, 1000);
            } else {

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

                    // setting the all variables to get hiking trails
                    var lon = JSON.stringify(res.coord.lon);
                    var lat = JSON.stringify(res.coord.lat);

                    // url to get hiking api
                    var hikeURL = `https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&maxDistance=${userDistance}&key=200992005-36cef2b40b13fda0780742aba62d29e7`;

                    createMapTrails(hikeURL, lat, lon);

                })
            }
        })
    }


    // this function uses the hike url to create our map and trail list
    function createMapTrails(hikeURL, lat, lon) {

        // gets all the trails from the hiking api
        $.ajax({
            url: hikeURL,
            method: "GET"
        }).then(function (response) {
            
            // looping through api to gather relevant data.
            trailList(response);
            // makes map and creates markers
            console.log(lat + " and " + lon)
            initMap(lat, lon);

        });
    }


    // This get all trail data and pushes it to the dom.
    function trailList(resp) {
        var hikeLength = timeHike / 12;
        var counter = 0;
        for (var i = 0; i < resp.trails.length; i++) {

            // looping through api to gather relevant data.
            if (resp.trails[i].length < hikeLength && counter < 5) {
                $("#trailName" + counter).prepend(resp.trails[i].name + "<br>");
                console.log(resp.trails[i].url);
                $("#link"+counter).attr({href: `${resp.trails[i].url}`, target:"_blank"});
                $("#length" + counter).append("Length: " + resp.trails[i].length + "<br>");
                $("#difficulty" + counter).append("Difficulty: " + resp.trails[i].difficulty + "<br><br>");
                $("#trail"+counter).removeClass("hidden")
                var myObj = {};
                myObj.lat = resp.trails[i].latitude;
                myObj.long = resp.trails[i].longitude;
                myObj.name = resp.trails[i].name;
                trailLocation.push(myObj);
                counter++;
            }
        }
    }


    // creates the map and calls the marker function
    function initMap(lati, long) {

        // the key for access to mapquest api
        L.mapquest.key = 'cm7WzOvDimLpim8JOVFjDAfuIwV2e5h4';
        var userRad = userDistance * 1609;

        // 'map' refers to a <div> element with the ID map and displays it there
        map = L.mapquest.map('map', {
            center: [lati, long],
            layers: L.mapquest.tileLayer('map'),
            zoom: 12
        });

        // adding in a circle to specific radius for user to view
        L.circle([lati, long], {
            radius: userRad
        }).addTo(map)
        setmarkers(trailLocation);


    }


    // set all marker locations.
    function setmarkers(array) {
        // loops through the array to set markers
        for (var i = 0; i < array.length; i++) {
            L.mapquest.textMarker([array[i].lat, array[i].long], {
                // title for only hover effect
                text: array[i].name,
                position: "right",
                icon: {
                    primaryColor: "#333333",
                    secondaryColor: "#111111",
                    size: "md"
                },
                draggable: false
            }).addTo(map);
        }
    }



})
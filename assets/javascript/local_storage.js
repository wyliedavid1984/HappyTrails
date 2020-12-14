$(document).ready(function () {
    console.log("ready!");
  
  
  //Setting up the functions to save favorite trails to local storage 
    $("#faveHike0").on("click", function () {
      console.log("I'M A WORKING BUTTON!", $("#trailName0").text().trim());
      var value1 = $("#trailName0").text().trim();
      //save values to localstorage
      allFavorites.push(value1);
    //   localStorage.setItem("trail1", value1);
    localStorage.setItem("savedTrails", JSON.stringify(allFavorites));
    });
  
    $("#faveHike1").on("click", function () {
      console.log("I'M A WORKING BUTTON!", $(this).siblings("h1").html());
      var value2 = $(this).siblings("h1").html();
      allFavorites.push(value2);
    //   localStorage.setItem("trail2", value2);
    localStorage.setItem("savedTrails", JSON.stringify(allFavorites));
    });
  
    $("#faveHike2").on("click", function () {
      console.log("I'M A WORKING BUTTON!", $(this).siblings("h1").html());
      var value3 = $(this).siblings("h1").html();
      allFavorites.push(value3);
    //   localStorage.setItem("trail3", value3);
    localStorage.setItem("savedTrails", JSON.stringify(allFavorites));
    });
  
    $("#faveHike3").on("click", function () {
      console.log("I'M A WORKING BUTTON!", $(this).siblings("h1").html());
      var value4 = $(this).siblings("h1").html();
      allFavorites.push(value4);
    //   localStorage.setItem("trail4", value4);
    localStorage.setItem("savedTrails", JSON.stringify(allFavorites));

    
    });

    //Storing the array of user favorite hikes. 
    var allFavorites = [];
        console.log(allFavorites) 

//Set up a function to list the user's favorite hikes that are in localStorage
     
        //Convert the string into a JSON object
        // allFavorites = JSON.parse(localStorage.getItem("savedTrails"));

        //If savedTrails doesn't exist in localstorage,
        // allFavorites will be null. If allFavorites is null, allFavorites.length will throw an error. 
        //set up an if statement so if allFavorties = null, initialize allFavorites anyway.
        // if (allFavorites == null) {
        // allFavorites = [];
        // }
        // console.log(allFavorites);

         //Set up a loop through the array of trails
        //  for (var i = 0; i < allFavorites.length; i++) {
            // var trailsToDisplay = allFavorites[i];
            // Call each of them individually and then display in the list.
            // show every name we have in local storage
            // var List = $("<div>").text(trailsToDisplay)
        
    // }

                $("#savedFavorites").on('click' , function() {
                  $("#favoritesList").append(allFavorites);
                  console.log(allFavorites);
                 
                
        });
               


    // //Create function to get the user favorites
    // function GetInput(event) {
    //     event.preventDefault();
    //     //store user's input in variable
    //     var userCity = $(".SearchCity").val(); 
    //     //Create the array of cities
    //     Cities.push(userCity);
    //     //Make a string from the cities in the Cities Array
    //     localStorage.setItem("CitiesNames", JSON.stringify(Cities));



  
    // function getLocalStorage() {
    //         myFavorites.addEventListener('click', (myFavorites) => {
    //             console.log(localStorage.getItem('favehike1'))
    //           })
    //       }

    //  create an empty array to store the user's input (favorite hikes)

    //  var allFavorites = [value1, value2, value3, value4];
    //  console.log(allFavorites);


//     values = [];

// function addRecord() {
//   var inp = $("#inputtext");
//   values.push(inp.value);
//   inp.value = "";  
// }

// function displayRecord() {
//   document.getElementById("values").innerHTML = values.join(", ");
// }

// {/* <table>
    //         <tr>
    //             <td>Enter the Input</td>
    //             <td><input type="text" id="inputtext" /></td>
    //         </tr>
    //         <tr>
    //             <td></td>
    //             <td><button type="button" id="add" onclick="addRecord();">Add </button>
    //             <button type="button" id="display" onclick="displayRecord();">Display</button>
    //             </td>
    //         </tr>
    // </table>

//    <div id='values'></div> */}



    // $("#trailName1 .input-group .form-control").val(
    //   localStorage.getItem("value1")
    // );
    // $("#trailName2 .input-group .form-control").val(
    //   localStorage.getItem("value2")
    // );
    // $("#trailName3 .input-group .form-control").val(
    //   localStorage.getItem("value3")
    // );
    // $("#trailName4 .input-group .form-control").val(
    //   localStorage.getItem("value4")
    // );
   
    // getLocalStorage();
    // on("click");

  }); //Closing the ready function
  

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
      console.log("I'M A WORKING BUTTON!", $("#trailName1").text().trim());
      var value2 = $("#trailName1").text().trim();
      allFavorites.push(value2);
    //   localStorage.setItem("trail2", value2);
    localStorage.setItem("savedTrails", JSON.stringify(allFavorites));
    });
  
    $("#faveHike2").on("click", function () {
      console.log("I'M A WORKING BUTTON!", $("#trailName2").text().trim());
      var value3 = $("#trailName2").text().trim();
      allFavorites.push(value3);
    //   localStorage.setItem("trail3", value3);
    localStorage.setItem("savedTrails", JSON.stringify(allFavorites));
    });
  
    $("#faveHike3").on("click", function () {
      console.log("I'M A WORKING BUTTON!", $("#trailName3").html());
      var value4 = $("#trailName3").html();
      allFavorites.push(value4);
    //   localStorage.setItem("trail4", value4);
    localStorage.setItem("savedTrails", JSON.stringify(allFavorites));
    });
    
    $("#faveHike4").on("click", function () {
      console.log("I'M A WORKING BUTTON!", $("#trailName3").text().trim());
      var value4 = $("#trailName3").text().trim();
      allFavorites.push(value4);
    //   localStorage.setItem("trail4", value4);
    localStorage.setItem("savedTrails", JSON.stringify(allFavorites));
    });

    //Storing the array of user favorite hikes. 
    var allFavorites = [];
        console.log(allFavorites) 

//Set up a function to list the user's favorite hikes that are in localStorage
     
        //Convert the string into a JSON object
        allFavorites = JSON.parse(localStorage.getItem("savedTrails"));

        //If savedTrails doesn't exist in localstorage,
        // allFavorites will be null. If allFavorites is null, allFavorites.length will throw an error. 
        //set up an if statement so if allFavorties = null, initialize allFavorites anyway.
        if (allFavorites == null) {
        allFavorites = [];
        }
        console.log(allFavorites);

         //Set up a loop through the array of trails
        //  for (var i = 0; i < 5.length; i++) {
            // var trailsToDisplay = allFavorites[i];
            // Call each of them individually and then display in the list.
            // show every name we have in local storage
            // var List = $("<div>").text(trailsToDisplay)
        
    // }

                $("#myFavorites").on('click' , function() {
                  $("#favoritesList").append(allFavorites);
                  console.log(allFavorites);
                 
                
        });
               

  
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

    
  }); //Closing the ready function
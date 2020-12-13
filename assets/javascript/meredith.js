$(document).ready(function () {
        console.log("ready!");
      
        //Storing the array of user favorite hikes. 
        var allFavorites = [];
      
      //Setting up the functions to save favorite trails to local storage 
        $("#faveHike1").on("click", function () {
          console.log("I'M A WORKING BUTTON!", $(this).siblings("h1").html());
          var value1 = $(this).siblings("h1").html();
          //save values to localstorage
          allFavorites.push(value1);
        //   localStorage.setItem("trail1", value1);
        localStorage.setItem("savedTrails", JSON.stringify(allFavorites));
        });
      
        $("#faveHike2").on("click", function () {
          console.log("I'M A WORKING BUTTON!", $(this).siblings("h1").html());
          var value2 = $(this).siblings("h1").html();
          allFavorites.push(value2);
        //   localStorage.setItem("trail2", value2);
        localStorage.setItem("savedTrails", JSON.stringify(allFavorites));
        });
      
        $("#faveHike3").on("click", function () {
          console.log("I'M A WORKING BUTTON!", $(this).siblings("h1").html());
          var value3 = $(this).siblings("h1").html();
          allFavorites.push(value3);
        //   localStorage.setItem("trail3", value3);
        localStorage.setItem("savedTrails", JSON.stringify(allFavorites));
        });
      
        $("#faveHike4").on("click", function () {
          console.log("I'M A WORKING BUTTON!", $(this).siblings("h1").html());
          var value4 = $(this).siblings("h1").html();
          allFavorites.push(value4);
        //   localStorage.setItem("trail4", value4);
        localStorage.setItem("savedTrails", JSON.stringify(allFavorites));
    
        
        });
    
        //Storing the array of user favorite hikes. 
        var allFavorites = [];
            console.log(allFavorites) 

      }); //Closing the ready function
      
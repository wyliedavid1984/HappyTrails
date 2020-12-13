
$(document).ready(function () {
   
      
  //Setting up the functions to save favorite trails to local storage 
    $("#faveHike1").on("click", function () {
      console.log($(this).siblings("trailName0").html());
      var value1 = $(this).siblings("trailName0").html();
      //save values to localstorage
      allFavorites.push(value1);
    });
  
    $("#faveHike2").on("click", function () {
      var value2 = $(this).siblings("trailName1").html();
      allFavorites.push(value2);
  
    });
  
    $("#faveHike3").on("click", function () {
      var value3 = $(this).siblings("trailName2").html();
      allFavorites.push(value3);
    });
  
    $("#faveHike4").on("click", function () {
      var value4 = $(this).siblings("trailName3").html();
      allFavorites.push(value4);
  
    
    });


    //Storing the array of user favorite hikes. 
    var allFavorites = [];


                $("#myFavorites").on('click' , function() {
                  $("#favoritesList").append(allFavorites);
                  console.log(allFavorites)
              
                 
                
        });
               

  }); //Closing the ready function
  
      
    
      
    
      
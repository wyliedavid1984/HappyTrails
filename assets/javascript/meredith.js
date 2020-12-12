

$( document ).ready(function() {
    console.log( "ready!" );
});


 //create an empty array to store the user's input (favorite hikes)
 var allFavorites = []; 

$("#faveHike1").on("click", function (){
    console.log("I'M A WORKING BUTTON!", $(this).siblings("h1").html());
    var value1 = $(this).parent.val();

$("#faveHike2").on("click", function (){
        console.log("I'M A WORKING BUTTON!", $(this).siblings("h1").html());
        var value2 = $(this).parent.val();

$("#faveHike3").on("click", function (){
        console.log("I'M A WORKING BUTTON!", $(this).siblings("h1").html());
        var value3 = $(this).parent.val();

$("#faveHike4").on("click", function (){
        console.log("I'M A WORKING BUTTON!", $(this).siblings("h1").html());
        var value4 = $(this).parent.val();

$("#faveHike5").on("click", function (){
        console.log("I'M A WORKING BUTTON!", $(this).siblings("h1").html());
        var value5 = $(this).parent.val();
    
    //save to localstorage
    localStorage.setItem(value1);
    localStorage.setItem(value2);
    localStorage.setItem(value3);
    localStorage.setItem(value4);
    localStorage.setItem(value5);

})

$("#9 .input-group .form-control").val(localStorage.getItem("9"));
$("#10 .input-group .form-control").val(localStorage.getItem("10"));
$("#11 .input-group .form-control").val(localStorage.getItem("11"));
$("#12 .input-group .form-control").val(localStorage.getItem("12"));
$("#13 .input-group .form-control").val(localStorage.getItem("13"));
$("#14 .input-group .form-control").val(localStorage.getItem("14"));
$("#15 .input-group .form-control").val(localStorage.getItem("15"));
$("#16 .input-group .form-control").val(localStorage.getItem("16"));
$("#17 .input-group .form-control").val(localStorage.getItem("17"));

 //Call the function so that when the user clicks the "favorite" heart icon next to 
 //a hike they would like to save, the name of the hike will be saved. 
//  $(".favoriteBtn").click (saveHike) (function());
//  {
//     console.log("working button");
//     var favorite = $(this).parent.val();
//     console.log (favorite);

//  }

// var button1= faveHike1
// var button2= faveHike2
// var button3= faveHike3
// var button4= faveHike4
// var button5= faveHike5

//  $("#faveHike1").click(function() {
//     console.log ($(this).parent("first").html);

//  })

// $('.faveHike2').click(function() {
//     console.log('clicked2');
//     $(this).parent.val();
// })

// $('.faveHike3').click(function() {
//         console.log('clicked3');
//         $(this).parent.val();
// })

// $('.faveHike4').click(function() {
//         console.log('clicked4');
//         $(this).parent.val();
// })

// $('.faveHike5').click(function() {
//          console.log('clicked5');
//         $(this).parent.val();
// });
 

 

//  allFavorites.push (hike);

//     //does it make more sense to use .sibling rather than .parent in the line below?
//     var favorite = $(this).parent.val();

//  //Create function to get the user input-(button press to save a favorite hike)
//  function GetInput(event) {
//     event.preventDefault();
//  }



//     //store user's input from favorite button in a variable
//     var savedHike = $(".favoriteBtn").val(); 
//     //Create the array of user's favorite hikes
//     allFavorites.push(savedHike);
//     //Create a string from the hikes in the allFavorites array and send it to local storage. 
//     localStorage.setItem("hikeNames", JSON.stringify(allFavorites));
//     let val= localStorage.getItem("hikeNames");
//     console.log(val);


//   // Setting up a loop through the array of favorite hikes
//   for (var i=0; i < allFavorites.length; i++) {
    
//     //Store the hike names in a variable
//     var hikesSaved = allFavorites[i];
    
//     // Call each hike name individually and then display in the list
//     var hikeList = document.createElement("li");
//     List.textContent = hikesSaved;
//     favoriteHikeListEL.appendChild(List);



// // //Create function to store user's input (name)
// // function storeUsers(event) {
// //     event.preventDefault();
// //     //store user's input in variable
// //     var userSaved = recordUserEl.value;
// //     // Create Array of Users
// //     Users.push(userSaved);
// //     Results.push(score);
// //     Time.push(CompletionTime);
// //     //Make a string from the Users in the Array
// //     localStorage.setItem("username", JSON.stringify(Users));
// //     localStorage.setItem("results", JSON.stringify(Results));
// //     localStorage.setItem("finaltime", JSON.stringify(Time));
  



//  //Setting up the on click method for "favorite" button to target
// //user inputs for local storage.

// $(".myFavorites").on("click", function (){
//     console.log("working button",
//     $()
// })


// $(".favoriteBtn").on("click", function (){
//     console.log("working button")
//     var faveHikes = $(this).parent.val();
 
   

//     //use JSON to make a string from the user's favorite hikes
//     localStorage.setItem("valueOne", JSON.stringify(faveHikes));


//     //save to localstorage
//     localStorage.setItem(valueOne);

//     //Create the array of favorite trails
//     .push();


//    //Loop through the array of favorite hikes 
//    for (var i = 0; i < Cities.length; i++) {
//     var CitiesToDisplay = Cities[i];
// })


// // Retrieve from local storage 
// //need an onlclick event for "favoriteBtn"
// document $(".faveHike1").innerHTML = localStorage.getItem(valueOne);



// });//Closing the ready function 
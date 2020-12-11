$(document).ready(function () {

 //create a variable to store favorite hikes
 var valueOne =  $[].val();  
//  Set equal to an empty array


 //Setting up the on click method for "favorite" button to target
//user inputs for local storage.

$(".myFavorites").on("click", function (){
    console.log("working button",
    $()
})


$(".favoriteBtn").on("click", function (){
    console.log("working button")
    var faveHikes = $(this).parent.val();
 
   

    //use JSON to make a string from the user's favorite hikes
    localStorage.setItem("valueOne", JSON.stringify(faveHikes));


    //save to localstorage
    localStorage.setItem(valueOne);

    //Create the array of favorite trails
    .push();


    var scoretext = document.createElement("p");
    scoretext.innerText =" " + "Name: " + " "  + highscoreInput.value + " " + "Score: " + score + " ";
})


// Retrieve from local storage 
//need an onlclick event for "favoriteBtn"
document $(".faveHike1").innerHTML = localStorage.getItem(valueOne);




}//Closing the ready function 
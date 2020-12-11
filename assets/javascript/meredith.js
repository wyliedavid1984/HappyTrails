$(document).ready(function () {

//Setting up the on click method for "favorite" button to target
//user inputs for local storage.


$(".favoriteBtn").on("click", function (){
    console.log("working button",
    $(this)
    // .parent().parent().attr("id"));

    var value =  $(this)("input").val();

    //save to localstorage
    localStorage.setItem(value);
})


}//Closing the ready function 
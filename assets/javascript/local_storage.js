$(document).ready(function () {
  console.log("ready!");

  //Set up a function to list the user's favorite hikes that are in localStorage

  var allFavorites = JSON.parse(localStorage.getItem("savedTrails"))

  console.log(allFavorites);

 if(allFavorites === null){
   allFavorites = [];
 }
  //Convert the string into a JSON object


  $("#myFavorites").on("click", function () {
    if (allFavorites == null) {
      allFavorites = [];
    } else {
      $(".favsModal").css("display", "block");
      for (var i = 0; i < allFavorites.length; i++) {
        $("<p>").text(allFavorites[i].trail).appendTo(".modal-content");
        $("<a>").text("Click here to view your trail").attr("href", allFavorites[i].url).appendTo(".modal-content");
      }
    }
    $(".favsModal").css("display", "block");
    // $(".modal-content").append(allFavorites.text());

    // $("<p>").text(allFavorites).appendTo(".modal-content");
    // console.log(allFavorites);
  });

  //Setting up the functions to save favorite trails to local storage
  $("#faveHike0").on("click", function () {
    var value1 = {
      trail: $("#trailName0").text().trim(),
      url: $("#link0").attr("href")
    }
    console.log(value1);
    //save values to localstorage
    allFavorites.push(value1);
    //   localStorage.setItem("trail1", value1);
    localStorage.setItem("savedTrails", JSON.stringify(value1));
  });

  $("#faveHike1").on("click", function () {
    var value2 = {
      trail: $("#trailName1").text().trim(),
      url: $("#link1").attr("href")
    }
    allFavorites.push(value2);
    //   localStorage.setItem("trail2", value2);
    localStorage.setItem("savedTrails", JSON.stringify(value2));
  });

  $("#faveHike2").on("click", function () {
    var value3 = {
      trail: $("#trailName2").text().trim(),
      url: $("#link2").attr("href")
    }
    allFavorites.push(value3);
    //   localStorage.setItem("trail3", value3);
    localStorage.setItem("savedTrails", JSON.stringify(value3));
  });

  $("#faveHike3").on("click", function () {
    var value4 = {
      trail: $("#trailName3").text().trim(),
      url: $("#link3").attr("href")
    }
    allFavorites.push(value4);
    //   localStorage.setItem("trail4", value4);
    localStorage.setItem("savedTrails", JSON.stringify(value4));
  });

  $("#faveHike4").on("click", function () {
    var value5 = {
      trail: $("#trailName4").text().trim(),
      url: $("#link4").attr("href")
    }
    allFavorites.push(value5);
    //   localStorage.setItem("trail4", value4);
    localStorage.setItem("savedTrails", JSON.stringify(value5));
    console.log(allFavorites);
  });

  //Set up a function to list the user's favorite hikes that are in localStorage

  //Convert the string into a JSON object
  allFavorites = JSON.parse(localStorage.getItem("savedTrails"));

  //If savedTrails doesn't exist in localstorage,
  // allFavorites will be null. If allFavorites is null, allFavorites.length will throw an error.
  //set up an if statement so if allFavorties = null, initialize allFavorites anyway.
  // if (allFavorites == null) {
  //   allFavorites = [];
  // } else {
  //   for (var i = 0; i < allFavorites.length; i++) {}
  // }


  console.log(allFavorites);


  // When the user clicks on <span> (x), close the modal
  $(".close").on("click", function () {
    $(".favsModal").css("display", "none");
  })
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == $(".favsModal")) {
      $(".favsModal").css("display", "none");
    }
  }


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
}); //Closing the ready function
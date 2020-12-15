$(document).ready(function () {


  //  setting global variable
  var allFavorites = [];

// adding functionality to favorite button
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
  });

  //Setting up the functions to save favorite trails to local storage
  $("#faveHike0").on("click", function () {
    var value1 = {
      trail: $("#trailName0").text().trim(),
      url: $("#link0").attr("href")
    }
    //save values to localstorage
    allFavorites.push(value1);
    //   localStorage.setItem("trail1", value1);
    localStorage.setItem("savedTrails", JSON.stringify(allFavorites));
  });

  $("#faveHike1").on("click", function () {
    var value2 = {
      trail: $("#trailName1").text().trim(),
      url: $("#link1").attr("href")
    }
    allFavorites.push(value2);
    //   localStorage.setItem("trail2", value2);
    localStorage.setItem("savedTrails", JSON.stringify(allFavorites));
  });

  $("#faveHike2").on("click", function () {
    var value3 = {
      trail: $("#trailName2").text().trim(),
      url: $("#link2").attr("href")
    }
    allFavorites.push(value3);
    //   localStorage.setItem("trail3", value3);
    localStorage.setItem("savedTrails", JSON.stringify(allFavorites));
  });

  $("#faveHike3").on("click", function () {
    var value4 = {
      trail: $("#trailName3").text().trim(),
      url: $("#link3").attr("href")
    }
    allFavorites.push(value4);
    //   localStorage.setItem("trail4", value4);
    localStorage.setItem("savedTrails", JSON.stringify(allFavorites));
  });

  $("#faveHike4").on("click", function () {
    var value4 = {
      trail: $("#trailName4").text().trim(),
      url: $("#link4").attr("href")
    }
    allFavorites.push(value4);
    //   localStorage.setItem("trail4", value4);
    localStorage.setItem("savedTrails", JSON.stringify(allFavorites));
    console.log(allFavorites);
  });

  //Set up a function to list the user's favorite hikes that are in localStorage
  //Convert the string into a JSON object
  allFavorites = JSON.parse(localStorage.getItem("savedTrails"));

  if (allFavorites === null) {
    allFavorites = [];
  }

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


}); //Closing the ready function
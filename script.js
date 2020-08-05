window.onload = function () {
  var query;

  // ajax call to retrieve data from API
  function getData() {
    var queryURL = `http://www.omdbapi.com/?t=${query}&apikey=4d0263a7`;
    $.ajax({
      url: queryURL,
      method: "get",
    }).then(function (response) {
      console.log(response);
      displayTitle(response.Title);
      displayData("Year: ", response.Year);
      displayData("Rated: ", response.Rated);
      displayData("Released: ", response.Released);
      displayData("Runtime: ", response.Runtime);
      displayData("Actors: ", response.Actors);
      displayData("Plot: ", response.Plot);
      displayData("Rating: ", response.imdbRating);
      posterImage(response.Poster);
    });
  }

  // Search button event handler
  $("#searchButton").click(function () {
    $("#information").html("");
    $("#movieHeader").html("");
    $("#imagePoster").html("");
    query = $("#inputBox").val();
    console.log(query);
    getData();
  });

  // Display Movie Title
  function displayTitle(responseTitle) {
    var newHeader = document.createElement("h1");
    newHeader.className = "movieTitle";
    newHeader.innerHTML = responseTitle;
    $("#movieHeader").append(newHeader);
  }

  // Display Movie Data
  function displayData(name, response) {
    var newli = document.createElement("li");
    newli.className = "list-group-item dataList";
    newli.innerHTML = name + response;
    $("#information").append(newli);
  }

  //Display Poster

  function posterImage(response) {
    var newImg = document.createElement("img");
    newImg.src = response;
    newImg.className = "posterImage";
    $("#imagePoster").append(newImg);
  }
};

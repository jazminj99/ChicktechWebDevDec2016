function createFavorite() {
    // First, we get a list of all elements with class="favorite",
    // and ask the browser put the list in a variable that we can
    // easily reference later on.
    var listOfFavorites = document.getElementsByClassName("favorite");

    var theFirstFavorite = listOfFavorites.item(0);

    // Clone the first favorite - this clone will be the new favorite
    var theNewFavorite = theFirstFavorite.cloneNode(true);

    // Insert our clone onto the page
    document.getElementById("content").appendChild(theNewFavorite);

    console.log(listOfFavorites);

    // To be continued...
      var newFavoriteTitle = document.getElementById("creator-title").value;
    var newFavoriteDescription = document.getElementById("creator-description").value;

    console.log("The title of the new favorite is " + newFavoriteTitle);
    console.log("The description of the new favorite is " + newFavoriteDescription);
    
    var newFavoriteTitle = document.getElementById("creator-title").value;
    var newFavoriteDescription = document.getElementById("creator-description").value;
    var newFavoriteMedia = document.getElementById("creator-media").value;

    theNewFavorite.getElementsByClassName("title")[0].innerHTML = newFavoriteTitle;
    theNewFavorite.getElementsByClassName("description")[0].innerHTML = newFavoriteDescription;
    theNewFavorite.getElementsByClassName("media")[0].innerHTML = newFavoriteMedia;
}
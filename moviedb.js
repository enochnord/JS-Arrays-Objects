// movie database


var movies = [
    // first object in array
    {
        name: "Lion King - ",
        rating: 4.5 + " stars",
        haveWatched: true
    },
    // second object in array     
    {
        name: "Star Wars - ",
        rating: 4 + " stars",
        haveWatched: false

    },
    // third object in array
    {
        name: "Jumanji - ",
        rating: 4.2 + " stars",
        haveWatched: true
    }
]
for(i = 0; i < movies.length; i++) {
    // condition to test for false or object.haveWatched: false
    if(movies[i].haveWatched == false) {
        console.log("You have not watched " + movies[i].name + movies[i].rating)
    } else {
    // printing the objects to the console with object.haveWtached: true
    console.log("You have watched " + movies[i].name + movies[i].rating);
    }  
}  

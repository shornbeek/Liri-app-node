require("dotenv").config();
var axios = require("axios");
var keys = require("./keys.js");
var inquirer = require("inquirer");
var fs = require("fs");

fs.appendFile("random.txt", "Placeholder Text \n",  function(err) {

    // If the code experiences any errors it will log the error to the console.
    if (err) {
      return console.log(err);
    }
  
    // Otherwise, it will print: "movies.txt was updated!"
    // console.log("random.txt was updated!");
  
  });

// var spotify = new Spotify(keys.spotify);


inquirer.prompt([

    {
      type: "input",
      name: "concert",
      message: "What is the name a band you like?"
    },

    {
     type: "input",
     name: "spotify",
     message: "Can you name one of your favorite songs for me?"
    },

    {
     type: "input",
     name: "movie",
     message: "Would you please tell me your favorite movie?"
    },

    {
     type: "input",
     name: "doit",
     message: "Just do what I say?"
    },
  
  // After the prompt, store the user's response in a variable called location.
  ]).then(function(inputs) {



var artist = (inputs.concert);
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
  .then(function(res) {

    console.log("Venue name " + res.data[0].venue.name);
    console.log("City" + res.data[0].venue.city);
    console.log("Time" + res.data[0].datetime);
  });

//   axios.get("https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx?client")
//   .then(function(res) {
//     console.log("Venue name " + res.data[0].venue.name);
//     console.log("City" + res.data[0].venue.city);
//     console.log("Time" + res.data[0].datetime);
//   });

var movie = (inputs.movie);
  axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy").then(
  function(response) {

    if (movie === undefined) {

        console.log("You should watch Brigit Jones Diary");
            // Then we print out the imdbRating
    }
else {
    console.log("Movie Title: " + response.data.Title);
    console.log("Movie Year: " + response.data.Year);
    console.log("IMDB Rating: " + response.data.imdbRating);
    console.log("Rotton TomatoesRating is: " + response.data.Ratings[1].Value);
    console.log("Movies Country: " + response.data.Country);
    console.log("Movies Launguage: " + response.data.Language);
    console.log("Movie Plot: " + response.data.Plot);
    console.log("Actors: " + response.data.Actors);
    }
  }
);
//   console.log(inputs);
});
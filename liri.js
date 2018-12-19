require("dotenv").config();
var axios = require("axios");
var keys = require("./keys.js");
var inquirer = require("inquirer");
var fs = require("fs");

fs.appendFile("random.txt", "Inception, Die Hard \n",  function(err) {

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



var artist = (inputs);
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
  .then(function(response) {

    console.log(response.data);
  });

  axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
  function(response) {
    // Then we print out the imdbRating
    console.log("The movie's rating is: " + response.data.imdbRating);
  }
);




  console.log(inputs);
  });
  
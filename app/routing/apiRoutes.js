var http = require("http")
var fs = require("fs");
var express = require("express");
var path = require("path");
var app = express();

// var PORT = 4000

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// var server = http.createServer(handleRequest);

var friendsArr = require("../data/friends");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    return res.json(friendsArr)
    // console.log(res.json(friendsArr));

    // return res.getFile(path.join(__dirname, "./../data/friends.js")).json(friendsArr);
    //not sure if this is set up correctly, but using 13-express-14-starwarsapp as inspiration. 
    // setting up the empty array of var friends = [] and then referencing it here...
  });

  app.post("/api/friends", function (req, res) {


    console.log("req", req.body);

    function totalDifference(data) {

      var lowScorePerson = {
        name: "",
        photo: "",
        score: 1000
      }

      var person2 = req.body
      var person2Scores = person2.scores
      console.log("p2 Scores:", person2Scores);
      for (let i = 0; i < data.length; i++) {
        var person1 = data[i];
        var person1Scores = data[i].scores;
        console.log("person1G", person1Scores);
        var totalScore = 0

        // console.log("data[i]:",data[i]);
        // console.log("data[i+1] :", data[i+1]);
        // console.log("data[i].scores: ",data[i].scores);
        for (let j = 0; j < person1Scores.length; j++) {
          // console.log("data[i].scores[j]: ",data[i].scores[j]);

          var scoreComp = Math.abs(parseInt(person1Scores[j]) - parseInt(person2Scores[j]))
          console.log("Score Comp:", scoreComp);
          totalScore += scoreComp
        }
        console.log("LSP:",lowScorePerson.score);
        if (lowScorePerson.score > totalScore) {
          lowScorePerson.name = person1.name;
          lowScorePerson.photo = person1.photo;
          lowScorePerson.score = totalScore
        }
        console.log("total score :", totalScore);
        // var lowlowlowScore;
        // console.log("lowest score: ",lowScore);

        // if (totalScore > lowScore) {
        //   console.log("Not lower");

        // } else { lowScorePerson.push(person1Scores)
        //   var lowScore = totalScore
        //   lowlowlowScore.push(lowScore)
        //   console.log("low low score: ", lowScore);
        // console.log("low score person",lowScorePerson)
        // }

        // best friend Object, 
        // if statemetb that compares current total lowest score to the current lowest score.... so if it's lower than its the new best fruedn... will want it to be an array that is an obhect which holds name, picture etc... this will be the RES object
        //function on the .ppost that handles the res data coming in.

      }
      friendsArr.push(person2);
      return res.json(lowScorePerson)

    }
    totalDifference(friendsArr)




    
    // res.sendFile(path.join(__dirname, "/../data/friends.js"));
  });


}


var http = require("http")
var fs = require("fs");
var express = require("express");
var path = require("path");
var app = express();

var PORT = 3001

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var server = http.createServer(handleRequest);
var friends = [];

app.get("/api/friends", function(req, res) {
  return res.getFile(path.join(__dirname, "/../data/friends.js")).json(friends);
  //not sure if this is set up correctly, but using 13-express-14-starwarsapp as inspiration. 
  // setting up the empty array of var friends = [] and then referencing it here...
});

app.post("/api/friends", function(req, res) {
  res.sendFile(path.join(__dirname, "/../data/friends.js"));
});



app.listen(PORT, function(){
  console.log("Server is listening on PORT: " + PORT);
})
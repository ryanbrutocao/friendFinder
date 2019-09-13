
var http = require("http")
var fs = require("fs");
var express = require("express");
var path = require("path");
var app = express();

var PORT = 4000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var server = http.createServer(handleRequest);
module.exports = function(app) {
  
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });
  app.use(function (req, res) {
      res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
    
  }



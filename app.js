// import { returnArticle } from 'articlelist.mjs'
const http = require('http');
const port = process.env.PORT || 3000
const express = require("express");
const bodyParser = require("body-parser");
const favicon = require('express-favicon');
const ejs = require('ejs');

const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(favicon(__dirname + '/favicon.ico'));


app.get("/", function (req, res) {
  res.render("index.ejs");
});


app.get("/submission", function (req, res) {
  res.render("submission.ejs");
});

app.get("/case", function (req, res) {
  let serial = req.query.s;
  let content = req.query.id
  res.render("case.ejs", {serial: serial, content: content});

});


app.get("/tos", function (req, res) {
  res.render("tos.ejs");
});

app.listen(port, () => {
  console.log(`Server running at port ` + port);
});
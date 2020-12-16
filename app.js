const http = require('http');
const port = process.env.PORT || 3000
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render("index.ejs");
});

app.get("/current-issue", function(req, res){
    res.render("current-issue.ejs");
});

app.get("/editorial", function(req, res){
    res.render("editorial.ejs");
});

app.get("/instruction-work", function(req, res){
    res.render("instruction-work.ejs");
});

app.get("/workflow", function(req, res){
    res.render("workflow.ejs");
});

app.listen(port,() => {
    console.log(`Server running at port `+port);
  });

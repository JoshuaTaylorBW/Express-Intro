var express = require('express'),
  app = express();

app.get("/", function (req, res) {
  res.send("hello world");
});

app.listen(3000, function () {
  console.log("starting a server on localhost:3000");
});


// app.get("/hello/:name", function (req, res) {
//   res.send( "Hello, " + req.params.name );
// });

app.get("/add/:num1/:num2", function (req, res) {
  res.send("The answer is: " + (Number(req.params.num1) + Number(req.params.num2)));
});
app.get("/sub/:num1/:num2", function (req, res) {
  res.send("The answer is: " + (Number(req.params.num1) - Number(req.params.num2)));
});
app.get("/mult/:num1/:num2", function (req, res) {
  res.send("The answer is: " + (Number(req.params.num1) * Number(req.params.num2)));
});
app.get("/div/:num1/:num2", function (req, res) {
  res.send("The answer is: " + (Number(req.params.num1) / Number(req.params.num2)));
});

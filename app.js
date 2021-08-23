var express = require("express");
const port = process.env.PORT || 8080;
 
//use the application off of express.
var app = express();

app.use(express.static('public'));
// Specific folder example
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/images'))

//define the route for "/"
app.get("/", function (request, response){
    //show this file when the "/" is requested
    response.sendFile(__dirname+"/views/index.html");
});

app.get("/register", function (request, response){
    response.sendFile(__dirname+"/views/register.html");
});


//start the server
app.listen(8080);

console.log("Something awesome to happen at http://localhost:8080");
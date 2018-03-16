// creating dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

//create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({extended: true}));

// parse various different custom JSON types as JSON
app.use(bodyParser.json({type: 'application/*+json'}))

//parse some custom thing into a buffer
app.use(bodyParser.raw({type: 'application/vnd.custom-type'}))

app.use(bodyParser.text({type: 'text/html'}))

app.listen(PORT, function(){
    console.log("App linstening on PORT: " + PORT)
});

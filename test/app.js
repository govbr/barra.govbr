var express = require("express");

var app = express();


	// read the port from the environment, else set to 3000
	app.set("port", process.env.PORT || 3000);
   app.set('view engine', 'ejs');

app.get('/', function (req, res)
{
    res.render('index');
});

app.get('/barra.js', function (req, res)
{
    res.render('barra');
});

app.get('/jquery.js', function (req, res)
{
    res.render('jquery');
});

// instead of starting the application here, export the app so that it can
// be loaded differently based on the use case (running the app vs testing)
module.exports = app;

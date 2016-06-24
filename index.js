var express          = require("express"),
    app              = express(),
    bodyParser       = require("body-parser"),
    mongoose         = require("mongoose"),
    methodOverride   = require("method-override"),
    expressSanitizer = require("express-sanitizer");
    

//Database configuration
mongoose.connect("mongodb://localhost/screen_reviews");

//Packages setup
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

//Schema Setup
var reviewSchema = new mongoose.Schema({
   type: String,
   title: String,
   rating: Number,
   content: String
});

var Review = mongoose.model("Review", reviewSchema);

/********* ROUTING **********/

//Starting the server
app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Server is running...."); 
});
    
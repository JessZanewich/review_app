var express          = require("express"),
    app              = express(),
    bodyParser       = require("body-parser"),
    mongoose         = require("mongoose"),
    methodOverride   = require("method-override"),
    expressSanitizer = require("express-sanitizer");
    

//Database configuration
mongoose.connect("mongodb://localhost/screen_reviews");

//Packages setup
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

//Schema Setup
var reviewSchema = new mongoose.Schema({
  type: String,
  title: String,
  rating: Number,
  poster: String,
  content: String
});

var Review = mongoose.model("Review", reviewSchema);

/*Review.create({
    type: "movie",
    title: "Wall-E",
    rating: 5.0,
    poster: "http://www.pixartalk.com/wp-content/uploads/2009/06/wallefinal.jpg",
    content: "This movie is beautiful. The amount that is done without words in this film is absolutely stunning. Job well done."
}, function(err, newReview) {
    if(err) {
       console.log(err); 
    } else {
        console.log(newReview);
    }
});*/

/********* ROUTING **********/
app.get("/", function(req, res) {
  res.redirect("/reviews"); 
});

//INDEX ROUTE
app.get("/reviews", function(req, res) {
  Review.find({}, function(err,reviews) {
    if(err) {
      res.send(err);
    } else {
      res.render("index", {reviews: reviews});
    }
  });
});

//NEW ROUTE
app.get("/reviews/new", function(req, res) {
  res.render("new");
});

//CREATE ROUTE
app.post("/reviews", function(req, res) {
/*  Review.create({}, function(err, newReview) {
    if(err) {
      res.send(err);
    } else {
      res.json(newReview);
    }
  });*/
});

//SHOW ROUTE
app.get("/reviews/:id", function(req, res) {
  res.render("show");
  Review.findById(req.params.id, function(err, foundReview) {
    if(err) {
      res.send(err);
    } else {
    
    }
  });
});

//EDIT ROUTE
app.get("/reviews/:id/edit", function(req, res) {
  Review.findById(req.params.id, function(err, foundReview) {
    
  });
});

//UPDATE ROUTE
app.put("/reviews/:id", function(req, res) {
  
});

//DELETE ROUTE
app.delete("/reviews/:id", function(req, res) {
});


//Starting the server
app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Server is running...."); 
});
    
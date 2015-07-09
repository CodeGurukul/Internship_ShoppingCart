var express = require('express');
var mongoose = require('mongoose');
var session = require('express-session');
var bodyParser = require('body-parser');
var MongoStore = require('connect-mongo')(session);
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;



//Require Models
var User = require('./server/models/User');
var Review = require('./server/models/Review');
var Product = require('./server/models/Product');
var contactUs=require('./server/config/contact');
var passportConf = require('./server/config/passport');


//Require Controllers
var homeController = require('./server/controllers/home');
var userController = require('./server/controllers/user');

var productController = require('./server/controllers/product');
var reviewController = require('./server/controllers/review');


var app =express();

app.set('views', __dirname + '/server/views');
app.set('view engine','jade');


//app.use is used to use middlewares
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'Codegurukul',
  store: new MongoStore({ url: 'mongodb://localhost/shopcart', autoReconnect: true })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});

app.use(express.static('public')); //static route handling
app.use(bodyParser.json());// assuming POST: {"name":"foo","color":"red"} <-- JSON encoding
app.use(bodyParser.urlencoded({extended:true}));// assuming POST: name=foo&color=red <-- URL encoding

//Mongoose Connection with MongoDB
mongoose.connect('mongodb://localhost/shopcart');
console.log('local mongodb opened');

//Routes
app.get('/', homeController.getIndex);
app.get('/aboutus', homeController.getAboutUs);
app.get('/viewcart', homeController.getCart);
app.get('/signup', userController.getSignUp);
app.post('/signup', userController.postSignUp);
app.get('/log-in', userController.getLogin);
app.post('/log-in', userController.postLogin);
app.get('/addproduct', productController.getAddProduct);
app.post('/addproduct', productController.postAddProduct);
app.get('/buyproduct', productController.getProductDetails);
app.get('/viewproduct', productController.getViewProduct);
app.post('/deleteproduct/:id', productController.postDeleteProduct);
app.get('/signout', userController.getSignOut);
app.get('/addreview/:id', reviewController.getAddReview);
app.post('/addreview', reviewController.postAddReview);
app.get('/allreviews', reviewController.getAllReviews);
app.get('/contactus', contactUs.getContactUs);
app.post('/contactus', contactUs.postContactUs);



//Google authentication
// app.get('/auth/google', passport.authenticate('google',  { scope:  ['profile' , 'email' , 'https://www.googleapis.com/auth/plus.login']}));
// app.get('http://localhost:3000/oauth2callback', passport.authenticate('google', { failureRedirect: '/' }), function(req, res) {

//  res.redirect(req.session.returnTo || '/');

// });

app.get('/auth/google', passport.authenticate('google',  { scope:  ['profile' , 'email' , 'https://www.googleapis.com/auth/plus.login']}));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), function(req, res) {
  res.redirect(req.session.returnTo || '/');
});
// app.get('/auth/google', passport.authenticate('google', { scope: 'profile email' }));
// app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), function(req, res) {
//   res.redirect(req.session.returnTo || '/');
// });


//facebook authentication
app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'user_location'] }));
app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), function(req, res) {
  res.redirect(req.session.returnTo || '/');
});



app.listen(3000);
console.log("Express server is listening at port 3000");
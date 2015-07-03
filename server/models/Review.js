var mongoose= require('mongoose');

//A mongoose Schema
var reviewSchema =  new mongoose.Schema({
  
});

// Compile Schema into a mongoose Model
var Review = mongoose.model('Review',reviewSchema);
module.exports = Review;


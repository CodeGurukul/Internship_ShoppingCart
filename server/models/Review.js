var mongoose= require('mongoose');

//A mongoose Schema
var reviewSchema = new mongoose.Schema({
	_pid: { type: Number, ref: 'product'},
	_uid: { type: Number, ref: 'user'},
	text: String,
	time : { type : Date, default: Date.now },
	rating: Number
})

// Compile Schema into a mongoose Model
var Review = mongoose.model('Review',reviewSchema);
module.exports = Review;


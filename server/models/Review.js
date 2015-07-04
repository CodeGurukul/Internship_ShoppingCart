var mongoose= require('mongoose');

var reviewSchema = new mongoose.Schema({

	_pid: { type: Number, ref: 'Product'},
	_uid: { type: Number, ref: 'User'},
	text: String,
	time : { type : Date, default: Date.now },
	rating: Number
});

var Review = mongoose.model('Review',reviewSchema);

module.exports = Review;

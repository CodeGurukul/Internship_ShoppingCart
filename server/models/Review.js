var mongoose= require('mongoose');
var User = require('./User');
var Product = require('./Product');

var reviewSchema = new mongoose.Schema({

	title: String,
	u_id:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	p_id:{type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
    
	time : { type : Date, default: Date.now },
	rating: Number
});

var Review = mongoose.model('Review',reviewSchema);

module.exports = Review;


// postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    // comments: [{
    //     text1: String,
    //     postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
    // }],
	
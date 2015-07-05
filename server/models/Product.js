var mongoose= require('mongoose');


// var reviewSchema = new mongoose.Schema({

// 	_pid: { type: Number, ref: 'Product'},
// 	_uid: { type: Number, ref: 'User'},
// 	text: String,
// 	time : { type : Date, default: Date.now },
// 	rating: Number
// });

// var Review = mongoose.model('Review',reviewSchema);


//A mongoose Schema
var productSchema =  new mongoose.Schema({
	
    name: String,
 	productno:String,
 	description: { type: String, default: '' },
    details: { type: String, default: '' },
    specifications: { type: String, default: '' },
    price:Number,
    quantity :Number,
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref:'Review'}]
 	
    });



// Compile Schema into a mongoose Model
var Product = mongoose.model('Product',productSchema);


module.exports = Product;



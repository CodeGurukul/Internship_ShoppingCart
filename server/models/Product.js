var mongoose= require('mongoose');

//A mongoose Schema
var productSchema =  new mongoose.Schema({
	_id: Number,
    name: String,
 	productno:String,
 	description: { type: String, default: '' },
    details: { type: String, default: '' },
    specifications: { type: String, default: '' },
    price:Number,
    quantity :Number,
    reviews: [{ type: Schema.types.objectId, ref:'Review'}]
 	
    });



// Compile Schema into a mongoose Model
var Product = mongoose.model('Product',productSchema);
module.exports = Product;


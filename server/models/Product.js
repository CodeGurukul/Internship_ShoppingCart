var mongoose= require('mongoose');

//A mongoose Schema
var productSchema =  new mongoose.Schema({
    name: String,
 	productno:String,
 	description: {
    details: { type: String, default: '' },
    specifications: { type: String, default: '' },
    },
  


 	price:Number,
 
 	quantity :Number
 	

});

// Compile Schema into a mongoose Model
var Product = mongoose.model('Product',productSchema);
module.exports = Product;


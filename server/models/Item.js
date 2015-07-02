var mongoose= require('mongoose');

//A mongoose Schema
var itemSchema = new mongoose.Schema({
    name: String,
 	itemno:String,
 	description:String,
 	price:Number
});

// Compile Schema into a mongoose Model
var Item = mongoose.model('Item',itemSchema);
module.exports = Item;
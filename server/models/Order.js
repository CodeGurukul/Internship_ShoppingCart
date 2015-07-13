 var mongoose= require('mongoose');
var User = require('./User');
var Product = require('./Product');
//A mongoose Schema
var orderSchema = new mongoose.Schema({

 
    u_id:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	p_id:{type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
    timestamp: { type: Number, default: (new Date()).getTime() }, 
	total: Number
 });

// Compile Schema into a mongoose Model
var Order = mongoose.model('Order',orderSchema);
module.exports = Order;	

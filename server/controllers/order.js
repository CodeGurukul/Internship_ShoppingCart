var Order = require('../models/Order');
var Menu = require('../models/Product');
var User = require('../models/User');

exports.getViewCart = function(req,res){
   
    console.log(req.params.id);
    res.render('viewcart',{name : req.params.id});
}


exports.postViewCart =  function(req,res){
		var order = new Order();
	    order.p_id=req.params.pid;
	    order.u_id=req.user.id;
	    order.save(function(err, order){
	    	res.redirect('/');
	    });
 }

var Product= require('../models/Product');

exports.getIndex = function(req,res){
        
            Product.find(function(err,products){
            res.render('index',{products:products});
        });
        }
exports.getCart = function(req,res){
        
            res.render('viewcart');
        }

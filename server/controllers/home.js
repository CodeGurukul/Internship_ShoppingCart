var Product= require('../models/Product');

exports.getAboutUs = function(req,res){
        
        res.render('aboutus');
}

exports.getIndex = function(req,res){
        
            Product.find(function(err,products){
            res.render('index',{products:products});
        });
        }
exports.getCart = function(req,res){
        
            res.render('viewcart');
        }

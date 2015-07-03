var Product= require('../models/Product');

exports.getProductDetails = function(req,res){

        Product.find(function(err,items){
            res.render('buyproduct',{products:products});
        });

    }


exports.getAddProduct = function(req,res){
      res.render('addproduct');
    }

exports.postAddProduct = function(req,res){
        if(req.body.featuredName)
            var featured = true;
        //Create a new course
        var product = new Product ({name: req.body.productname, productno: req.body.productno , description:req.body.description ,
            quantity:req.body.quantity , price:req.body.price});
        //The Magic!
        product.save(function(err){
                Product.find(function(err,products){
            res.render('viewproduct',{products:products});
        });
        });

    }

exports.getViewProduct = function(req,res){

        Product.find(function(err,products){
            res.render('viewproduct',{products:products});
        });

    }

exports.postDeleteProduct = function(req,res){
        Product.remove({ _id:req.params.id }, function (err) {
            Product.find(function(err,products){
            res.render('viewproduct',{products:products});
        });
    });
}

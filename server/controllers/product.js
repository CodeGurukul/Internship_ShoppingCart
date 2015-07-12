var User= require('../models/User');
var Product= require('../models/Product');
var Review= require('../models/Review');

exports.getProductDetails = function(req,res){

        Product.find(function(err,products){
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

        var review = new Review ({postedBy: User._id, title: req.body.title, rating: req.body.rating});

        //The Magic!
        review.save(function(err){
                Review.find(function(err,reviews){
            });
        });
       
        product.save(function(err){
                Product.find(function(err,products){
            res.render('viewproduct',{products:products});
        });
        });

    }

exports.getViewProduct = function(req,res){

        // Product.find(function(err,reviews){
        //     res.render('viewproduct',{products:products, reviews:reviews});
        // });
        Product.find({_id:req.product.id},function(err,products)
{
if(err)
  console.log(err);
else
  Products.find({p_id:req.product.id},function(err,reviews)
{
  res.render('viewproduct',{products:products,reviews:reviews});
}

  );
   

 } );

    }

exports.postDeleteProduct = function(req,res){
        Product.remove({ _id:req.params.id }, function (err) {
            Product.find(function(err,products){
            res.render('viewproduct',{products:products});
        });
    });
}

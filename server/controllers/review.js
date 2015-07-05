
var User= require('../models/User');
var Product= require('../models/Product');
var Review= require('../models/Review');


exports.getAddReview = function(req,res){
      res.render('addreview');
    }

exports.postAddReview = function(req,res){

var review = new Review ({
	postedBy: User._id, 
	title: req.body.title, 
	rating: req.body.rating
    });
 
     review.p_id=req.params.id;
     review.u_id=req.user.id;

      //The Magic!
        review.save(function(err){
                Review.find(function(err,reviews){
                	res.render('addproduct',{reviews:reviews});
            });
        });

    }

exports.getAllReviews = function(req,res){
Review.find().populate('p_id').exec(function(err, review) {
		res.send(review);

	});
}    



var User= require('../models/User');
var Product= require('../models/Product');
var Review= require('../models/Review');


exports.getAddReview = function(req,res){
      console.log(req.params.id);
      res.render('addreview',{name : req.params.id});
}

exports.postAddReview = function(req,res){

    var review = new Review ({
      postedBy: User._id, 
      title: req.body.title, 
      rating: req.body.rating
    });
 
     review.p_id=req.body.pid;
     review.u_id=req.user.id;

      //The Magic!
        review.save(function(err){
                Review.find(function(err,reviews){
                  res.render('allreviews',{reviews:reviews});
            });
        });

    }

exports.getAllReviews = function(req,res){
  Review.find().populate('p_id').exec(function(err, review) {
    console.log(review[1].p_id);
    res.send(review[1].p_id.name);

   });
}    






















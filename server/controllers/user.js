var passport = require('passport');

var User = require('../models/User');



exports.getSignUp = function(req,res){
        res.render('signup');
    }

exports.getLogin = function(req,res){
        res.render('log-in');
    }

exports.postSignUp = function(req,res){
        var user = new User(
        {
            profile:{name:req.body.name},
                email:req.body.email, 
                password:req.body.password
            
        });
            //Small issue here cant access profile.name
            user.save();
          //Course.find(function(err,courses){
           res.render('index');
       // });
            }


// The below is used by passport login
exports.postLogin = function(req,res, next){
    passport.authenticate('local',function(err, user, info) {
      if (err) return next(err);
      if (!user) {
        console.log('errors');
        return res.redirect('/');
      }
      req.logIn(user, function(err) {
        if (err) return next(err);
        console.log('Success! You are logged in.');
        res.redirect(req.session.returnTo || '/');
      });
    })(req, res, next);
}

exports.getSignOut = function(req,res, next){
  req.logout();
  res.redirect('/');
}


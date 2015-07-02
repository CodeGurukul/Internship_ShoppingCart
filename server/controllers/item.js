var Item = require('../models/Item');

exports.getItemDetails = function(req,res){

        Item.find(function(err,items){
            res.render('buyitem',{items:items});
        });

    }


exports.getAddItem = function(req,res){
      res.render('additem');
    }

exports.postAddItem = function(req,res){
        if(req.body.featuredName)
            var featured = true;
        //Create a new course
        var item = new Item ({name: req.body.itemname, itemno: req.body.itemno , description:req.body.description ,price:req.body.price});
        //The Magic!
        item.save(function(err){
                Item.find(function(err,items){
            res.render('viewitem',{items:items});
        });
        });

    }

exports.getViewItem = function(req,res){

        Item.find(function(err,items){
            res.render('viewitem',{items:items});
        });

    }

exports.postDeleteItem = function(req,res){
        Item.remove({ _id:req.params.id }, function (err) {
            Item.find(function(err,items){
            res.render('viewitem',{items:items});
        });
    });
}

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
                Item.find(function(err,courses){
            res.render('index');
        });
        });

    }

// exports.getViewCourses = function(req,res){

//         Course.find(function(err,courses){
//             res.render('view-course',{courses:courses});
//         });

//     }

// exports.postDeleteCourse = function(req,res){
//         Course.remove({ _id:req.params.id }, function (err) {
//             Course.find(function(err,courses){
//             res.render('view-course',{courses:courses});
//         });
//     });
// }

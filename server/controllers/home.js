var Product= require('../models/Product');
var nodemailer=require('nodemailer');

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

exports.getContactUs = function(req,res){
        res.render('contactus', { title: 'Contact Us', page: 'contact' })
}

exports.postContactUs = function(req, res){
	var contactAck = "your message has been sent"
    var textsent = '<h1>Name: '+req.body.firstName+' '+ req.body.lastName+'</h1><br> <h3>Text: '+req.body.message +'</h3>'
// for nodemailer
// create reusable transporter object using SMTP transport 
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'contactusletsshop@gmail.com', //new mail id made for the sake of project
        pass: 'onlineshopping' // by default emails will be sent from this id
    }
});

// ===================================== nodemailer code starts =====================================
// setup e-mail data with unicode symbols 
var mailOptions = {
    from: 'Letsshop <contactusletsshop@gmail.com>', // sender address 
    to: 'contactusletsshop@gmail.com, shivankmathur7@gmail.com', // list of receivers 
    subject: 'Hello this is from Letsshop', // Subject line 
    text: req.body.message, // plaintext body 
    html: textsent // html body  
};

// send mail with defined transport object 
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});

// ====================================== nodemailer code ends ======================================
	// var msg = new Home({
	// 	firstName: req.body.firstName,
	// 	lastName: req.body.lastName,
	// 	email: req.body.email,
	// 	phone: req.body.phone,
	// 	message: req.body.message
	// });
	// msg.save(function(err){
		res.redirect('/');
	// });

}
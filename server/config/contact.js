var nodemailer = require('nodemailer');

exports.getContactUs = function(req, res){
    res.render('contact-us', { title: 'Contact Us', page: 'contact' })
};

exports.postContactUs = function (req, res) {
  // var mailOpts, smtpTrans;
  // //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
  // smtpTrans = nodemailer.createTransport('SMTP', {
  //     service: 'Gmail',
  //     auth: {
  //         user: "contactusletsshop@gmail.com",
  //         pass: "onlineshopping" 
  //     }
  // });

  // //Mail options
  // mailOpts = {
  //     from: req.body.name+' &lt;'+req.body.email+'&gt;', //grab form data from the request body object
  //     to: 'contactusletsshop@gmail.com',
  //     subject: 'Website contact form',
  //     text: req.body.name+' <'+req.body.email+'>\r\n\r\n'+req.body.message
  // };
  // smtpTrans.sendMail(mailOpts, function (error, response) {
  //     //Email not sent
  //     if (error) {
  //         res.render('contact-us', { title: 'Contact Us', msg: 'Error occured, message not sent.', err: true, page: 'contact' });
  //         console.log(error);
  //     }
  //     //Yay!! Email sent
  //     else {
  //         res.render('contact-us', { title: 'Contact Us', msg: 'Message sent! Thank you.', err: false, page: 'contact' });
  //         console.log('sent');
  //     }
  // });

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
    from: 'Letsshop <foo@blurdybloop.com>', // sender address 
    to: 'contactusletsshop@gmail.com, shivankmathur7@gmail.com', // list of receivers 
    subject: 'Hello this is fromm Letsshop', // Subject line 
    text: 'Hello world this is sucessful', // plaintext body 
    html: '<b>Hello world ✔</b>' // html body 
};

// send mail with defined transport object 
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
}
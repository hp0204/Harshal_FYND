// try with a http server running and see if you get email
// for the error resolution

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    services: 'gmail',
    auth: {
        user: 'hpdeshmukh@mitaoe.ac.in',
        pass: 'Harshal@123'
    }
})

var mailOptions = {
    from: 'hpdeshmukh@mitaoe.ac.in',
    to: 'rajneeshdeshmukh123@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Hi I am Harshal'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Email sent:' + info.response);
    }
});
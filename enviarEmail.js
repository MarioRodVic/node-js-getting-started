var nodemailer = require('nodemailer');

function enviarEmail(){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'mrv.chupito@gmail.com',
          pass: 'm@rio2205'
        }
      });
      
      var mailOptions = {
        from: 'mrv.chupito@gmail.com',
        to: 'mrv.chupito@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!: https://www.amazon.es/dp/B08H93ZRLL/ref=twister_B08NQWFZ7L?_encoding=UTF8&th=1'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}

exports.enviarEmail = enviarEmail;

const nodemailer = require('nodemailer');
const path= require('path');
module.exports = (from,to,subject,html,basePath)=>{
    
    let mailOptions = {
        from: from, 
        to: to,
        subject: subject,
        attachments: [{
          filename: 'logo.png',
          path: basePath+'/content/img/logo.png',
          cid: 'unique@cid',
      }],
        html: html
    };

    let transporter = nodemailer.createTransport({
        host:'mail.helpinghand.pk',
        port:465,
        secure:true,
        auth:{
            user:'support@helpinghand.pk',
            pass:'4QeKubB)h74G'
        }
    });


    

   

    transporter.sendMail(mailOptions,(error,info)=>{
        if (error) {  
            console.log(error)
            
          } else {
            console.log('email sent',info)
          }
    });

    
}
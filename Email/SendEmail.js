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

    // let transporter = nodemailer.createTransport({
    //     host:'mail.helpinghand.pk',
    //     port:587,
    //     secure:false,
    //     auth:{
    //         user:'support@helpinghand.pk',
    //         pass:'4QeKubB)h74G'
    //     }
    // });


    let transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:587,
        secure:true,
        auth:{
            user:'syedhassaan.103@gmail.com',
            pass:'#include<iostream>'
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
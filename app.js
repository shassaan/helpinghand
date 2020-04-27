//================Configurations================================
const express = require('express');
const app = express();
const hbs = require('express-handlebars');
var path = require("path");
const sendEmail = require('./Email/SendEmail')
const Template =  require('./Email/Templates');
//require('./DataBase/Database');
const port = 3000;
app.use('/content', express.static(path.join(__dirname, 'content')))
app.use(express.json());
app.set('view engine','hbs');
app.engine('hbs',hbs( {
    extname: 'hbs',
    defaultView: 'default',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
  }))
//==============================================================


//===========DATABASE===========================================

//==============================================================










//=============PAGE ROUTES========================================
app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/contact',(req,res)=>{
    res.render('contact');
});

app.get('/privacy',(req,res)=>{
    res.render('privacy');
});

app.get('/thankyou',(req,res)=>{
    res.render('thankyou',{layout:false})
})
//================================================================


//=============API ROUTES=========================================

app.post('/sendEmail',(req,res)=>{
    const {name,email,phone,password,isDonor,isVolunteer,isNeedy,CNIC = "",donation = ""} = req.body;
    const supportEmail = "syedhassaan.103@gmail.com"
    
    sendEmail(supportEmail,email,'Thank you',Template.thankYouTemplate(),req.protocol+"://"+req.headers.host);
    
    if(isNeedy){
     sendEmail(supportEmail,email,'Thank you',Template.needyTemplate(name),req.protocol+"://"+req.headers.host);
     sendEmail(supportEmail,supportEmail,'Needy Registeration',Template.supportTemplateForVolunteer(name,CNIC,phone,email),req.protocol+"://"+req.headers.host);
    
    }else if(isDonor){
     sendEmail(supportEmail,email,'Thank you',Template.donorTemplate(name),req.protocol+"://"+req.headers.host);
     sendEmail(supportEmail,supportEmail,'Donor Registeration',Template.supportTemplateForVolunteer(name,donation,phone,email),req.protocol+"://"+req.headers.host);
    
    }else if(isVolunteer){
    sendEmail(supportEmail,supportEmail,'Volunteer Registeration',Template.supportTemplateForVolunteer(name,CNIC,phone,email),req.protocol+"://"+req.headers.host);

    }
    res.send(true);
})

//================================================================











//===================SERVER=================================
app.listen(port,()=>{
    console.log("Server Started Listening on Port",port);
});
//==========================================================
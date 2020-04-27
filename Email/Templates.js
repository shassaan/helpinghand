

module.exports.supportTemplateForVolunteer = (fullName,cnic,phone,email,password) =>{
    return `
    <h2>User Information</h2>
    <table border='1' cellpadding='5' width='600' height='120'>
    <tr>
        <td><b>Full Name</b> </td>
        <td>${fullName}</td>
        </tr>
        <tr>
        <td><b>${cnic == "" ? "Donation amount":"CNIC"}</b> </td>
        <td>${cnic}</td>
        <tr/>
        <tr>
        <td><b>Phone</b></td>
        <td>${phone}</td>
        </tr>
        <tr>
        <td><b>email</b></td>
        <td>${email}</td>
    </tr>
    <tr>
        <td><b>password</b></td>
        <td>${password}</td>
    </tr>
    </table>
    
    `
}



















module.exports.needyTemplate = (needyName)=>{
    return (`
    <!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
    <html xmlns='http://www.w3.org/1999/xhtml'>
    
    <head>
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
        <title>Sign Up Needy Email</title>
        <link href='https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap' rel='stylesheet'>
        <style type='text/css'>
            body {
                margin: 0;
                padding: 0;
                min-width: 100% !important;
                font-family: 'Poppins', sans-serif;
            }
    
            .container {
                width: 100%;
                max-width: 660px;
                padding: 30px 40px 30px 30px;
            }
    
            .col-lg-4 {
                max-width: 33%;
                width: 100%
            }
    
            .col-lg-2 {
                max-width: 16%;
                width: 100%
            }
    
            .col-lg-10 {
                max-width: 83%;
                width: 100%
            }
    
            .col-lg-8 {
                max-width: 66%;
                width: 100%
            }
    
            .tick {
                padding-top: 20px;
                padding-left: 30px;
            }
    
            
            .footer-social {
                max-width: 33%;
                width: 100%;
            }
            
            .tick-img {
                padding-right: 20px;
                padding-bottom: 20px;
                float: left;
                padding-top: 5px;
            }
    
            .footer-link {
                text-decoration: none;
                color: #4d4d4d;
                font-size: 14px;
                display: inline-block;
                padding-right: 10px;
                padding-left: 10px;
            }
    
            @media only screen and (max-width:479px) {
    
                .container {
                    padding: 30px 15px 30px 15px;
                    width: 90%;
                }
    
                .col-lg-8,
                .col-lg-10,
                .col-lg-2,
                .col-lg-4 {
                    max-width: 100%;
                    width: 100%;
                    text-align: center;
                }
    
                .tick {
                    padding-left: 0px;
                }
    
                .float-sm-right {
                    float: right;
                }
    
                .tick-img {
                    float: left;
                    padding-bottom: 30px;
                    padding-top: 5px;
                }
    
                .d-sm-block {
                    display: block;
                    width: 100%;
                }
    
                .d-sm-none {
                    display: none;
                }
    
                .footer-link {
                    padding-left: 0px;
                    padding-right: 0px;
                }
            }
    
        </style>
    </head>
    
    <body yahoo bgcolor='#e9ebee'>
        <table width='100%' bgcolor='#e9ebee' border='0' cellpadding='0' cellspacing='0' style='padding-top: 160px;'>
            <tr>
                <td>
                    <table style='background-color: white;' class='container' align='center' cellpadding='0' cellspacing='0' border='0' bgcolor='#ffffff'>
                        <tr>
                            <td>
                                <table class='header' align='center' cellpadding='0' cellspacing='0' border='0'>
                                    <tr>
                                        <td style='text-align: center;'>
                                            <img src='cid:unique@cid' alt=''>
                                        </td>
                                    </tr>
                                    
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table width='100%' class='section' align='center' cellpadding='0' cellspacing='0' border='0'>
                                    <tr>
                                        <td style='font-weight: 700;color: #8c8c8c;font-size: 14px;'>
                                            Dear ( ${needyName} ),
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style='color: #8c8c8c;font-size: 14px;padding-top: 30px;padding-bottom: 15px;line-height: 26px;'>
                                            May God’s help be with you! Thank you for contacting us. <br>
                                            HelpingHand understands the importance of maintaining self-respect. That is why we become a medium between you and the donor, keeping your dignity intact. The true help is only by Almighty and we are only the resource.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style='color: #000;font-size: 14px;padding-top: 15px;padding-bottom: 15px;line-height: 26px;font-weight: 500;'>
                                            We have received your details and will contact you shortly for verification purpose.  
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style='color: #4d4d4d;font-size: 14px;line-height: 26px;padding-bottom: 10px;'>Visit Us:
                                            <a class='d-sm-block footer-link' href='https://www.HelpingHand.PK'> www.HelpingHand.PK</a>
                                        </td>
                                    </tr>	
                                    <tr>
                                        <td style='color: #4d4d4d;font-size: 14px;line-height: 26px;padding-bottom: 10px;'>Email Us:
                                            <a class='d-sm-block footer-link' href='mailto:support@helpinghand.pk'> support@helpinghand.pk</a>
                                        </td>
                                    </tr>							<tr>
                                        <td style='color: #8c8c8c;font-size: 14px;padding-top: 30px;padding-bottom: 15px;line-height: 26px;'>
                                            We are grateful for choosing HelpingHand as a source to be your support. We pledge to serve your needs under complete secrecy. <br>
                                            Stay connected, and blessed! 
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table class='thank' align='left' cellpadding='0' cellspacing='0' border='0' style='padding-top: 15px;padding-bottom: 30px;'>
                                    <tr>
                                        <td style='font-size: 14px;color: #8c8c8c;padding-bottom: 15px;'>Thank You, <br>
                                            Kind regards, <br>
                                            Team HelpingHand
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src='team_logo.png' alt=''></td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <table class='container' align='center' cellpadding='0' cellspacing='0' border='0'>
                        <tr>
                            <td style='color: #4d4d4d;font-size: 14px;line-height: 26px;text-align: center;'>
                                This is a system-generated email if you did not expect this email or the information in this email is not correct then you can reply to this email with your queries.
                            </td>
                        </tr>
                        <tr>
                            <td style='color: #4d4d4d;font-size: 14px;line-height: 26px;text-align: center;padding-top: 10px;padding-bottom: 10px;'>
                                <a class='d-sm-block footer-link' href='#'>Service Policies (http://helpinghand.pk/privacy-policy.html)</a><span class='d-sm-none'></span>
                            </td>
                        </tr>
                        <tr>
                            <td style='color: #4d4d4d;font-size: 14px;line-height: 26px;text-align: center;'>
                                © 2020-{helpinghand_2020}, HelpingHand.PK
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    
    </html>
    `)
}


module.exports.thankYouTemplate = ()=>{
    return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Thank you Email</title>
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap" rel="stylesheet">
        <style type="text/css">
            body {
                margin: 0;
                padding: 0;
                min-width: 100% !important;
                font-family: 'Poppins', sans-serif;
            }
    
            .container {
                width: 100%;
                max-width: 660px;
                padding: 30px 40px 30px 30px;
            }
    
            .col-lg-4 {
                max-width: 33%;
                width: 100%
            }
    
            .col-lg-2 {
                max-width: 16%;
                width: 100%
            }
    
            .col-lg-10 {
                max-width: 83%;
                width: 100%
            }
    
            .col-lg-8 {
                max-width: 66%;
                width: 100%
            }
    
            .tick {
                padding-top: 20px;
                padding-left: 30px;
            }
    
            
            .footer-social {
                max-width: 33%;
                width: 100%;
            }
            
            .tick-img {
                padding-right: 20px;
                padding-bottom: 20px;
                float: left;
                padding-top: 5px;
            }
    
            .footer-link {
                text-decoration: none;
                color: #4d4d4d;
                font-size: 14px;
                display: inline-block;
                padding-right: 10px;
                padding-left: 10px;
            }
    
            @media only screen and (max-width:479px) {
    
                .container {
                    padding: 30px 15px 30px 15px;
                    width: 90%;
                }
    
                .col-lg-8,
                .col-lg-10,
                .col-lg-2,
                .col-lg-4 {
                    max-width: 100%;
                    width: 100%;
                    text-align: center;
                }
    
                .tick {
                    padding-left: 0px;
                }
    
                .float-sm-right {
                    float: right;
                }
    
                .tick-img {
                    float: left;
                    padding-bottom: 30px;
                    padding-top: 5px;
                }
    
                .d-sm-block {
                    display: block;
                    width: 100%;
                }
    
                .d-sm-none {
                    display: none;
                }
    
                .footer-link {
                    padding-left: 0px;
                    padding-right: 0px;
                }
            }
    
        </style>
    </head>
    
    <body yahoo bgcolor="#e9ebee">
        <table width="100%" bgcolor="#e9ebee" border="0" cellpadding="0" cellspacing="0" style="padding-top: 160px;">
            <tr>
                <td>
                    <table style="background-color: white;" class="container" align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff">
                        <tr>
                            <td>
                                <table class="header" align="center" cellpadding="0" cellspacing="0" border="0">
                                    <tr>
                                        <td style="text-align: center;">
                                            <img src="cid:unique@cid" alt="">
                                        </td>
                                    </tr>
                                    
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table width="100%" class="section" align="center" cellpadding="0" cellspacing="0" border="0">
                                    
                                    <tr>
                                        <td style="color: #8c8c8c;font-size: 14px;padding-top: 30px;padding-bottom: 15px;line-height: 26px;">
                                            Thank you for registering with us! We will get back to you in a short while for verification purposes. <br>
                                            Want to contact us?
                                        </td>
                                    </tr>
                                    
                                        
                                    <tr>
                                        <td style="color: #4d4d4d;font-size: 14px;line-height: 26px;padding-bottom: 10px;">Email Us:
                                            <a class="d-sm-block footer-link" href="mailto:support@helpinghand.pk"> support@helpinghand.pk</a>
                                        </td>
                                    </tr>						
                                </table>
                            </td>
                        </tr>
                        
                        
                    </table>
                </td>
            </tr>
            
        </table>
    </body>
    
    </html>
    `;
}



module.exports.donorTemplate = (donorName)=>{
    return `
    <!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Transitional//EN' 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd'>
    <html xmlns='http://www.w3.org/1999/xhtml'>
    
    <head>
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>
        <title>Sign Up Donors Email</title>
        <link href='https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap' rel='stylesheet'>
        <style type='text/css'>
            body {
                margin: 0;
                padding: 0;
                min-width: 100% !important;
                font-family: 'Poppins', sans-serif;
            }
    
            .container {
                width: 100%;
                max-width: 660px;
                padding: 30px 40px 30px 30px;
            }
    
            .col-lg-4 {
                max-width: 33%;
                width: 100%
            }
    
            .col-lg-2 {
                max-width: 16%;
                width: 100%
            }
    
            .col-lg-10 {
                max-width: 83%;
                width: 100%
            }
    
            .col-lg-8 {
                max-width: 66%;
                width: 100%
            }
    
            .tick {
                padding-top: 20px;
                padding-left: 30px;
            }
    
            
            .footer-social {
                max-width: 33%;
                width: 100%;
            }
            
            .tick-img {
                padding-right: 20px;
                padding-bottom: 20px;
                float: left;
                padding-top: 5px;
            }
    
            .footer-link {
                text-decoration: none;
                color: #4d4d4d;
                font-size: 14px;
                display: inline-block;
                padding-right: 10px;
                padding-left: 10px;
            }
    
            @media only screen and (max-width:479px) {
    
                .container {
                    padding: 30px 15px 30px 15px;
                    width: 90%;
                }
    
                .col-lg-8,
                .col-lg-10,
                .col-lg-2,
                .col-lg-4 {
                    max-width: 100%;
                    width: 100%;
                    text-align: center;
                }
    
                .tick {
                    padding-left: 0px;
                }
    
                .float-sm-right {
                    float: right;
                }
    
                .tick-img {
                    float: left;
                    padding-bottom: 30px;
                    padding-top: 5px;
                }
    
                .d-sm-block {
                    display: block;
                    width: 100%;
                }
    
                .d-sm-none {
                    display: none;
                }
    
                .footer-link {
                    padding-left: 0px;
                    padding-right: 0px;
                }
            }
    
        </style>
    </head>
    
    <body yahoo bgcolor='#e9ebee'>
        <table width='100%' bgcolor='#e9ebee' border='0' cellpadding='0' cellspacing='0' style='padding-top: 160px;'>
            <tr>
                <td>
                    <table style='background-color: white;' class='container' align='center' cellpadding='0' cellspacing='0' border='0' bgcolor='#ffffff'>
                        <tr>
                            <td>
                                <table class='header' align='center' cellpadding='0' cellspacing='0' border='0'>
                                    <tr>
                                        <td style='text-align: center;'>
                                            <img src='cid:unique@cid' alt=''>
                                        </td>
                                    </tr>
                                   
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table width='100%' class='section' align='center' cellpadding='0' cellspacing='0' border='0'>
                                    <tr>
                                        <td style='font-weight: 700;color: #8c8c8c;font-size: 14px;'>
                                            Dear ( ${donorName} ),
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style='color: #8c8c8c;font-size: 14px;padding-top: 30px;padding-bottom: 15px;line-height: 26px;'>
                                            Surely you are among the many gifted and blessed people who wish to serve humanity in secret. <br> As you have agreed to donate in the way of Almighty, we would like to congratulate you for this endearing act.  We, at HelpingHand, aim to help those who feel embarrassed to ask for help despite living in crisis.  
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style='color: #000;font-size: 14px;padding-top: 15px;padding-bottom: 15px;line-height: 26px;font-weight: 500;'>
                                            Someone from HelpingHand.PK will contact you for verification purpose.  
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style='color: #4d4d4d;font-size: 14px;line-height: 26px;padding-bottom: 10px;'>Visit Us:
                                            <a class='d-sm-block footer-link' href='https://www.HelpingHand.PK'> www.HelpingHand.PK</a>
                                        </td>
                                    </tr>	
                                    <tr>
                                        <td style='color: #4d4d4d;font-size: 14px;line-height: 26px;padding-bottom: 10px;'>Email Us:
                                            <a class='d-sm-block footer-link' href='mailto:support@helpinghand.pk'> support@helpinghand.pk</a>
                                        </td>
                                    </tr>							<tr>
                                        <td style='color: #8c8c8c;font-size: 14px;padding-top: 30px;padding-bottom: 15px;line-height: 26px;'>
                                            You are among the many chosen ones by Almighty who help humanity in secret. 
    Once again thank you for coming forth to donate.  <br> 
    Stay connected, and be the torchbearer!
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <table class='thank' align='left' cellpadding='0' cellspacing='0' border='0' style='padding-top: 15px;padding-bottom: 30px;'>
                                    <tr>
                                        <td style='font-size: 14px;color: #8c8c8c;padding-bottom: 15px;'>Thank You, <br>
                                            Kind regards, <br>
                                            Team HelpingHand
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src='team_logo.png' alt=''></td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        
                    </table>
                </td>
            </tr>
            <tr>
                <td>
                    <table class='container' align='center' cellpadding='0' cellspacing='0' border='0'>
                        <tr>
                            <td style='color: #4d4d4d;font-size: 14px;line-height: 26px;text-align: center;'>
                                This is a system-generated email if you did not expect this email or the information in this email is not correct then you can reply to this email with your queries.
                            </td>
                        </tr>
                        <tr>
                            <td style='color: #4d4d4d;font-size: 14px;line-height: 26px;text-align: center;padding-top: 10px;padding-bottom: 10px;'>
                                <a class='d-sm-block footer-link' href='#'>Service Policies (http://helpinghand.pk/privacy-policy.html)</a><span class='d-sm-none'></span>
                            </td>
                        </tr>
                        <tr>
                            <td style='color: #4d4d4d;font-size: 14px;line-height: 26px;text-align: center;'>
                                © 2020-{helpinghand_2020}, HelpingHand.PK
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    
    </html>
    `;
}
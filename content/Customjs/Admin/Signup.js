
const sendEmail = () => {


    let emailData = {
        name: $('#name1').val(),
        phone: $('#email1').val(),
        email: $('#email2').val(),
        donation: $('#donate').val(),
        CNIC: $('#cnic').val(),
        isNeedy: $("input[name='aorb']:checked").data("value") == 'n' ? true : false,
        isVolunteer: $("input[name='aorb']:checked").data("value") == 'v' ? true : false,
        isDonor: $("input[name='aorb']:checked").data("value") == 'd' ? true : false,
        password: $('#password').val()
    };

    if (!/^[0-9]{1,}$/.test(emailData.CNIC.trim())) {
        return;
    }
    if (emailData.isNeedy) {
        if (emailData.name.trim() == '' || emailData.phone.trim() == '' || emailData.CNIC.trim() == '' || emailData.email.trim() == '') {
            return;
        }
    } else if (emailData.isDonor) {
        if (emailData.name.trim() == '' || emailData.phone.trim() == '' || emailData.donation.trim() == '' || emailData.email.trim() == '') {
            return;
        }
    } else if (emailData.isVolunteer) {
        if (emailData.password.trim() == '' || emailData.name.trim() == '' || emailData.phone.trim() == '' || emailData.CNIC.trim() == '' || emailData.email.trim() == '') {
            return;
        }
    }


    var settings = {
        "url": "/sendEmail",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify(emailData),
    };
    changeLoginBtnStyle();
    $.ajax(settings).done(function (response) {
        revertBtnStyle();
        if (response === 'error') {
            $('#errorMsg').show();
            $('#errorMsg').text("Fill out all fields");

        }

        if (response === "invalid") {
            $('#errorMsg').show();
            $('#errorMsg').text("Invalid Credentials");
        }

        if (response == true) {
            $('#successMsg').show();
            $('#successMsg').text("Thank you ! Your Request has been submitted successfully we will get back you soon.")
            window.location.href = '/thankyou'
        }


        if (response == false) {
            $('#errorMsg').show();
            $('#errorMsg').text("Something went wrong !");
        }

        setTimeout(() => {
            $('#errorMsg').hide();
            $('#successMsg').hide();

        }, 5000)



    });
}

const changeLoginBtnStyle = () => {
    $('#submit1').attr('disabled', true);
    $('#submit1').val('Wait ....');
}

const revertBtnStyle = () => {
    $('#submit1').attr('disabled', false);
    $('#submit1').val('Sign Up');
}

(() => {
    $('#errorMsg').hide();
    $('#successMsg').hide();
})();


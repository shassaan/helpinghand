const login = () => {
    let loginData = {
        id: 0,
        email: $('#email').val(),
        password: $('#password').val(),
        isActive: false

    };
    

    var settings = {
        "url": "/api/User/AdminLogin",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify(loginData),
    };
    changeLoginBtnStyle();
    $.ajax(settings).done(function (response) {
        if (response === 'error') {
            $('#errorMsg').show();
            $('#errorMsg').text("Fill out all fields");

        }

        if (response === "invalid") {
            $('#errorMsg').show();
            $('#errorMsg').text("Invalid Credentials");
        }

        if (response === "success") {
            window.location.replace('/Admin')
        }
        revertBtnStyle();
        setTimeout(() => {
            $('#errorMsg').hide();
            
        },5000)
    });
}


const changeLoginBtnStyle = () => {
    $('#btnLogin').attr('disabled', true);
    $('#btnLogin').text('Signing in ....');
}

const revertBtnStyle = () => {
    $('#btnLogin').attr('disabled', false);
    $('#btnLogin').text('Login');
}

(() => {
    $('#errorMsg').hide();
    $('#btnLogin').click(() => {
        login();
    })

    
})();



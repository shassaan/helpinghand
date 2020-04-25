


const changeView = (name) => {
    var settings = {
        "url": `/Admin/GetPartialView?partialView=${name}`,
        "method": "GET",
        "timeout": 0,
       
    };

    $.ajax(settings).done(function (response) {
        $('#viewContainer').html(response);
    });
}
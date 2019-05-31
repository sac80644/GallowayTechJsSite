import $ from 'jquery';

function Get(callback) {
    GetJQuery(callback);
}

function GetXhr(callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4){
            var response = xhr.responseText;
            callback(response);
        }
    };

    xhr.open('GET', 'http://localhost:8080/data/mockdata.json');
    xhr.send();
}

function GetJQuery(callback) {
    $.ajax({
        url : 'http://localhost:8080/data/mockdata.json',
        type : 'GET',
        success : function(data) {              
            callback(JSON.stringify(data));
        },
        error : function(request, error)
        {
            callback("Request: " + error + ' ' + request.responseText + ' ' + request.status + ' ' + request.statusText);
        }
    });
}
export { Get, GetXhr, GetJQuery }
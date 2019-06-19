import $ from 'jquery';

function Get(url, callback) {
    Fetch(url, callback);
}

function GetXhr(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4){
            if(xhr.status === 200) {
                var response = xhr.responseText;
                callback(response);
            } else {
                callback("Request error: " + xhr.responseText + ' ' + xhr.status + ' ' + xhr.statusText);
            }
        }
    };

    xhr.open('GET', 'http://localhost:8080/data/dynamic.html');
    xhr.send();
}

function GetJQuery(url, callback) {
    $.ajax({
        url : 'http://localhost:8080/data/dynamic.html',
        type : 'GET',
        success : function(data) {              
            callback(data);
        },
        error : function(request, error)
        {
            callback("Request error: " + request.responseText + ' ' + request.status + ' ' + request.statusText);
        }
    });
}

function Fetch(url, callback) {

    fetch(url)
        .then(function(response) {
            if(response.ok) {
                return response.text();
            }
            throw new Error("Request error: " + response.status + ' ' + response.statusText);
        })
        .then(function(text) {
            callback(text);
        })
        .catch(function(error) {
            callback(error.message);
        });
}

export { Get, GetXhr, GetJQuery, Fetch }

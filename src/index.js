import $ from 'jquery';
import './about/about.js';
import './contact/contact.js';
import './work/work.js';

$(document).ready(function() {
    $("#About").load("./about/about.html");
    $("#Contact").load("./contact/contact.html");
    $("#Work").load("./work/work.html");
});

if(module.hot) {
    module.hot.accept('./about/about.js', function() {
        console.log('accepting hmr from about');
        $("#About").load("./about/about.html");
    })
}
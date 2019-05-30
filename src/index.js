import $ from 'jquery';
import './about/about.js';
import './contact/contact.js';
import './work/work.js';

$(document).ready(function() {
    $("#About").load("./about/about.html");
    $("#Contact").load("./contact/contact.html");
    $("#Work").load("./work/work.html");
});

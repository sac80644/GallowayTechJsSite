import $ from 'jquery';
import './about/about.js';

$(document).ready(function() {
    $("#About").load("./about/about.html");
});

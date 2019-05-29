import $ from 'jquery';
import aboutContent from '../src/about/about';

$(document).ready(function() {
    var body = aboutContent();
    document.body.appendChild(body);
});
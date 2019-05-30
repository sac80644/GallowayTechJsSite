import $ from 'jquery';
import './about.css';

export default function aboutContent() {
    var divAbout = document.getElementById('divAdbout');
    const element = document.createElement('div');
    element.innerHTML = 'dynamic content';
    return element;
}

$(document).ready(function() {
    // $('#About').load('./about/about.html');
});

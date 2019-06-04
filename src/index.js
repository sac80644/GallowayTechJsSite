import $ from 'jquery';
import contentHeader from './header/header.js';
import contentAbout from './about/about.js';
import contentContact from './contact/contact.js';
import contentWork from './portfolio/portfolio.js';
import { Get } from './servers/ajax.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './site.css';

$(document).ready(function() {
    $("#Header").replaceWith(contentHeader);
    $("#About").replaceWith(contentAbout);
    $("#Contact").replaceWith(contentContact);
    $("#Portfolio").replaceWith(contentWork);
    Get(
        function(content) {
            $('#ajaxContent').replaceWith(content);
        });    
});

if(module.hot) {
    module.hot.accept('./header/header.js', function() {
        console.log('accepting hmr from header');
    })
    module.hot.accept('./about/about.js', function() {
        console.log('accepting hmr from about');
    })
    module.hot.accept('./portfolio/portfolio.js', function() {
        console.log('accepting hmr from portfolio');
    })
    module.hot.accept('./contact/contact.js', function() {
        console.log('accepting hmr from contact');
    })
}
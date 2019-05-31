import $ from 'jquery';
import contentAbout from './about/about.js';
import contentContact from './contact/contact.js';
import contentWork from './work/work.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './site.css';

$(document).ready(function() {
    $("#About").replaceWith(contentAbout);
    $("#Contact").replaceWith(contentContact);
    $("#Work").replaceWith(contentWork);
});

if(module.hot) {
    module.hot.accept('./about/about.js', function() {
        console.log('accepting hmr from about');
    })
    module.hot.accept('./work/work.js', function() {
        console.log('accepting hmr from work');
    })
    module.hot.accept('./contact/contact.js', function() {
        console.log('accepting hmr from contact');
    })
}
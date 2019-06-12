import $ from 'jquery';
import './articles.css';
import content from './articles.html';


let articles = {
    content: content,
    getInfo: function() {
        alert('hi');
    }
};

export default articles;


$(document).ready(function() {

});


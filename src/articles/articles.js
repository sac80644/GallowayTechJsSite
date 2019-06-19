import $ from 'jquery';
import './articles.css';
import content from './articles.html';
import { Get } from '../servers/ajax.js';
import contentObject from '../content/content.js';


let articles = {
    content: content,
    hook: function() {
        hookArticleClicks();
    }
};

export default articles;


$(document).ready(function() {

    // var url = 'http://localhost:8080/content/what_patterns.html';

    // Get(url, function(content) {
    //     $('#ArticleContent').replaceWith(content);
    // });

});

function hookArticleClicks() {
    document.getElementById("Articles").addEventListener("click", function(e){

        var toggleTarget = document.getElementById(e.target.id).getAttribute('toggle')
        $('#' + toggleTarget).show();
        $('#' + toggleTarget).addClass('show');

        var content = document.getElementById(e.target.id).getAttribute('content')
        $('#ArticleContent').replaceWith(contentObject[content]);


        // $('#ArticleToggle').show();
        // $('#ArticleToggle').addClass('show');

    });
}


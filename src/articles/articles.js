import $ from 'jquery';
import './articles.css';
import content from './articles.html';
import { Get } from '../servers/ajax.js';
import contentCollection from '../content/content.js';


let articles = {
    content: content,
    hook: function() {
        hookArticleClicks();
    }
};

export default articles;


$(document).ready(function() {


});

function hookArticleClicks() {

    document.getElementById("Articles").addEventListener("click", function(e){

        var clickedBy = document.getElementById(e.target.id);
        if (clickedBy) {
            $('#ArticleToggle').show();
            $('#ArticleToggle').addClass('show');
            var content = clickedBy.getAttribute('content')
            document.getElementById('ArticleContent').innerHTML = contentCollection[content];
        }
    });
}

//optional - use to fetch content off server.  does not require pre-loading of content via import.
function GetContent(content) {
    var baseUrl = 'http://localhost:8080/content/';
    var url = baseUrl + content;

    Get(url, function(content) {
        document.getElementById('ArticleContent').innerHTML = content;
    });
}


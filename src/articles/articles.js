import $ from 'jquery';
import './articles.css';
import content from './articles.html';
import { Get } from '../servers/ajax.js';


let articles = {
    content: content,
    hook: function() {
        hookArticleClicks();
    }
};

export default articles;


$(document).ready(function() {

    var url = 'http://localhost:8080/content/what_patterns.html';

    Get(url, function(content) {
        $('#ArticleContent').replaceWith(content);
    });

});

function hookArticleClicks() {
    document.getElementById("Articles").addEventListener("click", function(e){

        if(e.target.id == 'what-is-pattern-click') {
            // $('#MainBody').hide();
            // $('#MainBody').removeClass('show');
            $('#ArticleToggle').show();
            $('#ArticleToggle').addClass('show');

        }
        else if(e.target.id == 'Home' || e.target.id == 'NavHome') {
            $('#AlbumToggle').hide();
            $('#AlbumToggle').removeClass('show');
            $('#MainBody').show();
            $('#MainBody').addClass('show');
        }
    });
}

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


            var section = clickedBy.getAttribute('section')
            var content = clickedBy.getAttribute('content')

            if(section && content) {
                $('#ArticleToggle').hide();
                
                //first load a whole html file to keep related articles together
                var elem = document.createElement('div');
                elem.innerHTML = contentCollection[section];
                
                //then get specific artible
                var div = elem.children[content];
                document.getElementById('ArticleContent').innerHTML = div.innerHTML;

                $('#ArticleToggle').fadeIn('slow');
            }
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


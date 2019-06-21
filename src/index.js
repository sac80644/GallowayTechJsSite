import $ from 'jquery';
import navbar from './navbar/navbar.js';
import header from './header/header.js';
import about from './about/about.js';
import work from './portfolio/portfolio.js';
import album from './album/album.js'
import articles from './articles/articles.js';
import footer from './footer/footer.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './site.css';

$(document).ready(function() {
    $("#Navbar").replaceWith(navbar.content);
    $("#Header").replaceWith(header.content);
    $("#About").replaceWith(about.content);
    // $("#Portfolio").replaceWith(work.content);
    $("#Articles").replaceWith(articles.content);
    $("#Album").replaceWith(album.content);
    $("#Footer").replaceWith(footer.content);

    //event hooks
    hookNavClicks();
    articles.hook();
    navbar.hook();
});

//TODO: needs work:
function hookNavClicks() {
    document.getElementById("navbar").addEventListener(navbar.events.type, function(e){

        //TODO: needs a change
        if (e.type == 'navMenuClick') {
            $('#ArticleToggle').fadeOut();
        }

        if(e.detail == 'menu-photo-album') {
            $('#MainBody').hide();
            $('#AlbumToggle').fadeIn('slow');
        }
        else if(e.detail == 'menu-home' || e.detail == 'nav-home') {
            $('#AlbumToggle').hide();
            $('#MainBody').fadeIn('slow');
        }
    });
}

//webpack hmr
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
    // module.hot.accept('./contact/contact.js', function() {
    //     console.log('accepting hmr from contact');
    // })
    module.hot.accept('./album/album.js', function() {
        console.log('accepting hmr from album');
    })
}

$(document).ready(function() {

});
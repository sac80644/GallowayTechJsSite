import $ from 'jquery';
import navbar from './navbar/navbar.js';
import header from './header/header.js';
import about from './about/about.js';
import contact from './contact/contact.js';
import work from './portfolio/portfolio.js';
import album from './album/album.js'
import articles from './articles/articles.js';
import footer from './footer/footer.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './site.css';
// import './content/content.js';

$(document).ready(function() {
    $("#Navbar").replaceWith(navbar.content);
    $("#Header").replaceWith(header.content);
    $("#About").replaceWith(about.content);
    // $("#Contact").replaceWith(contact.content);
    // $("#Portfolio").replaceWith(work.content);
    $("#Articles").replaceWith(articles.content);
    $("#Footer").replaceWith(footer.content);

    $("#Album").replaceWith(album.content);

    //event hooks
    hookNavClicks();
    articles.hook();
});

//TODO: needs work:
function hookNavClicks() {
    document.getElementById("navbar").addEventListener("click", function(e){

        if(e.target.id == 'PhotoAlbum') {
            $('#MainBody').hide();
            $('#MainBody').removeClass('show');
            $('#AlbumToggle').show();
            $('#AlbumToggle').addClass('show');

        }
        else if(e.target.id == 'Home' || e.target.id == 'NavHome') {
            $('#AlbumToggle').hide();
            $('#AlbumToggle').removeClass('show');
            $('#MainBody').show();
            $('#MainBody').addClass('show');
        }
    });
}


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
    module.hot.accept('./album/album.js', function() {
        console.log('accepting hmr from album');
    })
}

$(document).ready(function() {

});
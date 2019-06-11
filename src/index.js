import $ from 'jquery';
import navbar from './navbar/navbar.js';
import header from './header/header.js';
import contentAbout from './about/about.js';
import contentContact from './contact/contact.js';
import contentWork from './portfolio/portfolio.js';
import contentAlbum from './album/album.js'
// import { Get } from './servers/ajax.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './site.css';

$(document).ready(function() {
    $("#Navbar").replaceWith(navbar.content);
    $("#Header").replaceWith(header.content);
    $("#About").replaceWith(contentAbout);
    $("#Contact").replaceWith(contentContact);
    $("#Portfolio").replaceWith(contentWork);
    $("#Album").replaceWith(contentAlbum);
    // Get(
    //     function(content) {
    //         $('#ajaxContent').replaceWith(content);
    //     });    

    hookNavClicks();
});

//TODO: needs work:
function hookNavClicks() {
    // document.getElementById("navbar").addEventListener("click", header.getInfo);
    document.getElementById("navbar").addEventListener("click", function(e){

        if(e.target.id == 'PhotoAlbum') {
            $('#MainBody').hide();
            $('#MainBody').removeClass('show');
            $('#AlbumToggle').show();
            $('#AlbumToggle').addClass('show');

        }
        else if(e.target.id == 'Home') {
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
    // $('#AlbumToggle').show();
});
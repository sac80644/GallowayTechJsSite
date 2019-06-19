import $ from 'jquery';
import './navbar.css';
import content from './navbar.html';


let navMenuClick = new CustomEvent('navMenuClick');

//https://www.phpied.com/3-ways-to-define-a-javascript-class/
//object literal - singleton
let navbar = {
    content: content,
    hook: function() {
        (document.getElementById("navbar")).addEventListener("click", function(e) {

            let clickedBy = document.getElementById(e.target.id);
            if (clickedBy && (clickedBy.className == 'dropdown-item' || clickedBy.id == 'nav-home')) {
                
                navMenuClick = new CustomEvent('navMenuClick');

                if (clickedBy.id == 'menu-photo-album') {
                    navMenuClick = new CustomEvent('navMenuClick', { detail: 'menu-photo-album' });
                } 
                if (clickedBy.id == 'nav-home') {
                    navMenuClick = new CustomEvent('navMenuClick', { detail: 'nav-home' });
                } 
                if (clickedBy.id == 'menu-home') {
                    navMenuClick = new CustomEvent('navMenuClick', { detail: 'menu-home' });
                } 
                let elem = document.getElementById('navbar');
                elem.dispatchEvent(navMenuClick);
            }
    
        });
    },
    events: navMenuClick
};


export default navbar;

$(document).ready(function() {


});


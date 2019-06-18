import $ from 'jquery';
import './navbar.css';
import content from './navbar.html';


//https://www.phpied.com/3-ways-to-define-a-javascript-class/

//object literal - singleton
let navbar = {
    content: content,
    hook: function() {
        //put a hook here...
    }
};

//new function - singleton
// let navbar = new function() {
//     this.content = content;
//     this.getInfo = function() {
//         alert('here');
//     }
// };

export default navbar;

$(document).ready(function() {

});


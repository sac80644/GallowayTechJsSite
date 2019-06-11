import $ from 'jquery';
import './header.css';
import content from './header.html';


//https://www.phpied.com/3-ways-to-define-a-javascript-class/

//object literal - singleton
// let header = {
//     content: content,
//     getInfo: function() {
//         alert('hi');
//     }
// };

//new function - singleton
let header = new function() {
    this.content = content;
    this.getInfo = function() {
        alert('here');
    }
};

export default header;

$(document).ready(function() {

});


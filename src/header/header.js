import $ from 'jquery';
import './header.css';
import content from './header.html';

//object literal - singleton
// let header = {
//     content: content,
//     getInfo: function() {
//         alert('hi');
//     }
// }

//new function - singleton
let header = new function() {
    this.content = content;
    this.getInfo = function() {
        alert('here');
    }
}

//https://www.phpied.com/3-ways-to-define-a-javascript-class/

//can we do an IIF
// export default (function header(){
//     this.content = content;
//     this.getInfo = function() {
//         alert('here');
//     }
// })();

$(document).ready(function() {

});

export default header;
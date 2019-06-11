import $ from 'jquery';
import './header.css';
import content from './header.html';


let header = {
    content: content,
    getInfo: function() {
        alert('hi');
    }
};

export default header;


$(document).ready(function() {

});


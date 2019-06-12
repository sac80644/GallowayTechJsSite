import $ from 'jquery';
import './footer.css';
import content from './footer.html';


let footer = {
    content: content,
    getInfo: function() {
        alert('hi');
    }
};

export default footer;


$(document).ready(function() {

});


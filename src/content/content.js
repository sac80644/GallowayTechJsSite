import $ from 'jquery';
import './content.css';
import what_patterns from './what_patterns.html';
import favorite_patterns from './favorite_patterns.html';

let content = {
    what_patterns,
    favorite_patterns,
    hook: function() {
        //put a hook here...
    }
};


export default content;

$(document).ready(function() {

});

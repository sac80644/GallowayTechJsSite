import $ from 'jquery';
import './content.css';
import patterns from './patterns.html';
import development from './development.html';
import recent from './recent.html';

let content = {
    patterns,
    development,
    recent,
    hook: function() {
        //put a hook here...
    }
};


export default content;

$(document).ready(function() {

});

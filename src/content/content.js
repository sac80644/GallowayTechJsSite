import $ from 'jquery';
import './content.css';
import patterns from './patterns.html';
import development from './development.html';
import recent from './recent.html';
import professional from './professional.html';

let content = {
    patterns,
    development,
    recent,
    professional,
    hook: function() {
        //put a hook here...
    }
};


export default content;

$(document).ready(function() {

});

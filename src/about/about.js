import $ from 'jquery';

export default function aboutContent() {
    const element = document.createElement('div');
    element.innerHTML = 'something about this place';
    return element;
}

$(document).ready(function() {
    // var divAbout = $('#divAbout');
    // divAbout.append("appended text");
});

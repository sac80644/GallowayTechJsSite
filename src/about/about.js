import $ from 'jquery';

export default function aboutContent() {
    const element = document.createElement('div');
    element.innerHTML = 'dynamic content';
    return element;
}

$(document).ready(function() {
    
});

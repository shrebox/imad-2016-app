console.log('Loaded!');

// change main-text
var element = document.getElementById('main-text');

element.innerHTML = 'Hey edited text!';

// move the image

var img = document.getElementById('madi');
img.onclick  = function () {
   img.style.marginLeft = '100px'; 
} ;
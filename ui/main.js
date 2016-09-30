/*console.log('Loaded!');

// change main-text
var element = document.getElementById('main-text');

element.innerHTML = 'Hey edited text!';

// move the image

var img = document.getElementById('madi');

var marginLeft = 0;

function moveRight(){
     marginLeft = marginLeft + 10;
     img.style.marginLeft = marginLeft + 'px';
}

img.onclick  = function () {
   
   var interval = setInterval(moveRight,100);
} ;*/

//counter code

var button = document.getElementById('counter');

button.onclick = function(){
    
    // create request
    var request = new XMLHttpRequest();
    
    // Capture the request and store it in a variable
    request.onreadystatechange = function(){
      
      if(request.readyState === XMLHttpRequest.DONE){
          
          if(request.status === 200)
          {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
            
          }
      }
        
    };
    
    // Make request
    request.open('GET', 'http://shrebox.imad.hasura-app.io/counter',true);
    request.send(null);
};


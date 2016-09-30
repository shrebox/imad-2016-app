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

// Submit name

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    
    // create request
    var request = new XMLHttpRequest();
    
    // Capture the request and store it in a variable
    request.onreadystatechange = function(){
      
      if(request.readyState === XMLHttpRequest.DONE){
          
          if(request.status === 200)
          {
             //Make a request to the server and send the name
             //Capture the list of the names and render it as a list.
             
            var names = request.responseText;
            names = JSON.parse(names);
            
            var list ='';
            for(var i=0; i<names.length;i++)
            {
              list+= '<li>' + names[i] + '</li>';
            }
            
            var ul = document.getElementById('namelist');
            ul.innerHTML = list;
            
          }
      }
        
    };
    
    // Make request
    request.open('GET', 'http://shrebox.imad.hasura-app.io/counter',true);
    request.send(null);
  
  
  
};


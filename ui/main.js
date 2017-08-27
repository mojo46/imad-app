//edit content on html
var element = document.getElementById('person');
element.innerHTML='MANOJ MOJO';

//move the image
var image= document.getElementById('pic');
var marginLeft=0;
function marginright(){
     marginLeft=marginLeft + 1 ;
     image.style.marginLeft= marginLeft + 'px';
    }
image.onclick = function(){
    var interval =setInterval(marginright,1);
    
};

// code for counter
var button = document.getElementById('b1');
var span;
button.onclick= function(){
    
   //Make the request to the counter End point
    var request = new XMLHttpRequest();
    if(request !== null){
    alert();}
    
    //Capture the response and store it in avariable
    request.onreadystatechange = function() {
      if(request.readystate === XMLHttpRequest.DONE){
          if(request.status === 200){
              var counter = responseText;
              if(counter !== null){
              alert('counter');}
              span = document.getElementById('s1');
              span.innerHTML = counter.toString();
          }
      }  
      // request not completed
    };
    
    request.open('GET','http://mjksv007.imad.hasura-app.io/counter',true);
    request.send('null');
};
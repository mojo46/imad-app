//edit content on html
var element = document.getElementById('person');
element.innerHTML='new world';

//move the image
var image= document.getElementById('pic');
var marginLeft=0;
function marginright(){
     marginleft=marginleft -10;
     image.style.marginLeft= marginLeft + 'px';
    }
image.onclick = function(){
    var interval =setInterval(marginright,100);
    
};

// code for counter
var button = document.getElementById('b1');
var counter=0;
var span;
button.onclick= function(){
    counter =counter +1;
    span = document.getElementById('s1');
    span.innerHTML = counter.toString();
};
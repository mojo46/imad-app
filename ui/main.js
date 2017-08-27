//edit content on html
var element = document.getElementById('person');
element.innerHTML='new world';

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
var button = document.getElementById('click_me');
var counter=0;
var span;
button.onclick= function(){
    counter =counter +1;
    span = document.getElementById('span1');
    span.innerHTML = counter.toString();
};
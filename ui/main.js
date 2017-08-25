//edit content on html
var element = document.getElementById('person');
element.innerHTML='new world';

//move the image
var image= document.getElementById('pic');
image.onclick = function(){
    image.style.marginLeft="100px";
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
var button = document.getElementById('counter');
var counter=0;
button.onclick = function(){
    //Make the request to counter
    
    //capture the response and storeit in a variable
    
    //renser the variable in the current span
    
    ++counter;
    var span= document.getElementById('count');
    span.innerHTML = counter.toString();
    
};
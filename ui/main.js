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
button.onclick= function(){
    
   //Make the request to the counter End point
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in avariable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            // do some action
            if(request.status === 200){
                var counter = request.responseText;
                var spn = document.getElementById("s1");
                spn.innerHTML = counter.toString();
                //document.getElementById("s1").innerHTML = counter.toString();
            }
        }
    };
    request.open('GET','http://mjksv007.imad.hasura-app.io/counter',true);
    request.send('null');
        
    
};
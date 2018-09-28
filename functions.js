var images = new Array();
images[0] = "dog1.jpg";
images[1] = "dog2.jpg";
images[2] = "dog3.jpg";
images[3] = "dog4.jpeg";
images[4] = "dog5.jpg";

function printImages(){
    for (i = 0; i < images.length; i++){
        document.getElementById("gallery").innerHTML += "<a href='#'><img onclick='makeBig("+i+")' src='" + images[i] + "' width='200px' height='250px' id='"+ i +"' /></a> "; 
        }      
}
            
function makeBig(i){
    document.getElementById("container").innerHTML = "<img src='"+images[i]+"' />"; 
}


    //Timer Function
myTimer = setInterval(timer, 3000);

    function timer(){
        var randNum;
        randNum = Math.ceil(Math.random() * images.length);
        document.getElementById('container').innerHTML = "<img src='"+images[randNum - 1]+"' />";
        }

window.addEventListener("load", printImages);
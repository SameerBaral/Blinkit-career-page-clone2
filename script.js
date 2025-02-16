let box1=document.getElementById('box1')
let box2=document.getElementById('box2')
let box3=document.getElementById('box3')
let box4=document.getElementById('box4')
let box5=document.getElementById('box5')
let box6=document.getElementById('box6')
let box7=document.getElementById('box7')
let box8=document.getElementById('box8')


box1.style.display="block";   //initial state

console.log(box1);


function slideRight(){

    if(box1.style.display=="block"){
       box1.style.display="none";
       box2.style.display="block";
       console.log(box1);
    }
    else if(box2.style.display=="block"){
       box2.style.display="none";
       box3.style.display="block";
    } 
    else if(box3.style.display=="block"){
        box3.style.display="none";
        box4.style.display="block";
    }
    else if(box4.style.display=="block"){
       box4.style.display="none";
       box5.style.display="block";
    } 
    else if(box5.style.display=="block"){
        box5.style.display="none";
        box6.style.display="block";
    }
    else if(box6.style.display=="block"){
        box6.style.display="none";
        box7.style.display="block";
    }
    else if(box7.style.display=="block"){
       box7.style.display="none";
       box8.style.display="block";
    } 
    else{
        box8.style.display="none";
        box1.style.display="block";
    }
 }



function slideLeft(){

    if(box1.style.display=="block"){
       box1.style.display="none";
       box2.style.display="block";
       console.log(box1);
    }
    else if(box2.style.display=="block"){
       box2.style.display="none";
       box3.style.display="block";
    } 
    else if(box3.style.display=="block"){
        box3.style.display="none";
        box4.style.display="block";
    }
    else if(box4.style.display=="block"){
       box4.style.display="none";
       box5.style.display="block";
    } 
    else if(box5.style.display=="block"){
        box5.style.display="none";
        box6.style.display="block";
    }
    else if(box6.style.display=="block"){
        box6.style.display="none";
        box7.style.display="block";
    }
    else if(box7.style.display=="block"){
       box7.style.display="none";
       box8.style.display="block";
    } 
    else{
        box8.style.display="none";
        box1.style.display="block";
    }
}
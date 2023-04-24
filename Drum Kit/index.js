
//detecting button press
var n = document.querySelectorAll(".drum").length;

for(var i  = 0;i<n;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function() {

    
    //console.log(this.style.color = "white"); //this -> is the identity of button that is trigger the event listener 

   var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

//     if(this.innerHTML== "w")
//     {var audio = new Audio("sounds/crash.mp3");
//     audio.play();
//     }
//     else if(this.innerHTML== "a")
//     {var audio = new Audio("sounds/kick-bass.mp3");
//     audio.play();
//     }
//     else if(this.innerHTML== "s")
//     {var audio = new Audio("sounds/snare.mp3");
//     audio.play();
//     }
//     else if(this.innerHTML== "d")
//     {var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
//     }
//     else if(this.innerHTML== "j")
//     {var audio = new Audio("sounds/tom-2.mp3");
//     audio.play();
//     }
//     else if(this.innerHTML== "k")
//     {var audio = new Audio("sounds/tom-3.mp3");
//     audio.play();
//     }
//     else if(this.innerHTML== "l")
//     {var audio = new Audio("sounds/tom-4.mp3");
//     audio.play();
//     }
});
}

//detecting key press

document.addEventListener("keydown",function(event)
{
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            {
             var audio = new Audio("sounds/crash.mp3");
             audio.play();
            }
            break;
        case "a":
            {
                var audio = new Audio("sounds/kick-bass.mp3");
             audio.play();
            }
            break;
        case "s":
            {
                var audio = new Audio("sounds/snare.mp3");
             audio.play();
            }
            break;
        case "d":
            {
                var audio = new Audio("sounds/tom-1.mp3");
             audio.play();
            }
            break;
        case "j":
            {
            var audio = new Audio("sounds/tom-2.mp3"); 
            audio.play();
            }
            break;
        case "k":
            {
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
            }
            break;
            case "l":
                {var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                }
                break;  
    }
}


//add animation

function buttonAnimation(currentKey){
  var activeButton =  document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");

   //remove/timeout the  press class after 100 milliseconds
   setTimeout(function(){
    activeButton.classList.remove("pressed");
   },100);
   
}









//invoke the diffent button without for loop
//alert function invoke on click a drum;
// document.querySelectorAll(".drum")[0].addEventListener("click",function() {
//     alert("i got clicked");
// })
// document.querySelectorAll(".drum")[1].addEventListener("click",function() {
//     alert("i got clicked");
// })
// document.querySelectorAll(".drum")[2].addEventListener("click",function() {
//     alert("i got clicked");
// })
// document.querySelectorAll(".drum")[3].addEventListener("click",function() {
//     alert("i got clicked");
// })
// document.querySelectorAll(".drum")[4].addEventListener("click",function() {
//     alert("i got clicked");
// })
// document.querySelectorAll(".drum")[5].addEventListener("click",function() {
//     alert("i got clicked");
// })
// document.querySelectorAll(".drum")[6].addEventListener("click",function() {
//     alert("i got clicked");
// })


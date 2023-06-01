function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


document.querySelector(".pro1").addEventListener("click",function(){
    document.querySelector(".bg-model1").style.display="flex";
});
document.getElementById("img1").addEventListener("click",function(){
    document.querySelector(".bg-model1").style.display="flex";
});
document.getElementById("close1").addEventListener("click",function(){
    document.querySelector(".bg-model1").style.display="none";
});


document.querySelector(".pro2").addEventListener("click",function(){
    document.querySelector(".bg-model2").style.display="flex";
});
document.getElementById("img2").addEventListener("click",function(){
    document.querySelector(".bg-model2").style.display="flex";
});
document.getElementById("close2").addEventListener("click",function(){
    document.querySelector(".bg-model2").style.display="none";
});


document.querySelector(".pro3").addEventListener("click",function(){
    document.querySelector(".bg-model3").style.display="flex";
});
document.getElementById("img3").addEventListener("click",function(){
    document.querySelector(".bg-model3").style.display="flex";
});
document.getElementById("close3").addEventListener("click",function(){
    document.querySelector(".bg-model3").style.display="none";
});


// document.querySelector(".pro4").addEventListener("click",function(){
//     document.querySelector(".bg-model4").style.display="flex";
// });
// document.getElementById("img4").addEventListener("click",function(){
//     document.querySelector(".bg-model4").style.display="flex";
// });
// document.getElementById("close4").addEventListener("click",function(){
//     document.querySelector(".bg-model4").style.display="none";
// });


// document.querySelector(".pro5").addEventListener("click",function(){
//     document.querySelector(".bg-model5").style.display="flex";
// });
// document.getElementById("img5").addEventListener("click",function(){
//     document.querySelector(".bg-model5").style.display="flex";
// });
// document.getElementById("close5").addEventListener("click",function(){
//     document.querySelector(".bg-model5").style.display="none";
// });

// document.querySelector(".pro6").addEventListener("click",function(){
//     document.querySelector(".bg-model6").style.display="flex";
// });
// document.getElementById("img6").addEventListener("click",function(){
//     document.querySelector(".bg-model6").style.display="flex";
// });
// document.getElementById("close6").addEventListener("click",function(){
//     document.querySelector(".bg-model6").style.display="none";
// });

// class work
document.querySelector(".videos").addEventListener("click",function(){
    document.querySelector(".video").style.display="flex";
});
document.getElementById("close-vi").addEventListener("click",function(){
    document.querySelector(".video").style.display="none";
});

// weekly work
document.querySelector(".class-work").addEventListener("click",function(){
    document.querySelector(".week").style.display="flex";
});
document.getElementById("close-wk").addEventListener("click",function(){
    document.querySelector(".week").style.display="none";
});

document.querySelector(".week1").addEventListener("click",function(){
  document.querySelector(".week1-work").style.display="flex";
  
  document.querySelector(".week2-work").style.display="none";
  document.querySelector(".week3-work").style.display="none";
  document.querySelector(".week4-work").style.display="none";
  document.querySelector(".week5-work").style.display="none";
  document.querySelector(".week6-work").style.display="none";
  
});
document.querySelector(".week2").addEventListener("click",function(){
  document.querySelector(".week2-work").style.display="flex";

  document.querySelector(".week1-work").style.display="none";
  document.querySelector(".week3-work").style.display="none";
  document.querySelector(".week4-work").style.display="none";
  document.querySelector(".week5-work").style.display="none";
  document.querySelector(".week6-work").style.display="none";
});
document.querySelector(".week3").addEventListener("click",function(){
  document.querySelector(".week3-work").style.display="flex";

  document.querySelector(".week1-work").style.display="none";
  document.querySelector(".week2-work").style.display="none";
  document.querySelector(".week4-work").style.display="none";
  document.querySelector(".week5-work").style.display="none";
  document.querySelector(".week6-work").style.display="none";
});

// document.querySelector(".week4").addEventListener("click",function(){
//   document.querySelector(".week4-work").style.display="flex";

//   document.querySelector(".week1-work").style.display="none";
//   document.querySelector(".week2-work").style.display="none";
//   document.querySelector(".week3-work").style.display="none";
//   document.querySelector(".week5-work").style.display="none";
//   document.querySelector(".week6-work").style.display="none";
// });
// document.querySelector(".week5").addEventListener("click",function(){
//   document.querySelector(".week5-work").style.display="flex";

//   document.querySelector(".week1-work").style.display="none";
//   document.querySelector(".week2-work").style.display="none";
//   document.querySelector(".week3-work").style.display="none";
//   document.querySelector(".week4-work").style.display="none";
//   document.querySelector(".week6-work").style.display="none";
// });
// document.querySelector(".week6").addEventListener("click",function(){
//   document.querySelector(".week6-work").style.display="flex";

//   document.querySelector(".week1-work").style.display="none";
//   document.querySelector(".week2-work").style.display="none";
//   document.querySelector(".week3-work").style.display="none";
//   document.querySelector(".week4-work").style.display="none";
//   document.querySelector(".week5-work").style.display="none";
// });
// document.querySelector(".week2").addEventListener("click",function(){
//   document.querySelector(".week-work").style.display="none";
// });


document.querySelector(".movie-review").addEventListener("click",function(){
    document.querySelector(".movie").style.display="flex";
});
document.getElementById("close-mv").addEventListener("click",function(){
    document.querySelector(".movie").style.display="none";
});

document.querySelector(".movie1").addEventListener("click",function(){
    document.querySelector(".movie1-work").style.display="flex";
  
    document.querySelector(".movie2-work").style.display="none";
    document.querySelector(".movie3-work").style.display="none";
    document.querySelector(".movie4-work").style.display="none";
   
  });

// document.querySelector(".movie2").addEventListener("click",function(){
//     document.querySelector(".movie2-work").style.display="flex";
  
//     document.querySelector(".movie1-work").style.display="none";
//     document.querySelector(".movie3-work").style.display="none";
//     document.querySelector(".movie4-work").style.display="none";
   
//   });

// document.querySelector(".movie3").addEventListener("click",function(){
//     document.querySelector(".movie3-work").style.display="flex";
  
//     document.querySelector(".movie1-work").style.display="none";
//     document.querySelector(".movie2-work").style.display="none";
//     document.querySelector(".movie4-work").style.display="none";
   
//   });

// document.querySelector(".movie4").addEventListener("click",function(){
//     document.querySelector(".movie4-work").style.display="flex";
  
//     document.querySelector(".movie1-work").style.display="none";
//     document.querySelector(".movie2-work").style.display="none";
//     document.querySelector(".movie3-work").style.display="none";
   
//   });





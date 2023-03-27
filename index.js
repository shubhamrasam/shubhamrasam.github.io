// let navName = document.querySelectorAll(".nav-name");
// let navIcon = document.querySelectorAll('.nav-link');



// for(icon of navIcon){

//     icon.addEventListener('mouseover',function(e){

//        e.target.nextElementSibling.classList.add('show');

//     });
     
// }



// for(icon of navIcon){

//     icon.addEventListener('mouseout',function(e){

//        e.target.nextElementSibling.classList.remove('show');
       
//     });
     
// }

// document.querySelector("#resume-link-1").addEventListener("click", ()=>{
//     window.open(
//       "https://drive.google.com/file/d/1rECL7KJFC1-2hGxOBOBvwORNaAp_T0aj/view?usp=sharing",
//       "_blank"
//     );
// })

function resumeTab1() {
    window.location.assign(
      "https://drive.google.com/drive/folders/1_hxUi0ODJDkLokBvpF4pEFndVft60u26")
    ;
  }

document.querySelector("#resume-link-2").addEventListener("click", ()=>{
    window.open(
      "https://drive.google.com/file/d/1rECL7KJFC1-2hGxOBOBvwORNaAp_T0aj/view?usp=sharing",
      "_blank"
    );
})


let githubBtn = document.querySelector("#contact-github");

githubBtn.addEventListener('click',function(){
    
    window.location.href = 'https://github.com/shubhamrasam';

})

let linkedinBtn = document.querySelector(".fa-linkedin");

linkedinBtn.addEventListener('click',function(){
    
    window.location.href = 'https://linkedin.com/in/shubhamrasam24';

})

let contactBtn = document.querySelector("#contact-btn");

contactBtn.addEventListener('click',function(){
    
    window.location.href = '#contact';

})


let closeBtn = document.querySelector(".closebtn");
let openBtn = document.querySelector(".openbtn");

openBtn.addEventListener("click",function(){
    document.querySelector("#side-window").style.width = "250px";
})
  
closeBtn.addEventListener("click",function(){
    document.querySelector("#side-window").style.width = "0";
})
  

let btnform = document.querySelector("#form-submit");

btnform.addEventListener('click',function(){

    window.location.href = "https://shubhamrasam.github.io/"

})



  
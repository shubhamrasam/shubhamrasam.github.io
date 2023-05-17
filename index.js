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
//       "https://drive.google.com/file/d/1rECL7KJFC1-2hGxOBOBvwORNaAp_T0aj/view?usp=sharing"
//     );
// })

function resumeDownload(){

    window.open(
        "https://drive.google.com/file/d/1rECL7KJFC1-2hGxOBOBvwORNaAp_T0aj/view?usp=sharing"
      );
}

// document.querySelector("#resume-link-2").addEventListener("click", ()=>{
//     window.open(
//       "https://drive.google.com/file/d/1rECL7KJFC1-2hGxOBOBvwORNaAp_T0aj/view?usp=sharing",
//       "_blank"
//     );
// })


let githubBtn = document.querySelector("#contact-github");

githubBtn.addEventListener('click',function(){
    
    window.open(
        "https://github.com/shubhamrasam",
        "_blank"
      );

})

let linkedinBtn = document.querySelector(".fa-linkedin");

linkedinBtn.addEventListener('click',function(){
    
    window.open(
        "https://linkedin.com/in/shubhamrasam24",
        "_blank"
      );

})

let githubBtn2 = document.querySelector("#footer-github");

githubBtn2.addEventListener('click',function(){
    
    window.open(
        "https://github.com/shubhamrasam",
        "_blank"
      );


})

let linkedinBtn2 = document.querySelector("#footer-linkedin");

linkedinBtn2.addEventListener('click',function(){

    window.open(
        "https://linkedin.com/in/shubhamrasam24",
        "_blank"
      );

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


let navbarColor = document.querySelectorAll(".nav-link");

console.log(navbarColor);
for(let nav of navbarColor){

    nav.addEventListener("click",function(){
    
        let curr = document.querySelector("#nav-bar a.home");
        curr.classList.remove('home');        
        nav.classList.add("home");

    })

}

function plantNurseryGithub(){

    window.location.href = "https://github.com/shubhamrasam/Online-Plant-Nursery-Application";

}

function plantNurseryVideo(){

    window.location.href = "https://drive.google.com/file/d/1XVCnEWx718Q4y331l-4mV2-329j_1H0V/view";

}

function busGithub(){

    window.location.href = "https://github.com/shubhamrasam/Bus-Ticket-Reservation-System";

}

function busVideo(){

    window.location.href = "https://drive.google.com/file/d/1eJrllPGWZAFCVbpIXCRH8BtwwkNbtlhG/view";

}


function stepUpGithub(){

    window.location.href = "https://github.com/VaishnaviDhobale/step-up";

}

function stepUpLive(){

    window.location.href = "https://vaishnavidhobale.github.io/step-up/";

}

function tourGithub(){

    window.location.href = "https://github.com/shubhamrasam/Tour-Advisor";

}

function tourLive(){

    window.location.href = "https://tour-advisor12.netlify.app/index.html";

}
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

let githubBtn = document.querySelector(".fa-github");

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



function openside() {
    document.querySelector("#side-window").style.width = "250px";
  }
  
  function closeside() {
    document.querySelector("#side-window").style.width = "0";
  }
  
  let input = document.querySelector("#search-input")
  input.addEventListener("click",function(){
      alert("Login First")
  })
  
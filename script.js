// tyong animation
var typed = new Typed(".typing",{
    strings:["", "Web Develpoer", "web Designer", "Mobile App"],
    typespeed:30,
    BackSpeed:30,
    loop:true
})


// // toggle style switcher 

// const styleWsitcherToggle = document.querySelector(".style-switcher-toggler");
// styleWsitcherToggle.addEventListener("click", ()=>{
//     document.querySelector(".style-switcher").classList.toggle("open");
// })
// // hide style-switcher on scroll
// window.addEventListener("scroll", ()=>{
//     if(document.querySelector(".style-switcher").classList.contains("open")){
//         if(document.querySelector(".style-switcher").classList.remove("open"));
//     }
// })
// // theme colors 
// const alternateStyles = document.querySelectorAll(".alternate-style");
// function setActiveStyle(styleTitle) {
//           alternateStyles.forEach((style) => {
//             if (style.getAttribute("title") === color) {
//               style.removeAttribute("disabled");
//             } else {
//               style.setAttribute("disabled", "true");
//             }
//           });
//         }

// // light and dark 
// const dayNightSwitcher = document.querySelector(".day-night");    
// dayNightSwitcher.addEventListener("click", () => {
//     dayNightSwitcher.querySelector("i").classList.toggle("fa-sum")
//     dayNightSwitcher.querySelector("i").classList.toggle("fa-moon")
//     document.body.classList.toggle("dark");
// })
// window.addEventListener("load", () => {
//     if(document.body.classList.contains("dark")){
//         dayNightSwitcher.querySelector("i").classList.add("fa-sum")
//     }
//     else{
//         dayNightSwitcher.querySelector("i").classList.add("fa-moon")
//     }
// })


document.addEventListener("DOMContentLoaded", function () {
    const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
    const styleSwitcher = document.querySelector(".style-switcher");
    const dayNightSwitcher = document.querySelector(".day-night");
    const alternateStyles = document.querySelectorAll(".alternate-style");
  
    // Toggle Style Switcher
    styleSwitcherToggler.addEventListener("click", () => {
      styleSwitcher.classList.toggle("active");
    });
  
    // Toggle Dark Mode
    dayNightSwitcher.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  
    // Switch Styles
    alternateStyles.forEach((style) => {
      style.addEventListener("click", () => {
        const styleTitle = style.getAttribute("title");
        activateStyle(styleTitle);
      });
    });
  
    // Activate Style
    function activateStyle(styleTitle) {
      alternateStyles.forEach((style) => {
        if (style.getAttribute("title") === styleTitle) {
          style.removeAttribute("disabled");
        } else {
          style.setAttribute("disabled", "true");
        }
      });
    }
  });
  
let menuIcon = document.querySelector(".nav-left");
let siderbar = document.querySelector(".siderbar");
let container3 = document.querySelector(".container3");
menuIcon.onclick = function(){
    siderbar.classList.toggle("small-sidebar");
    container3.classList.toggle("large-container");
}
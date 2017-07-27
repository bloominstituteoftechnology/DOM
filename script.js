function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

const dropdown_menu = document.getElementById("courses");
const myDropdown = document.getElementById("myDropdown");

dropdown_menu.addEventListener("mouseover", function(event){
    document.getElementById("myDropdown").classList.toggle("show");
});
myDropdown.addEventListener("mouseout", function(event){
    document.getElementById("myDropdown").classList.toggle("show");
});


// ---------------------Navbar Sticky-----------------------------
document.getElementById("inverse-nav").style.visibility = "hidden";

window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 50 ) {
        document.getElementById("default-nav").style.visibility = "hidden";
        document.getElementById("inverse-nav").style.visibility = "visible";
    } 
    else {
       document.getElementById("default-nav").style.visibility = "visible";
       document.getElementById("inverse-nav").style.visibility = "hidden";
    }
};



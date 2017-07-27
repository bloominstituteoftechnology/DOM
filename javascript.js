const menu1 = document.getElementById('menu1'); 
const menu2 = document.getElementById('menu2'); 
const menu3 = document.getElementById('menu3'); 
const menu4 = document.getElementById('menu4'); 
const menu5 = document.getElementById('menu5'); 
const menu1_ = document.getElementById('menu1_'); 
const menu2_ = document.getElementById('menu2_'); 
const menu3_ = document.getElementById('menu3_'); 
const menu4_ = document.getElementById('menu4_'); 
const menu5_ = document.getElementById('menu5_'); 
const class1 = document.getElementsByClass('Class'); 

window.onscroll = function(ev) {

     console.log(`${window.scrollY}`);
    if (window.scrollY>=900) {
    //alert("activate other menu");
    }

    /*
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        alert("you're at the bottom of the page");
    }
    */
};


menu1.addEventListener("mouseover", function(event){
event.target.style.color = "gray";
});

menu1.addEventListener("mouseout", function(event){
event.target.style.color = "white";
});

menu1.addEventListener("click", function(event){
event.target.style.color = "gray";
});

menu2.addEventListener("mouseover", function(event){
event.target.style.color = "gray";
});

menu2.addEventListener("mouseout", function(event){
event.target.style.color = "white";
class1.style.display = 'none';
});

menu2.addEventListener("click", function(event){
event.target.style.color = "gray";
class1.style.display = 'block';
});

menu3.addEventListener("mouseover", function(event){
event.target.style.color = "gray";
});

menu3.addEventListener("mouseout", function(event){
event.target.style.color = "white";
});

menu3.addEventListener("click", function(event){
event.target.style.color = "gray";
});

menu4.addEventListener("mouseover", function(event){
event.target.style.color = "gray";
});

menu4.addEventListener("mouseout", function(event){
event.target.style.color = "white";
});

menu4.addEventListener("click", function(event){
event.target.style.color = "gray";
});

menu5.addEventListener("mouseover", function(event){
event.target.style.color = "gray";
});

menu5.addEventListener("mouseout", function(event){
event.target.style.color = "white";
});

menu5.addEventListener("click", function(event){
event.target.style.color = "gray";
});


menu1_.addEventListener("mouseover", function(event){
event.target.style.color = "gray";
});

menu1_.addEventListener("mouseout", function(event){
event.target.style.color = "white";
});

menu1_.addEventListener("click", function(event){
event.target.style.color = "gray";
});

menu2_.addEventListener("mouseover", function(event){
event.target.style.color = "gray";
});

menu2_.addEventListener("mouseout", function(event){
event.target.style.color = "white";
});

menu2_.addEventListener("click", function(event){
event.target.style.color = "gray";
});

menu3_.addEventListener("mouseover", function(event){
event.target.style.color = "gray";
});

menu3_.addEventListener("mouseout", function(event){
event.target.style.color = "white";
});

menu3_.addEventListener("click", function(event){
event.target.style.color = "gray";
});

menu4_.addEventListener("mouseover", function(event){
event.target.style.color = "gray";
});

menu4_.addEventListener("mouseout", function(event){
event.target.style.color = "white";
});

menu4_.addEventListener("click", function(event){
event.target.style.color = "gray";
});

menu5_.addEventListener("mouseover", function(event){
event.target.style.color = "gray";
});

menu5_.addEventListener("mouseout", function(event){
event.target.style.color = "white";
});

menu5_.addEventListener("click", function(event){
event.target.style.color = "gray";
});


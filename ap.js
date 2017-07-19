window.onscroll = function() {
  var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  if (scrollTop >= document.getElementById("d").offsetTop) {
    // document.getElementById("navi").style.position = "fixed";
    // document.getElementById("d").style.display = " ";
    // document.getElementsByClassName("hide").style.display = "none";
    // document.getElementById("hide").style.visibility = "visible";
    // document.getElementById("hide").style.position = "static";
    document.getElementById("move").style.position = "fixed";
    document.getElementById("move").style.paddingTop = "0px";
    document.getElementById("color").style.backgroundColor = "#000000";
    document.getElementById("nav").style.opacity = "1";
  } else {
    // document.getElementById("hide").style.position = "static";
    //document.getElementById("hide").style.visibility = "visible";
    // document.getElementByClass("d").style.display = " ";
    // div.classList.remove(".hide");
    // document.getElementById("hide").style.visibility = "hidden";
    document.getElementById("move").style.position = "static";
    document.getElementById("move").style.paddingTop = "0px";
    document.getElementById("color").style.backgroundColor = "navy";
    document.getElementById("nav").style.opacity = ".75";

  }
}
console.log("hello");

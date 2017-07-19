window.onscroll = function() {
  var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  if (scrollTop >= document.getElementById("d").offsetTop) {
    document.getElementById("move").style.position = "fixed";
    document.getElementById("move").style.paddingTop = "0px";
    document.getElementById("color").style.backgroundColor = "#000000";
    document.getElementById("nav").style.opacity = "1";
  } else {
    document.getElementById("move").style.position = "static";
    document.getElementById("move").style.paddingTop = "0px";
    document.getElementById("color").style.backgroundColor = "navy";
    document.getElementById("nav").style.opacity = ".75";

  }
}

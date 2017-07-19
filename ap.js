window.onscroll = function() {
  var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  if (scrollTop >= document.getElementById("d").offsetTop) {
    document.getElementById("navi").style.position = "fixed";
    document.getElementById("d").style.marginTop = "50px";
    document.getElementById("navi").style.marginTop = "-50px";
  } else {
    document.getElementById("navi").style.position = "static";
    document.getElementById("d").style.marginTop = "0px";
    document.getElementById("navi").style.marginTop = "0px";
  }
}
console.log("hello");
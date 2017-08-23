$(document).ready(function(){                    
  $(window).scroll(function(){                          
      if ($(this).scrollTop() > 700) {
          $('#hidden-nav').slideDown(200);
      } else {
          $('#hidden-nav').slideUp(200);
      }
  });
});
$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();

    if(scroll >= 150){
      $("#navbrand").addClass("bg-dark");
    }
    else{
      $("#navbrand").removeClass("bg-dark");
    }
  })
});

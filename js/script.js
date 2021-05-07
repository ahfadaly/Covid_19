$(document).ready(function(){

	$('.navbar-nav li').click(function(){
		$(this).addClass('active').siblings().removeClass("active");
       });

});

$("header .navbar-nav li a").click(function(){

    $('body,html').animate({
       scrollTop : $($(this).attr('href')).offset().top -100
      });
  });

    var scrollTop = $(".scroll-top");
      if($(window).scrollTop() > 500 ){
        scrollTop.slideDown(400);
        
      } else { 
        scrollTop.slideUp(400);
      }   
 
function myname() {
  var name = prompt("Please enter your name", "");
  if (name != null) {
    document.getElementById("demo").innerHTML =
    " Hello my friend " + name +" <br>! How are you today?";
  }
}
$(window).scroll(function() {scrollFunction()});
function scrollFunction() {
  var windscroll = $(window).scrollTop();
  if (windscroll >= 100) {
    $("nav").css("top", "0");
  } else {
    $("nav").css("top", "-50px");
  }
}
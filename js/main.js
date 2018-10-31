// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
$(window).scroll(function() {scrollFunction()});
function scrollFunction() {
  var windscroll = $(window).scrollTop();
  if (windscroll >= 30) {
    $("nav").css("top", "0");
  } else {
    $("nav").css("top", "-50px");
  }
}
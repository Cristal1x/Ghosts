$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    vertical: true,
    arrows: false,
    verticalSwiping: true,
    adaptiveHeight: true
  });

  //Implementing navigation of slides using mouse scroll
  $('.slider').on('wheel', (function(e) {
  e.preventDefault();
  if (e.originalEvent.deltaY > 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
}));  
});
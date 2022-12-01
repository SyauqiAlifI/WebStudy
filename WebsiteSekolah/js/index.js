function myResize() {
  let winWidth = screen.width
  if (winWidth < 1400) {
    $('#stomp2-support').removeClass('col-md-3');
    $('#stomp2-support').addClass('col-md-4');
    $('#stomp2-card3').addClass('mt-5');
  } else {
    $('#stomp2-support').addClass('col-md-3');
    $('#stomp2-support').removeClass('col-md-4');
    $('#stomp2-card3').removeClass('mt-5');
  }
}
$(window).resize(function (){ 
  myResize(); 
});
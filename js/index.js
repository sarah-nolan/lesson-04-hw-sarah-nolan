// You only need to use the document.ready function once because it refers to the initial page load
$(document).ready(function() {
  $('.readmore').click(function(){
    $('#show-this-on-click').slideDown();
    $('#show-this-on-click').show();
    $('.readless').show();
    $('.readmore').hide();
    event.preventDefault();
  });
// });

// $(document).ready(function() {
  $('.readless').click(function(){
    $('.readless').hide();
    $('.readmore').show();
    $("#show-this-on-click").hide(500);
    $("#show-this-on-click").slideUp();
  	event.preventDefault();
  });
// });

// $(document).ready(function() {
  $('#learnmorebutton').click(function(){
  	$('#learnmoretext').slideDown();
    $('#learnmoretext').show();
    $('#learnmorebutton').hide();
  	event.preventDefault();
  });
});

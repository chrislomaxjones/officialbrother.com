var smallNav = false;


$('.arrow-container img').click(scrollToMusic);

$(window).scroll(function() {


  if ($(document).scrollTop() > 0 && !smallNav) {
    console.log(smallNav);
    if (!$('nav').hasClass('small')) {
      $('nav').addClass('small');
      $('nav').removeClass('big');
    }
    smallNav = true;
    console.log("HELLO");
    console.log(smallNav);
  }

  if ($(document).scrollTop() == 0 && smallNav) {
    $('nav').addClass('big');
    $('nav').removeClass('small');
    smallNav = false;
  }

  // If we have a small nav and we're scrolling

});

function scrollToExhibition() {
	$('html, body').animate({
						'scrollTop' : $(".exhibition-splash").position().top
	},2000);
}

function scrollToNews() {
	$('html, body').animate({
						'scrollTop' : $(".news-frame").position().top
	},2000);
}

function scrollToLive() {
	$('html, body').animate({
		'scrollTop' : $(".live-frame").position().top
	},2000);
}

function scrollToMusic() {
	$('html, body').animate({
		'scrollTop' : $(".music-frame").position().top
	},2000);
}

$(document).ready(function() {
  $('#red a').click(scrollToExhibition);
  $('#flesh a').click(scrollToMusic);
  $('#lightblue a').click(scrollToLive);
  $('#darkblue a').click(scrollToNews);
});

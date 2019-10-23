$('.feedback-button').click(function(){
    $('.popup-fast').css({'display':'flex', 'top': $(window).scrollTop()});
    $('.bg-popup').fadeIn();
});

$('.close').click(function(){
    $('.popup-fast').css({'display':'none'});
    $('.bg-popup').fadeOut();
});


$('.price-button').click(function(){
    $('.popup-fast').css({'display':'flex', 'top': $(window).scrollTop()});
    $('.bg-popup').fadeIn();
});

$('.close').click(function(){
    $('.popup-fast').css({'display':'none'});
    $('.bg-popup').fadeOut();
});



$(document).ready(function() { 
	
	$(".img-gall").click(function(){	
	  	var img = $(this);	
		var src = img.attr('src'); 
		$("body").append("<div class='popup'>"+ 
						 "<div class='popup_bg'></div>"+ 
						 "<img src='"+src+"' class='popup_img' />"+ 
						 "</div>");
		$(".popup").fadeIn(200); 
		$(".popup_bg").click(function(){	
			$(".popup").fadeOut(200);	
      setTimeout(function() {	
			  $(".popup").remove(); 
			}, 200);
		});
	});
	
});


var btn = document.querySelector('#up-button');
function magic() {
  if (window.pageYOffset > 10) {
    btn.style.opacity = '1';
  } else { btn.style.opacity = '0'; }
}
btn.onclick = function () {
	window.scrollTo(0,0);
};

window.onload = magic;



$('.feedback-form-button').on('click', function(){
	var link = document.createElement('a');
	link.setAttribute('href', '/download');
	link.setAttribute('download', 'download.png');
	link.click();
	return false;
});


$(window).scroll(function(){

    if (window.pageYOffset >= 100) {

}

else
{

}


})


$(document).ready(function() {

	
	AOS.init({
		once: true
	});
	
	$(".navigation__menu").on('click',function() {
		$(".menu__wrapper").css("transform","translateX(0%)");
	});

	$(".menu__wrapper *").on('click',function() {
		$(".menu__wrapper").css("transform","translateX(100%)");
	});


$("a.menu__link").click(function () {
var elementClick = $(this).attr("href")
var destination = $(elementClick).offset().top;
jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
return false;
});


	
})
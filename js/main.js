

$(window).scroll(function(){

    if (window.pageYOffset >= 100) {

}

else
{

}


})


$(document).ready(function() {
	$(".navigation__menu").on('click',function() {
		$(".menu__wrapper").css("transform","translateX(0%)");
	});

	$(".menu__close").on('click',function() {
		$(".menu__wrapper").css("transform","translateX(100%)");
	});

	
})
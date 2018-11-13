

// $(".portfolio__item").on("mouseover", function () {
//   $(".item-hint").css("height","50%");
//   $(".item-hint").css("opacity","1");
// });


// $(".portfolio__item").on("mouseout", function () {
//   $(".item-hint").css("height","0%");
//   $(".item-hint").css("opacity","0");
// });


$(".descript").on("mouseover", function () {
  $(".description__line").css("width","100%");
  $(".description__line").css("opacity","1");
  $(".description__line").css("margin-top","3px");
  $(".description__line").css("margin-bottom","3px");
  $(".revers").css("transform","rotate3d(-1, 0, 0, 0deg)");
  $(".revers").css("top","-22px");
  $(".norevers").css("transform","rotate3d(1, 0, 0, 180deg)");
  $(".norevers").css("top","22px");
});


$(".descript").on("mouseout", function () {
  $(".description__line").css("width","0%");
  $(".description__line").css("opacity","0");
  $(".description__line").css("margin-top","0px");
  $(".description__line").css("margin-bottom","0px");
  $(".revers").css("transform","rotate3d(1, 0, 0, 180deg)");
  $(".revers").css("top","0px");
    $(".norevers").css("transform","rotate3d(-1, 0, 0, 0deg)");
  $(".norevers").css("top","0px");
});


$(window).scroll(function(){

    if (window.pageYOffset >= 100) {

}

else
{

}


})





 //   $(window).scroll(function() {
 //        if (window.pageYOffset >= 100) {
 //            $(".navigation__box").css("background-color", "white").css("box-shadow", " 0 0px 10px rgba(51, 51, 51, 0.1)");
 //            $(".navigation *").css({ "color":"#050309", "border-color":"#050309"});
 //            $(".navigation .image").css("filter","brightness(0)");
 //            $(".nav__button").css("color","white");
 //    $(".nav__menu-item").hover( function() {
 //            $(this).css("border-bottom-color","transparent");
 //          },
 //          function() {
 //            $(this).css("border-bottom-color","#050309");
 //        }
 //          );
 //     $(".nav__logo-disk").hover( function() {
 //            $(this).css("border-bottom-color","transparent");
 //          },
 //          function() {
 //            $(this).css("border-bottom-color","#050309");
 //        }
 //          );
 //        } else {
 //            $(".navigation__box").css("background-color", "transparent").css("box-shadow", "unset");
 //             $(".navigation *").css({ "color":"white", "border-color":"#fffff8"});
 //            $(".navigation .image").css("filter","brightness(1)");
 //            $(".nav__button").css("color","white");
 // $(".nav__menu-item").hover( function() {
 //            $(this).css("border-bottom-color","transparent");
 //          },
 //          function() {
 //            $(this).css("border-bottom-color","#fffff8");
 //        }
 //          );
 //  $(".nav__logo-disk").hover( function() {
 //            $(this).css("border-bottom-color","transparent");
 //          },
 //          function() {
 //            $(this).css("border-bottom-color","#fffff8");
 //        }
 //          );
 //        }
 //    });
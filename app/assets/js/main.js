//Mobile nav
$(document).ready(function() {
	$(".item-menu").on("click", function(){
		$("nav ul").toggleClass("item-showing");
	});
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > 100){
			$("nav ul").removeClass("item-showing");
		}
	});

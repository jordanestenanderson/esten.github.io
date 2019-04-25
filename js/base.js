var previousColor = "#2f2f2f";
var colorHistory = ['#2f2f2f'];
var loaded = false;

function BaseJS() {

	$('.loader-link').click(function(evt) {

	        var hex = $(this).data('wipe');
	        // previousColor = $("#wipe")[0].style.background;
	        // console.log("let it be my day");
	        // console.log(previousColor);
	        // previousColor = hex;
	        // console.log(previousColor);
	        colorHistory.push(hex);
			console.log(colorHistory);

	        $("#wipe, .loader").css({background:hex});
	        $(".loader path").css({fill:hex});
	});

	$(window).on('popstate', function(event) {
		// console.log(colorHistory);
		// var hex = colorHistory.pop();
		// $("#wipe, .loader").css({background:hex});
		// $(".loader path").css({fill:hex});
		// console.log('Popped')
	});

	$('.burger').on('click', function() {
	  $('.body , .overlay, html').addClass('open');
	});

	$('.close, .menu-link, .menu-brand').on('click', function() {
	  $('.body , .overlay, html').removeClass('open');
	});

	$('.close, .menu-link, .menu-brand').on('click', function() {
	  $('.body , .overlay, html').removeClass('open');
	});

	$( document ).ready(function() {
		if(!loaded){
			var animation = new
			TweenMax.fromTo('#barba-wrapper', 1, {opacity: 0, y: -22, scale:1.02}, {opacity: 1, y: 0, scale:1, ease: Expo.linear}); 
			loaded = true;
		}
	});

}
BaseJS();
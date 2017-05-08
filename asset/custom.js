$(document).ready(function(){
	$(window).scroll(function(){
		var y = $(window).scrollTop();
		if (y > 500){
			$('.nav-kebbi').css('background-color', 'rgba(0, 41, 60, 0.8)');
		}
		else{
			$('.nav-kebbi').css('background-color', 'transparent');
		}
	})
})
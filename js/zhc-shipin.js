$(document).ready(function(){
	$('header img').first().on('touchend',function(){
		alert(1)
		window.history.back();
	})
})
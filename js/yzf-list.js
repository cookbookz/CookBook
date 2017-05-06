$(document).ready(function(){
//	console.log(1)
		console.log($('.yzf-list li xuangou'));
	$('.yzf-list li .xuangou').each(function(index,value){
		$(this).on('touchstart',function(){
			$('.yzf-chanpin').eq(index).toggleClass('active');
		})
	})
})

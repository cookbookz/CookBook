$(document).ready(function(){
	// 底部按钮们
	$('.zl-dl').on('touchstart',function(){
		$('.zl-zao').css('height','100%').on('transitionend',function(){

			$('.zl-yuandi').addClass('zl-show');
		})
	})
	$('.zl-close').on('touchstart',function(){

		$('.zl-yuandi').removeClass('zl-show');
		// $('.zl-chuancai').on('transitionend',function(){
			
			$('.zl-zao').off().css('height','0')
		// })
	})
})
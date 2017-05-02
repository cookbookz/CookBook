Zepto(function($){
	$('.zhc-zcheader img').last().on('touchstart',function(){
		$('body').addClass('.zhebox')
		$('html').addClass('.zhebox')
		$('.zhc-zhe').css('display','block')
	})
	
	$('.zhc-list').each(function(index,val){
		console.log(index,val)
		$('.zhc-list li',val).on('touchend',function(){
			$(this).addClass('active').siblings().removeClass()
		})
	})
	
	$('.zhc-yx li p').each(function(val,index){
		$(this).on('touchend',function(){
			$(this).parent().remove()
		})
	})
})
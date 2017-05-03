Zepto(function($){
	
	$('article').each(function(index,val){
		$('ul li',val).on('touchend',function(){
			$(this).children('div').toggle()
		})
	})
	
	$('.zhc-onebian ul li p').on('touchend',function(){
		$(this).parent().remove()
	})
})
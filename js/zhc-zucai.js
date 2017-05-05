$(document).ready(function(){
	
	$('.zhc-zcheader img').first().on('touchend',function(){
		window.history.back();
	})
	
	$('article').each(function(index,val){
		$('ul li',val).on('touchend',function(){
			$(this).children('div').toggle();
//			当前点击li中的文字内容
			let text=$(this).children('p').children('span').text()
			let texts=$('.zhc-onebian ul li span').text()
			if(text!=texts){
				
				$('.zhc-onebian ul').append(`<li><span>${text}</span><p>×</p></li>`);
			}
		})
	})
	$('.zhc-onebian ul').delegate('p','touchend',function(){
		$(this).parent().remove()
	})
	
})
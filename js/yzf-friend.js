$(document).ready(function(){
	$('.bb > li').each(function(index,value){
		$(this).on('touchstart',function(){
			$(this).on('touchmove',function(){
				$(this).toggleClass('move');
				$('.guanzhu').eq(index).toggleClass('active');
				$('.del').eq(index).toggleClass('active2');
				$('.del img:first-child').on('touchstart',function(){
					$('.bb > li').eq(index).prependTo('.bb');
					// $('.bb > li').eq(index).css('transform','translateX(0)');
					// $('.guanzhu').eq(index).css('display','block');
					// $('.del').eq(index).css('display','none');
				})
				$('.del img:nth-child(2)').on('touchstart',function(){
					$('.bb > li').eq(index).css('display','none');
				})
			})
		})
	})










//列表

	$('.yzf-center > span:first-child').on('touchstart',function(){
		$(this).css({
			"background":"#ffdc3b",
			"color":"#fff"
		});
		$('.yzf-center > span:nth-child(2)').css({
			'background':'#fff',
			'color':'#ffdc3b'
		});
	})
	$('.yzf-center > span:nth-child(2)').on('touchstart',function(){
		$(this).css({
			"background":"#ffdc3b",
			"color":"#fff"
		});
		$('.yzf-center > span:nth-child(1)').css({
			'background':'#fff',
			'color':'#ffdc3b'
		});
	})

})

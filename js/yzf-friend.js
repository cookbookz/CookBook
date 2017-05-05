$(document).ready(function(){
	$('.bb > li').each(function(index,value){
		$(this).on('touchmove',function(){
			$(this).css('transform','translateX(-0.5rem)');
			$('.guanzhu').eq(index).css('display','none');
			$('.del').eq(index).css('display','block');
//			$(this).on('touchstart',function(){
//			})
			$('.del img:first-child').on('touchstart',function(){
				$('.bb > li').eq(index).prependTo('.bb');
				$('.bb > li').eq(index).css('transform','translateX(0)');
				$('.guanzhu').eq(index).css('display','block');
				$('.del').eq(index).css('display','none');
			})
			$('.del img:nth-child(2)').on('touchstart',function(){
				$('.bb > li').eq(index).css('display','none');
//				$('.bb > li').eq(index).css('transform','translateX(0)');
//				$('.guanzhu').eq(index).css('display','block');
//				$('.del').eq(index).css('display','none');
			})
		})
	})
})


$(document).ready(function(){
	// 滑动
			var swiper2 = new Swiper('.swiper-container2', {
	        //  pagination: '.swiper-pagination',
		        slidesPerView: 2,
		        slidesOffsetBefore : 15,
		        slidesOffsetAfter : -100,
		        paginationClickable: true,
		        simulateTouch : true,
		        spaceBetween: 30,
		        freeMode: true
		   });
		   
		   
		   $('.icon img:nth-child(3)').on('touchstart',function(){
		   		$('.zhezhao').css('display','block');
		   		console.log($('.zhezhao'));
		   })
		   
		   $('.zhezhao img:nth-child(2)').on('touchstart',function(){
		   		$('.zhezhao').css('display','none');
		   })
})
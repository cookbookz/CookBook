
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
    // 返回
    $('.yzf-nav img:first-child').on('touchstart',function(){
        history.back();
    })



	//美食做法
	$('.yzf-box4 li').each(function(index,value){
		$(this).on('touchstart',function(){
			$(this).children('img').css({"width":"4rem","height":"2rem","transition":"all 0.5s linear"}).end().siblings().children('img').css({"width":"3.5rem","height":"1.65rem","transition":"all 0.5s linear"});
            $(this).children('span').css({"line-height":"2rem","transition":"all 0.5s linear"}).end().siblings().children('span').css({"line-height":"1.65rem","transition":"all 0.5s linear"});
		})
	})
    //返回
//  $('.yzf-nav img:first-child').on('touchstart',function(){
//      history.back(0);
//      // console.log(1);
//  })
    //下拉
    $('.yzf-nav img:last-child').on('touchstart',function(){
		$('.yzf-slide').slideDown();
    })
		$('#wrapper').on('touchstart',function(e){
//			if((e.target==$('.yzf-nav img:last-child')[0])||(e.target==$('.yzf-slide>ul')[0])){
//			if(e.target==$('.yzf-nav img:last-child')[0]){
//				return;
//			}else{
				$('.yzf-slide').slideUp();		
//			}
		})

})
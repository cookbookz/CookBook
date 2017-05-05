$(document).ready(function(){
	
	$('.zhc-zcheader img').first().on('touchend',function(){
		window.history.back();
	})
	
	$('.zhc-zcheader img').last().on('touchstart',function(){
		$('body').addClass('.zhebox')
		$('html').addClass('.zhebox')
		$('.zhc-zhe').css('display','block')
	})
	
	$('.zhc-list').each(function(index,val){
		console.log(index,val)
		$('li',val).on('touchend',function(){
			$(this).addClass('active').siblings().removeClass()
			
//			当前点击的li里的文字内容
			let texts=$(this).text()
//			创建li 并设置文字内容
			$('.zhc-yx').append(`<li><span>${texts}</span><p>×</p></li>`)
		})
	})
	
	$('.zhc-yx').delegate('p','touchend',function(){
		$(this).parent().remove()
	})
	
//	清空筛选
	$('.zhc-qk').on('touchend',function(){
		$('.zhc-yx li').remove().children()
	})
//	完成
	$('.zhc-ends').on('touchend',function(){
		$('.zhc-zhe').css('display','none')
	})
	
	$('.zhc-end div').on('touchend',function(){
		$(this).addClass('active').siblings().removeClass('active')
	})
})

$(document).ready(function(){
	$('.top>a').on('touchstart',function(){
		location.href='ly2.html';
	})
	$('.ly-yxzc').on('touchstart',function(){
		location.href='ly3-2.html';
	})
	//手机验证
	$('#aa').validate({
		rules:{
			telephone:{
				required:true,
				minlength:11,
				maxlength:11,
			},
			password:{
				required:true,
				minlength:6,
				maxlength:20,
			},
						
		},
		messages:{
			telephone:{
				required:"手机号不能为空！！",
				minlength:"请输入正确的手机号！",
				maxlength:"请输入正确的手机号！",
			},
			password:{
				required:"密码不能为空，请输入密码！",
				minlength:"密码错误，请重新输入!",
				maxlength:"密码错误，请重新输入!",
				
			},
									
		},
	})
	
	$('.ly-del').on('touchstart',function(){
		$('#telephone').val('');
	})
	$('.ly-ljzc > a').on('touchstart',function(){
		$('.zc').removeClass('ly-yc');
		$('.ly-close').removeClass('ly-yc');
		$('.ly-zccg').removeClass('ly-yc');
		$('.ly-zc>a').removeClass('ly-yc').on('touchstart',function(){
			history.go(0);
		})
	})
	
	$('.ly-close').on('touchstart',function(){
		$('.zc').addClass('ly-yc');
		$('.ly-close').addClass('ly-yc');
		$('.ly-zccg').addClass('ly-yc');
		$('.ly-zc>a').addClass('ly-yc');
	})
	
	$('.ck').on('touchstart',function(){
		$('#password').attr('type','text');
	})
	
})
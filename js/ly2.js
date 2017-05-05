$(document).ready(function(){
	$('.ly-yxzc').on('touchstart',function(){
		location.href='ly2-2.html';
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
			confirm_password:{
				required: true,
				minlength:6,
				maxlength:20,
				equalTo: "#password",
			},			
		},
		messages:{
			telephone:{
				required:"请输入手机号！",
				minlength:"请输入正确的手机号！",
				maxlength:"请输入正确的手机号！",
			},
			password:{
				required:"密码不能为空，请输入密码！",
				minlength:"请输入一个6~20位的密码!",
				maxlength:"请输入一个6~20位的密码！",
				
			},
			confirm_password:{
				equalTo:"请输入相同的密码",
				required:"密码不能为空，请输入密码！",
				minlength:"请输入一个6~20位的密码!",
				maxlength:"请输入一个6~20位的密码！",
			},						
		}
	})
//	if($('#yanzheng').val()==null){
//		$('.ly-yz').removeClass('ly-yc');
//	}else{
//		if($('#yanzheng').val()==1234){
//			$('.ly-yz').addClass('ly-yc');
//		}else{
//			$('.ly-yz').removeClass('ly-yc');
//		}
//	};

	$('.ly-ljzc > a').delay(3000).on('touchstart',function(){
		$('.zc').removeClass('ly-yc');
		$('.ly-zccg').removeClass('ly-yc');
		$('.ly-zc>a').removeClass('ly-yc').on('touchstart',function(){
			location.href='ly3.html';
		})
	});
	$('.ck').on('touchstart',function(){
		$('#password').attr('type','text');
	})
	
})

$(document).ready(function(){
	$('.ly-sjzc').on('touchstart',function(){
		location.href="ly2.html";
	})	
	
	//邮箱验证
		$('#aa').validate({
		rules:{
			email:{
				required:true,
				email:true,
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
			email:{			
				required:"邮箱地址不能为空",
				email:'请输入正确的邮地址',
			},
			password:{
				required:"密码不能为空，请输入密码！",
				minlength:"请输入一个6~20位的密码!",
				maxlength:"请输入一个6~20位的密码！",
				
			},
			confirm_password:{
				required:"密码不能为空，请输入密码！",
				minlength:"请输入一个6~20位的密码!",
				maxlength:"请输入一个6~20位的密码！",
				equalTo:"请输入相同的密码",
			},
			
		}
	})
		
	//马上注册
	$('.ly-ljzc > a').delay(3000).on('touchstart',function(){
		$('.zc').removeClass('ly-yc');
		$('.ly-zccg').removeClass('ly-yc');
		$('.ly-zc>a').removeClass('ly-yc').delay(2000).on('touchstart',function(){
			location.href='ly3-2.html';
		})
	});
	$('.ck').on('touchstart',function(){
		$('#password').attr('type','text');
	})
})
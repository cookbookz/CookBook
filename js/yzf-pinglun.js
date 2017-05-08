$(document).ready(function(){
	$('textarea').on('touchstart',function(){
		$(this).html("");
	})
	
	    //返回
    $('.yzf-nav img:nth-child(2)').on('touchstart',function(){
        history.back(0);
        // console.log(1);
    })
})

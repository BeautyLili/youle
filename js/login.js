//读取cookie数据
$(function(){
	var username=$.cookie("username"),
		password=$.cookie("password");
	$("#userEmail").val(username);
	$("#passwd").val(password);
});
//淡入淡出轮播
$(function(){
	var divs=$(".login-box div"),
		currentIndex=0,
		nextIndex=1,
		len=divs.length;
	divs.each(function(i){
		var _div=document.createElement("em");
			$(_div).appendTo($(".login .login-box .wrapper-pages span"));
		if(i==0){
			$(_div).addClass("active");
		}
		$(_div).on("click",function(){
			if($(this).index()===currentIndex)
				return;
			nextIndex=$(this).index();
			move();
		});
	});
	var circles=$(".login .login-box .wrapper-pages span em");
	var timer=setInterval(move,5000);
	function move(){
		divs.eq(currentIndex).fadeOut(1000);
		divs.eq(nextIndex).fadeIn(1000);
		circles.eq(currentIndex).removeClass("active");
		circles.eq(nextIndex).addClass("active");

		currentIndex=nextIndex;
		nextIndex++;
		if(nextIndex>=len)
			nextIndex=0;
	}
});

$(function(){
	//hover30天登陆效果
	$("#J_help").hover(function(){
		$("#J_helptip").show();
	},function(){
		$("#J_helptip").hide();
	});
	//点击立即注册跳转到注册页面
	$("#reg").on("click",function(){
		location.href="../html/register.html";
	});
	//点击登陆的登陆
	$("#formSubmit").on("click",function(){
    	var username=$("#userEmail").val(),
			password=$("#passwd").val(),
			status=$("#J_autologin").prop("checked")
    	$.post("../php/login.php",{username:username,password:password},function(data){
    		var data=JSON.parse(data);
    		if(data.status==4){
				location.href="../html/index.html";
				$.cookie("username",username,{expires:1});
				
    		}else{
    			$(".input-wrap .psd-error-tips").text("用户名或密码错误");
    		}

    	}).done(function(){
    		if(status){
				$.cookie("username",username,{expires:30});
				$.cookie("password",password,{expires:30});
    		}
    	});
	});
});
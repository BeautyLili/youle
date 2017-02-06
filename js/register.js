function ajax(){
	var code;
	$.ajax({
		url:"http://route.showapi.com/26-4",
		data:{
			showapi_appid:"31486",
			showapi_sign:"9f1ccd3accac4aadb8bd266f30c97473",
		},
		success:function(data){
			code=data.showapi_res_body.text;
			var html="<img  style='width:118px;height:40px;' src="+data.showapi_res_body.img_path+">";
			$(".item-btn .code").html(html);
		}
	}).done(function(){
			$("#imgCode").focusout(function(){
				var imgcode=$("#imgCode").val();
				if(imgcode!==code){
					$(".reg-main .reg-imgCode .tip").text("验证码错误");
					$(".reg-main .reg-imgCode .tip").css("background","url(../images/register/icon.jpg) no-repeat left -76px")

				}else{
					$(".reg-main .reg-imgCode .tip").text();
				}
		});
	});
}
// 登陆注册检验
$(function(){
	ajax();
	// 手机框获取焦点时
	$("#username").focusin(function(){
		$(".reg-main .reg-phone .tip").text("填写正确的手机号，以便接受订单通知找回密码等");
		$(".reg-main .reg-phone .tip").css("color","#000");
		$(".reg-main .reg-phone .tip").css("background","url(../images/register/icon.jpg) no-repeat left  0px")
	});
	//失去焦点时
	$("#username").focusout(function(){
		var username=$("#username").val(),
			password=$("#password").val(),
			test_username=/^1[34578]\d{9}$/;
		if($(this).val()==""){
				$(".reg-main .reg-phone .tip").text("手机号不能为空");
				$(".reg-main .reg-phone .tip").css("color","#AC0001");
				$(".reg-main .reg-phone .tip").css("background","url(../images/register/icon.jpg) no-repeat left -76px")
				return;
		}
		if(!(test_username.test(username))){
			$(".reg-main .reg-phone .tip").text("手机号格式有误");
			return;
		}
	});
	//点击换一张，更改随机数
	$(".item-btn a").on("click",function(){
		ajax();
	});
	//密码判断
	$("#password").focusout(function(){
		var password=$("#password").val();
		var test_password=/^[a-zA-Z\d_]{6,20}$/;
		if(!(test_password.test(password))){
			$(".reg-main .reg-password .tip").text("密码太弱");
			$(".reg-main .reg-password .tip").css("background","url(../images/register/icon.jpg) no-repeat left -76px")
			return;
		}
	});
	//重复密码判断
	$(".item-input .password").focusout(function(){
		var repeat_password=$(".item-input .password").val();
		var password=$("#password").val();
		if(password!==repeat_password){
			$(".reg-main .reg-repeatpassword .tip").text("两次密码输入的不一样");
			return;
		}
	});
	//点击接受条款按钮
	$("#agreei").on("click",function(){
		if($(this).css("backgroundPosition")=="-93px -339px"){
			$(this).css("backgroundPosition","-115px -339px");
			$(".port-main .policymobtips").show();
			return;
		}else{
			$(this).css("backgroundPosition","-93px -339px");
			$(".port-main .policymobtips").hide();
		}
	});
	//点击立即注册时的效果
    $(".regMobBtn").on("click",function(){
    	var username=$("#username").val();
		var password=$("#password").val();
		var repeat_password=$(".password").val();
    	$.post("../php/register.php",{username:username,password:password},function(data){
    		var data=JSON.parse(data);
    		if(data.status==4){
    			alert(data.msg);
    			location.href="../html/login.html";
    		}else{

    			alert(data.msg);
    		}

    	});
	});

});
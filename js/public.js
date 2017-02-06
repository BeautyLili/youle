// hover上去的函数效果
 function hover(name,inhover,out){
 	$(name).hover(function(){
 		$(this).css(inhover.name,inhover.val);
 	},function(){
 		$(this).css(out.name,out.val);
 	});
 }
 //tab切换函数
function tab(name1,name2,name3,oper){
	$(name1).on(oper,function(){
		var index=$(this).index();
		$(name1).removeClass("active");
		$(this).addClass("active");
		if(index==0){
			$(name2).slideDown();
			$(name3).hide();
		}
		if(index==1){
			$(name3).show();
			$(name2).hide();
		}
	});
}
//划入隐藏显示函数
function hoverhide(name1,name2){
	$(name1).hover(function(){
		$(name2).show();
	},function(){
		$(name2).hide();
	});
}
//读取cookie
 $(function(){
 	var cookie=$.cookie("username");
 	if(!(cookie==="undefined")){
 		var html="<a href='#' style='color:#0066CC'>"+cookie+"</a> "+"<span>您好，欢迎来到邮乐网</span>";
 		$("#user").html(html);
 	}else{
 		$("#user").html();
 	}
 });
//页面顶部菜单栏下拉效果
 $(function(){
  	 $(".licat").hover(function(){
		$(".allcategory").slideDown();
		$(this).css("border","0");
		$(this).css("background","#fff");
 	 },function(){
		$(".allcategory").hide();
		$(this).css("background","#F7F7F7");
 	 });
	 $(".allcategory").hover(function(){
		$(".allcategory").show();
 	 },function(){
		$(".allcategory").hide();
 	 });
});

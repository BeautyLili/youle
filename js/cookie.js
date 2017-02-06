//读取cookie
 $(function(){
 	var cookie=$.cookie("username");
 	if(!(cookie==="undefined")){
 		var html="<a href='#' style='color:#0066CC'>"+cookie+"</a> "+"<span>您好，欢迎来到邮乐网</span>";
 		$("#user").html(html);
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
 	 // 全部分裂hover效果
 	  $(".head-nav .cate-hd").hover(function(){
		$(this).css("background-position-y","-76px");
 	  },function(){
 	  	$(this).css("background-position-y","-16px");
 	  });
 });
// 导航菜单单hover效果
$(function(){
	$(".head-nav .navlinks li").hover(function(){
		$(this).css("background","#6C0709");
	},function(){
		$(this).css("background","#A71B1B");
	});
	$(".navcon ul li").on("mouseenter",function(){
		$(this).css("background","#FFFFFF");
	});
	$(".navcon ul li").on("mouseleave",function(){
		$(this).css("background","#FFFFFF");
	});
});
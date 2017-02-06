//划入隐藏显示函数
function hoverhide(name1,name2){
	$(name1).hover(function(){
		$(name2).show();
	},function(){
		$(name2).hide();
	});
}
$(function(){
	hoverhide(".headername .cate-hd",".headername .header .head-nav .cate-bd");
	hoverhide(".headername .header .head-nav .cate-bd","this");
	// 全部分类菜单导航块效果
	$(".cate-bd dt").hover(function(){
		$(this).next().show();
	},function(){
		$(this).next().hide();
	});
	hoverhide(".cate-bd dd","this");

	var crumbItem=$(".search-ul .crumbItem"),
		index;
	crumbItem.hover(function(){
		index=$(this).index()-2;
		$(this).css("background","#8b8b8b");
		$(this).children("a").children("span").css("color","#fff");
		$(".e-close").eq(index).show();
		$(this).children("a").children("span").css("backgroundPosition","right -47px");
	},function(){
		$(this).children("a").children("span").css("color","#0E6EBF");
		$(this).css("background","#F6F6F6");
		$(".e-close").eq(index).hide();
		$(this).children("a").children("span").css("backgroundPosition","right -130px");
	});
	hoverhide(".e-close","this");
	hoverhide(".dizhiList .btnArea",".dizhiList dl");
	hoverhide(".dizhiList dl","this");
	$(".dizhiList dl a span").on("click",function(){
		var val=$(this).text();
		$(".dizhiList .btnArea").html(val);
	});
});
//更多选项和收其效果
$(function(){
	var factorBlock=$(".searchcontainer .searchFactorBox .factorBlock");
	function hidden(){
		factorBlock.each(function(index,element){
			var index=$(element).index();
			if(index>3){
				$(element).hide();
			}
		});
	}
	hidden();
	//点击更多选项查看为显示的内容
	$(".moreSelect .icon_arrowD").on("click",function(){
		if($(this).text()=="更多选项"){
			factorBlock.show();
			$(this).html("收起");
			$(this).css("backgroundPosition","82px -51px");
		}else if($(this).text()=="收起"){
			hidden();
			$(this).html("更多选项");
			$(this).css("backgroundPosition","82px -31px");
		}
	});
});
//获取商品数据
$(function(){
 	$.getJSON("../json/goodList.json").done(function(data){
 		var html=template("goods",data);
 		$(".goodList").html(html);
 		var em=$(".goodListBlock .event em");
 		$(".box .img").hover(function(){
			$(this).children(".btn-pin").show();
		},function(){
			$(this).children(".btn-pin").hide();
		});
		em.each(function(index,element){
			var val=$(element).text();
			if(!val){
				$(element).parent().hide();
			}
		});
 	});
});
//侧边导航栏效果
$(function(){
	$(".right-small-bar").on("mouseenter",function(){
		$(this).hide();
		$(".right-bar").show(100);
	});
	$(".right-bar").on("mouseleave",function(){
		$(this).hide();
		$(".right-small-bar").show();
	});
	$(".right-bar  p").hover(function(){
		$(this).css("cursor","pointer");
		$(this).children("i").css("background-position-x","-25px");
		$(this).css("background","#fff");
		$(this).children("span").show(50);
	},function(){
		$(this).children("i").css("background-position-x","0")
		$(this).children("span").hide();
		$(this).css("background","none");

	});
});

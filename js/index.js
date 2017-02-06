 //导航菜单单hover效果
$(function(){
	hover(".head-nav .navlinks li",{name:"background",val:"#6C0709"},{name:"background",val:"#A71B1B"});
	hover(".navcon ul li",{name:"background",val:"#FFFFFF"},{name:"background",val:"#FFFFFF"});
	// 全部分裂hover效果
	hover(".head-nav .cate-hd",{name:"background-position-y",val:"-76px"},{name:"background-position-y",val:"-16px"})
});
// 全部分类菜单导航块效果
$(function(){
	$(".cate-bd dt").hover(function(){
		$(this).next().show();
	},function(){
		$(this).next().hide();
	});
	$(".cate-bd dd").hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	});
});
//话费充值和水电煤切换效果
$(function(){
	tab(".slide-index h4",".col-right .chongzhi",".col-right .jiaofei","click");
	$(".chongzhi-money  select").on("click",function(){
		var money=$(this).val();
		var html=money+".00"+"<b>元</b>";
		$(".chongzhi-money i").html(html);
	});
	// 低价来袭，新品上市切换
	tab(".wraper-title h3","#wraper-products ul:nth-child(1)","#wraper-products ul:nth-child(2)","mouseenter");
	//css移动效果
	hover(".topline ul li a",{name:"transform",val:"translateY(-5px)"},{name:"transform",val:"translateY(0px)"});
	hover(".topline ul li a",{name:"transition",val:"all 0.5s ease-out"},{name:"transition",val:"all 0.5s ease-out"});
});
 //淡入淡出轮播
 $(function(){
 	var lis=$(".mod-topslide > .slide-items li"),
 		currentIndex=0,
 		nextIndex=1,
 		len=lis.length;
 	var ul_bg=["#ED1515","#BF000E","#D6233C","#3A0800","#FCC6A0","#FFFFFF","#2A1C51","#5FB5FF"];
 		lis.each(function(i){
 			var _li=document.createElement("li");
 				$(_li).text(i+1).appendTo($(".pages"));
 			if(i==0){
 				$(_li).addClass("curr");
 			}
 			$(_li).on("click",function(){
 				if($(this).index()===currentIndex)
 					return;
 				nextIndex=$(this).index();
 				move();
 			});
 		});
 	var circles=$(".pages li");
 	var timer=setInterval(move,3000);
 		function move(){
 			lis.eq(currentIndex).fadeOut(1000);
 			lis.eq(nextIndex).fadeIn(1000);
 			circles.eq(currentIndex).removeClass("curr");
 			circles.eq(nextIndex).addClass("curr");
 			$(".slide-items").css("background",ul_bg[currentIndex]);
 			currentIndex=nextIndex;
 			nextIndex++;
 			if(nextIndex>=len)
 				nextIndex=0;
 		}
 });
 //无缝轮播
 $(function(){
    var $ul=$(".small-slide"),
		 $lis=$(".small-slide").children("li"),
		 $len=$lis.length,
		 $lisWidth=$lis.eq(0).width(),
		 currentIndex=1,
		 nextIndex=2,
		 first=$lis.eq(0).clone(true),
		 last=$lis.eq($len-1).clone(true);
	//复制第一个和最后一个节点
	first.appendTo($ul)	;
	last.insertBefore($lis.eq(0));
	//添加小圆点
	var $circles=[];
	$lis.each(function(i){
		var _li=document.createElement("li");
			$circles.push(_li);
		$(_li).appendTo($(".small-page"));
		if(i==0){
			$(_li).addClass("smallactive");
		}
		$(_li).on("click",function(){
			var index=i;
			nextIndex=index+1;
			move();
		});
	});
	//鼠标放在容器上时停止定时器
    $(".right-small-slide").on("mouseenter",function(){
		clearInterval(timer);
		$(".prev").css("display","block");
		$(".next").css("display","block");
	});
	$(".right-small-slide").on("mouseleave",function(){
		timer=setInterval(move,3000);
		$(".prev").css("display","none");
		$(".next").css("display","none");
	});
	//点击上一页下一页
	$(".prev").on("click",function(){
		nextIndex=currentIndex-1;
		move();
	});
	$(".next").on("click",function(){
		move();
	});
	$len=$len+2;
	$ul.width($len*$lisWidth+"px");
	$ul.css("left",-1*currentIndex*$lisWidth+"px");
	
	var timer=setInterval(move,5000);
	function move(){
		var _left=-1*nextIndex*$lisWidth;

		var circleIndex = nextIndex === 0 ? $len - 3 : (nextIndex === $len - 1? 0 : nextIndex - 1);
		$($circles).each(function(i){
			$(this).removeClass("smallactive");
		});
		$($circles[circleIndex]).addClass("smallactive");
      currentIndex:nextIndex;
		nextIndex++;
		$ul.animate({
			left:_left+"px"
		},1000,function(){
			if(nextIndex>=$len){
			$ul.css("left",-$lisWidth+"px");
			currentIndex=1;
			nextIndex=2;
			}
			if(currentIndex==0){
			$ul.css("left",-1*($len-2)*$lisWidth+"px");
			currentIndex=$len-2;
			nextIndex=$len-1;
			}
		});
	}
 });
  //动态访问底价和最新商品
 $(function(){
 	$.getJSON("../json/cheaper.json").done(function(data){
 		var html=template("cheaper-new",data);
		document.getElementById("wraper-products").innerHTML=html;
 	});
 });
 $(function(){
 	$.getJSON("../json/floor.json").done(function(data){
 		var html=template("f2-ul",data);
 		$("#channel-f2-f11").html(html);
 	});
 });
 //楼层导航栏效果
 $(function(){
 	$(window).on("scroll",function(){
 		var offtop=$(".channel").first().offset().top,
 			 winHeight=$(window).height(),
 			 scrollTop=$(window).scrollTop();
 		if(scrollTop>offtop-winHeight/2){
 			$("#floatFloor").show();
 		}else{
 			$("#floatFloor").hide();
 		}
 		$(".channel").each(function(index,element){
 			var _offsetTop=$(element).offset().top;
 			if(scrollTop>_offsetTop-winHeight/2){
 				$("#floatFloor a").children("span").show();
 				$("#floatFloor a").children("label").hide();
 				$("#floatFloor a").eq(index).children("span").hide().end().children("label").css("display","block");
 			}
 		});
 	});
 	$(".floatFloor").on("click","a",function(){
 		var _index=$(this).index(),
 			_offsetTop=$(".channel").eq(_index).offset().top;
 		$("html,body").stop().animate({scrollTop:_offsetTop},500);
 	});
 	$(".floatFloor div").on("click",function(){
 		$("html,body").stop().animate({scrollTop:0},500);
 	});
 	//导航栏移入移除效果
  	$(".floatFloor a").hover(function(){
 		$(this).children("span").css("display","none");
 		$(this).children("label").css("display","block");
 	},function(){
	 	$(this).children("span").css("display","block");
	 	$(this).children("label").css("display","none");
 	});
 });
 

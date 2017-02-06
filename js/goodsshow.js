//点击滑动等效果
$(function(){
	hoverhide(".storerate",".storedHeadDetailInfo");
	$(".storedHeadDetailInfo").hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	})
	hoverhide(".store2d",".store2d .store2dB");
	$(".store2dB").hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	})
	//店家商铺热销按钮显示
	$(".p_l").on("click",function(){
		$(".goodsUl ul:nth-child(1)").show();
		$(".goodsUl ul:nth-child(2)").hide();
		$(this).siblings("span").text("1/2");
	});
	$(".p_r").on("click",function(){
		$(".goodsUl ul:nth-child(2)").show();
		$(".goodsUl ul:nth-child(1)").hide();
		$(this).siblings("span").text("2/2");

	});
	$(".innerwrap .innerwrap-smallImg li").on("click",function(){
		var index=$(this).index();
		var bigimg=$(".innerwrap-bigImg img"),
			lenimg=$(".len img");
		bigimg.hide();
		lenimg.hide();
		bigimg.eq(index).show();
		lenimg.eq(index).show();
		$(".innerwrap .innerwrap-smallImg li").removeClass("active");
		$(this).addClass("active");

	})
	//如果购物车为0则滑向时显示提示信息
	if($(".shopcart-num").html()==0){
		hoverhide(".shopcart-num",".shopcart-list");
	}
});
$(function(){
	var count=$("#pCount").val();
	$(".reduceQuantity").on("click",function(){
		if(count<=1){
			return;
		}else{
			count--;
			$("#pCount").val(count);
			$(".pCounttext").html(count+"件");
		}
	});
	$(".addQuantity").on("click",function(){
		count++;
		$("#pCount").val(count);
		$(".pCounttext").html(count+"件");
	});

});
	
$(function(){
	var products;
		$.cookie.json=true;

	$(".btn_add2cart").on("click",function(){
		var count=$("#pCount").val();
		var num=$(".shopcart-num").text();
		var sum=Number(count)+Number(num);
		alert("添加购物车成功");
		$(".shopcart-num").text(sum);
		//记录cookie的值
		
		//商品描述
		var _des=$("h1").text();
		//商品号
		var _id=$("#shangpinhao").text();
		//商品颜色型号规格
		var _color=$(".colorCubetext").text();
		//商品型号
		var _xinghao=$(".attrCubetext").text();
		//商品价格
		var _price=$("#price").text();
		//商品数量
		var _count=$(".shopcart-num").text();
		var product={
			id : _id,
			des : _des,
			color : _color,
			xinghao : _xinghao,
			count:_count,
			price:_price
		}
		products=$.cookie("products") || [];
		var i=index(_id,products);
		if(i===-1){
			products.push(product);
		}else{
			products[i].count++;
		}
		//数组保存到cookie中
		$.cookie("products",products,{expires:30,path:"/"});
	});
	//查找商品_id对应商品的在products数组中的索引
	function index(_id,products){
		var index=-1;
		$.each(products,function(i){
			if(_id===this.id){
				index=i;
				return false;
			}
		});
		return index;
	}
	$(".shopcart-num").text($.cookie("products")[0].count);
});
//放大镜效果
$(function(){
	//放大镜效果
	hoverhide(".innerwrap-bigImg",".len");
	hoverhide(".innerwrap-bigImg",".hover");
	var hoverwidth=$(".hover").outerWidth(),
		hoverheight=$(".hover").outerHeight(),
		bigwidth=$(".len").innerWidth(),
		bigheight=$(".len").innerHeight(),
		boxwidth=$(".innerwrap-bigImg").innerWidth(),
		boxheight=$(".innerwrap-bigImg").innerHeight(),
		rateX=bigwidth/hoverwidth,
		rateY=bigheight/hoverheight;
	$(".innerwrap-bigImg").on("mousemove",function(e){
		$(".len img").css({"width":rateX*bigwidth,"heigh":rateY*bigheight});
		var pageX=e.pageX,
			pageY=e.pageY;
		$(".hover").offset({left:pageX-hoverwidth/2,top:pageY-hoverheight});
		var {top:top,left:left}=$(".hover").position();
		if(left<0){
			left=0;
		}else if(left>=boxwidth-hoverwidth){
			left=boxwidth-hoverwidth;
		}
		if(top<0){
			top=0
		}else if(top>=boxheight-hoverheight){
			top=boxheight-hoverheight;
		}
		$(".hover").css({"left":left,"top":top});
		$(".len img").css({"left":-(left*rateX),"top":-(top*rateY)});
	});

})




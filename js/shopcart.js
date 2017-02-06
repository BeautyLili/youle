$(function(){
	//如果购物车没有内容
	$.cookie.json=true;
	var products=$.cookie("products") || [];
	if(products.length==0){
		$(".h_center").css("display","block");
		$(".cart-products").css("display","none");
		$(".mycart-bar").css("display","none");
	}else{
		$(".h_center").css("display","none");
		$(".cart-products").css("display","block");
		$(".mycart-bar").css("display","block");
	}
	$(".btn-cart-login").on("click",function(){
		$(".pdb-main").css("display","block");
	});
	$(".close").on("click",function(){
		$(".pdb-main").css("display","none");
	});
	//显示购物车中的商品信息
	$.each(products,function(index,element){
		$(".store-item:last").clone(true)
		.data("products",element)
		.children(".item-name .prod-name").text(element.des).end()
		.children(".item-attr .prod-color em").text(element.color).end()
		.children(".item-attr .prod-spec em").text(element.xinghao).end()
		.children(".item-price .em").text(element.price).end()
		.children(".item-count .prdCount").val(element.count).end()
		.children(".item-total em").text((Number(element.price)*Number(element.count)).toFixed(2)).end()
		.show().appendTo(".store-items");

	});

	function input(name1,name2,name3,name4,name5){
		$(name1).on("click",function(){
		var status=$(this).prop("checked");
		$(name2).prop("checked",status);
		if($(name3).prop("checked")){
			$(name4).hide();
			$(name5).removeClass("disabled");
			var val=$(".totalprice em").html();
			$(".mycart-bar em").html(val);
		}else{
			$(name4).show();
			$(name5).addClass("disabled");
			$(".mycart-bar em").html("0.00");
		}
	 });
	}
	input(".item-check .chk-all",".cart-products input[type='checkbox']",".store-item .item-check .chk-item",".dy-tip",".btn-ordernow")
	input(".item-check .chk-store",".cart-products input[type='checkbox']",".store-item .item-check .chk-item",".dy-tip",".btn-ordernow")
	input(".store-item .item-check .chk-item",".cart-products input[type='checkbox']",".store-item .item-check .chk-item",".dy-tip",".btn-ordernow")
});

$(function(){
	var count=$(".prdCount").val(),
		danjia=$(".prodprice em").html();
	$(".btn-minus").on("click",function(){
		if(count<=1){
			return;
		}else{
			count--;
			$(".prdCount").val(count);
			$(".totalprice em").html(count*danjia);
			$(".mycart-bar em").html(count*danjia);
		}
	});
	$(".btn-plus").on("click",function(){
		count++;
		$(".prdCount").val(count);
		$(".totalprice em").html(count*danjia);
		$(".mycart-bar em").html(count*danjia);

	});



});

/*页面加载*/
;$(function(){
	loadHtml("common/top.html","top");
	loadHtml("common/header.html","head");
	loadHtml("common/nav.html","navigate");
	loadHtml("common/link.html","link");
	loadHtml("common/footer.html","footer");
});
/*二级菜单*/
;$(function(){
	$(".manus").hide();
	/*一级菜单移入移出效果*/
	$(".manu b").mouseover(function(){
		$(".manus").show();
	})
	/*二级移入移出效果*/
	$(".manus>ul>li").hover(function(){
		$(this).find(".manu1").toggle();	
	});
	$(".manu b").mouseout(function(){
		$(".manus").hide();
	});
});

//这里持有data_store.js的对象
new_element=document.createElement("script"); 
new_element.setAttribute("type","text/javascript"); 
new_element.setAttribute("src","../js/data_store.js"); 
$(function(){	
	//图片预览小图移动效果,页面加载时触发
	var tempLength = 0; //临时变量,当前移动的长度
	var viewNum = 5; //设置每次显示图片的个数量
	var moveNum = 2; //每次移动的数量
	var moveTime = 300; //移动速度,毫秒
	var scrollDiv = $(".spec-scroll .items ul"); //进行移动动画的容器
	var scrollItems = $(".spec-scroll .items ul li"); //移动容器里的集合
	var moveLength = scrollItems.eq(0).width() * moveNum; //计算每次移动的长度
	var countLength = (scrollItems.length - viewNum) * scrollItems.eq(0).width(); //计算总长度,总个数*单个长度
	  
	//下一张
	$(".spec-scroll .next").bind("click",function(){
		if(tempLength < countLength){
			if((countLength - tempLength) > moveLength){
				scrollDiv.animate({left:"-=" + moveLength + "px"}, moveTime);
				tempLength += moveLength;
			}else{
				scrollDiv.animate({left:"-=" + (countLength - tempLength) + "px"}, moveTime);
				tempLength += (countLength - tempLength);
			}
		}
	});
	//上一张
	$(".spec-scroll .prev").bind("click",function(){
		if(tempLength > 0){
			if(tempLength > moveLength){
				scrollDiv.animate({left: "+=" + moveLength + "px"}, moveTime);
				tempLength -= moveLength;
			}else{
				scrollDiv.animate({left: "+=" + tempLength + "px"}, moveTime);
				tempLength = 0;
			}
		}
	});
	
});
//鼠标经过预览图片函数
function preview(img){
	$("#preview .jqzoom img").attr("src",$(img).attr("src"));
	$("#preview .jqzoom img").attr("jqimg",$(img).attr("bimg"));
}

//图片放大镜效果
$(function(){
	$(".jqzoom").jqueryzoom({xzoom:478,yzoom:478});
});
//加入购物车
;$(function(){
	$("#addshop").click(function(){
		//获取商品数量和颜色
		var number_ = $("input[name='number_']").val();
		var good_name = $(".DeTial_cont_c>h2").text();
		var code = $(".DeTial_cont_c>b>span").text();
		var price  = $(".DeTial_cont_c>i>span").text();
		if(null==number_||""==number_){
			alert("【提示】请选择数量");
			return fasle;
		}
		
		var date_ = new Date(); 
		var good = {
			"good_name":good_name,
			"number_":number_,
			"code":code,
			"price":price,
			"color_":"无",
			"module":"无",
			"shoop_name":"风尚自营",
			"img_src":"../image/detail/img1.png",
			"pk":date_.toGMTString()
		}
		
		var str_good = JSON.stringify(good);
		setCookie(date_.toDateString(),str_good);
		alert("【提示】加入购物车成功！！");	
	})
		
});
/*吸顶效果*/
;$(function(){
	var ulTop= $(".xnav ul").offset().top;
	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop();
		if(scrollTop>=ulTop){
			$(".xnav ul").css({position:"fixed",top:"0"});
		}else{
			$(".xnav ul").css({position:"static"});
		}
	});
});
/*选项卡*/
;$(function(){
	$(".xnav ul li").click(function(){
		$(this).css("background","#61A5D6");
		$(this).siblings().css("background","darkred");
		$(".cont_1").eq($(this).index()).show();
		$(".cont_1").eq($(this).index()).siblings().hide();
		return false;
	});
});

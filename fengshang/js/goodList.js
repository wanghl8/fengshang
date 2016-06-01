
;$(function() {
	/*头尾抽离*/
	loadHtml("common/top.html","top");
	loadHtml("common/header.html","head");
	loadHtml("common/nav.html","navigate");
	loadHtml("common/link.html","link");
	loadHtml("common/footer.html","footer");
	
	/*导航二级菜单*/
	$(".manus").hide();
	$(".manu b").hover(function(){
		$(".manus").toggle();
	})
	/*移入移出效果*/
	$(".manus>ul>li").hover(function(){
		$(this).find(".manu1").toggle();	
	});
	
	/*左侧菜单1*/
	var flag = false;
	$(".jiaju h3").click(function(){
		if(flag){
			$(".jiaju h3").css({"backgroundImage":"url(../image/list-li1.gif)"});
			flag = false;
		}
		else{
			$(".jiaju h3").css({"backgroundImage":"url(../image/list-li2.gif)"});
			flag =true;
		}
		
		$(".jiaju p").slideToggle(200);											
	});
	/*商品筛选*/	
	var m=$(".select p a");
	var flag = false;
	m.click(function(){
		if(flag){
			$(".select dl").css({overflow:"hidden"});
			m.html("更多<img src='../image/list/sq1.gif'/>");
			$(".select,.select dl").css("height","70px");
			flag = false;
		}else{
			$(".select dl").css({overflow:"auto"});  
			m.html("收起<img src='../image/list/sq.gif'/>");
			$(".select,.select dl").css("height","100px");
			flag =true;
		}			
	});
});

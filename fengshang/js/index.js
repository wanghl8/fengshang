/*头尾抽离*/
;$(function(){
	loadHtml("common/top.html","top");
	loadHtml("common/header.html","head");
	loadHtml("common/nav.html","navigate");
	loadHtml("common/link.html","link");
	loadHtml("common/footer.html","footer");
	
	/*二级菜单*/
    /*移入移出效果*/
	$(".manus>ul>li").hover(function(){
		$(this).find(".manu1").toggle();	
	});
	$(".bannerRight").mouseover(function(){
		$(".bannerRight").fadeTo("500",0.5);
	});
	$(".bannerRight").mouseout(function(){
		$(".bannerRight").fadeTo("500",1);
	});
/*图片定时显示*/
setInterval(function(){
		$(".tu img").toggle();
	},500);
			
//轮播图
	var index=0;
	$(".nav li:first").find("img").attr("src","../image/index/y.png");
	show();
	var timer=setInterval(change,3000);
	function show(){
		$(".pic1 ul li").eq(index).animate({left:-720},600);
	};
	/*图片自动轮播*/
	function change(){
		index++;
		if(index==$(".pic1 ul li").length){
			index=0;
		}
		$(".pic1 ul li").eq(index).fadeIn().siblings().fadeOut();
		var oli= $(".nav li").eq(index);
		changePageTndex(oli);
	}
/*点击图片改变*/
	$(".nav li").click(function(){
		
		changePageTndex($(this));
		clearInterval(timer);
		index=$(this).index()-1;
		change();
		timer=setInterval(change,2000);	
	});
/*小导航改变*/
	function changePageTndex(obj){
		var img=obj.find("img");
		img.attr("src","../image/index/y.png");
		img.parent().siblings().find("img").attr("src","../image/index/y1.png");
	};	
	
	
	//楼梯图效果
	/*点击左侧楼梯导航，右侧滚动响应高度*/
	var isClick=false;
	$(".loutiNav ul li:not(:last)").click(function(){
		isClick=true;
		$(".loutiNav ul li").find("span").removeClass("active");
		$(this).find("span").addClass("active");
		/*class_自定义属性*/
		var height=$("div.louti_1").eq($(this).index()).offset().top;
		$("html,body").stop().animate({scrollTop:height},500,function(){
			isClick=false;
		});
	});
	
	/*点击返回顶部*/
	$(".loutiNav ul li.last").click(function(){
		$("html,body").stop().animate({scrollTop:0},500);
	});
	
	/*右侧滚动条滚动，左侧导航改变*/
	$(window).scroll(function(){
		if(!isClick){
			var top=$(window).scrollTop();
			$(".louti_1").each(function(){
				if(top>=$(this).offset().top){
					var li=$(".loutiNav ul li").eq($(this).index());
					li.find("span").addClass("active").parent().siblings().find("span").removeClass("active");
				}
			});
		}	
	});

	/*top部分我的订单*/
	$(".tico").hover(function(){
		$(".tico .ul1").toggle();
	});
	var islogin=$.cookie("islogin");
	var login = $.cookie("register");
    var login_x = JSON.parse(login);
    if(null==islogin||""==islogin||null==login_x||""==login_x||undefined==islogin||undefined==login_x){
    	return false;
    }
    if("ture"==islogin){
    	$(".denglu").html(login_x.user_name);
    	$(".tui").text("退出");
    }
});


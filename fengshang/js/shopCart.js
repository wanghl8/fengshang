$(function(){
	/*页面加载*/
	loadHtml("common/top.html","top");
	loadHtml("common/footer.html","footer");  
});
/*购物车效果*/
;$(function(){
	var sum = 0;
	var tab_obj = $("#tab_good_list");
	var aCookie = document.cookie.split(";");  

	//购物车有东西
	if(aCookie.length>0&&aCookie[0].length>0){
		$(tab_obj).find("tr").eq(1).hide();
		$(tab_obj).find("tr").eq(2).show();
		$(tab_obj).find("tr").eq(3).show();
	//购物车为空	
	}else{
		$(tab_obj).find("tr").eq(1).show();
		$(tab_obj).find("tr").eq(2).hide();
		$(tab_obj).find("tr").eq(3).hide();
	}

	
	for(var i=0;i<aCookie.length;i++){
		var aCrumb = aCookie[i].split("=");  
		var temp = unescape(aCrumb[1]);
		var rowdata = eval("("+temp+")");
		var tr = $("<tr class='tlte1'>"+
		                 " <td class='th_1'>"+rowdata.shoop_name+"</td>"+
		                 " <td class='th_2'><img src='"+rowdata.img_src+"'/>"+rowdata.good_name+"</br>"+
		                 " 商品编号："+rowdata.code+"  颜色："+rowdata.color_+"  规格："+rowdata.module+"</td> "+
		                 " <td class='th_3'>"+rowdata.price+"</td> "+
		                 " <td class='th_4'>有货</td>"+
		                 " <td class='th_5'>"+rowdata.number_+"</td>"+
		                 " <td class='th_6'>￥"+parseInt(rowdata.price.replace(/¥/g,''))*parseInt(rowdata.number_)+"</td>"+
		                 " <td class='th_7'><a>收藏</a></br>"+
		                 "                  <a onclick='javascript:del_operate(this);'>删除</a>     "+
		                 "                 <input type='hidden' name='pk' value="+rowdata.pk+"></input>   </td> "+
		           "</tr>");
            $(".tlte").after(tr);
            
            sum +=parseFloat(parseInt(rowdata.price.replace(/¥/g,''))*parseInt(rowdata.number_));
	}
	
	$("#sum1").html("¥"+sum);
	$("#sum2").html("¥"+sum);
	
	
	
});

function del_operate(obj){
	var tr=$(obj).parent().parent();
	var pk =$(tr).find("input[name='pk']").val();
	delCookie(pk);
	window.location.reload();
}

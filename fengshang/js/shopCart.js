$(function(){
	/*页面加载*/
	loadHtml("common/top.html","top");
	loadHtml("common/footer.html","footer");  
});
/*购物车效果*/
;$(function(){
	var tab_obj = $("#tab_good_list");
	var aCookie = document.cookie.split(";");  
	if(aCookie.length>0){
		$(tab_obj).find("tr").eq(1).remove();
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
		                 "                  <a>删除</a>     "+
		                 "                 <input type='hidden' name='pk' value="+rowdata.pk+"></input>   </td> "+
		           "</tr>");
            $(".tlte").after(tr);
	}	
	/*$("#detel_shoop").click(function(){
		
	});*/
});




$(function(){

	contScroll();
})


function contScroll(){
	var conHeight = $("#m_content .scroll").height();
	
	var i = 0;
	setTimer = setTimeout(function(){
		window.setInterval(function(){
			i++;
			if(i<=conHeight){
				$("#m_content .scroll").animate({top:-i},0)
			}else{
				i=0;
				$("#m_content .scroll").animate({top:-i},0)
			}
		},50)
	},3000)
	$("#more,.scroll,#black_bg").click(function(){
		var winHeight = $(window).height();
		var showHeight = $(".scroll").height()+36;
		if(showHeight<=winHeight*0.7){
			var descHtml = $(".scroll").html();
			$("body").append("<div class=\"m_alert\">"+ descHtml + "<b id=\"m_close\">"+ "关闭" +"</b>" +"</div>"+"<b id=\"m_alertbg\">"+"</b>");
			$("html,body").css("overflow","hidden")	;
			var topHeight = (winHeight-showHeight)/2;
			$(".m_alert,#m_close").css("top",topHeight);
		}else{
			var descHtml = $(".scroll").html();
			$("body").append("<div class=\"m_alert\">"+ descHtml + "<b id=\"m_close\">"+ "关闭" +"</b>" +"</div>"+"<b id=\"m_alertbg\">"+"</b>");
			$("html,body").css("overflow","hidden")	;
		}

		$("#m_close,#m_alertgbg").click(function(){
			$(".m_alert,#m_alertbg").remove();
			$("html,body").css("overflow","auto")	;
		})
	});
}






/*lzd弹出*/

$(function(){
	$("#key").click(function(){
		
	$(".tp").css({"display":"block"});
	var bodyheight=$("body").height();
	$(".tp").css({"height":""+bodyheight+"px"});
	$(".centrality").css({"display":"block"});
	$(".centrality").css({"left":"-70%"});
	$(".centrality").animate({"left":"0%"},50);
	
	});
	$(".tp,.centrality .centrality-top em").click(function(){
		if($(".tp").css("display")=="block"){
			$(".tp").css({"display":"none"});
			$(".centrality").animate({"left":"-70%"},50);
		}
	});
});

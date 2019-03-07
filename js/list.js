



$(function(){

    tab("#site .site-t  li","#tab .site-b","cur");
    tab("#na .na-top ul li","#ta .list","curr");
    function tab(a,b,c){
        $(a).hover(function(){
        var index=$(this).index();
        $(this).parent().children().removeClass(c);
        $(this).addClass(c);
        $(b).hide();
        $(b).eq(index).show();
        });
      };
});




$(function(){

    
       //滚动
    $(window).scroll(function(){if($(window).scrollTop()>300){$("#Cbacktop").fadeIn("fast")}else{$("#Cbacktop").fadeOut("fast")}});
    $("#Cbacktop").click(function(){$("html,body").animate({scrollTop:0},200)});
    
    
})


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
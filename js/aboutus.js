$(function(){


    $(".ab_con .sec2_tabcons>.tabcon2").hide();
    $(document).on('click','.ab_con .sec2_tabs a', function () {
        let tabnum = $(".ab_con .sec2_tabs a").index($(this));
        let tabBg = $(this).index()+1;
        $(this).addClass("on").siblings().removeClass("on");
    
        $(".ab_con .sec2_tabcons>.tabcon").hide();
        $(".ab_con .sec2_tabcons>.tabcon:eq("+tabnum+")").show();				
        $(".ab_con").css({"background":"url('../img/aboutus/m11_bg"+tabBg+".jpg') no-repeat center bottom"});
    })
    
    

    $(".bu_tabs ul li").click(function(){
        let tabnum = $(".bu_tabs ul li").index($(this));
        $(this).addClass("on").siblings().removeClass("on");
        $(".bu_tabcons .list").hide();
        $(".bu_tabcons .list:eq("+tabnum+")").show();
        $(this).addClass("on").siblings().removeClass("on");
    })
});
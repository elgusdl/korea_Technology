$(function(){
    $('header').load('inc.html header > div');
    $('footer').load('inc.html footer > div');




    // $('.nav > li').on({
    //     mouseenter:function(){$('.head').addClass('active')},
    //     mouseleave:function(){$('.head').removeClass('active')}
    // });

  
    // langchk = 0;
    // $(".language").click(function(){
    //     if(langchk == 0){
    //         $(this).find("li").slideDown();
    //         langchk = 1;
    //     }else{
    //         $(this).find("li").slideUp();
    //         langchk = 0;
    //     }
    // })

    $('.menucenter > .nav > li').on({
        mouseenter:function(){
            if($(".head").hasClass("active")){
                $('.pc-topmenu').slideDown();
                $('.pc-topmenu').addClass('active');
                $(".pc-topmenu").css("height","auto").slideDown();
            }
        }
    });
    //     navNum = $(".menucenter > .nav > li").index($(this));
    //     $(".head").addClass("bl");
    //     $(".topmenu").hide();		
    //     $(".topmenu:eq("+navNum+")").show();			
    //     $(".pc-topmenu").css("height","auto").slideDown();
    //     $(this).addClass("on").siblings("li > a").removeClass("on");
    // });
    // $(".head").mouseleave(function(){
    //     // $("#header").removeClass("bl");
    //     $(".pc-topmenu").stop().slideUp();
    //     $(".menucenter > .nav > li").removeClass("on");
    // })

    // btnmenu = 0;
    // $(".btn_menu").click(function(){		
    //     if(btnmenu == 0){
    //         $("#header").addClass("all");
    //         $(this).stop().addClass("openmenu");		
    //         $(".pc_allmenu").css("top","0");
    //         $(".btn_menu .menu_text").text("CLOSE");
    //         $(".pc_allmenu").addClass("on");
    //         btnmenu = 1;
    //     }else{
    //         $("#header").removeClass("all");
    //         $(this).stop().removeClass("openmenu");
    //         $(".pc_allmenu").css("top","-100vh");
    //         $(".btn_menu .menu_text").text("ALL MENU");
    //         $(".pc_allmenu").removeClass("on");
    //         btnmenu = 0;	
    //     }			
    // });



    // $(".btn_top").click(function(){
    //     $('body,html').animate({scrollTop: 0}, 300);
    // })



    // $(".btn_x").click(function(){
    //     $("#bgblack").hide();
    //     $(".pop_st1").hide();
    //     $(".pop_form").hide();
    //     $(".history_pop").hide();
    //     $.fn.fullpage.setAllowScrolling(true);
    // })
    // $(".foot_pop").click(function(){
    //     var popNum = $(".foot_pop").index($(this));
    //     $("#bgblack").show();
    //     $(".pop_st1").show();
    //     $(".pop_st1 .conwrap>div").hide();
    //     $(".pop_st1 .conwrap>div:eq("+popNum+")").show();
    //     $.fn.fullpage.setAllowScrolling(false);
    // })
    // $(".btn_form").click(function(){
    //     $("#bgblack").show();
    //     $(".pop_form").show();
    //     $.fn.fullpage.setAllowScrolling(false);
    // })


    

    


});
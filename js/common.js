$(function(){
    $('header').load('inc.html header > #header', init);
    $('footer').load('inc.html footer > div');


    
    function init(){

        // 메인메뉴버튼
        // console.log( $(".menucenter .nav li") );
        $(".menucenter > .nav > li").mouseover(function(){
            navNum = $(".menucenter > .nav > li").index( $(this) );
            // $(".pc-topmenu").slideDown();
            $("#header").addClass("bl");
            $(".topmenu").hide();		
            $(".topmenu:eq("+navNum+")").show();			
            $(".pc-topmenu").css("height","auto").slideDown();
            $(this).addClass("active").siblings("li").removeClass("active");
        });
        $("#header").mouseleave(function(){
            $("#header").removeClass("bl");
            $(".pc-topmenu").stop().slideUp();
            $(".nav>li").removeClass("active");
        })



        // 오른쪽 버거메뉴버튼
        btnmenu = 0;
        $(".btn_menu").click(function(){		
            if(btnmenu == 0){
                $("#header").addClass("all");
                $(this).stop().addClass("openmenu");		
                $(".pc-allmenu").css("top","0");
                $(".btn_menu .menu_text").text("CLOSE");
                $(".pc-allmenu").addClass("on");
                btnmenu = 1;
            }else{
                $("#header").removeClass("all");
                $(this).stop().removeClass("openmenu");
                $(".pc-allmenu").css("top","-100vh");
                $(".btn_menu .menu_text").text("ALL MENU");
                $(".pc-allmenu").removeClass("on");
                btnmenu = 0;	
            }			
        });



        // 서브메뉴헤더
        $(window).scroll(function(){
            scroll = $(window).scrollTop();
            if(scroll > 0){
                $("#header").addClass("bl");	
            }else{
                $("#header").removeClass("bl");
            }
        })
        $("#header").mouseleave(function(){
            if(scroll > 0){
                $("#header").addClass("bl");	
            }else{
                $("#header").removeClass("bl");
            }		
        })



        // section scroll
        let len = $('.section').length;
        let delta, num = 0, move, slide;
        $(window).on('mousewheel DOMMouseScroll',function(e){
            
            delta = e.originalEvent.wheelDelta || e.originalEvent.detail;
            clearTimeout(move);
            move = setTimeout(function(){
                if(delta < 0){
                    if(num < len) num++; //down
                }else{
                    if(num > 0) num--;   //up
                }
                ani();
            },100);
        });
        //wheel end
        function ani(){
            if(num == 3){
                slide=$('#section3').position().top;
                $('#header').addClass('bl');
                //$('.section').removeClass('in-view').eq(num).addClass('in-view');
                // $('.indi a').removeClass('active')
                // $('.indi a').eq(num).addClass('active')
            }else{
                $('#header').removeClass('bl');
            }
                // slide = $('.section').eq(num).position().top - ($(window).height() - $('.section').eq(num).height());
            // }
            // $('.contents').css({ 
            //     transform : `translateY(-${slide}px)`
            // });
            
        };
        // $('.indi a').on('click',function(){
        //     num = $(this).index();
        //     ani();
        // });

    }


  
	



	// $(".btn_top").click(function(){
	// 	$('body,html').animate({scrollTop: 0}, 300);
	// })



	// $(".btn_x").click(function(){
	// 	$("#bgblack").hide();
	// 	$(".pop_st1").hide();
	// 	$(".pop_form").hide();
	// 	$(".history_pop").hide();
	// 	$.fn.fullpage.setAllowScrolling(true);
	// })
	// $(".foot_pop").click(function(){
	// 	var popNum = $(".foot_pop").index($(this));
	// 	$("#bgblack").show();
	// 	$(".pop_st1").show();
	// 	$(".pop_st1 .conwrap>div").hide();
	// 	$(".pop_st1 .conwrap>div:eq("+popNum+")").show();
	// 	$.fn.fullpage.setAllowScrolling(false);
	// })
	// $(".btn_form").click(function(){
	// 	$("#bgblack").show();
	// 	$(".pop_form").show();
	// 	$.fn.fullpage.setAllowScrolling(false);
	// })




    

    


});
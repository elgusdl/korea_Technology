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



        // section3/5번 헤더컬러변경
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
            if(num == 2 || num == 4){
                slide=$('#section3').position().top;
                slide=$('#section5').position().top;
                $('#header').addClass('on');
            }else{
                $('#header').removeClass('on');
            }
        };
        ani();
    }
});
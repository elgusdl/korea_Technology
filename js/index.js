$(function(){

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
            section_move();
        },100);
    });
    //wheel end
    $('#section1').addClass('in-view');
    function section_move(){
        if(num < 7){
            slide=$('.section').eq(num).position().top ;
            $('.section').removeClass('active').eq(num).addClass('active');
            $('.section').removeClass('in-view').eq(num).addClass('in-view');
            $('.indi a').removeClass('active');
            $('.indi a').eq(num).addClass('active');
        }else{
            slide = $('.section').eq(num).position().top - ($(window).height() - $('.section').eq(num).height());
        }
        if(num == 7){
            $('.indi a').removeClass('active');
        }
        $('.contents').css({transform : `translateY(-${slide}px)`});
    };

    function appear(){
        if($('#section1').addClass('in-view')){
            $('.indi').addClass('in-view');
        }
    };
    




    // 인디게이터 클릭
    $('.indi ul li').on('click',function(){
        num = $(this).index();
        section_move();
    });





 
    // count
    $(function() {
        let count0 = 3000;
        counterFn();

        function counterFn() {
          id0 = setInterval(count0Fn, 10);
          function count0Fn() {
            count0++;
            if (count0 > 8830) {
              clearInterval(id0);
            } else {
              $(".today .num").text(count0.toLocaleString("ko-KR"));
            }
          }
        }
    });






    //메인 포토
    $('.photo').slick({
        speed: 1000,
        dots: true,
        infinite: true,
        cssEase: 'linear',
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000
    });




    /* main Business */
    $(document).on("mouseover",".tc .tab",function(){
        let tabNum = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".b_tabs>div").hide();
        $(".b_tabs>div:eq("+tabNum+")").show();
    });
    $(document).on("click",".b_tabs ul li",function(){
        $(this).addClass("on").siblings().removeClass("on");
    });
    $(document).on("mouseenter",".tc .tab",function(){
        $(this).find(".wave_txt").letterfx({"fx":"wave","letter_end":"rewind","element_end":"stay","timing":"60","fx_duration":"0.4s"});
    });





    /* main brochure */ 
	$(".btn_down").hover(function(){
		$(".brochure .mb-img").addClass("on");
	},function(){
		$(".brochure .mb-img").removeClass("on");
	})


});






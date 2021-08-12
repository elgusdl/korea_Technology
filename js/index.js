

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
            ani();
        },100);
    });
    //wheel end
    function ani(){
        if(num < 7){
            slide=$('.section').eq(num).position().top ;
            $('.section').removeClass('active').eq(num).addClass('active');
            $('.indi a').removeClass('active')
            $('.indi a').eq(num).addClass('active')
        }else{
            slide = $('.section').eq(num).position().top - ($(window).height() - $('.section').eq(num).height());
        }
        $('.contents').css({ 
            transform : `translateY(-${slide}px)`
        });
        
    };
    $('.indi a').on('click',function(){
        num = $(this).index();
        ani();
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

$.ajax({
    url:'data/project.json',

    success:function(data){
        
        let tagList,pro;
        pro = localStorage.pro;

        //list
        function list(){

            tagList='';
            data.forEach(function(v){
                tagList += `<li>
                                <a href="#">
                                    <figure>
                                        <img src="${v.photo}" alt="없엉">
                                    </figure>
                                    <div class="pro-g">
                                        <div class="pro-text">
                                            ${v.text}
                                        </div>
                                        <div class="more">
                                            VIEW MORE
                                            <span class="arr"> → </span>
                                        </div>
                                    </div>
                                </a>
                            </li>`;
            });
            $('.pro-txt ul').html(tagList);
        } list();
    }

});




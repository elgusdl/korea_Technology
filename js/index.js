

$(function(){

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

});


// section scroll
let len = $('.section').length;
let delta, num = 0, move;
$(window).on('mousewheel DOMMouseScroll',function(e){
    
    delta = e.originalEvent.wheelDelta || e.originalEvent.detail;
    clearTimeout(move);
    move = setTimeout(function(){
        if(delta < 0){
            if(num < len-1) num++; //down
        }else{
            if(num > 0) num--;   //up
        }
        ani();
    },100);
});

//wheel end
function ani(){
    $('html,body').animate({ 
        scrollTop : $(window).height() * num 
    });
    $('.indi a').removeClass('active')
    $('.indi a').eq(num).addClass('active')
};

$('.indi a').on('click',function(){

    num = $(this).index();
    ani();
});





/* main Business */
	
$(document).on("mouseover",".tc .tab",function(){
    let tabNum = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    //var onNum = $(".business_tabs ul li.on").index();
    $(".b_tabs>div").hide();
    $(".b_tabs>div:eq("+tabNum+")").show();
});
$(document).on("click",".b_tabs ul li",function(){
    $(this).addClass("on").siblings().removeClass("on");
});
$(document).on("mouseenter",".tc .tab",function(){
    $(this).find(".wave_txt").letterfx({"fx":"wave","letter_end":"rewind","element_end":"stay","timing":"60","fx_duration":"0.4s"});
});



$('.tc').each(function(index, element){
    $(this).addClass('s'+index);
    $(".swiper-button-prev").addClass("btn-prev-" + index);
    $(".swiper-button-next").addClass("btn-next-" + index);
});
$(function(){


    // COMPANY PROFILE, BUSINESS AREA 클릭시 배경, 콘텐츠변경
    $(".ab_con .sec2_tabcons > .tabcon2").hide();
    $(document).on('click','.ab_con .sec2_tabs a', function () {
        let tabnum = $(".ab_con .sec2_tabs a").index($(this));
        let tabBg = $(this).index()+1;
        $(this).addClass("on").siblings().removeClass("on");
    
        $(".ab_con .sec2_tabcons > .tabcon").hide();
        $(".ab_con .sec2_tabcons > .tabcon:eq("+tabnum+")").show();				
        $(".ab_con").css({"background":"url('../img/aboutus/m11_bg"+tabBg+".jpg') no-repeat center bottom"});
    })
    


    // BUSINESS AREA 클릭시 내용변경
    $(".bu_tabcons .list").hide();
    $(".bu_tabcons .list:eq(0)").show();
    $(".bu_tabs ul li").click(function(){
        let tabnum = $(".bu_tabs ul li").index($(this));
        $(this).addClass("on").siblings().removeClass("on");
        $(".bu_tabcons .list").hide();
        $(".bu_tabcons .list:eq("+tabnum+")").show();
        $(this).addClass("on").siblings().removeClass("on");
    })





    // "최고의 기술 로 세상 에 기여하는 행복한 직원 들의 기업" 나타나기
    window.addEventListener('scroll', function(){
        const txt1 = document.querySelector('.page_txt');
        
        let elHei;
        let winHei = window.innerHeight;

        elHei = txt1.offsetTop;

        if(elHei-winHei <= window.scrollY){
        txt1.classList.add('ani_up');
        }
    });






    // "ESG평가" 3년연속 최고등급 "A A" 획득 나타나기
    window.addEventListener('scroll', function(){
        const txt2 = document.querySelector('.page_color2');
        
        let elHei;
        let winHei = window.innerHeight;

        elHei = txt2.offsetTop;

        if(elHei-winHei <= window.scrollY){
        txt2.classList.add('ani_up');
        }
    });






    // count
    let blen = true;
    $(window).on('scroll',function(){
        if($('.sec2_ani').offset().top - $(window).height() < $(this).scrollTop() && blen){
            blen = false;
            counterFn(1850,1963,$(".con .num1"),10);
            counterFn(0,3,$(".con .num2"),500);
            counterFn(1330,1430,$(".con .num3"),10);
            counterFn(0,50,$(".con .num4"),20);
            $('.sec2_ani').addClass('in-view');
        }
    });
    
        function counterFn(start,end,el,time) {
            let count = start;
            id1 = setInterval(count1Fn, time);
            function count1Fn() {
                count++;
                if (count > end) {
                    clearInterval(id1);
                } else {
                    el.text(count);
                }
            }
        }

});
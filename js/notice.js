'use strict';

fetch('data/notice.json')
.then( res => res.json() )
.then( data => init(data) )

function init(data){

    const notice = [];
    const noticeList = document.querySelector(".news-txt");
    let tagList = "";


    for(let i = 0; i < data.notice.length; i++){
        notice.push(data.notice[i]);
    }

    for(let i = 0; i < notice.length; i++){
        tagList += `<div class="swiper-slide">
                        <a href="#">
                            <div class="text">
                                <div class="logo">
                                    <span class="news-logo">NEWS</span>
                                </div>
                                <div class="news-text">${notice[i].text}</div>
                                <div class="news-date">${notice[i].date}</div>
                            </div>
                            <figure>
                                <img src="${notice[i].img}" alt="없엉">
                            </figure>
                        </a>
                    </div>`;
    }
    noticeList.innerHTML = tagList;


    let swiper2 = new Swiper('.news-con', {
		slidesPerView: 4,
		spaceBetween:63,
		scrollbar: {
			el: '.swiper-scrollbar2',
		},
		navigation: {
			nextEl: '.news-next',
			prevEl: '.news-prev',
		},
	});    

}
'use strict';

fetch('data/project.json')
.then( res => res.json() )
.then( data => callback(data) )

function callback(data){

    console.log(data);
    const project = [];
    const projectList = document.querySelector(".pro-txt");
    let tagList = "";


    for(let i = 0; i < data.project.length; i++){
        project.push(data.project[i]);
    }

    for(let i = 0; i < project.length; i++){
        tagList += `<div class="swiper-slide">
                        <a href="#">
                            <figure>
                                <img src="${project[i].photo}" alt="없엉">
                            </figure>
                            <div class="pro-g">
                                <div class="pro-text">
                                    ${project[i].text}
                                </div>
                                <div class="more">
                                    VIEW MORE
                                    <span class="arr"> → </span>
                                </div>
                            </div>
                        </a>
                    </div>`;
    }
    projectList.innerHTML = tagList;


    let swiper1 = new Swiper('.pro-con', {
		slidesPerView: 4,
		spaceBetween:40,
		scrollbar: {
			el: '.swiper-scrollbar1',
		},
		navigation: {
			nextEl: '.pro-next',
			prevEl: '.pro-prev',
		}
	});

}
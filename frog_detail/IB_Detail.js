const title_slide = () => {
    const title = document.querySelectorAll('.front_title'); 
    const hide_content = document.querySelectorAll('.under_content');

    title.forEach((link, index) => {
        title[index].addEventListener('click', () => {
            title[index].classList.toggle('front_title-active');
            for(i = 0; i < title.length ; i++){
                if(i == index) {
                    title[i].classList.remove('front_title-backActive');
                    continue;
                } else {
                    title[i].classList.remove('front_title-active');
                    title[i].classList.toggle('front_title-backActive');
                    hide_content[i].style.display = "none";
                }
            }
            // flash(index, hide_content);
            // setTimeout(flash(index, hide_content), 1500);
            setTimeout(() => {
                hide_content[index].style.animation = "hideFade 2s";
                hide_content[index].style.display = "block";
            }, 750);
        })
    })
}

const bBlock_slide = () => {
    const arrow = document.querySelector('.bBlock_arrow');
    const bBlock = document.querySelector('.bottomBlock');
    arrow.addEventListener('click', () => {
        window.scrollTo({top:500, left:0, behavior:'smooth'});
    })
}

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {
        // nav.classList.toggle('nav-active');
        //here need to change to jquery too...
        navlinks.forEach((link, index) => {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + 1}s`;
                console.log(index);
        });
        // burger.classList.toggle('toggle');
    });

    $(".burger").click(function(){
        $(".nav-links").toggleClass("nav-active");
        $(this).toggleClass("toggle");
    })
    
    // ---------------------nav drop----------------------
    const navdrop = document.querySelector('.nav-hover-btn')
    const dropcontent = document.querySelector('.dropdown-content');


    navdrop.addEventListener('mouseover', () => {
        dropcontent.style.display = "block";
        dropcontent.style.animation = "navdropFade 1s";
    })
    nav.addEventListener('mouseout', () => {
        dropcontent.style.display = "none";
    })

}

bBlock_slide();
navSlide();
title_slide();


function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}

$(function(){

   // 偵聽a click
   $(".link-list a").bind("click",function(){

       var id=$(this).attr("data-id");

       // 取得目標區塊的y座標
       var target_top = $("#area"+id).offset().top;

       // 取得body物件 這種寫法在各瀏覽器上最保險
       var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

       // 移動捲軸無動畫效果
     		//$body.scrollTop(target_top);

       // 移動捲軸有動畫效果
     		$body.animate({
     			  scrollTop: target_top
     		}, 0);

   })
})

//聲音
document.getElementById("f1").addEventListener("click", function () {
    play('1','f');
});
function play(id, type) {
    console.log("=type==" + type + "=id==" + id);
    for (var a = 1; a < 100; a++) {
        if (id == a) {
            if (type == "f") {
                console.log("=type==" + type + "=id==" + id);
                document.getElementById("f" + a).className = "jump";
                document.getElementById('audio'+a).play();
            }

           
        }
    }
}


// nothing now
const flipCard = () => {
    const flipbtn = document.querySelectorAll('.flip');
    const card = document.querySelectorAll('.card');
    const back_back = document.querySelectorAll('.back_back');

    flipbtn.forEach((link, index) => {
        flipbtn[index].addEventListener('mouseover', () => {
            card[index].style.transform = "rotateY(180deg)";

        });
    });

    back_back.forEach((link, index) => {
        back_back[index].addEventListener('mouseover', () => {
            card[index].style.transform = "rotateY(0deg)";
        })
    } )
}

const CustomerIBBook = () => {
    const IB_btn = document.querySelector('.IB_btn');
    const IB_show = document.querySelector('.frog_own');
    const All_IB = document.querySelector('.container');

    IB_btn.addEventListener('click', () => {
        All_IB.classList.toggle('container_move')
        IB_show.classList.toggle('IBBookIn');
    })
}

const frog_slide = () => {
    const carouselslide = document.querySelector('.carousel_slide_IB');
const carouselImages = document.querySelectorAll('.carousel_slide_IB img');

//buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = carouselImages[0].clientWidth; 
// carouselslide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button listeners
nextBtn.addEventListener('click', () => {
    if(counter >= carouselImages.length - 1) return;
    carouselslide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    // console.log(counter);
    carouselslide.style.transform = 'translateX(' + (-size * counter + 20) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    carouselslide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    // console.log(counter);
    carouselslide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselslide.addEventListener('transitionend', () => {
    // console.log(carouselImages[counter]);
    if(carouselImages[counter].id === 'lastClone'){
        carouselslide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselslide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id === 'firstClone'){
        carouselslide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselslide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});
}

flipCard();
CustomerIBBook();
frog_slide();





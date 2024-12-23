setTimeout(function(){ 
  document.querySelector(".btn-test-home").click();
}, 25000);

const burgerMenu = document.querySelector('.burger-menu')

const body = document.querySelector('.body')

function openBurgerMenu() {
  burgerMenu.classList.remove('menu-closed')
  burgerMenu.classList.add('menu-open')

  body.classList.add('overflow')
}

function closedBurgerMenu() {
  burgerMenu.classList.remove('menu-open')
  burgerMenu.classList.add('menu-closed')

  body.classList.remove('overflow')
}

function navItem() {
  burgerMenu.classList.remove('menu-open')
  burgerMenu.classList.add('menu-closed')

  body.classList.remove('overflow')
}

function vigetOpen() {
  document.querySelector('.viget-window').classList.add('open')
  document.querySelector('.viget-btn-close').classList.add('visible')
}

function vigetClose() {
  document.querySelector('.viget-window').classList.remove('open')
  document.querySelector('.viget-btn-close').classList.remove('visible')
}


const swiperPortfolio = new Swiper(".portfolioSwiper", {

  autoHeight: true,
  spaceBetween: 20,
  speed: 1000,
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    // when window width is >= 320px
    1200: {
      slidesPerView: 4,
      // spaceBetween: 20
    },
    // when window width is >= 480px
    1000: {
      slidesPerView: 2,
      // spaceBetween: 30
    },
    // when window width is >= 640px
  }

});

let portfolioSwiperPrev = document.querySelector('.portfolioSwiperPrev')
let portfolioSwiperNext = document.querySelector('.portfolioSwiperNext')

portfolioSwiperPrev.addEventListener('click', () => {
  swiperPortfolio.slidePrev();
})
portfolioSwiperNext.addEventListener('click', () => {
  swiperPortfolio.slideNext();
})

const swiperMedic = new Swiper(".medicSwiper", {

  autoHeight: true,
  spaceBetween: 20,
  speed: 1000,
  loop: true,
  slidesPerView: 1,
  
});

let medicSwiperPrev = document.querySelector('.medicSwiperPrev')
let medicSwiperNext = document.querySelector('.medicSwiperNext')

medicSwiperPrev.addEventListener('click', () => {
  swiperMedic.slidePrev();
})
medicSwiperNext.addEventListener('click', () => {
  swiperMedic.slideNext();
})

const swiperReviews = new Swiper(".reviewsSwiper", {
  autoHeight: true,
  spaceBetween: 20,
  speed: 1000,
  loop: true,
  
});

let reviewsSwiperPrev = document.querySelector('.reviewsSwiperPrev')
let reviewsSwiperNext = document.querySelector('.reviewsSwiperNext')

reviewsSwiperPrev.addEventListener('click', () => {
  swiperReviews.slidePrev();
})
reviewsSwiperNext.addEventListener('click', () => {
  swiperReviews.slideNext();
})

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

const swiperMedic = new Swiper(".medicSwiper", {

  autoHeight: true,
  spaceBetween: 20,
  speed: 1000,
  loop: true,
  slidesPerView: 1,
  
});

const swiperReviews = new Swiper(".reviewsSwiper", {
  pagination: {
    el: ".swiper-pagination-reviews",
    clickable: true,
  },
  autoHeight: true,
  spaceBetween: 20,
  speed: 1000,
  loop: true,
  
});

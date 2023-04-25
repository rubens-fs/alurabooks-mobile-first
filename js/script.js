const swiper = new Swiper('.swiper', {
  spaceBetween: 10,
  slidesPerView: 3,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 60
    },
    // when window width is >= 1728px
    1728: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});
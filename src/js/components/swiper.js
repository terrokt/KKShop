import Swiper, { Navigation} from 'swiper';

Swiper.use([Navigation]);

const swiper = new Swiper('.newest-swiper', {

  slidesPerView: 4,
  spaceBetween: 56,

  navigation: {
    nextEl: '.newest__btn--next',
    prevEl: '.newest__btn--prev',
  },

  // breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 1.5,
  //     spaceBetween: 20
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 2,
  //     spaceBetween: 30
  //   },
  //   576: {
  //     slidesPerView: 2.5,
  //     spaceBetween: 30
  //   },
  //   // when window width is >= 640px
  //   1024: {
  //     slidesPerView: 4,
  //     spaceBetween: 40
  //   }
  // }


});

const stockSwiper = new Swiper('.stock-swiper', {

  slidesPerView: 2,
  initialSlide: 1,
  spaceBetween: 100,
  centeredSlides: true,

  navigation: {
    nextEl: '.stock__btn--next',
    prevEl: '.stock__btn--prev',
  },

});

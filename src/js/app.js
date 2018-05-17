import Swiper from 'swiper';

$(document).ready(() => {
  let topSliderEl = $('.js-top-slider');

  let topSliderOptions = {
    slidesPerView: 1,
    speed: 1000
  };

  let topSlider = new Swiper(topSliderEl, topSliderOptions);


  let newsSliderEl = $('.js-news-slider');

  let newsSliderOptions = {
    slidesPerView: 4,
    speed: 1000,
    loop: true
  };

  let newsSlider = new Swiper(newsSliderEl, newsSliderOptions);


  document.addEventListener('scroll', function() {
    if ($(window).scrollTop() > 0) {
      $('.js-header').addClass('is-fixed');
    }
    else {
      $('.js-header').removeClass('is-fixed');
    }
  });
});

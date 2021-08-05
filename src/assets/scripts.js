// core version + navigation:
import SwiperCore, { Navigation, Controller } from 'swiper/core';

// configure Swiper to use modules
SwiperCore.use([Navigation, Controller]);

// import Swiper styles
// import 'swiper/swiper-bundle.css';

const workSwiper = new SwiperCore('#workSwiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const logoSwiper = new SwiperCore('#logoSwiper');

// Sync swipers
workSwiper.controller.control = logoSwiper;
logoSwiper.controller.control = workSwiper;
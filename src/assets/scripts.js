// core version + navigation:
import SwiperCore, { Navigation } from 'swiper/core';

// configure Swiper to use modules
SwiperCore.use([Navigation]);

// import Swiper styles
// import 'swiper/swiper-bundle.css';

const swiper = new SwiperCore(".mySwiper", {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
import React from 'react';
import { render } from 'react-dom';

import SwiperCore, { Navigation, Controller } from 'swiper/core';

SwiperCore.use([Navigation, Controller]);

import 'swiper/swiper-bundle.css';

const workSwiper = new SwiperCore('#workSwiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

class BGSwitcher extends React.Component {
  state = { 
    text: 'Hi!'
  };

  setText = e => {
    this.setState({ text: e.target.value });
  }

  render() {
    const { text } = this.state; 
    return <>
      <input type="text" value={ text } onChange={ this.setText } />
      { text }
    </>
  }
}

render(<BGSwitcher />, document.getElementById('BGSwitcher'));
import React from 'react'

import Menu from './Menu'
import All from './All';
import './Shop.css';
import Carousel from './Carousel';


function Shop() {
  return (
    <div className='Shop'>
      <Menu />
      <All />
      <Carousel/>
    </div>
  );
}

export default Shop
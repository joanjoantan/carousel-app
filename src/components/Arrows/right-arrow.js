import React from 'react'
import arrow from '../../assets/arrow.svg';

const RightArrow = ({ nextSlide, disabled }) => {
  return (
    <div className='right-arrow' onClick={nextSlide}>
      <img src={arrow} alt="right arrow"/>
    </div>
  )
}

export default RightArrow

import React from 'react'
import arrow from '../../assets/arrow.svg';

const LeftArrow = ({ prevSlide, disabled }) => {
  return (
    <div className='left-arrow' onClick={prevSlide} disabled={disabled}>
      <img src={arrow} alt="left arrow" />
    </div>
  )
}

export default LeftArrow

import React from 'react'
import arrow from '../../assets/arrow.svg';

const LeftArrow = ({ prevSlide, coolButtons }) => {
  return (
    <div className={coolButtons ? 'left-arrow cool-buttons' : 'left-arrow'} onClick={prevSlide}>
      <img src={arrow} />
    </div>
  )
}

export default LeftArrow

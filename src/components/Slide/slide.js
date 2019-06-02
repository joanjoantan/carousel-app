import React from 'react'

const Slide = ({item, isShowing}) => {
  return <li className="item-container">
    <div className={`item ${isShowing? 'showing': ''}`}>
      <img src={item.previewURL} alt={item.tags}/>
      <div className="itemName">{item.tags}</div>
    </div>
  </li>
}

export default Slide

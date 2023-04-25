import React from 'react'
import '../OfferFour/OfferFour.css'

import img1 from '../OfferFour/image/img1.jpg'
import img2 from '../OfferFour/image/img2.jpg'
import img3 from '../OfferFour/image/img3.jpg'
import img4 from '../OfferFour/image/img4.jpg'

const OfferFour = (props) => {
  return (
    <div className='offer-container'>
      <div className='title-wrapper'>
        <h3 className='title'>{props.title}</h3>
      </div>
      <div className='image-wrapper'>
        <img className='image' src={img1} alt="" />
        <img className='image' src={img2} alt="" />
        <img className='image' src={img3} alt="" />
        <img className='image' src={img4} alt="" />
      </div>
      <div className='link-wrapper'>
        <a className='link' href="/">See more</a>
      </div>
    </div>
  )
}

export default OfferFour

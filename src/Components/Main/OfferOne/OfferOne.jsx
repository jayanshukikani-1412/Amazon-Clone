import React from 'react'
import img1 from '../OfferOne/image/img1.jpg'
import '../OfferOne/OfferOne.css'

const OfferOne = (props) => {
  return (
<div className='offerone-container'>
      <div className='titleone-wrapper'>
        <h3 className='titleone'>{props.title}</h3>
      </div>
      <div className='imageone-wrapper'>
        <img className='imageone' src={img1} alt="" />
      </div>
      <div className='linkone-wrapper'>
        <a className='linkone' href="/">See more</a>
      </div>
    </div>
  )
}

export default OfferOne

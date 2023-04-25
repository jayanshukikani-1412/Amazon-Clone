import React from 'react'
import '../Main/Main.css'
import BannerImg from '../Main/BannerImage/BannerImg'
import OfferFour from './OfferFour/OfferFour'
import OfferOne from './OfferOne/OfferOne'
import TodayOffer from './Today/TodayOffer'
import ProductShow from './ProductShow/ProductShow'
import DetailsProduct from './DetailsProduct/DetailsProduct'


const Main = () => {
    return (
        <section className='main-section'>
            <div className='main-container'>

                {/* banner images */}
                <div className='bannerImage-wrapper'>
                    <BannerImg />
                </div>

                {/* offer card container */}
                <div className='offerCard-wrapper'>
                    <OfferFour title={"Up to 50% off | Baby products & toys | Amazon Brands"} />
                    <OfferFour title={"Home appliances | Up to 55% off"} />
                    <OfferOne title={"Bluetooth Calling Smartwatch starts at ₹1,999"} />
                    {/* <OfferFour title={"Bluetooth Calling Smartwatch starts at ₹1,999"}/> */}
                    <OfferFour title={"Sign in for your best experience"} />
                    <OfferFour title={"Up to 60% off | Styles for women"} />
                    <OfferFour title={"Starting ₹87 | Amazon Brands & more"} />
                    <OfferFour title={"Up to 60% off | Styles for men"} />
                    <OfferOne title={"Up to 70% off | Clearance store"} />
                </div>

                {/* today's deal */}
                <div className="today-conatiner">
                    <TodayOffer />
                </div>

                {/* product show wrapper */}
                <div className="product-show-conainer">
                    <ProductShow />
                </div>


                {/* details product show wrapper */}
                <div className="details-product-show-conainer">
                    <DetailsProduct />
                </div>

            </div>
        </section>
    )
}

export default Main

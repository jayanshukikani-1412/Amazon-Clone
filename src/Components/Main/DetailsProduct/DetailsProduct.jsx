import React, { useEffect, useState } from 'react'
import '../DetailsProduct/DetailsProduct.css'
import axios from 'axios';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
// import { error } from 'console';



const DetailsProduct = () => {
    const [dpproduct, setDpproducts] = useState([])

    useEffect(() => {

        axios.get('https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products')
            .then(function (response) {
                setDpproducts(response.data);
            }).catch(function (error) {
                console.error(error);
            });

    }, [])
    return (
        <div className='details-product-container'>
            <div className='title-wrapper'>
                <h2 className='title'>Customers who viewed items in your browsing history also viewed</h2>
            </div>

            <div className="details-product-wrapper">
                {console.log(dpproduct)}
                <Swiper
                    modules={[Navigation, Scrollbar]}
                    spaceBetween={10}
                    slidesPerView={6}
                    slidesPerGroup={1}
                    navigation
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {
                        dpproduct?.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className='details-product-item'>
                                        <div className='image-wrapper'>
                                            <img src={item.image} alt="" className='product-image' />
                                        </div>
                                        <div className="details-wrapper">
                                            <p className='product-title'><a href="/">{item.title}</a></p>
                                            <p className='product-price'>Price: <span>$ {item.price}</span></p>
                                            {/* <p className='product-review'><span>{item.rating.rate}/5</span></p> */}
                                            <p className='product-desc'><span>{item.description}</span></p>
                                            <p className='product-offer'>
                                                Get it by Thursday, April 20 <br />
                                                FREE Delivery over ₹499. <br />
                                                Fulfilled by Amazon. <br />
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default DetailsProduct

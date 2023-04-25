import React, { useEffect, useState } from 'react'
import "../Today/TodayOffer.css"
// import img1 from '../Today/image/img1.png'
// import img2 from '../Today/image/img2.png'
// // import img3 from '../Today/image/img3.png'
// import img4 from '../Today/image/img4.png'
// import img5 from '../Today/image/img5.png'
// import img6 from '../Today/image/img6.png'
// import img7 from '../Today/image/img7.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import axios from 'axios';

const TodayOffer = () => {

    const [item, setItem] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(response => {
                setItem(response.data.products)
            })
    },[])
    return (
        <div className='today-container'>
            <div className='title-wrapper'>
                <h2 className='title'>Today's Deals</h2><a href="/" className='title-link'>See all deals</a>
            </div>
            <div className='today-wrapper'>
                {/* {console.log(item)} */}

                <Swiper
                    modules={[Navigation, Scrollbar]}
                    spaceBetween={60}
                    slidesPerView={6}
                    slidesPerGroup={3}
                    navigation
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >

                    {
                        item?.map((i,index)=> {
                            return (
                                <SwiperSlide key={index}>
                                    <div className='today-item'>
                                        <div className='image-wrapper'>
                                            <img src={i.thumbnail} className='image' alt="" />
                                        </div>
                                        <div className='info-wrapper'>
                                            <div className='btn-wrapper'>
                                                <button>up to <span>40%</span>off</button>
                                                <span>Deal of the day</span>
                                            </div>
                                            <div className='desc-wrapper'>
                                                <p className='descrption'>{i.description}</p>
                                            </div>
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

export default TodayOffer





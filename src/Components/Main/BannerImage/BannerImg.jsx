import React from 'react'
import img1 from '../BannerImage/images/1banner1.jpg'
import img2 from '../BannerImage/images/2banner2.jpg'
import img3 from '../BannerImage/images/3banner3.jpg'
import img4 from '../BannerImage/images/4banner4.jpg'
import img5 from '../BannerImage/images/5banner5.jpg'
import '../BannerImage/BannerImg.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper'


const BannerImg = () => {
    return (
        <section className='banner-section'>
            <div className='banner-container'>



                <Swiper
                    modules={[ Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{ delay: 2000 }}
                    loop={true}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide key={1}><img src={img1} key={1} className='banner-img' alt="Banner-images" /></SwiperSlide>
                    <SwiperSlide key={2}><img src={img2} key={2} className='banner-img' alt="Banner-images" /></SwiperSlide>
                    <SwiperSlide key={3}><img src={img3} key={3} className='banner-img' alt="Banner-images" /></SwiperSlide>
                    <SwiperSlide key={4}><img src={img4} key={4} className='banner-img' alt="Banner-images" /></SwiperSlide>
                    <SwiperSlide key={5}><img src={img5} key={5} className='banner-img' alt="Banner-images" /></SwiperSlide>

                </Swiper>


            </div>

        </section>

    )
}

export default BannerImg




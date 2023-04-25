import React, { useEffect, useState } from 'react'
import "../ProductShow/ProductShow.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import axios from 'axios';

// const options = {
//     method: 'GET',
//     url: 'https://real-time-amazon-data.p.rapidapi.com/search',
//     params: { query: 'iPhone', country: 'US', category_id: 'aps', page: '1' },
//     headers: {
//         'X-RapidAPI-Key': 'a7cfd95a80msh7934461ff77aa00p15f1b7jsn1e93481b056e',
//         'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
//     }
// };

// const options = {
//     method: 'GET',
//     url: 'https://amazon-data-scraper126.p.rapidapi.com/search/mac',
//     headers: {
//         'X-RapidAPI-Key': 'a7cfd95a80msh7934461ff77aa00p15f1b7jsn1e93481b056e',
//         'X-RapidAPI-Host': 'amazon-data-scraper126.p.rapidapi.com'
//     }
// };

const options = {
    method: 'GET',
    url: 'https://amazon_data_extractor.p.rapidapi.com/search/Apple%20MacBook%20Pro',
    params: {api_key: '8045a19e2deb0a201d022a330d701576'},
    headers: {
      'X-RapidAPI-Key': '1a775e2484msh9ea08d2fa65c4b3p1313acjsnec9de0437ec8',
      'X-RapidAPI-Host': 'amazon_data_extractor.p.rapidapi.com'
    }
  };

const ProductShow = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        axios.request(options).then(function (response) {
            setProducts(response.data.results);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])



    return (
        <div className='products-container'>
            <div className='title-wrapper'>
                <h2 className='title'>Inspired by your browsing history</h2><a href="/" className='title-link'>See More</a>
            </div>

            <div className="products-wrapper">

                {console.log(products)}

                <Swiper
                    modules={[Navigation, Scrollbar]}
                    spaceBetween={10}
                    slidesPerView={3}
                    slidesPerGroup={3}
                    navigation
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >


                    {
                        products?.map((item, index) => {
                            return (

                                <SwiperSlide key={index}>
                                    <div className='product-item'>
                                        <div className='image-wrapper'>
                                            <img src={item.image} alt="" className='image' />
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

export default ProductShow

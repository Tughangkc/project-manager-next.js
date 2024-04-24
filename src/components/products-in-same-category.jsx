"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProductCard from './product-card';

const ProductsInSameCategory = ({products}) => {
  return (
    <div>
      <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        0:{
            slidesPerView:1,
        },
        576:{
            slidesPerView:2,
        },
        992:{
            slidesPerView:3,
        },
        1400:{
            slidesPerView:4,
        },
      }}
      
    >
        {products.map((item)=> (
            <SwiperSlide key={item.id}><ProductCard {...item} /></SwiperSlide>

        ))}
     
      
    </Swiper>
    </div>
  )
}

export default ProductsInSameCategory

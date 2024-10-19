// import React from 'react'
// import Swiper from 'swiper';
// import 'swiper/css';

// const Carousel = () => {
//     const swiper = new Swiper('.swiper', {
//         // Optional parameters
//         direction: 'vertical',
//         loop: true,
      
//         // If we need pagination
//         pagination: {
//           el: '.swiper-pagination',
//         },
      
//         // Navigation arrows
//         navigation: {
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//         },
      
//         // And if we need scrollbar
//         scrollbar: {
//           el: '.swiper-scrollbar',
//         },
//       });
//     return (
//         <div>
//             <div className="swiper">
//                 <div className="swiper-wrapper">
//                     <div className="swiper-slide">Slide 1</div>
//                     <div className="swiper-slide">Slide 2</div>
//                     <div className="swiper-slide">Slide 3</div>
//                 </div>
//                 <div className="swiper-pagination"></div>

//                 <div className="swiper-button-prev"></div>
//                 <div className="swiper-button-next"></div>

//                 <div className="swiper-scrollbar"></div>
//             </div>
//         </div>
//     )
// }

// export default Carousel

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="bg-red-600">
        <SwiperSlide className='flex gap-x-5'>
          <div className='border border-[#e8e8e8] w-full h-[29.5rem]'/>
          <div className='border border-[#e8e8e8] w-full h-[29.5rem]'/>
          <div className='border border-[#e8e8e8] w-full h-[29.5rem]'/>
        </SwiperSlide>
        <SwiperSlide className='flex gap-x-5'>
          <div className='border border-[#e8e8e8] w-full h-[29.5rem]'/>
          <div className='border border-[#e8e8e8] w-full h-[29.5rem]'/>
          <div className='border border-[#e8e8e8] w-full h-[29.5rem]'/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
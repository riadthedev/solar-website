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

const TestimonialCard:React.FC<{name?: string, title?: string, image: string}> = ({name = 'Courtney Henry', title = 'Creative Director', image }) => {
  return (
          <div className='border border-[#e8e8e8] text-left  w-full h-[22rem] p-[4.08rem] flex flex-col justify-between'>
            <div className='flex'>
              <div className='size-[5.5rem] rounded-full mr-[1.5rem]'>
                <img src={image} alt="" />
              </div>
              <div className='flex flex-col justify-between'>
                <p className='text-[2.2rem] font-semibold leading-[2.42rem]'>{name}</p>
                <p className='text-[#96D055] text-[1.6rem] leading-[2.56rem]'>{title}</p>
              </div>
            </div>
            <p className='text-[1.6rem] text-[#737577]'> For adding learning references, it's really good, because clients often study here too. For adding learning references, it's really good, because clients often study here too </p>
          </div>
  )
}

export default function App() {
  return (
    <>
      <Swiper navigation={false} modules={[Navigation]} className="bg-red-600">
        <SwiperSlide className='flex gap-x-5'>
          <TestimonialCard image='/assets/images/courtney.svg'/>
          <TestimonialCard name='Marvin Williamson' image='/assets/images/marvin.svg' />
          <TestimonialCard name='Boy Williamson' image='/assets/images/boy.svg'/>
        </SwiperSlide>
        {/* <SwiperSlide className='flex gap-x-5'>
          <div className='border border-[#e8e8e8] w-full h-[29.5rem]'/>
          <div className='border border-[#e8e8e8] w-full h-[29.5rem]'/>
          <div className='border border-[#e8e8e8] w-full h-[29.5rem]'/>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
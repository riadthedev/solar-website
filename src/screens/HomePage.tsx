'use client'
import AboutUs from '@/components/home/AboutUs'
import OurProducts from '@/components/home/OurProducts'
import Faqs from '@/components/home/Faqs'
import LatestPost from '@/components/home/LatestPost'
import OurServices from '@/components/home/OurServices'
import Testimonials from '@/components/home/Testimonials'
import VideoPlayer from '@/components/home/VideoPlayer'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Welcome from '@/components/home/Welcome'


const Homepage = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <main>
      <Welcome/>
      <AboutUs />
      <OurServices />
      <WhyChooseUs />
      <VideoPlayer />
      <OurProducts />
      <Testimonials />
      <Faqs />
      <LatestPost />
    </main>
  )
}

export default Homepage
import AboutUs from '@/components/home/AboutUs'
import OurProducts from '@/components/home/OurProducts'
import Faqs from '@/components/home/Faqs'
import LatestPost from '@/components/home/LatestPost'
import OurServices from '@/components/home/OurServices'
import Testimonials from '@/components/home/Testimonials'
import VideoPlayer from '@/components/home/VideoPlayer'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import React from 'react'

const Homepage = () => {
  return (
    <main>
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
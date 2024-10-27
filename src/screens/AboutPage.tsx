'use client'
import ExpertiseAndExperience from '@/components/about-us/ExpertiseAndExperience'
import HowItWorks from '@/components/about-us/HowItWorks'
import MeetUs from '@/components/about-us/MeetUs'
import OurStory from '@/components/about-us/OurStory'
import Ratings from '@/components/about-us/Ratings'
import ReadyToGetStarted from '@/components/about-us/ReadyToGetStarted'
import WhatWeDo from '@/components/about-us/WhatWeDo'
import Testimonials from '@/components/home/Testimonials'
import Aos from 'aos'
import 'aos/dist/aos.css'
import React, { useEffect } from 'react'

const AboutPage = () => {
  useEffect(() => {
    Aos.init({once: true});
  }, [])
  return (
    <>
      <WhatWeDo />
      <OurStory />
      <Ratings />
      <HowItWorks />
      <ExpertiseAndExperience />
      <MeetUs />
      <ReadyToGetStarted />
      <Testimonials />
    </>
  )
}

export default AboutPage
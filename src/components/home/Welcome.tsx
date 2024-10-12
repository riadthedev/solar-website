'use client'
import { motion,useScroll,useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import SectionWrapper from './SectionWrapper'
import { Button } from '../ui/button'
import { MdArrowOutward } from 'react-icons/md'


const Welcome = () => {
  const MotionSectionWrapper = motion(SectionWrapper)
  const ref = useRef(null)
  const {scrollYProgress} = useScroll({
    target:ref,
    offset:['start end','end start']
  })
  const backgroundY = useTransform(scrollYProgress, [0,1], ['0%','100%'])
  return (
    <MotionSectionWrapper ref={ref} style={{y:backgroundY}} classname={`relative after:content-['*'] after:absolute after:inset-0 after:bg-black after:opacity-50 after:z-10 bg-[url('/assets/images/welcome-bg.png')] bg-no-repeat bg-cover bg-center min-h-[70rem] flex items-center justify-center`} data-aos='zoom-in-up'>
        <div className='relative flex flex-col justify-center items-center max-w-[100rem] gap-y-[5rem] z-20'>
            <p className='text-primary text-[1.6rem] leading-[2.56rem]'>Welcome to Solar Roof</p>
            <h1 className='text-[7.2rem] font-semibold text-white text-center'>Empowering your future with solar energy</h1>
            <p className='text-white text-center leading-[2.56rem]'>At SolarBright we're committed to revolutionizing the way you think about energy. Say goodbye to skyrocketing utility bills and hello to a brighter, greener future with our state-of-the-art solar energy solutions</p>
            <div className='flex gap-[1rem]'>
                <Button className='rounded-none text-[1.6rem] px-[1.8rem] py-[1.8rem] w-fit flex gap-x-2 hover:scale-[1.08] active:scale-[0.95] transition ease-in-out duration-300'><span>Get Started</span><img src="/assets/icons/view-arrow.svg" alt="" /></Button>
                <Button className='rounded-none text-[1.6rem] px-[1.8rem] py-[1.8rem] w-fit flex gap-x-2 hover:scale-[1.08] active:scale-[0.95] transition ease-in-out duration-300 text-black bg-white'><span>View Projects</span><MdArrowOutward  /></Button>
            </div>
        </div>
    </MotionSectionWrapper>
  )
}

export default Welcome

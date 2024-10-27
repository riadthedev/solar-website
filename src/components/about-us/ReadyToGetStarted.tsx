'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import { Button } from '../ui/button'
import { MdArrowOutward } from 'react-icons/md'
import SectionWrapper from '../home/SectionWrapper'

const ReadyToGetStarted: React.FC<HomePageProps> = ({hide = false}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <>
       { !hide &&  <motion.div
          ref={ref}
          className="relative min-h-[70rem] flex items-center justify-center overflow-hidden"
          style={{
            background: "url('/assets/images/ready-to-get-started.png') no-repeat center center",
            backgroundSize: 'cover'
          }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/assets/images/ready-to-get-started.png')",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              y: backgroundY
            }}
          />
          <div className="absolute inset-0 bg-black opacity-50 z-10" />
          <SectionWrapper classname="relative z-20 flex flex-col justify-center items-center max-w-[100rem]">
            <div className='bg-[#96D055] text-white p-[1rem] tracking-[0.114rem] text-[1.44rem] font-semibold'> CONTACT US </div>
            <h1 className="text-[7.2rem] font-semibold text-white text-center">Ready to get started?</h1>
            <h1 className="text-[7.2rem] font-semibold text-white text-center">Talk to us today</h1>
            <div className='flex w-[59.5rem] text-white items-center flex-col text-center gap-y-[2rem]'>
              <p>Our experts are ready to help you understand how solar can work for your home.</p>
              <p>Schedule a free, no-obligation consultation to assess your energy needs and potential savings.</p>
            </div>
            <Button className='rounded-none text-[1.6rem] px-[1.8rem] py-[1.8rem] w-fit flex gap-x-2 hover:scale-[1.08] active:scale-[0.95] transition ease-in-out duration-300'><span>Get Started</span><img src="/assets/icons/view-arrow.svg" alt="" /></Button>
          </SectionWrapper>
        </motion.div>}
    </>
  )
}

export default ReadyToGetStarted;
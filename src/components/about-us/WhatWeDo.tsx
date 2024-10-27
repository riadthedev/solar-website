'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import { Button } from '../ui/button'
import { MdArrowOutward } from 'react-icons/md'
import SectionWrapper from '../home/SectionWrapper'

const WhatWeDo: React.FC<HomePageProps> = ({hide = false}) => {
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
            background: "url('/assets/images/what-we-do.png') no-repeat center center",
            backgroundSize: 'cover'
          }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/assets/images/what-we-do.png')",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              y: backgroundY
            }}
          />
          <div className="absolute inset-0 bg-black opacity-50 z-10" />
          <SectionWrapper classname="relative z-20 flex flex-col justify-center items-center max-w-[100rem] gap-y-[5rem]">
            <h1 className="text-[7.2rem] font-semibold text-white text-center">About Us</h1>
          </SectionWrapper>
        </motion.div>}
    </>
  )
}

export default WhatWeDo
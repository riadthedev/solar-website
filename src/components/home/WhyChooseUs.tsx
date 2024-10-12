"use client"
import React from 'react'
import SectionWrapper from './SectionWrapper'
import { Button } from '../ui/button'
import Card from './Card'

const WhyChooseUs = () => {
  return (
    <SectionWrapper classname='bg-white flex justify-center items-center'>
            <div className='w-1/2 space-y-[2rem] pr-[14rem] leading-[2.56rem]' data-aos='zoom-in-right'>
                <h2 className='text-[1.2rem] w-fit p-[1rem] text-primary bg-secondary'>WHY CHOOSE US</h2>
                <p className='text-[5rem] font-bold leading-[5.5rem] '>A positive impact for your home and planet</p>
                <p className='text-[#737577]'>At Mentary, we believe in the power of renewable energy to create a more sustainable future. With a passion for clean energy and a commitment to our customers, we are dedicated to delivering the best possible solutions.</p>
                <Button className='rounded-none text-[1.6rem] px-[1.8rem] py-[1.8rem] w-fit flex gap-x-2 hover:scale-[1.08] active:scale-[0.95] transition ease-in-out duration-300'><span>Learn More</span><img src="/assets/icons/view-arrow.svg" alt="" /></Button>
            </div>
            <article className='w-1/2 grid grid-cols-2 grid-rows-2 gap-10 justify-items-center' data-aos='zoom-in-left'>
                <img src="/assets/images/construction-worker-one.png" className='w-full' />
                <Card image='/assets/icons/expert.svg' title='Expertise' description='Aenean mattis mauris turpis, quis porta magna aliquam.' />
                <Card image='/assets/icons/high-quality.svg' title='Expertise' description='Aenean mattis mauris turpis, quis porta magna aliquam.' />
                <img src="/assets/images/construction-worker-one.png" className='w-full' />
            </article>
            <div className='size-[3.9rem] absolute left-0 bottom-[3.9rem] bg-[#F2F4E9]'/>
            <div className='size-[3.9rem] absolute left-[3.9rem] -bottom-[0.01rem] bg-[#F2F4E9]'/>
    </SectionWrapper>
  )
}

export default WhyChooseUs
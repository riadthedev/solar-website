import { section } from 'framer-motion/client'
import React from 'react'
import SectionWrapper from '../home/SectionWrapper'
import { Button } from '../ui/button'

const OurStory = () => {
  return (
    <SectionWrapper classname='bg-white flex gap-x-[10rem]'>
        <article className='w-1/2'>
            <figure className='relative'>
                <img className='absolute' src="/assets/images/our-story-one.png" alt="first- image" />
                <div className='border-l-[1rem] border-t-[1rem] border-white absolute top-52 right-0'><img src="/assets/images/our-story-two.png" alt="" /></div>
                {/* <div className='absolute right-0 top-0 w-[18rem] flex flex-col justify-center items-center bg-[#96D055] p-[2.4rem]'><span className='text-white font-semibold text-[4rem]'>15+</span><span className='text-black text-[2rem] text-center'>Years Of Experience</span></div> */}
                {/* <div className='absolute top-[45rem] left-0 w-[22.6rem] flex flex-col items-center gap-y-4'>
                    <p>10k+ Satisfied Client</p>
                    <div>
                        <div className='size-[5rem] rounded-full bg-[#96D055] border-black border-4'/>
                    </div>
                </div> */}
            </figure>
        </article>
        <div className='w-1/2 space-y-[2rem] pr-[14rem] leading-[2.56rem]' data-aos='zoom-in-right'>
            <h2 className='text-[1.2rem] w-fit p-[1rem] text-primary bg-secondary'>OUR STORY</h2>
            <p className='text-[5.5rem] font-semibold leading-[5.5rem] -tracking-[0.1rem]'>Let's build something strong together</p>
            <p className='text-[#737577]'>SolarRoof is India's most quality-conscious solar brand. The company manufactures high-end photovoltaic modules.</p>
            <div className='flex'>
                <div className='flex gap-[1rem] items-center font-semibold text-[1.76rem]'>
                    <div className='bg-[#F2F4E9] p-[2.2rem]'><img src="/assets/icons/quality-standards.svg" alt="" /></div>
                    <p>Building Quality Standards</p>
                </div>
                <div className='flex gap-[1rem] items-center font-semibold text-[1.76rem]'>
                    <div className='bg-[#F2F4E9] p-[2.2rem]'><img src="/assets/icons/certified-engineered.svg" alt="" /></div>
                    <p>Certified Engineered Team</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-y-[2rem]'>
                <div className='flex gap-x-[1rem] font-semibold text-[1.6rem] leading-[1.76rem] items-center'> <img src="/assets/icons/tick.svg" alt="" /> <span>Expertise and Experience</span> </div>
                <div className='flex gap-x-[1rem] font-semibold text-[1.6rem] leading-[1.76rem] items-center'> <img src="/assets/icons/tick.svg" alt="" /> <span>Customized Solutions</span> </div>
                <div className='flex gap-x-[1rem] font-semibold text-[1.6rem] leading-[1.76rem] items-center'> <img src="/assets/icons/tick.svg" alt="" /> <span>Quality Products</span> </div>
                <div className='flex gap-x-[1rem] font-semibold text-[1.6rem] leading-[1.76rem] items-center'> <img src="/assets/icons/tick.svg" alt="" /> <span>Environmental Impact</span> </div>
            </div>
            <Button className='rounded-none text-[1.6rem] px-[1.8rem] py-[1.8rem] w-fit flex gap-x-2 hover:scale-[1.08] active:scale-[0.95] transition ease-in-out duration-300'><span>Send Message</span><img src="/assets/icons/view-arrow.svg" alt="" /></Button>
        </div>
    </SectionWrapper>
  )
}

export default OurStory
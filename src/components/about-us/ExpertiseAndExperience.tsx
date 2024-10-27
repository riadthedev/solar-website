import React from 'react'
import SectionWrapper from '../home/SectionWrapper'
import { Button } from '../ui/button'
import Card from '../home/Card'

const ExpertiseAndExperience = () => {
    return (
        <SectionWrapper classname='bg-secondary flex justify-center items-center'>
            <div className='w-1/2 space-y-[2rem] pr-[14rem] leading-[2.56rem]' data-aos='zoom-in-right'>
                <h2 className='text-[1.2rem] w-fit p-[1rem] text-primary bg-white'>WHY CHOOSE US</h2>
                <p className='text-[5rem] font-bold leading-[5.5rem]'>Bringing expertise to every project</p>
                <p className='text-[#737577]'>Our team of experts brings a wealth of knowledge and experience to the table,
                    making us the go-to choice for all your solar and renewable energy needs. With a
                    focus on staying ahead of the curve, our team members are constantly striving to
                    expand their expertise and stay up-to-date with the latest advancements in the
                    industry.
                </p>
                <div className='grid grid-cols-2 gap-8'>
                    <div className='bg-white flex p-[1.58rem] gap-[1.58rem]'><img src="/assets/icons/tick.svg" alt="tick icon" /> <p className='text-[1.6rem] leading-[2.56rem] font-semibold'>Solar Panel Installation</p></div>
                    <div className='bg-white flex p-[1.58rem] gap-[1.58rem]'><img src="/assets/icons/tick.svg" alt="tick icon" /> <p className='text-[1.6rem] leading-[2.56rem] font-semibold'>Solar Panel Installation</p></div>
                    <div className='bg-white flex p-[1.58rem] gap-[1.58rem]'><img src="/assets/icons/tick.svg" alt="tick icon" /> <p className='text-[1.6rem] leading-[2.56rem] font-semibold'>Solar Panel Installation</p></div>
                    <div className='bg-white flex p-[1.58rem] gap-[1.58rem]'><img src="/assets/icons/tick.svg" alt="tick icon" /> <p className='text-[1.6rem] leading-[2.56rem] font-semibold'>Solar Panel Installation</p></div>
                    <div className='bg-white flex p-[1.58rem] gap-[1.58rem]'><img src="/assets/icons/tick.svg" alt="tick icon" /> <p className='text-[1.6rem] leading-[2.56rem] font-semibold'>Solar Panel Installation</p></div>
                    <div className='bg-white flex p-[1.58rem] gap-[1.58rem]'><img src="/assets/icons/tick.svg" alt="tick icon" /> <p className='text-[1.6rem] leading-[2.56rem] font-semibold'>Solar Panel Installation</p></div>
                </div>
                <Button className='rounded-none text-[1.6rem] px-[1.8rem] py-[1.8rem] w-fit flex gap-x-2 hover:scale-[1.08] active:scale-[0.95] transition ease-in-out duration-300'><span>Learn More</span><img src="/assets/icons/view-arrow.svg" alt="" /></Button>
            </div>
            <div className='relative' data-aos='zoom-in-left'>
                <div className='flex bg-white gap-[2rem] p-[2rem] rounded-[14rem] absolute'>
                    <img src="/assets/icons/high-quality.svg" alt="" />
                    <span>
                        <p className='text-primary font-bold text-[3.6rem] -tracking-[0.072rem]'>50000+</p>
                        <p className='text-[1.8rem] leading-[2.88rem]'>Satisfied Client</p>
                    </span>
                </div>
                <img src="/assets/images/expertise-and-experience.svg" className='w-full' />
            </div>
            <div className='size-[3.9rem] absolute left-0 bottom-[3.9rem] bg-[#F2F4E9]'/>
            <div className='size-[3.9rem] absolute left-[3.9rem] -bottom-[0.01rem] bg-[#F2F4E9]'/>
      </SectionWrapper>
  )
}

export default ExpertiseAndExperience
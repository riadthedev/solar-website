import React from 'react'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'

const Testimonials = () => {
  return (
    <SectionWrapper>
        <SectionHeader highlight='TESTIMONIALS' hightlightStyle='text-primary bg-secondary' title='Our customers give love feedback'>
            <p className='w-1/2 text-center text-[#737577] self-center' data-aos='fade-left'>
            At Mentary, we believe in the power of renewable energy to create a more
            sustainable future. With a passion for clean energy and a commitment to our
            customers, we are dedicated to delivering the best possible solutions.
            </p>
        </SectionHeader>
        {/* CAROUSEL */}
    </SectionWrapper>
  )
}

export default Testimonials
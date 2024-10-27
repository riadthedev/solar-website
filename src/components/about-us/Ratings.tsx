import React from 'react'
import SectionWrapper from '../home/SectionWrapper'

const Ratings = () => {
  return (
    <SectionWrapper py='py-[5rem]' classname='bg-[#96D055] text-white '>
        <div className='flex justify-between items-center'>
            <div><span className='text-[5rem] font-semibold'>12+</span><span className='text-[2.2rem] font-bold'><p>Years</p><p>Experience</p></span></div>
            <div><span className='text-[5rem] font-semibold'>239+</span><span className='text-[2.2rem] font-bold'><p>Projects</p><p>Completed</p></span></div>
            <div><span className='text-[5rem] font-semibold'>230+</span><span className='text-[2.2rem] font-bold'><p>Happy</p><p>Customers</p></span></div>
            <div><span className='text-[5rem] font-semibold'>4.2</span><span className='text-[2.2rem] font-bold'><p>Overall</p><p>Ratings</p></span></div>
        </div>
    </SectionWrapper>
  )
}

export default Ratings
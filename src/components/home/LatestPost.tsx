import React from 'react'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'
import { Button } from '../ui/button'

const LatestPost = () => {
    return (
        <SectionWrapper>
            <SectionHeader highlight='LATEST POST' hightlightStyle='text-primary bg-secondary' title='Read our latest solar insights'>
                <Button className='rounded-none text-[1.6rem] px-[1.8rem] py-[1.8rem] w-fit flex gap-x-2 hover:scale-[1.08] active:scale-[0.95] transition ease-in-out duration-300 self-center'><span>View More</span><img src="/assets/icons/view-arrow.svg" alt="" /></Button>
            </SectionHeader>
            <section className='flex justify-between'>
                <div className='border border-[#E8E8E8] w-[40.3rem] '>
                    <img src="/assets/images/solar-man.png" className='w-full h-[26.2rem] object-cover' alt="" />
                    <div className='p-[2.6rem] space-y-[1.8rem]'>
                        <div className='flex gap-[1rem]'>
                            <span className='flex gap-x-[0.4rem] '>
                                <img src="/assets/icons/user.svg" alt="Admin" />
                                <p>Admin</p>
                            </span>
                            <span className='flex gap-x-[0.4rem]'>
                                <img src="/assets/icons/clock.svg" alt="Admin" />
                                <p> 22 may 2024</p>
                            </span>
                        </div>
                        <hr className='my-[0.8rem]'/>
                        <p className='text-[2.2rem] font-semibold'>How Many Solar Panels Do You Need for Your Business?</p>
                        <Button className='text-[1.6rem] bg-white text-primary shadow-none px-0 mt-[0.8rem] flex gap-x-2 hover:scale-[1.08] active:scale-[0.95] transition ease-in-out duration-300'><span>Read More</span> <img src='/assets/icons/right-arrow.svg' alt='Right Arrow'/></Button>
                    </div>
                </div>
                <div className='border border-[#E8E8E8] w-[40.3rem] '>
                    <img src="/assets/images/solar-panel-one.jpeg" className='w-full h-[26.2rem] object-cover' alt="" />
                    <div className='p-[2.6rem] space-y-[1.8rem]'>
                        <div className='flex gap-[1rem]'>
                            <span className='flex gap-x-[0.4rem] '>
                                <img src="/assets/icons/user.svg" alt="Admin" />
                                <p>Admin</p>
                            </span>
                            <span className='flex gap-x-[0.4rem]'>
                                <img src="/assets/icons/clock.svg" alt="Admin" />
                                <p> 22 may 2024</p>
                            </span>
                        </div>
                        <hr className='my-[0.8rem]'/>
                        <p className='text-[2.2rem] font-semibold'>Understanding Tax Deductions for Small Businesses</p>
                        <Button className='text-[1.6rem] bg-white text-primary shadow-none px-0 mt-[0.8rem] flex gap-x-2 hover:scale-[1.08] active:scale-[0.95] transition ease-in-out duration-300'><span>Read More</span> <img src='/assets/icons/right-arrow.svg' alt='Right Arrow'/></Button>
                    </div>
                </div>
                <div className='border border-[#E8E8E8] w-[40.3rem] '>
                    <img src="/assets/images/solar-panel-two.jpeg" className='w-full h-[26.2rem] object-cover' alt="" />
                    <div className='p-[2.6rem] space-y-[1.8rem]'>
                        <div className='flex gap-[1rem]'>
                            <span className='flex gap-x-[0.4rem] '>
                                <img src="/assets/icons/user.svg" alt="Admin" />
                                <p>Admin</p>
                            </span>
                            <span className='flex gap-x-[0.4rem]'>
                                <img src="/assets/icons/clock.svg" alt="Admin" />
                                <p> 22 may 2024</p>
                            </span>
                        </div>
                        <hr className='my-[0.8rem]'/>
                        <p className='text-[2.2rem] font-semibold'>Understanding Tax Deductions for Small Businesses</p>
                        <Button className='text-[1.6rem] bg-white text-primary shadow-none px-0 mt-[0.8rem] flex gap-x-2 hover:scale-[1.08] active:scale-[0.95] transition ease-in-out duration-300'><span>Read More</span> <img src='/assets/icons/right-arrow.svg' alt='Right Arrow'/></Button>
                    </div>
                </div>
            </section>
        </SectionWrapper>
    )
}

export default LatestPost
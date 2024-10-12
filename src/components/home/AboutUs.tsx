import React, { useEffect } from 'react'
import SectionWrapper from './SectionWrapper'
import { Button } from '../ui/button'
import SectionHeader from './SectionHeader'

const AboutUs = () => {
    
return (
    <SectionWrapper classname='bg-white '>
            <SectionHeader highlight='ABOUT US' hightlightStyle='text-primary bg-secondary' title='We are the best of renewable energy'>
                <p className='w-1/2 text-center text-[#737577] self-center' data-aos='fade-left'>
                    At Mentary, we believe in the power of renewable energy to create a more
                    sustainable future. With a passion for clean energy and a commitment to our
                    customers, we are dedicated to delivering the best possible solutions.
                </p>
            </SectionHeader>
            <div className='grid grid-cols-3 gap-x-[2rem] text-[#737577] justify-items-center leading-[2.56rem]' data-aos='fade-up'>
                <article className='flex flex-col justify-between '>
                    <p>We're committed to revolutionizing the way you think about energy. Say goodbye to skyrocketing utility bills and hello to a brighter, greener future with our state-of-the-art solar energy solutions.</p>
                    <p>Your premier source for sustainable energy solutions. Explore our range of solar products and services designed to meet your energy needs.</p>
                    <ul className='flex gap-y-[3rem] flex-col'>
                        <li className='flex space-x-[0.8rem] items-center'><img src='/assets/icons/tick.svg'/><span>Expertise and Experience</span></li>
                        <li className='flex space-x-[0.8rem] items-center'><img src='/assets/icons/tick.svg'/><span>Free Consultation and Site Assessment</span></li>
                        <li className='flex space-x-[0.8rem] items-center'><img src='/assets/icons/tick.svg'/><span>High-Quality Solar Products</span></li>
                        <li className='flex space-x-[0.8rem] items-center'><img src='/assets/icons/tick.svg'/><span>Comprehensive End-to-End Services</span></li>
                    </ul>
                    <Button className='rounded-none text-[1.6rem] px-[1.8rem] py-[1.8rem] w-fit flex gap-x-2 hover:scale-[1.08] active:scale-[0.95] transition ease-in-out duration-300'><span>Learn More</span><img src="/assets/icons/view-arrow.svg" alt="" /></Button>
                </article>
                <img src="/assets/images/solar-man.png" className='' alt="" />
                <ul className='flex flex-col justify-between'>
                    <li className='flex space-x-[1rem] justify-center items-center'>
                        <div className='bg-primary p-[1.6rem] flex items-center justify-center rounded-full'><img src="/assets/icons/peak-shaving.svg" alt="peak icon" /></div>
                        <div>
                            <h3 className='text-[2.2rem] text-black font-semibold'>Peak Shaving</h3>
                            <p>We understand that every home and business is unique.</p>
                        </div>
                    </li>
                    <li className='flex space-x-[1rem] justify-center items-center'>
                        <div className='bg-primary p-[1.6rem] flex items-center justify-center rounded-full'><img src="/assets/icons/demand-response.svg" alt="peak icon" /></div>
                        <div>
                            <h3 className='text-[2.2rem] font-semibold text-black'>Demand Response</h3>
                            <p>We understand that every home and business is unique.</p>
                        </div>
                    </li>
                    <li className='flex space-x-[1rem] justify-center text-black items-center'>
                        <div className='bg-primary p-[1.6rem] flex items-center justify-center rounded-full'><img src="/assets/icons/load-shifting.svg" alt="peak icon" /></div>
                        <div>
                            <h3 className='text-[2.2rem] font-semibold'>Load Shifting</h3>
                            <p>We understand that every home and business is unique.</p>
                        </div>
                    </li>
                    <li className='flex space-x-[1rem] justify-center text-black items-center'>
                        <div className='bg-primary p-[1.6rem] flex items-center justify-center rounded-full'><img src="/assets/icons/environmental-benefits.svg" alt="peak icon" /></div>
                        <div>
                            <h3 className='text-[2.2rem] font-semibold text-black'>Environmental Benefits</h3>
                            <p>We understand that every home and business is unique.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='size-[3.9rem] absolute left-0 bg-[#F2F4E9]'/>
            <div className='size-[3.9rem] absolute left-[3.9rem] -bottom-[0.01rem] bg-[#F2F4E9]'/>
    </SectionWrapper>
)
}

export default AboutUs
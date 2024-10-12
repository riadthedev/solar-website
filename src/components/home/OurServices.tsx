import React from 'react'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'
import { Button } from '../ui/button'

const OurServices = () => {
    return (
        <SectionWrapper classname="bg-[#F2F4E9] flex flex-col">
            <SectionHeader highlight='OUR SERVICES' hightlightStyle='text-primary bg-white' title='Best offer for renewable energy'>
                <p className='w-1/2 text-center text-[#737577] self-center' data-aos='fade-left'>
                    At Mentary, we believe in the power of renewable energy to create a more
                    sustainable future. With a passion for clean energy and a commitment to our
                    customers, we are dedicated to delivering the best possible solutions.
                </p>
            </SectionHeader>
            <div className='flex leading-[2.56rem] gap-x-[3rem]'>
                {cardItems.map((card, index) => 
                    <div key={index} className={`bg-white h-[29.2rem] px-[4.2rem] justify-center gap-y-[1rem] flex flex-col items-center ${index % 2 && 'mt-[5rem]'}`} data-aos={index % 2 ? 'flip-left' : 'flip-right'}  data-aos-duration="1000">
                        <img src={card.image} className='size-[4.6rem]' alt={card.title} />
                        <h2>{card.title}</h2>
                        <p className='text-center text-[#737577]'>{card.description}</p>
                        <Button className='text-[1.6rem] bg-white text-primary shadow-none flex gap-x-2 hover:scale-[1.08] active:scale-[0.95] transition ease-in-out duration-300'><span>Learn More</span> <img src='/assets/icons/right-arrow.svg' alt='Right Arrow'/></Button>
                    </div>
                )
                }
            </div>
            <Button className='rounded-none text-[1.6rem] px-[1.8rem] py-[1.8rem] self-center flex gap-x-2 hover:scale-[1.08] active:scale-[0.95] transition ease-in-out duration-300'><span>View All Services</span><img src="/assets/icons/view-arrow.svg" alt="" /></Button>
        </SectionWrapper>
    )
}

export default OurServices

const cardItems = [{title: 'Solar Energy', description: 'Aenean mattis mauris turpis, quis porta magna aliquam.', image: '/assets/icons/solar-energy.svg'}, {title: 'Hybrid Energy', description: 'Aenean mattis mauris turpis, quis porta magna aliquam.', image: '/assets/icons/hybrid-energy.svg'}, {title: 'Wind Energy', description: 'Aenean mattis mauris turpis, quis porta magna aliquam.', image: '/assets/icons/wind-energy.svg'}, {title: 'Renewable Energy', description: 'Aenean mattis mauris turpis, quis porta magna aliquam.', image:'/assets/icons/renewable.svg'}]
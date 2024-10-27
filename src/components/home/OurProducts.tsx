import React from 'react'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'

const OurProducts:React.FC<HomePageProps> = ({hide = false}) => {
  return (
    <>
   { !hide && 
   <>
    <SectionWrapper>
        <SectionHeader highlight='OUR PROJECTS' hightlightStyle='text-primary bg-secondary' title='Explore our latest projects'>
            <p className='w-1/2 text-center text-[#737577] self-center' data-aos='fade-left'>
            At Mentary, we believe in the power of renewable energy to create a more
            sustainable future. With a passion for clean energy and a commitment to our
            customers, we are dedicated to delivering the best possible solutions.
            </p>
        </SectionHeader>
    </SectionWrapper>
    <section className='flex'>
        <div className={`w-full h-[43.5rem] flex flex-col justify-end pb-[0.8rem] items-center relative bg-[url('/assets/images/solar-panel-one.jpeg')]`} data-aos='flip-right' data-aos-duration="1000">
            <h3 className='text-white text-[2.2rem] font-semibold leading-[2.42rem]'>Adani Plant - Gujarat</h3>
            <p className='text-[1.6rem] text-primary leading-[2.56rem]'>PowerPlant</p>
        </div>
        <div className={`w-full h-[43.5rem] flex flex-col justify-end pb-[0.8rem] items-center relative bg-[url('/assets/images/solar-panel-two.jpeg')]`} data-aos='flip-left' data-aos-duration="1000">
            <h3 className='text-white text-[2.2rem] font-semibold leading-[2.42rem]'>Goldi Plant - Gujarat</h3>
            <p className='text-[1.6rem] text-primary leading-[2.56rem]'>SolarPlant</p>
        </div>
        <div className={`w-full h-[43.5rem] flex flex-col justify-end pb-[0.8rem] items-center relative bg-[url('/assets/images/solar-panel-three.jpeg')]`} data-aos='flip-right' data-aos-duration="1000">
            <h3 className='text-white text-[2.2rem] font-semibold leading-[2.42rem]'>Adani Plant - Gujarat</h3>
            <p className='text-[1.6rem] text-primary leading-[2.56rem]'>MegaPlant</p>
        </div>
        <div className={`w-full h-[43.5rem] flex flex-col justify-end pb-[0.8rem] items-center relative bg-[url('/assets/images/solar-panel-one.jpeg')]`} data-aos='flip-left' data-aos-duration="1000">
            <h3 className='text-white text-[2.2rem] font-semibold leading-[2.42rem]'>Tata Plant - Gujarat</h3>
            <p className='text-[1.6rem] text-primary leading-[2.56rem]'>PowerPlant</p>
        </div>
    </section>
    
    </>
    }
    </>
  )
}

export default OurProducts
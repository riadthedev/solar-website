import React, { useState } from 'react'
import SectionWrapper from '../home/SectionWrapper'
import { AnimatePresence, motion as m } from 'framer-motion'
import SectionHeader from '../home/SectionHeader'
import { GoArrowRight } from 'react-icons/go'

type OpenTypes = '01' | '02' | '03' | '04' | '05' | ''


const HowItWorks = () => {
    const [open, setOpen] = useState<OpenTypes>('');
  return (
    <SectionWrapper classname='bg-white'>
        <SectionHeader highlight='HOW IT WORKS' hightlightStyle='bg-secondary text-primary' title='Making it easy, a simple guide to our process'>
                <section className='w-1/2' data-aos='fade-left'>
                   {faqItems.map((item, index) =>
                   <div className='flex py-[2.1rem] gap-x-6 border-b-[#E8E8E8] border-b-2 transition ease-in-out duration-300 ' key={index}>
                        <p className={`${item.number === open ? "text-primary" : "text-black"} font-semibold text-[2.2rem] `}>{item.number}</p>
                        <div className='w-full space-y-[1.2rem]'>
                            <h1 className='flex w-full justify-between cursor-pointer ' onClick={() => setOpen(open !== item.number ? (item.number as OpenTypes) : '')}>
                                <span className={`${item.number === open ? "text-primary" : "text-black"} font-semibold text-[2.2rem]`}>{item.question}</span><GoArrowRight className={`${open === item.number && 'rotate-0 text-primary'} -rotate-45 transition ease-in-out duration-300 text-black text-4xl`} />
                            </h1>
                            <AnimatePresence>
                                {open === item.number && <m.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>{item.answer}</m.p>}
                            </AnimatePresence>
                        </div>
                    </div>)}
                </section>
            </SectionHeader>
    </SectionWrapper>
  )
}

export default HowItWorks

const faqItems = [
    {number: '01', question: 'Consultation', answer: 'Solar Energy refers to the energy obtained from the sun through the use of photovoltaic cells or solar panels.'}, 
    {number: '02', question: 'Site Explore', answer: 'Solar Energy refers to the energy obtained from the sun through the use of photovoltaic cells or solar panels.'}, 
    {number: '03', question: 'Design', answer: 'Solar Energy refers to the energy obtained from the sun through the use of photovoltaic cells or solar panels.'}, 
    {number: '04', question: 'Consultation', answer: 'Solar Energy refers to the energy obtained from the sun through the use of photovoltaic cells or solar panels.'}, 
    {number: '05', question: 'Monitoring', answer: 'Solar Energy refers to the energy obtained from the sun through the use of photovoltaic cells or solar panels.'}
]
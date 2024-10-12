'use client'
import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import SectionHeader from './SectionHeader'
import {AnimatePresence, motion as m} from 'framer-motion'

type OpenTypes = '01' | '02' | '03' | '04' | '05' | ''

const Faqs = () => {
    const [open, setOpen] = useState<OpenTypes>('')
  return (
    <SectionWrapper classname='bg-secondary'>
        <SectionHeader highlight='FREQUENTLY ASKED QUESTIONS' hightlightStyle='bg-white text-primary' title='Everything you need to know about our services solutions'>
            <section className='w-1/2' data-aos='fade-left'>
               {faqItems.map((item, index) => 
               <div className='flex py-[2.1rem] gap-x-6 border-b-[#E8E8E8] border-b transition ease-in-out duration-300 ' key={index}>
                    <p className={`${item.number === open ? "text-primary" : "text-black"} font-semibold text-[2.2rem] `}>{item.number}</p>
                    <div className='w-full space-y-[1.2rem]'>
                        <h1 className='flex w-full justify-between cursor-pointer ' onClick={() => setOpen(open !== item.number ? (item.number as OpenTypes) : '')}>
                            <span className={`${item.number === open ? "text-primary" : "text-black"} font-semibold text-[2.2rem]`}>{item.question}</span><img className={`${open === item.number && 'rotate-45'} transition ease-in-out duration-300`} src="/assets/icons/open.svg" alt="" />
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

export default Faqs

const faqItems = [
    {number: '01', question: 'What is Solar Energy?', answer: 'Solar Energy refers to the energy obtained from the sun through the use of photovoltaic cells or solar panels.'}, 
    {number: '02', question: 'How does Solar Energy work?', answer: 'Solar Energy refers to the energy obtained from the sun through the use of photovoltaic cells or solar panels.'}, 
    {number: '03', question: 'What is Renewable Energy?', answer: 'Solar Energy refers to the energy obtained from the sun through the use of photovoltaic cells or solar panels.'}, 
    {number: '04', question: 'I have a bigger project. Can you handle it?', answer: 'Solar Energy refers to the energy obtained from the sun through the use of photovoltaic cells or solar panels.'}, 
    {number: '05', question: 'How do you communicate?', answer: 'Solar Energy refers to the energy obtained from the sun through the use of photovoltaic cells or solar panels.'}
]
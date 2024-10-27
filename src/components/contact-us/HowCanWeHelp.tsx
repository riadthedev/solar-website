import React from 'react'
import SectionWrapper from '../home/SectionWrapper'
import { MdEmail } from 'react-icons/md'
import { FaLocationDot, FaPhone } from 'react-icons/fa6'
import { Button } from '../ui/button'

const HowCanWeHelp = () => {
  return (
    <SectionWrapper classname='flex gap-[4.5rem] bg-white' space = {false}>
        <div className='w-[38.4rem] flex flex-col gap-[3rem]'>
            <h1 className='text-[3rem] font-semibold -tracking-[0.06rem]'>San Francisco, US</h1>
            <p className='text-[1.6rem] text-[#737577] leading-[2.56rem]'>Our presence in this iconic city reflects our dedication to being innovation</p>
            <p className='flex gap-x-[1rem]'><MdEmail className='text-[#96D055]'/><span>info@domain.com</span></p>
            <p className='flex gap-x-[1rem]'><FaLocationDot className='text-[#96D055]'/><span>2972 Westheimer Rd. Santa Ana, Illinois 85486</span></p>
            <p className='flex gap-x-[1rem]'><FaPhone className='text-[#96D055]'/><span>2972 Westheimer Rd. Santa Ana, Illinois 85486</span></p>
            <hr />
            <h1 className='text-[3rem] font-semibold -tracking-[0.06rem]'>London, UK</h1>
            <p className='text-[1.6rem] text-[#737577] leading-[2.56rem]'>Our presence in this iconic city reflects our dedication to being innovation</p>
            <p className='flex gap-x-[1rem]'><MdEmail className='text-[#96D055]'/><span>info@domain.com</span></p>
            <p className='flex gap-x-[1rem]'><FaLocationDot className='text-[#96D055]'/><span>2972 Westheimer Rd. Santa Ana, Illinois 85486</span></p>
            <p className='flex gap-x-[1rem]'><FaPhone className='text-[#96D055]'/><span>2972 Westheimer Rd. Santa Ana, Illinois 85486</span></p>
        </div>
        <div className='flex-1 flex flex-col gap-y-[2rem]'>
            <h2 className='text-[1.2rem] w-fit p-[1rem] text-primary bg-secondary'>CONTACT US</h2>
            <h1 className='text-[5rem] font-bold '>How can we help you today?</h1>
            <p className='text-[1.6rem] leading-[2.56rem] text-[#737577]'>Let us know who you are and what you're looking for below.</p>
            <form className='flex flex-col gap-y-[2rem]'>
                <div className='flex gap-x-[2.5rem]'>
                    <div className='flex flex-col gap-[0.5rem] w-full'>
                        <label htmlFor="name" className='text-[1.6rem] font-bold leading-[2.56rem]'>Your Name</label>
                        <input type="text" id='name' className='outline-none py-[1.42rem] px-[1rem] placeholder:text-[#737577] border-2 border-[#E8E8E8]' placeholder='Enter Full Name'/>
                    </div>
                    <div className='flex flex-col gap-[0.5rem] w-full'>
                        <label htmlFor="email" className='text-[1.6rem] font-bold leading-[2.56rem]'>Your Email</label>
                        <input type="email" id='email' className='outline-none py-[1.42rem] px-[1rem] placeholder:text-[#737577] border-2 border-[#E8E8E8]' placeholder='Enter Email'/>
                    </div>
                    <div className='flex flex-col gap-[0.5rem] w-full'>
                        <label htmlFor="phone" className='text-[1.6rem] font-bold leading-[2.56rem]'>Your Phone</label>
                        <input type="text" id='phone' className='outline-none py-[1.42rem] px-[1rem] placeholder:text-[#737577] border-2 border-[#E8E8E8]' placeholder='Enter Phone Number'/>
                    </div>
                </div>
                <div className='flex flex-col gap-[0.5rem] w-full'>
                    <label htmlFor="message" className='text-[1.6rem] font-bold leading-[2.56rem]'>Message</label>
                    <textarea rows={10} name="message" id="message" className='outline-none py-[1.42rem] px-[1rem] placeholder:text-[#737577] border-2 border-[#E8E8E8] resize-none' placeholder='Type Message'></textarea>
                </div>
                <Button className='text-[1.6rem] rounded-none bg-primary text-white w-fit px-[3rem] py-[2rem] shadow-none flex gap-x-2 hover:scale-[1.08] active:scale-[0.95] transition ease-in-out duration-300'>Send Message</Button>
            </form>
        </div>
    </SectionWrapper>
  )
}

export default HowCanWeHelp
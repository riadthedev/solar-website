import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMap, FaPhone, FaTwitter } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'
import { IoSendOutline } from 'react-icons/io5'

const Footer = () => {
  return (
    <footer className='bg-black p-[4rem] flex gap-x-[4rem] text-white text-[1.6rem] leading-[2.56rem]'>
      <section className='grid grid-cols-[auto,auto] w-1/2 gap-x-[4rem]'>
        <div className='space-y-[3rem]'>
          <img src="/assets/images/soare-logo-white.svg" alt="" />
          <p className=''>Harness the power of the sun with our state-of-the-art solar panel solutions. we are committed to providing cost-effective solar energy systems for your home or business.</p>
          <ul className='flex gap-[2.77rem]'>
            <li> <FaFacebook /> </li>
            <li> <FaTwitter /> </li>
            <li> <FaLinkedin /> </li>
            <li> <FaInstagram /> </li>
          </ul>
        </div>
        <div className='h-full space-y-[3rem] flex flex-col '>
          <h1 className='text-[2.2rem] font-semibold leading-[2.42rem]'>Useful Links</h1>
          <ul className='flex flex-col justify-between flex-1'>
            <li>About Us</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Meet the team</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </section>
      <section className='grid grid-cols-2'>
        <div className='space-y-[3rem] flex flex-col'>
          <h1 className='text-[2.2rem] font-semibold leading-[2.42rem]'>Contact</h1>
          <ul className='flex-1 flex flex-col justify-between'>
            <li className='flex items-center gap-[0.8rem]'><FaPhone /> <span>(406) 555-0120</span></li>
            <li className='flex items-center gap-[0.8rem]'><FaEnvelope /> <span>info@domain.com</span></li>
            <li className='flex items-center gap-[0.8rem]'><FaLocationPin/> <span>2972 Westheimer Rd. Santa Ana, Illinois 85486</span></li>
          </ul>
        </div>
        <div className='space-y-[3rem] flex flex-col'>
          <h1 className='text-[2.2rem] font-semibold leading-[2.42rem]'>Newsletter</h1>
          <ul className='flex-1 flex flex-col space-y-[1rem]'>
            <li className='flex items-center gap-[0.8rem]'><span>Be the first to get the latest from us</span></li>
            <li className='flex bg-white justify-between p-[0.7rem]'><input type="email" className='w-full text-black outline-none' placeholder='Your email' /><div className='bg-primary px-[0.9rem] py-[1.06rem]'><IoSendOutline /></div></li>
          </ul>
        </div>
      </section>
    </footer>
  )
}

export default Footer
'use client';
import React from 'react'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation';
import Link from 'next/link';


const Navbar = () => {
  const router = usePathname();
  return (
    <nav className='px-[6.15rem] py-[2rem] text-[1.6rem]  flex justify-between items-center'>
        <figure>
            <img className='w-[10rem]' src="/assets/images/soare-logo.svg" alt="Company Logo" />
        </figure>
        <ul className='flex space-x-[6rem]'>
            {navLinks.map((item, index) => <li key={index} className={`${router === item.link ? 'text-[#96D055]' : 'text-black'}`}><Link href={item.link}>{item.name}</Link></li> )}
        </ul>
        <Button className='rounded-none text-[1.6rem] px-[1.8rem] py-[1.8rem]'> Get A Quote </Button>
    </nav>
  )
}

export default Navbar

const navLinks = [{name: 'Home', link: '/' }, {name: 'About Us', link: '/about'}, {name: 'Contact', link: '/contact'}, {name: 'Request Quote', link: '/request'}];
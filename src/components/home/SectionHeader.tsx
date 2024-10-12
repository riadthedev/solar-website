import React from 'react'

interface SectionHeaderProps {
    children: React.ReactNode;
    highlight: string;
    title: string;
    hightlightStyle?: string;
  }

const SectionHeader: React.FC<SectionHeaderProps> = ({highlight, hightlightStyle, title, children}) => {
    return (
        <div className='flex justify-between '>
                <div className='space-y-[1rem] w-1/2' data-aos='fade-right'>
                    <h2 className={`text-[1.2rem] w-fit p-[1rem] ${hightlightStyle}`}>{highlight}</h2>
                    <p className='text-[5rem] font-bold'>{title}</p>
                </div>
                {children}
        </div>
    )
}

export default SectionHeader
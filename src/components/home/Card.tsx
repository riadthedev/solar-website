import React from 'react'
import { Button } from '../ui/button';

interface CardProps {
    image: string;
    title: string;
    description: string;
}

const Card: React.FC<CardProps> = ({image, title, description}) => {
    return (
        <div className={`bg-white h-[29.2rem] px-[4.2rem] justify-center gap-y-[1rem] flex flex-col items-center border border-[#E8E8E8]`}>
            <img src={image} className='size-[4.6rem]' alt={title} />
            <h2>{title}</h2>
            <p className='text-center text-[#737577]'>{description}</p>
            <Button className='text-[1.6rem] bg-white text-primary shadow-none flex gap-x-2 hover:scale-[1.08] active:scale-[0.95] transition ease-in-out duration-300'><span>Learn More</span> <img src='/assets/icons/right-arrow.svg' alt='Right Arrow'/></Button>
        </div>
    )
}

export default Card
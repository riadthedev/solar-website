import React, { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  classname?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({children, classname, ...props}) => {
  return (
    <section className={`px-[6.15rem] py-[12.8rem] text-[1.6rem] relative space-y-[5rem]  ${classname}`} {...props}>
        {children}
    </section>
  )
}

export default SectionWrapper
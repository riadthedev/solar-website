import React, { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  classname?: string;
  ref?: React.RefObject<HTMLDivElement>;
}

const SectionWrapper = React.forwardRef<HTMLElement, SectionWrapperProps>(
  ({children, classname, ...props}, ref) => {
    return (
      <section 
        ref={ref}
        className={`px-[6.15rem] py-[12.8rem] text-[1.6rem] relative space-y-[5rem] ${classname}`} 
        {...props}
      >
        {children}
      </section>
    )
  }
)

export default SectionWrapper
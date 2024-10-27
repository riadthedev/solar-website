import React, { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  space?: boolean;
  classname?: string;
  ref?: React.RefObject<HTMLDivElement>;
  px?: string;
  py?: string;
}

const SectionWrapper = React.forwardRef<HTMLElement, SectionWrapperProps>(
  ({children, classname, px = 'px-[6.15rem]', py = 'py-[12.8rem]', space = true, ...props}, ref) => {
    return (
      <section 
        ref={ref}
        className={` ${px} ${py} text-[1.6rem] relative ${ space && 'space-y-[5rem]'} ${classname} `} 
        {...props}
      >
        {children}
      </section>
    )
  }
)

export default SectionWrapper
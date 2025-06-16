import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import React, { useRef } from 'react';
import { CiGlobe } from 'react-icons/ci';

gsap.registerPlugin(SplitText);

const Hero = () => {
  const nameRef = useRef();

  useGSAP(() => {
    const split = new SplitText(nameRef.current, {
      type: 'chars',
    });

    gsap.from(split.chars, {
      y: 100,
      autoAlpha: 0,
      opacity:0,
      stagger:{
        amount:0.5,
        from:'center',
        
        
      },
      duration: 1,
      ease: 'power4.out',
    });
  }, []);

  return (
    <div className='relative w-full h-[70vh] min-h-[700px] overflow-hidden '>
      {/* Top content */}
      <div className='flex flex-col md:flex-row justify-between items-center w-full z-10  mt-30'>
        {/* Location badge */}
        <div className='rounded-r-full h-[100px] bg-black/80 md:flex hidden items-center w-[250px] p-2 overflow-hidden'>
          <div className='flex items-center justify-between w-full'>
            <span className='text-lg font-light text-white leading-tight'>
              Located<br />in<br />Pakistan
            </span>
            <CiGlobe className='text-white text-4xl md:text-6xl mr-2 md:mr-5' />
          </div>
        </div>

        {/* Main heading */}
        <h1 className='text-4xl md:text-6xl font-light text-gray-900 text-center md:text-right'>
          Freelancer <br />
          <span className='font-medium'>Designer & Developer</span>
        </h1>
      </div>

      {/* Name with SplitText animation */}
      <div className='absolute bottom-10 left-0 w-full overflow-hidden'>
        <div className='w-max'>
          <h1
            ref={nameRef}
            className='md:text-[11.4rem] text-[20vw] font-medium whitespace-nowrap tracking-tight  '
          >
            Farhan Yousafzai
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;

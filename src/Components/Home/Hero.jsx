import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import React, { useRef, useState } from 'react';
import { CiGlobe } from 'react-icons/ci';

// Sample images - replace with your actual project images
const designImages = [
   '/Simple.jpg'
]
const devImages = [
'https://cdn.dribbble.com/userupload/17730954/file/original-1ca571d72aed46b341defcb0bf9a18e1.png?resize=1504x1128&vertical=center'
];


gsap.registerPlugin(SplitText);

const Hero = () => {
  const nameRef = useRef();
  const [activeShowcase, setActiveShowcase] = useState(null);
  const showcaseRef = useRef();

  useGSAP(() => {
    // Name animation
    const split = new SplitText(nameRef.current, {
      type: 'chars',
    });

    gsap.from(split.chars, {
      y: 100,
      autoAlpha: 0,
      opacity: 0,
      stagger: {
        amount: 0.5,
        from: 'center',
      },
      duration: 1,
      ease: 'power4.out',
    });

    // Showcase animation setup
    gsap.set(showcaseRef.current, { autoAlpha: 0, y: 20 });
  }, []);

  // Handle showcase hover
  const handleShowcaseHover = (type) => {
    setActiveShowcase(type);
    gsap.to(showcaseRef.current, {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  };

  const handleShowcaseLeave = () => {
    gsap.to(showcaseRef.current, {
      autoAlpha: 0,
      y: 20,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => setActiveShowcase(null)
    });
  };

  return (
    <div className='relative w-full h-[70vh] min-h-[700px] overflow-hidden'>
      {/* Top content */}
      <div className='flex flex-col md:flex-row justify-between items-center w-full z-10 mt-30'>
        {/* Location badge */}
        <div className='rounded-r-full h-[100px] bg-black/80 md:flex hidden items-center w-[250px] p-2 overflow-hidden'>
          <div className='flex items-center justify-between w-full'>
            <span className='text-lg font-light text-white leading-tight'>
              Located<br />in<br />Pakistan
            </span>
            <CiGlobe className='text-white text-4xl md:text-6xl mr-2 md:mr-5' />
          </div>
        </div>

        {/* Main heading with hoverable elements */}
        <h1 className='text-4xl md:text-6xl whitespace-nowrap font-light text-gray-900 text-center md:text-right'>
          Freelancer <br />
          <span className='font-medium'>
            <span 
              className='relative inline-block'
              onMouseEnter={() => handleShowcaseHover('design')}
              onMouseLeave={handleShowcaseLeave}
            >
              Designer
            </span>
            {' '}&{' '}
            <span 
              className='relative inline-block'
              onMouseEnter={() => handleShowcaseHover('dev')}
              onMouseLeave={handleShowcaseLeave}
            >
              Developer
            </span>
          </span>
        </h1>
      </div>

      {/* Name with SplitText animation */}
      <div className='absolute bottom-10 left-0 w-full overflow-hidden'>
        <div className='w-max'>
          <h1
            ref={nameRef}
            className='md:text-[11.4rem] text-[12vw] font-medium whitespace-nowrap tracking-tight'
          >
            Farhan Yousafzai
          </h1>
        </div>
      </div>

      {/* Image showcase (absolute positioned) */}
      <div 
        ref={showcaseRef}
        className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center"
      >
        <div className="relative w-full h-[60vh] max-w-4xl mx-auto">
          {(activeShowcase === 'design' ? designImages : devImages).map((img, i) => (
            <div 
              key={i}
              className="absolute rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500"
              style={{
                zIndex: i,
                width: `${80 - i * 10}%`,
                left: `${10 + i * 5}%`,
                top: `${i * 5}%`,
                rotate: `${i % 2 === 0 ? -3 : 3}deg`,
                filter: 'brightness(0.95)',
              }}
            >
              <img 
                src={img} 
                alt={activeShowcase === 'design' ? `Design project ${i+1}` : `Development project ${i+1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
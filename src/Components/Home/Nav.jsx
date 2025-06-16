import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import Magnetic from '../../Animations/Magnetic';
import { ChevronUp } from 'lucide-react';

gsap.registerPlugin(SplitText);

const Nav = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const containerRef = useRef();
  const codeByRef = useRef();
  const proDevRef = useRef();
  const nameRef = useRef();
  const dialogRef = useRef();

  // Toggle dialog with animation
  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  // Handle animations
  useGSAP(() => {
    // Name animation setup
    const splitCodeBy = new SplitText(codeByRef.current, { type: 'chars' });
    const splitProDev = new SplitText(proDevRef.current, { type: 'chars' });
    const splitName = new SplitText(nameRef.current, { type: 'chars' });

    // Initial states
    gsap.set(splitProDev.chars, {
      autoAlpha: 0,
      yPercent: 100,
      rotationX: 90
    });

    // Name animation on load
    gsap.from(splitName.chars, {
      autoAlpha: 0,
      y: 20,
      rotationZ: 10,
      stagger: 0.05,
      duration: 0.8,
      ease: 'back.out(1.7)',
      delay: 0.5
    });

    // Title cycling animation
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(splitCodeBy.chars, {
      autoAlpha: 0,
      yPercent: -100,
      rotationX: -90,
      stagger: 0.03,
      duration: 0.6,
      ease: 'power3.inOut'
    })
    .to(splitProDev.chars, {
      autoAlpha: 1,
      yPercent: 0,
      rotationX: 0,
      stagger: 0.03,
      duration: 0.6,
      ease: 'back.out(1.7)'
    }, '-=0.4')
    .to({}, { duration: 2 })
    .to(splitProDev.chars, {
      autoAlpha: 0,
      yPercent: 100,
      rotationX: 90,
      stagger: 0.03,
      duration: 0.6,
      ease: 'power3.inOut'
    })
    .to(splitCodeBy.chars, {
      autoAlpha: 1,
      yPercent: 0,
      rotationX: 0,
      stagger: 0.03,
      duration: 0.6,
      ease: 'back.out(1.7)'
    }, '-=0.4')
    .to({}, { duration: 2 });

    // Dialog animation setup
    if (dialogRef.current) {
      gsap.set(dialogRef.current, { y: '-100%' });
    }
  }, []);

  // Animate dialog when state changes
  useGSAP(() => {
    if (dialogRef.current) {
      if (isDialogOpen) {
        gsap.to(dialogRef.current, {
          y: '0%',
          duration: 0.8,
          ease: 'power3.inOut'
        });
      } else {
        gsap.to(dialogRef.current, {
          y: '-100%',
          duration: 0.8,
          ease: 'power3.inOut'
        });
      }
    }
  }, [isDialogOpen]);

  // Close dialog on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isDialogOpen) {
        toggleDialog();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDialogOpen]);

  return (
    <>
      {/* Blurred Dialog */}
      <div 
  ref={dialogRef}
  className="fixed inset-0 w-screen h-screen bg-blue-600 z-10 flex justify-between p-5 overflow-hidden"
>
  {/* Top-right close button */}
  <button 
    onClick={toggleDialog}
    className="absolute top-5 right-5 text-white text-1xl transition duration-300 z-20"
    aria-label="Close"
  >
    <span className=" cursor-pointer transition duration-500 flex items-center">
     See You <ChevronUp/>
    </span>
  </button>

  {/* Left side - Social links */}
  <div className='flex flex-col w-full h-full items-start text-white justify-start relative'>
    <a 
      href="https://x.com/Farhankhana804" 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative text-9xl font-black uppercase hover:text-blue-200 transition duration-300 mb-2"
    >
      Twitter
      <span className="absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-500"></span>
    </a>
    <a 
      href="https://www.linkedin.com/in/farhan-yousafzai-8a1363352/

" 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative text-9xl font-black uppercase hover:text-blue-200 transition duration-300 mb-2"
    >
      LinkedIn
      <span className="absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-500"></span>
    </a>
    <a 
      href="https://github.com/FarhanYousafzai0" 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative text-9xl font-black uppercase hover:text-blue-200 transition duration-300 mb-2"
    >
      GitHub
      <span className="absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-500"></span>
    </a>
    <a 
      href="https://wa.me/yournumber" 
      target="_blank" 
      rel="noopener noreferrer"
      className="group relative text-9xl font-black uppercase hover:text-blue-200 transition duration-300 mb-2"
    >
      WhatsApp
      <span className="absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-500"></span>
    </a>
    
    {/* Additional links - appears on hover */}
   
  </div>

  {/* Right side - Bio */}
  <div className='w-full h-full text-start relative'>
    <h1 className='text-9xl font-black text-white mb-10'>Why me?</h1>
    <p className='text-2xl mt-5 max-w-2xl leading-relaxed'>
      The combination of my passion for design, code & interaction positions me in a unique place in the web design world.
    </p>
    
    {/* Contact info */}
    <div className="absolute bottom-5 right-0 text-right">
      <p className="text-xl mb-2">coderwithferry@gmail.com</p>
      <p className="text-xl">+92 31974 21 574</p>
    </div>
    
    {/* Animated cursor circle */}
    <div className="absolute w-64 h-64 rounded-full border-2 border-white pointer-events-none animate-pulse-slow" 
      style={{
        top: '50%',
        right: '20%',
        transform: 'translateY(-50%)'
      }}
    ></div>
    <div className="absolute w-64 h-64 rounded-full border-2 border-white pointer-events-none animate-pulse-slow" 
      style={{
        top: '60%',
        right: '50%',
        transform: 'translateY(-50%)'
      }}
    ></div>
  </div>
</div>

      {/* Navigation */}
      <nav className='flex items-center justify-between h-[60px] rounded-md p-5 relative '>
        <div ref={containerRef} className='cursor-pointer text-lg font-medium relative overflow-hidden h-8'>
          <div className='inline-block overflow-hidden relative'>
            <span ref={codeByRef} className='inline-block'>
              © Code By <span ref={nameRef}>Farhan</span>
            </span>
            <span ref={proDevRef} className='absolute top-0 left-0'>
              Full-Stack Sorcerer
            </span>
          </div>
        </div>

        <div className='md:flex items-center gap-5 hidden'>
          <Magnetic><Link to="/" className="hover:text-blue-400 transition duration-300">Home</Link></Magnetic>
          <Magnetic><Link to="/about" className="hover:text-blue-400 transition duration-300">About</Link></Magnetic>
          <Magnetic><Link to="/insights" className="hover:text-blue-400 transition duration-300">Insights</Link></Magnetic>
        </div>

        <Magnetic>
          <button 
            className='cursor-pointer hover:text-blue-400 transition duration-300'
            onClick={toggleDialog}
          >
            Let's Talk
          </button>
        </Magnetic>
      </nav>
    </>
  );
};

export default Nav;
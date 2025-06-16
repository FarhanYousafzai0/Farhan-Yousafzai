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
  className="fixed inset-0 w-screen h-screen bg-blue-600 z-50 flex flex-col md:flex-row p-4 md:p-8 overflow-hidden"
>
  {/* Close Button */}
  <button 
    onClick={toggleDialog}
    className="absolute top-4 right-4 text-white text-lg z-50"
    aria-label="Close"
  >
    <Magnetic><span className="cursor-pointer flex items-center gap-1">
      See You <ChevronUp />
    </span></Magnetic>
  </button>

  {/* Left - Social Links */}
  <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start text-blue-200  gap-4">
    {[
      { name: "Twitter", link: "https://x.com/Farhankhana804" },
      { name: "LinkedIn", link: "https://www.linkedin.com/in/farhan-yousafzai-8a1363352/" },
      { name: "GitHub", link: "https://github.com/FarhanYousafzai0" },
      { name: "WhatsApp", link: "https://wa.me/yournumber" }
    ].map((social) => (
      <a
        key={social.name}
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative uppercase font-black text-4xl sm:text-6xl lg:text-9xl hover:text-black transition duration-300"
      >
        {social.name}
        <span className="absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-500"></span>
      </a>
    ))}
  </div>

  {/* Right - Bio Section */}
  <div className="w-full md:w-1/2 h-full text-black flex flex-col justify-center items-start mt-10 md:mt-0 px-2 md:px-10 relative">
    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-6">Why me?</h1>
    <p className="text-base sm:text-xl lg:text-2xl max-w-xl leading-relaxed">
      The combination of my passion for design, code & interaction positions me in a unique place in the web design world.
    </p>

    {/* Contact Info */}
    <div className="absolute bottom-5 right-5 text-right text-sm sm:text-base">
      <p className="mb-1">coderwithferry@gmail.com</p>
      <p>+92 31974 21 574</p>
    </div>

    {/* Animated Circles */}
    <div className="absolute w-32 h-32 sm:w-48 sm:h-48 rounded-full border-2 border-white pointer-events-none animate-pulse"
      style={{ top: '20%', right: '10%', transform: 'translateY(-50%)' }}
    ></div>
    <div className="absolute w-32 h-32 sm:w-48 sm:h-48 rounded-full border-2 border-white pointer-events-none animate-pulse"
      style={{ top: '65%', right: '40%', transform: 'translateY(-50%)' }}
    ></div>
  </div>
</div>


      {/* Navigation */}
      <nav className='flex items-center justify-between h-[60px] rounded-md p-5 relative  '>
        <div ref={containerRef} className='cursor-pointer text-lg font-medium relative overflow-hidden h-8'>
          <Link to='/' className='inline-block overflow-hidden relative'>
            <span ref={codeByRef} className='inline-block'>
              © Code By <span ref={nameRef}>Farhan</span>
            </span>
            <span ref={proDevRef} className='absolute top-0 left-0'>
              Full-Stack Sorcerer
            </span>
          </Link>
        </div>

        <div className='md:flex items-center gap-5 hidden'>
          <Magnetic><Link to="/work" className=" transition duration-300 relative group">Work
          
          <span className='w-[5px] h-[5px] group-hover:opacity-100 opacity-0 absolute transition-all duration-300    -bottom-3 left-1/2 rounded-full bg-black'></span>
          </Link></Magnetic>
          <Magnetic><Link to="/about" className=" transition duration-300 relative group">About
                    <span className='w-[5px] h-[5px] group-hover:opacity-100 opacity-0 absolute transition-all duration-300   -bottom-3 left-1/2 rounded-full bg-black'></span>

          </Link></Magnetic>
          <Magnetic><Link to="/insights" className=" transition duration-300 relative group">Insights
                    <span className='w-[5px] h-[5px] group-hover:opacity-100 opacity-0 transition-all duration-300 absolute  -bottom-3 left-1/2 rounded-full bg-black'></span>

          </Link></Magnetic>
        </div>

        <Magnetic>
          <button 
            className='cursor-pointer  transition duration-300'
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
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import Magnetic from '../../Animations/Magnetic';

gsap.registerPlugin(SplitText);

const Nav = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const containerRef = useRef();
  const codeByRef = useRef();
  const proDevRef = useRef();
  const nameRef = useRef();
  const dialogRef = useRef();

  // Open/close dialog with animation
  const toggleDialog = () => {
    if (isDialogOpen) {
      gsap.to(dialogRef.current, {
        y: '-100%',
        duration: 0.8,
        ease: 'power3.inOut',
        onComplete: () => setIsDialogOpen(false)
      });
    } else {
      setIsDialogOpen(true);
      gsap.fromTo(dialogRef.current, 
        { y: '-100%' },
        { y: '0%', duration: 0.8, ease: 'power3.inOut' }
      );
    }
  };

  useGSAP(() => {
    // Split both text elements
    const splitCodeBy = new SplitText(codeByRef.current, { type: 'chars' });
    const splitProDev = new SplitText(proDevRef.current, { type: 'chars' });
    
    // Initial setup - hide professional developer
    gsap.set(splitProDev.chars, {
      autoAlpha: 0,
      yPercent: 100,
      rotationX: 90
    });

    // Create the animation timeline
    const createAnimation = () => {
      const tl = gsap.timeline();
      
      // Hide "Code By" and name
      tl.to(splitCodeBy.chars, {
        autoAlpha: 0,
        yPercent: -100,
        rotationX: -90,
        stagger: 0.03,
        duration: 0.6,
        ease: 'power3.inOut'
      });
      
      // Show professional title
      tl.to(splitProDev.chars, {
        autoAlpha: 1,
        yPercent: 0,
        rotationX: 0,
        stagger: 0.03,
        duration: 0.6,
        ease: 'back.out(1.7)'
      }, '-=0.4');

      // Pause before reversing
      tl.to({}, { duration: 2 });
      
      // Reverse the animation
      tl.to(splitProDev.chars, {
        autoAlpha: 0,
        yPercent: 100,
        rotationX: 90,
        stagger: 0.03,
        duration: 0.6,
        ease: 'power3.inOut'
      });
      
      tl.to(splitCodeBy.chars, {
        autoAlpha: 1,
        yPercent: 0,
        rotationX: 0,
        stagger: 0.03,
        duration: 0.6,
        ease: 'back.out(1.7)'
      }, '-=0.4');

      // Pause before repeating
      tl.to({}, { duration: 2 });
      
      // Set the animation to loop infinitely
      tl.repeat(-1);
    };

    // Start the animation
    createAnimation();
    
    // Name character animation on load
    const splitName = new SplitText(nameRef.current, { type: 'chars' });
    gsap.from(splitName.chars, {
      autoAlpha: 0,
      y: 20,
      rotationZ: 10,
      stagger: 0.05,
      duration: 0.8,
      ease: 'back.out(1.7)',
      delay: 0.5
    });

  }, []);

  return (
    <>
      {/* Blurred Dialog */}
      {isDialogOpen && (
        <div 
          ref={dialogRef}
          style={{
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
          className="fixed inset-0 w-screen h-screen bg-blue-600/90 z-10 flex flex-col items-center justify-center"
        >
          <div className="max-w-md w-full p-8 bg-white/10 rounded-xl border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">Let's Talk</h2>
            
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70"
              />
              <textarea 
                placeholder="Your Message" 
                rows="4"
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/70"
              ></textarea>
              <button 
                type="submit"
                className="w-full py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition"
              >
                Send Message
              </button>
            </form>
            
            <button 
              onClick={toggleDialog}
              className="absolute top-6 right-6 text-white text-2xl hover:text-blue-200 transition"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className='flex items-center justify-between h-[60px] rounded-md p-5 relative z-20'>
        {/* Logo with auto-cycling animation */}
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
          <Magnetic><Link to="/">Home</Link></Magnetic>
          <Magnetic><Link to="/about">About</Link></Magnetic>
          <Magnetic><Link to="/insights">Insights</Link></Magnetic>
        </div>

        <Magnetic>
          <button 
            className='cursor-pointer'
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
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

// Register plugins
gsap.registerPlugin(SplitText, MotionPathPlugin);

const NameAnimation = () => {
  const containerRef = useRef();
  const nameRef = useRef();
  const hoverAreaRef = useRef();

  useGSAP(() => {
    // Initial setup - split characters
    const splitName = new SplitText(nameRef.current, {
      type: 'chars',
      charsClass: 'char relative inline-block'
    });

    // Create floating path for each character
    const paths = [];
    splitName.chars.forEach((char, i) => {
      const path = {
        curviness: 1.5,
        values: [
          { x: 0, y: 0 },
          { x: gsap.utils.random(-5, 5), y: gsap.utils.random(-10, 10) },
          { x: 0, y: 0 }
        ]
      };
      paths.push(path);
      
      // Initial animation
      gsap.from(char, {
        duration: 0.8,
        y: 40,
        opacity: 0,
        rotateX: 90,
        delay: i * 0.05,
        ease: 'back.out(1.7)'
      });
    });

    // Hover animation
    const hoverAnimation = (isHover) => {
      splitName.chars.forEach((char, i) => {
        const duration = isHover ? 0.6 : 1.2;
        const ease = isHover ? 'elastic.out(1, 0.5)' : 'sine.out';
        
        gsap.to(char, {
          duration,
          motionPath: paths[i],
          ease,
          delay: isHover ? i * 0.03 : i * 0.02
        });
      });
    };

    // Mouse move effect
    const handleMouseMove = (e) => {
      if (!hoverAreaRef.current) return;
      const rect = hoverAreaRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      gsap.to(splitName.chars, {
        x: x * 20,
        y: y * 10,
        rotateZ: x * 5,
        duration: 1.5,
        repeat:-1,
        yoyo:true,
        ease: 'power3.out',
        stagger: 0.03
      });
    };

    const handleMouseLeave = () => {
      gsap.to(splitName.chars, {
        x: 0,
        y: 0,
        rotateZ: 0,
        duration: 1.2,
        ease: 'elastic.out(1, 0.3)',
        stagger: 0.02
      });
    };

    // Event listeners
    hoverAreaRef.current?.addEventListener('mouseenter', () => hoverAnimation(true));
    hoverAreaRef.current?.addEventListener('mouseleave', () => {
      hoverAnimation(false);
      handleMouseLeave();
    });
    hoverAreaRef.current?.addEventListener('mousemove', handleMouseMove);

    return () => {
      // Cleanup
      hoverAreaRef.current?.removeEventListener('mouseenter', () => hoverAnimation(true));
      hoverAreaRef.current?.removeEventListener('mouseleave', () => {
        hoverAnimation(false);
        handleMouseLeave();
      });
      hoverAreaRef.current?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative inline-block">
      <div ref={hoverAreaRef} className="hover-area">
        <h1 ref={nameRef} className=" font-bold tracking-tighter">
          Farhan 
        </h1>
      </div>
    </div>
  );
};

export default NameAnimation;
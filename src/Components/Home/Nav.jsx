import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

const Nav = () => {
  const [show, setShow] = useState(false);
  const contactRef = useRef();

 

  return (
    <>
      
      
      <nav className='flex items-center justify-between h-[60px] text-white rounded-md p-5 relative z-20'>
        {/* Logo */}
        <span className='cursor-pointer'>© Code By Farhan</span>

        <div className='flex items-center gap-5'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/insights">Insights</Link>  
          <button 
            o
            className='cursor-pointer'
          >
            Let's Talk
          </button> 
        </div>
      </nav>
    </>
  )
}

export default Nav
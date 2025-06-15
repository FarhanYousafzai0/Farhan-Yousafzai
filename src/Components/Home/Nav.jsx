import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {




  
  return (
    <>
    <nav className='flex items-center justify-between h-[60px]  rounded-md p-5 '>

{/* Logo */}
<span className='cursor-pointer'>© Code By Farhan</span>

<div className='flex items-center gap-5'>
<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/insights">Insights</Link>  
<Link to="">Let’s Talk</Link> 



</div>
    </nav>
      
    </>
  )
}

export default Nav

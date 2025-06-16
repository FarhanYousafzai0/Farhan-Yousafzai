import React from 'react'
import gsap
 from 'gsap'
import Magnetic from '../../Animations/Magnetic'
import { Link } from 'react-router-dom'

const Work = () => {


    
  return (
    <>
      <div className='h-screen  bg-white text-white p-5 '>

       

       <div className=' h-full bg-blue-600 rounded-lg'>

<div className='grid grid-cols-1 p-10 md:gap-10 gap-7   md:grid-cols-2'>
    <h1  className='text-white text-2xl md:text-4xl font-normal md:leading-normal'>Helping
 
brands
 
to
 
stand
 
out
 
in
 
the
 
digital
 
era.
 
Together
 
we
 
will
 
set
 
the
 
new
 
status
 
quo.
 
No
 
nonsense,
 
always
on
the
cutting
 
edge.</h1>

<p className=' w-full text-white text-1xl md:w-md'>Blending creativity with code, I specialize in crafting interactive digital experiences that stand out in the modern web landscape</p>
</div>
        



        <div className='flex  justify-between p-20 w-full'>

<div><p className='text-white md:block hidden  '>Recent Work</p>
</div>
<Magnetic><Link to='' className='w-[150px] h-[150px] rounded-full flex items-center cursor-pointer justify-center bg-black text-white'>

    About me
</Link></Magnetic>

</div>
       </div>



      </div>
    </>
  )
}

export default Work

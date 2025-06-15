import { ArrowBigUp, Globe } from 'lucide-react'
import React from 'react'
import { CiGlobe } from 'react-icons/ci'
import { MdArrowOutward } from 'react-icons/md'

const Hero = () => {
  return (
    <div className='relative w-full h-[90vh] flex items-center overflow-hidden  '>
     
<div className='flex  justify-between w-full'>
       <div className=' rounded-r-full h-[100px] bg-black/80 flex items-center w-[300px] p-2 overflow-hidden'>
        <div className='flex items-center justify-between w-full'>
          <span className='text-lg mr-4 font-light text-white leading-tight'>
            Located<br/>in<br/>Pakistan
          </span>
          
        </div>
      </div>


     


<h1 className='text-4xl font-light text-white mr-20 '>Freelance <br/>
Designer & Developer</h1>


</div>


    </div>
  )
}

export default Hero
import { Globe } from 'lucide-react'
import React from 'react'
import { CiGlobe } from 'react-icons/ci'

const Hero = () => {
  return (
    <div className='relative w-full h-[90vh] flex items-center  '>
     
<div className='flex items-center justify-around'>
       <div className=' rounded-r-full h-[100px] bg-black/80 flex items-center w-[300px] p-2 overflow-hidden'>
        <div className='flex items-center justify-between w-full'>
          <span className='text-lg font-medium mr-4 text-white leading-tight'>
            Located<br/>in<br/>Pakistan
          </span>
          <div className='w-[80px] h-[80px] rounded-full bg-[#999D9E] flex items-center justify-center'>
            <span className='text-white w-full h-full flex items-center justify-center font-bold'><CiGlobe className='text-6xl' /></span>
          </div>
        </div>
      </div>
</div>


    </div>
  )
}

export default Hero
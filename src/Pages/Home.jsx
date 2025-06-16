import React from 'react'
import Nav from '../Components/Home/Nav'
import Hero from '../Components/Home/Hero'
import Work from '../Components/Home/Work'

const Home = () => {
  return (
    <>
      <div className='w-screen h-screen overflow-x-hidden'>

        <Nav/>
        <Hero/>
        <Work/>
      </div>
    </>
  )
}

export default Home

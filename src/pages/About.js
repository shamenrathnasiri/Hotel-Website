import React from 'react'
import bgimage from '../aboutusImg/aboutus.jpg'

function About() {
  return (
    <div>
       <img
          className=" bg-cover h-screen lg:w-full md:h-[full] sm:w-full sm:h-1/2 brightness-100"
          src={bgimage}
          alt="Background Image" />
    </div>
  )
}

export default About

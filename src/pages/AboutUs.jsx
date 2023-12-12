import React from 'react'
import aboutImg from '../images/heroImages/hero2.jpg'

const AboutUs = () => {
  return (
    <div className='md:grid md:grid-cols-4 justify-center items-center w-full min-h-screen'>
      <div className='mt-10 ml-10 md:mt-0 tracking-wider col-span-1'>
        <h1 className='font-semibold text-2xl'>Min historie</h1>
        <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus dolores rem est suscipit porro consectetur, quibusdam labore, culpa natus aspernatur quidem possimus non nobis? Exercitationem esse quam error cumque!
        </span>
      </div>
      <div className='mt-10 mb-10 ml-10 mr-10 md:mt-0 md:mb-0 tracking-wider col-span-1'>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus dolores rem est suscipit porro consectetur, quibusdam labore, culpa natus aspernatur quidem possimus non nobis? Exercitationem esse quam error cumque!
        </span>
      </div>
      <div className='col-span-2'>
        <img src={aboutImg} alt="" className='w-full h-full'/>
      </div>
  </div>
  )
}

export default AboutUs
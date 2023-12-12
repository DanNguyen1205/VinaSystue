import React from 'react'
import hero1 from '../images/heroImages/hero1.jpg'
import hero2 from '../images/heroImages/hero2.jpg'
import hero3 from '../images/heroImages/hero3.jpg'


import { ImageSlider } from './ImageSlider'

export const Hero = () => {
  const IMAGES = [hero1, hero2, hero3]

  return (
  <>
  <div style={{maxWidth: "1400px", width:"100%", aspectRatio:"9/5", margin: "0 auto"}}>
    <ImageSlider imageUrls={IMAGES}/>
  </div>
  </>
  )
}

export default Hero
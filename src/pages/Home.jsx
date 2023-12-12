import React from 'react'
import { ImageSlider } from '../components/ImageSlider'
import Hero from '../components/Hero'
import Prices from '../components/Prices'
import OpeningHours from '../components/OpeningHours'
import Contact from '../components/Contact'


export const Home = () => {
  const allDecs = [];

  const pantsDesc = 
  {
    name: "Bukser", 
    descriptions: [
    {work: "Oplægning", price: "0kr"},
    {work: "Original kant", price: "0kr"},
    {work: "Ind i liv fra", price: "0kr"},
    {work: "Lynløs", price: "0kr"},
    {work: "Fodvidde fra", price: "0kr"}],
    image: "/pants.svg"
  }
  allDecs.push(pantsDesc)

  const shirtsDesc =   {
    name: "Skjorter", 
    descriptions: [
    {work: "Oplægning", price: "0kr"},
    {work: "Original kant", price: "0kr"},
    {work: "Ind i liv fra", price: "0kr"},
    {work: "Lynløs", price: "0kr"},
    {work: "Fodvidde fra", price: "0kr"}],
    image: '/shirt.svg'
  }
  allDecs.push(shirtsDesc)


  const jeansDesc =   {
    name: "Jeans", 
    descriptions: [
    {work: "Oplægning", price: "0kr"},
    {work: "Original kant", price: "0kr"},
    {work: "Ind i liv fra", price: "0kr"},
    {work: "Lynløs", price: "0kr"},
    {work: "Fodvidde fra", price: "0kr"}], 
    image: '/jeans.svg'

  }
  allDecs.push(jeansDesc)


  const dressesDesc =   {
    name: "Kjoler og nederdele", 
    descriptions: [
    {work: "Oplægning", price: "0kr"},
    {work: "Original kant", price: "0kr"},
    {work: "Ind i liv fra", price: "0kr"},
    {work: "Lynløs", price: "0kr"},
    {work: "Fodvidde fra", price: "0kr"}],
    image: '/dress.svg'

  }
  allDecs.push(dressesDesc)


  const outerwearDesc =   {
    name: "Frakker/Overtøj", 
    descriptions: [
    {work: "Oplægning", price: "0kr"},
    {work: "Original kant", price: "0kr"},
    {work: "Ind i liv fra", price: "0kr"},
    {work: "Lynløs", price: "0kr"},
    {work: "Fodvidde fra", price: "0kr"}],
    image: '/outerwear.svg'

  }
  allDecs.push(outerwearDesc)


  const blazerDesc =   {
    name: "Blazer", 
    descriptions: [
    {work: "Oplægning", price: "0kr"},
    {work: "Original kant", price: "0kr"},
    {work: "Ind i liv fra", price: "0kr"},
    {work: "Lynløs", price: "0kr"},
    {work: "Fodvidde fra", price: "0kr"}],
    image: '/blazer.svg'
  }
  allDecs.push(blazerDesc)


  const drapesDesc =   {
    name: "Gardiner", 
    descriptions: [
    {work: "Oplægning", price: "0kr"},
    {work: "Original kant", price: "0kr"},
    {work: "Ind i liv fra", price: "0kr"},
    {work: "Lynløs", price: "0kr"},
    {work: "Fodvidde fra", price: "0kr"}],
    image: '/curtains.svg'
  }
  allDecs.push(drapesDesc)



  return (
    <>
    <div className='flex flex-col justify-center items-center'>
      <Hero/>

      <h1 style={{maxWidth: "1400px"}} className='w-full pt-10 text-center align-middle text-2xl font-bold bg-gray-100'>Priser</h1>
      <div style={{maxWidth: "1400px"}} className='sm:grid sm:grid-cols-3 w-full text-lg bg-gray-100'>
        {allDecs.map((desc)=> {
          return <Prices description={desc.descriptions} image={desc.image} name={desc.name}/>
        })}
      </div>

      <OpeningHours/>

      <Contact/>


    </div>

    </>
  )
}

export default Home
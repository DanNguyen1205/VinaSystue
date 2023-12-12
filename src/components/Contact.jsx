import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


export const Contact = () => {
  return (
    <div id="contact" style={{maxWidth: "1400px"}} className='py-10 flex flex-col space-y-5 justify-center items-center bg-gray-100 w-full align-middle text-center text-lg'>

        <h1 className='text-2xl font-extrabold'>Kontakter</h1>  
        <a href="https://www.facebook.com/vinasystueodense/">
        <img className="h-16" src="/facebook-circle.svg" alt=""/>
        </a>

        <div>
        <FontAwesomeIcon icon={faPhone} className='h-10' />
        <span className='ml-5'>23711530</span>
        </div>
    </div>
  )
}

export default Contact
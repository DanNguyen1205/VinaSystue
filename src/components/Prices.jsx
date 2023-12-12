import React from 'react'

export const Prices = (props) => {


  return (
    <>
    <div id='prices' className='flex flex-col items-center w-full pb-10 mt-5 ' >
        <h2  className='font-semibold text-lg'>{props.name}</h2>
        {console.log(props.image)}
        <img src={props.image} alt="" className='h-24'/>

        {props.description.map((property) => (
            <span className='mt-1'>{property.work}: {property.price}</span>
        ))}


    
    </div>

    </>

  )
}

export default Prices
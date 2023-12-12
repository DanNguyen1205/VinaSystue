import React from 'react'

export const OpeningHours = () => {
  return (
    <div id='openinghours' style={{maxWidth: "1400px"}} className='flex flex-col py-10 space-y-6 items-center justify-center  w-full text-lg'>
        <span><h1 className='text-2xl font-extrabold '>Åbningstider</h1></span>
        <span>Man-Fre: 10-18</span>
        <span>Lørdag: 10-17</span>
        <span>Søndag: Lukket</span>
    </div>
  )
}

export default OpeningHours
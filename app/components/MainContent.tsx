"use client"
import React from 'react'
import Image from 'next/image'

import Jenaide from '../../public/images/Jenaide.png'

const MainContent = () => {
  return (
    <div className='flex items-center'>
        <Image src={Jenaide} alt="Jenaide" className='w-52 h-52  ' />
    </div>
  )
}

export default MainContent
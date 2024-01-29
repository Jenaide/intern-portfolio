import React from 'react'
import Image from 'next/image';
import Circle from '../../public/images/Hire-me.png'

import { HiArrowRight } from 'react-icons/hi2';
import Link from 'next/link';


const HireMe = () => {
  return (
    <div className='mx-auto xl:mx-0'>
        <Link href={"/work"} 
            className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'
        >
            <Image 
                src={Circle}
                width={160}
                height={160}
                alt=''
                className='animate-spin-slow'
            />
        </Link>
    </div>
  )
}

export default HireMe
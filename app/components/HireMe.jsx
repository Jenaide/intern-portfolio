import React from 'react'
import Image from 'next/image';
import Circle from '../../public/images/Hire-me.png'

import { HiArrowRight } from 'react-icons/hi2';
import Link from 'next/link';


const HireMe = () => {
  return (
    <div className='mt-[-150px]'>
        <Link href={"/pages/contact"} 
            className='relative w-[185px] h-[185px] flex justify-center items-center group'
        >
            <Image 
                src={Circle}
                width={160}
                height={160}
                alt=''
                className='animate-spin-slow'
            />
          <HiArrowRight className='absolute text-2xl group-hover:translate-x-2 transition-all duration-300' />
        </Link>
    </div>
  )
}

export default HireMe
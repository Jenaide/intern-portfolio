"use client"
import React from 'react'
import Image from 'next/image'

import Jenaide from '../../public/images/Jenaide.png'
import Link from 'next/link'

const MainContent = () => {
  return (
    <div className='flex ml-44 mt-9'>
      <div className='relative'>
        <div className='border-8 border-gray-400 rounded-full w-72 h-72 flex items-center justify-center'>
        <Image src={Jenaide} alt="Jenaide" className='w-60 h-60 rounded-full' />
        </div>
      </div>
      <div className='px-28 mb-8'>
        <div className='p-7'>
          <h1 className='text-md'>Hi I'm<br></br><span className='text-4xl font-extrabold '>Jenaide Sibolie</span></h1>
          <h2 className='text-2xl font-bold text-slate-700'>Full Stack Developer</h2>
          <p className='text-md py-4 leading-8 text-gray-400'>
            I&apos;m detailed-oriented and passionate recent graduate from the ALX Software Engineering program. I&apos;m eager to contribute to
            innovative software solutions as a Junior developer. I&apos;m a quick learner with strong foundation in programming
            languages and software development methodologies, seeking an opportunity to grow and excel in a dynamic environment.
          </p>
          <div className='flex items-center self-start mt-2'>
            <Link 
              href='/'
              target={"_blank"}
              className='font-semibold border-2 p-2.5 px-6 rounded-lg hover:bg-white hover:text-black transition'
              >Resume</Link>
            <Link 
              href={"/pages/contact"}
              className='ml-4 font-semibold border-2 bg-slate-700 p-2.5 px-6 rounded-lg hover:bg-slate-900 transition'
              >Contact</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent
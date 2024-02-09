"use client"
import Head from 'next/head'
import Image from 'next/image'
import BoyCode from '../../../public/images/boy_code.png'

const About = () => {


  return (
    <>
      <main className='flex w-full flex-col items-center justify-center'>
        <div className='grid w-full grid-cols-8 gap-16'>
          <div className='col-span-3 flex flex-col items-center justify-center'>
            <h2 className='mb-4 text-lg font-bold'><span className='text-slate-600'>ABOUT</span> ME</h2>
            <p className='font-medium ml-7'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ab odit consequatur illo, 
              facere non dignissimos cumque nostrum nulla ad nihil accusantium doloribus recusandae! Placeat nesciunt 
              facilis cupiditate voluptatum quo.
            </p>
            <p className='my-4 font-medium ml-7'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ab odit consequatur illo, 
              facere non dignissimos cumque nostrum nulla ad nihil accusantium doloribus recusandae! Placeat nesciunt 
              facilis cupiditate voluptatum quo.
            </p>
            <p className='font-medium ml-7'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ab odit consequatur illo, 
              facere non dignissimos cumque nostrum nulla ad nihil accusantium doloribus recusandae! Placeat nesciunt 
              facilis cupiditate voluptatum quo.
            </p>
          </div>
          <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-slate-400 bg-black p-8'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-slate-600' />
            <Image src={BoyCode} alt='' className='w-full h-auto rounded-2xl' />
          </div>
        </div>
      </main>
    </>
  )
}

export default About
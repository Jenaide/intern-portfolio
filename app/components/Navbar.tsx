"use client"
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full px-32 py-8 font-bold'>
        <div className='absolute'>
            <Link href={"/"}
            className='w-16 h-16 bg-white text-black flex items-center justify-center rounded-r-full text-2xl font-bold hover:scale-110 transition'
            >JS</Link>
        </div>
        <nav>
            <ul className='flex justify-center py-8'>
                <Link href='/about' className='mr-4'>About</Link>
                <Link href='/resume' className='mx-4'>Resume</Link>
                <Link href='/work' className='mx-4'>Work</Link>
                <Link href='/contact' className='ml-4'>Contact</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar

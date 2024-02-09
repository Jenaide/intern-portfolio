"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const NavBar = () => {
  return (
    <header className='w-full px-14 py-8 font-bold'>
            <div className='absolute'>
                <Link href={"/"}
                className='w-16 h-16 bg-white text-black text-center flex items-center justify-center rounded-r-full text-2xl font-bold hover:scale-110
                hover:bg-slate-600 hover:text-white
                transition'
                >JS</Link>
            </div>
            <nav>
                <ul className='flex justify-center py-8'>
                    <Link href='/pages/about' title='about' className='mr-4 hover:text-slate-500'>About</Link>
                    <Link href='/pages/skills' title='education' className='mx-4 hover:text-slate-500'>Skills</Link>
                    <Link href='/pages/work' title='work' className='mx-4 hover:text-slate-500'>Work</Link>
                    <Link href='/pages/contact' title='contact' className='ml-4 hover:text-slate-500'>Contact</Link>
                </ul>
            </nav>
        </header>
      )
    }

export default NavBar

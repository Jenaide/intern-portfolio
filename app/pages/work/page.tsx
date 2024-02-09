"use client"
import Head from 'next/head'
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link'
import React from 'react'
import { BsGithub } from 'react-icons/bs'

import Fyuur from '../../../public/images/Fyuur.png'

interface FeatureProps {
  type: string;
  title: string;
  summary: string;
  img: StaticImageData;
  link: string;
  github: string;
}

interface ProjectProps {
  type: string;
  title: string;
  summary: string;
  img: StaticImageData;
  link: string;
  github: string;
}


const FeatureProjects: React.FC<FeatureProps> = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-white p-5'>
      <Link href={link} className='w-1/2 cursor-pointer overflow-hidden rounded-lg' >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
        <span className='text-slate-400 font-medium text-xl'>{type}</span>
        <Link href={link} target='_blank' className='text-white hover:text-slate-600'>
          <h2 className='my-2 w-full text-left text-4xl font-semibold'>{title}</h2>
        </Link>
        <p className='my-2 font-medium '>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target='_blank' className=''><BsGithub className='w-10 h-10' /></Link>
          <Link href={link} target='_blank' className='ml-4 font-semibold border-2 p-2.5 px-6 rounded-lg hover:bg-white hover:text-black transition'>Visit Project</Link>
        </div>
      </div>
    </article>
  )
}

const Projects: React.FC<ProjectProps> = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-white p-3 relative'>
      <Link href={link} className='w-full cursor-pointer overflow-hidden rounded-lg' >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-slate-400 font-medium text-xl'>{type}</span>
        <Link href={link} target='_blank' className='text-white hover:text-slate-600'>
          <h2 className='my-2 w-full text-left text-3xl font-semibold'>{title}</h2>
        </Link>
        <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={github} target='_blank' className=''><BsGithub className='w-8 h-8' /></Link>
          <Link href={link} target='_blank' className='ml-4 font-semibold border-2 p-2.5 px-6 rounded-lg hover:bg-white hover:text-black transition'>Visit</Link>
        </div>
      </div>
    </article>
  )
};

const Work = () => {
  return (
    <>
      <main>
        <h1 className='ml-14 text-3xl font-bold '>PRO<span className=' text-slate-400'>JECTS</span></h1>
        <div className='grid grid-cols-12 gap-24'>
          <div className='col-span-12'>
            <FeatureProjects 
              type={'Featured Project'} 
              title={'Fyyur'} 
              summary={'A project build with python technology'} 
              img={Fyuur} 
              link={'/'} 
              github={'/'} />
          </div>
          <div className='col-span-6'>
            <Projects 
                type={'Projects I build'} 
                title={'Fyyur'} 
                summary={'A project build with python technology'} 
                img={Fyuur} 
                link={'/'} 
                github={'/'} />
          </div>
          <div className='col-span-6'>
            <Projects 
                  type={'Projects I build'} 
                  title={'Fyyur'} 
                  summary={'A project build with python technology'} 
                  img={Fyuur} 
                  link={'/'} 
                  github={'/'} />
          </div>
        </div>
      </main>
    </>
  )
}

export default Work
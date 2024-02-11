"use client"
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link'
import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { fadeInLeft, fadeInRight } from '@/app/components/variants/variants';

import Fyuur from '../../../public/images/Fyuur.png'
import BlogSite from '../../../public/images/blogsite.png'
import TaskNinja from '../../../public/images/task-ninja.png'

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
        <p className='my-2 font-light '>{summary}</p>
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
      <motion.div>
        <motion.h1 className='mx-14 text-8xl font-extrabold ' variants={fadeInLeft} initial='initial' whileInView='animate'>PRO<span className=' text-slate-400'>JECTS</span></motion.h1>
        <div className='grid grid-cols-12 gap-28'>
          <motion.div className='col-span-11 ml-24 my-14' variants={fadeInRight} initial='initial' whileInView='animate'>
            <FeatureProjects 
              type={'Featured Project'} 
              title={'Fyyur'} 
              summary={'Fyyur was build with Python and the Flask framework. The idea behind the project is that artists and venue managers can have one platform to interact.'} 
              img={Fyuur} 
              link={'#'} 
              github={'https://github.com/Jenaide/flask-fyyur-project'} />
          </motion.div>
          <div className='col-span-6'>
            <Projects 
                type={'BeyondBlog is a blog platform I build with Nodejs as the runtime environment and EJS as on the frontend.'} 
                title={'BeyondBlog'} 
                summary={''} 
                img={BlogSite} 
                link={'#'} 
                github={'https://github.com/Jenaide/BeyondBlog_NodeJS'} />
          </div>
          <div className='col-span-6'>
            <Projects 
                  type={'TaskNinja is build with Python using the Django framework.'} 
                  title={'TaskNinja'} 
                  summary={'A project build with python technology'} 
                  img={TaskNinja} 
                  link={'#'} 
                  github={'https://github.com/Jenaide/django-task-ninja'} />
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Work
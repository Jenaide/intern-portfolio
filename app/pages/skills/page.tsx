"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { BiLogoBootstrap, BiLogoCss3, BiLogoGit, BiLogoGithub, BiLogoHtml5, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoPostgresql, BiLogoPython, BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi'
import { SiCsharp, SiDocker, SiDotnet, SiExpress, SiFlask, SiK3S, SiKubernetes, SiMysql, SiPostman } from 'react-icons/si'
import { TbBrandDjango } from 'react-icons/tb'
import { fadeInBottom, fadeInLeft, fadeInRight, fadeInTop } from '@/app/components/variants/variants'

const Skills = () => {


  return (
    <>
      <motion.div className='h-[100%] max-w-6xl m-auto flex items-center' >
        <motion.div className='flex-1 flex flex-col gap-8'>
          <motion.h1 className='text-8xl leading-[88px]' variants={fadeInLeft} initial='initial' whileInView='animate'>MY <span className='text-slate-700'>SKILLS</span></motion.h1>
          <motion.div className='ml-5' variants={fadeInLeft} initial='initial' whileInView='animate'>
            <div className='flex flex-col'>
              <h2 className='text-2xl font-semibold'>Languages:</h2>
              <span className='font-light '>Python</span>
              <span className='font-light '>JavaScript</span>
              <span className='font-light '>C#</span>
            </div>
            <div className='flex flex-col'>
              <h2 className='text-2xl font-semibold'>Back-End:</h2>
              <span className='font-light'>NodeJS</span>
              <span className='font-light'>FLASK</span>
              <span className='font-light'>DJANGO</span>
              <span className='font-light'>.NET</span>
            </div>
            <div className='flex flex-col'>
              <h2 className='text-2xl font-semibold'>Front-End:</h2>
              <span className='font-light'>HTML5</span>
              <span className='font-light'>CSS5</span>
              <span className='font-light'>REACT</span>
              <span className='font-light'>TAILWINDCSS</span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div className='flex-1' variants={fadeInRight} initial='initial' whileInView='animate'>
          <div className='flex gap-16 mx-14 my-7'>
            <div className=''><BiLogoHtml5 className='w-12 h-12 text-orange-700' /></div>
            <div className=''><BiLogoCss3 className='w-12 h-12 text-blue-700' /></div>
            <div className=''><BiLogoJavascript className='w-12 h-12 text-yellow-400' /></div>
            <div className=''><BiLogoPython className='w-12 h-12 text-sky-700' /></div>
            <div className=''><SiCsharp className='w-12 h-12 text-purple-900' /></div>
          </div>
          <div className='flex gap-16 mb-14'>
            <div className=''><BiLogoNodejs className='w-12 h-12 text-green-900' /></div>
            <div className=''><SiExpress className='w-12 h-12 text-green-900' /></div>
            <div className=''><SiFlask className='w-12 h-12 text-gray-600' /></div>
            <div className=''><SiDotnet className='w-12 h-12 text-gray-600' /></div>
            <div className=''><TbBrandDjango className='w-12 h-12 text-green-950' /></div>
            <div className=''><BiLogoReact className='w-12 h-12 text-sky-400' /></div>
          </div>
          <div className='flex gap-16 mb-14'>
            <div className=''><BiLogoTailwindCss className='w-12 h-12 text-cyan-500' /></div>
            <div className=''><BiLogoBootstrap className='w-12 h-12 text-purple-700' /></div>
            <div className=''><BiLogoMongodb className='w-12 h-12 text-green-500' /></div>
            <div className=''><SiMysql className='w-12 h-12 text-amber-500' /></div>
            <div className=''><BiLogoPostgresql className='w-12 h-12 text-blue-950' /></div>
            <div className=''><BiLogoGit className='w-12 h-12 text-amber-600' /></div>
          </div>
          <div className='flex gap-16 mx-28 my-7'>
            <div className=''><BiLogoGithub className='w-12 h-12 text-gray-200' /></div>
            <div className=''><SiPostman className='w-12 h-12 text-orange-600' /></div>
            <div className=''><SiDocker className='w-12 h-12 text-blue-500' /></div>
            <div className=''><SiKubernetes className='w-12 h-12 text-blue-800' /></div>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Skills
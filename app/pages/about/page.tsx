"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const fadeIn = {
  hidden: {y: 20, opacity: 0},
  visible: {
    y: 0,
    opacity: 1
  }
}

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <main className='h-full py-30 text-center'>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='hidden absolute bottom-0 left-[370px]'
      >
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center'>
        <div>text</div>
        <div>skills</div>
        <div>skills</div>
        <div>skills</div>
      </div>
    </main>
  )
}

export default About
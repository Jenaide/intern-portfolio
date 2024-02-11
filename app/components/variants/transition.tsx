import React from 'react'

import { motion } from 'framer-motion'

const transitionVariants = {
    initial: {
        x: "100%",
        width: "100%",
    },
    animate: {
        x: "0%",
        width: "0%",
    },
    exit: {
        x: ["0%", "100%"],
        width: ["0%", "100%"],
    }
}

const Transition = () => {
  return (
    <>
        <motion.div className='fixed top-0 bottom-0 right-full h-screen z-30 bg-slate-500'
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.3, duration: 0.7, ease: 'easeInOut' }}>
        </motion.div>
        <motion.div className='fixed top-0 bottom-0 right-full h-screen z-20 bg-slate-700'
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5, duration: 0.9, ease: 'easeInOut' }}>
        </motion.div>
    </>
  )
}

export default Transition;

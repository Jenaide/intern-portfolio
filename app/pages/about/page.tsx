"use client"
import { motion } from 'framer-motion';
import Image from 'next/image'
import BoyCode from '../../../public/images/boy_code.png'
import { fadeInBottom, fadeInLeft, fadeInRight, fadeInTop } from '@/app/components/variants/variants';


const About = () => {
  return (
    <>
      <motion.div className='flex w-full flex-col items-center justify-center' variants={fadeInBottom} initial='initial' whileInView="animate">
        <div className='grid w-full grid-cols-8 gap-16'>
          <div className='col-span-4 gap-4 flex ml-9 flex-col items-center justify-center'>
            <motion.h2 className='font-extrabold text-8xl' variants={fadeInLeft}  ><span className='text-slate-600'>ABOUT</span> ME</motion.h2>
            <motion.p className='ml-7 text-sm'>
              Hello! I&apos;m Jenaide Sibolie, a passionate programmer with a diverse background in both technology and
              and finance. With a solid foundation in software engineering from completing a rigorous bootcamp and
              earning a certificate in full stack development, I am equipped with the skills and knowledge to tackle 
              complex technical challenges.
            </motion.p>
            <motion.p className='ml-7 text-sm'>
              Prior transitioning into the tech industry, I spent over 7 years in the banking sector, where I honed
              my skills in client service and relationship management. My experience in banking has instilled in me a
              strong work ethic, attention to detail, and a commitment to deliver exceptional results.
            </motion.p>
            <motion.p className='ml-7 text-sm'>
              Combining my technical expertise with my background in banking, I bring a unique perspective to every project
              I undertake. I thrive in dynamic environments where collaboration and creativity are valued, and I&apos;m also eager to
              learn and grow.
            </motion.p>
            <motion.p className='ml-7 text-sm'>
              I&apos;m deeply passionate about leveraging technology to make a positive impact on society and look forward to contribute
              to innovative projects that push the boundries of what&apos;s possible.
            </motion.p>
            <motion.p className='text-sm'>Let&apos;s connect and explore how we can work together to bring your ideas to life!!</motion.p>
          </div>
          <motion.div className='col-span-3 relative ml-1 rounded-2xl border-2 border-solid border-slate-400 bg-black' variants={fadeInRight}>
            <motion.div className='absolute top-0 -right-4 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-slate-700' />
            <Image src={BoyCode} alt='animated programmer with hoody' className='w-full h-auto rounded-2xl' />
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default About
"use client"
import React, { useRef, useState } from 'react'
import { animate, motion } from 'framer-motion';
import { fadeInBottom, fadeInLeft, fadeInRight, fadeInTop } from '@/app/components/variants/variants';
import emailjs from '@emailjs/browser';



const Contact = () => {

  const formRef = useRef();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p8lyj9u', 'template_yd292g8', formRef.current,{
        publicKey: 'fSIsvx5b2yHKfcIrw',
      })
      .then(() => {
        setSuccess(true);
      }, (err) => {
        setError(false);
      });
  };


  return (
    <>
      <motion.div className='h-[100%] max-w-6xl m-auto flex items-center gap-12' variants={fadeInBottom} initial='initial' whileInView="animate">{/*contact */}
        <motion.div className='flex-1 flex flex-col gap-12' variants={fadeInBottom}>{/*textcontainer */}
          <motion.h1 className='text-8xl leading-[88px]'>LET'S<span className='text-slate-700'> CONNECT</span></motion.h1>
          <motion.div variants={fadeInLeft}>{/*item */}
            <motion.h2 className='font-semibold text-slate-500'>Email</motion.h2>
            <motion.span className='font-light'>jenaidesibolie@gmail.com</motion.span>
          </motion.div>
          <motion.div variants={fadeInLeft}>{/*item */}
            <h2 className='font-semibold text-slate-500'>Address</h2>
            <span className='font-light'>Cape Town, South Africa</span>
          </motion.div>
          <motion.div variants={fadeInLeft}>{/*item */}
            <h2 className='font-semibold text-slate-500'>Contact</h2>
            <span className='font-light'>+27 82 882 6663</span>
          </motion.div>
        </motion.div>
        <motion.div className='flex-1' variants={fadeInBottom}>{/*formcontainer */}
          <form ref={formRef} onSubmit={sendEmail} className='flex flex-col gap-4'>
            <input type='text' placeholder='Name' name="user_name" required className='p-5 bg-transparent border text-white rounded-md' />
            <input type='text' placeholder='Email' name="user_email" required className='p-5 bg-transparent border text-white rounded-md' />
            <textarea placeholder='Message' id='' cols={20} rows={5} name="message" className='p-5 bg-transparent border text-white rounded-md'></textarea>
            <button className='p-3 border-none bg-slate-700 cursor-pointer font-medium rounded-lg hover:bg-slate-900'>SEND</button>
            {error && "Error"}
            {success && "Success"}
          </form>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Contact
"use client"

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion';
import { fadeInBottom, fadeInLeft, fadeInRight, fadeInTop } from '@/app/components/variants/variants';
import emailjs from '@emailjs/browser';


const Contact = () => {

  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<boolean | null>(null);
  const [success, setSuccess] = useState<boolean | null>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setError(null);
        setSuccess(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  const service_id = process.env.NEXT_PUBLIC_SERVICE_ID_KEY || "";
  const template_id = process.env.NEXT_PUBLIC_TEMPLATE_ID_KEY || "";
  const user_id = process.env.NEXT_PUBLIC_USER_ID_API_KEY || "";
  console.log(service_id)
  console.log(template_id)
  console.log(user_id)

  const templateParams = {
    from_name: name,
    from_email: email,
    to_name: 'Jenaide Sibolie',
    message: message,
  };

  emailjs.send(service_id, template_id, templateParams, user_id)
    .then(() => {
      setName('');
      setEmail('');
      setMessage('');
      setSuccess(true);
    })
    .catch(() => {
      setError(true);
    });
};

  return (
    <>
      <motion.div className='h-[100%] max-w-6xl m-auto flex items-center gap-12' variants={fadeInBottom} initial='initial' whileInView="animate">{/*contact */}
        <motion.div className='flex-1 flex flex-col gap-12' variants={fadeInBottom}>{/*textcontainer */}
          <motion.h1 className='text-8xl leading-[88px]'>LET&apos;S<span className='text-slate-700'> CONNECT</span></motion.h1>
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
            <input 
              type='text' 
              placeholder='Name' 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='p-5 bg-transparent border text-white rounded-md' 
              required
              />
            <input 
              type='text' 
              placeholder='Email' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='p-5 bg-transparent border text-white rounded-md' 
              required
              />
            <textarea 
              placeholder='Message' 
              id='' 
              cols={20} 
              rows={5} 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='p-5 bg-transparent border text-white rounded-md'></textarea>
            <button className='p-3 border-none bg-slate-700 cursor-pointer font-medium rounded-lg hover:bg-slate-900'>SEND</button>
            <div className='text-slate-400'
            >
              {error && "Error"}
              {success && "Email successfull sent!!"}
            </div>
            
          </form>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Contact
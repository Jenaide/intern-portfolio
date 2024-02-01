"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AiFillLinkedin, AiFillGithub, AiFillMediumSquare, AiFillMail } from 'react-icons/ai';
import { ReactNode } from 'react';

interface SocialLinkProps {
    href: string;
    target: string;
    children: ReactNode;
  }

const SocialLink: React.FC<SocialLinkProps> = ({ href, target, children }) => {
  return (
    <Link href={href} passHref target={target}>
      <motion.div
        className='w-10 h-10 flex flex-col transition-transform duration-300 hover:scale-125 mb-4'
      >
        {children}
      </motion.div>
    </Link>
  );
};

const Socials: React.FC = () => {
  return (
    <div className='fixed top-1/2 right-0 transform -translate-y-1/2 flex-col items-end px-6'>
      <SocialLink href='https://github.com/Jenaide' target={"_blank"}>
        <AiFillGithub className='w-10 h-10'/>
      </SocialLink>
      <SocialLink href='https://www.linkedin.com/in/jenaide-sibolie-57a340158/' target={"_blank"}>
        <AiFillLinkedin className='w-10 h-10 hover:text-blue-600' />
      </SocialLink>
      <SocialLink href='https://medium.com/@jenaidesibolie' target={"_blank"}>
        <AiFillMediumSquare className='w-10 h-10 hover:text-yellow-700' />
      </SocialLink>
      <SocialLink href='mailto:jenaidesibolie@gmail.com' target={"_blank"}>
        <AiFillMail className='w-10 h-10 hover:text-red-700' />
      </SocialLink>
    </div>
  );
};

export default Socials;

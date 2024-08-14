'use client';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

type Props = { scrolltoHash: Function, navDotted: boolean, navShow: boolean }

export default function Header({ scrolltoHash, navDotted, navShow }: Props) {

  const openFiverr = function () {
    window.open("https://www.fiverr.com/");
  };

  const openUpwork = function () {
    window.open("https://www.upwork.com/freelancers/~01983ace77ea5e144e");
  };

  return (

    <header className={`${navDotted ? 'dotedbg' : ''} ${navShow ? 'top-0' : '-top-52'} fixed left-0 right-0 px-2 py-2 md:py-4 2xl:py-5 2xl:px-4 flex items-center justify-between z-50 transition-all duration-1000`}>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center z-50'>
        <SocialIcon url='https://github.com/devtarekmia' target='_blank' fgColor='currentColor' bgColor='transparent' className='navbtn scale-90' />
        <SocialIcon url='https://wa.me/+8801796821678' target='_blank' fgColor='currentColor' bgColor='transparent' className='navbtn scale-90' />
        <SocialIcon url='https://linkedin.com/in/devtarekmia' target='_blank' fgColor='currentColor' bgColor='transparent' className='navbtn scale-90' />
        <SocialIcon url='https://t.me/tarekmia' target='_blank' fgColor='currentColor' bgColor='transparent' className='navbtn scale-90' />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5,
        }}

        className='flex flex-row items-center align-text-bottom cursor-pointer navbtn'
        onClick={() => scrolltoHash('contact')}
      >
        <div className='cursor-pointer p-2' onClick={() => openUpwork()}><SiUpwork className='h-7 w-full -mb-1 navbtn' /></div>
        <div className='cursor-pointer p-2' onClick={() => openFiverr()}><TbBrandFiverr className='h-6 w-full navbtn' /></div>
        <SocialIcon
          className='cursor-pointer navbtn mr-2'
          network='email'
          fgColor='currentColor'
          bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex text-sm scale-110 2xl:mx-2 pr-8'>Get In Touch</p>
      </motion.div>

    </header>
  )
}
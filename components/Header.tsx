'use client';
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = { scrolltoHash: Function, navDotted: boolean, navShow: boolean }

export default function Header({ scrolltoHash, navDotted, navShow }: Props) {

  return (

    <header className={`${navDotted ? 'dotedbg' : ''} ${navShow ? 'top-0' : '-top-52'} fixed left-0 right-0 px-4 py-2 md:p-5 flex items-start justify-between mx-auto z-50 transition-all duration-1000`}>
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
        <SocialIcon url='https://facebook.com/tarekmia24' fgColor='currentColor' bgColor='transparent' className='navbtn scale-90' />
        <SocialIcon url='https://github.com/devtarekmia' fgColor='currentColor' bgColor='transparent' className='navbtn scale-90' />
        <SocialIcon url='https://t.me/tarekmia' fgColor='currentColor' bgColor='transparent' className='navbtn scale-90' />
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

        className='flex flex-row items-center cursor-pointer navbtn'
        onClick={() => scrolltoHash('contact')}
      >
        <SocialIcon
          className='cursor-pointer scale-110 mx-1 2xl:mx-3'
          network='email'
          fgColor='currentColor'
          bgColor='transparent'

        />
        <p className='uppercase hidden md:inline-flex text-sm scale-110 2xl:mx-2'>Get In Touch</p>
      </motion.div>

    </header>
  )
}
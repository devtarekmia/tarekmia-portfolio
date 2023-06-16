'use client';
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = { scrolltoHash: Function }

export default function Header({ scrolltoHash }: Props) {

  return (

    <header className='sticky top-0 px-4 py-2 md:p-5 flex items-start justify-between mx-auto z-50 xl:items-center'>

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
        className='flex flex-row items-center '>
        <SocialIcon url='https://youtube.com/tarekmia24' fgColor='currentColor' bgColor='transparent' className='navbtn' />
        <SocialIcon url='https://youtube.com/tarekmia24' fgColor='currentColor' bgColor='transparent' className='navbtn' />
        <SocialIcon url='https://youtube.com/tarekmia24' fgColor='currentColor' bgColor='transparent' className='navbtn' />
        <SocialIcon url='https://youtube.com/tarekmia24' fgColor='currentColor' bgColor='transparent' className='navbtn' />
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
          className='cursor-pointer 2xl:scale-125 2xl:mx-3'
          network='email'
          fgColor='currentColor'
          bgColor='transparent'

        />
        <p className='uppercase hidden md:inline-flex text-sm 2xl:scale-125 2xl:mx-2'>Get In Touch</p>
      </motion.div>

    </header>
  )
}
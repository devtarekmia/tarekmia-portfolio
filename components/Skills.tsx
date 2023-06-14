'use client';
import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill';

type Props = {}

export default function Skills({ }: Props) {
  return (
    <motion.div className='min-h-screen flex flex-col relative text-center md:text-left xl:flex-row min-w-[360px] max-w-full xl:px-10 justify-center mx-auto items-center'>
      <h3 className='absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl'>skills</h3>
      <h3 className='absolute top-32 md:top-36 uppercase tracking-[3px] text-gray-500 text-xs md:text-sm'>Hover over a skill for current proficiency</h3>
      <div className='grid grid-cols-4 gap-5 mt-44 md:mt-48 xl:mt-52 mb-40'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  )
}
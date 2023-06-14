'use client';
import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard';

type Props = {}

export default function Experiences({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, }}
      whileInView={{ opacity: 1, }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true, }}
      className='min-h-screen flex flex-col relative text-center md:text-left max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl'>Experience</h3>
      <div className='w-full flex space-x-5 overflow-x-auto p-10 mb-40 md:mb-20 snap-x snap-mandatory snap-always scrollbar-none hover:scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#7928ca] scrollbar-corner-[#7928ca] scrollbar-thumb-rounded-xl'>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  )
}
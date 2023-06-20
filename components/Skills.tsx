'use client';
import { motion } from 'framer-motion'
import Skill from './Skill';

type Props = {}

export default function Skills({ }: Props) {
  return (
    <motion.div className='min-h-screen flex flex-col relative text-center min-w-[360px] max-w-full xl:px-10 space-y-32 md:space-y-40 2xl:space-y-44 justify-start mx-auto items-center'>
      <div className='relative top-20 md:top-24 flex flex-col text-center max-w-full justify-center space-y-6 md:space-y-7 2xl:space-y-10'>
        <h3 className='uppercase tracking-[20px] text-gray-500 text-xl'>skills</h3>
        <h3 className='uppercase tracking-[3px] text-gray-500 text-sm md:text-md 2xl:text-xl'>My vast variety of skills is continously expanding</h3>
        {/* <h5 className='capitalize tracking-[3px] text-gray-500 text-xs'>Hover over a skill to see current proficiency</h5> */}
      </div>
      <div className='grid grid-cols-4 gap-5 mb-40'>
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
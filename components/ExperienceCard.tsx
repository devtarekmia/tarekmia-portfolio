'use client';
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard({ }: Props) {
  return (
    <article className='mt-28 md:mt-32 flex flex-col rounded-lg items-center space-y-2 xl:space-y-7 flex-shrink-0 min-w-min max-w-xs sm:max-w-md md:max-w-2xl xl:max-w-4xl snap-center bg-[#292929]/60 hover:bg-[#292929] p-10 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        className='flex-shrink-0 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 xl:w-48 xl:h-48'
      >
        <Image
          className='relative object-cover h-full w-full rounded-full opacity-80 hover:opacity-100 transition-opacity duration-200'
          src="/sticker.webp"
          width={400}
          height={400}
          quality={80}
          alt="Work Experices"
        />
      </motion.div>
      <div className='text-left px-0 xl:px-10 space-y-1 pt-3 xl:pt-0'>
        <h4 className='text-3xl md:text-4xl font-light'>Work header</h4>
        <p className='font-bold text-xl md:text-2xl mt-1 opacity-80 hover:opacity-100 transition-opacity duration-200'>Company</p>
        <div className='flex space-x-3'>
          <Image
            className='w-10 h-10 object-cover rounded-full opacity-80 hover:opacity-100 transition-opacity duration-200'
            src="/vercel.svg"
            width={100}
            height={100}
            quality={80}
            alt="Technologies Used"
          />
          <Image
            className='w-10 h-10 object-cover rounded-full opacity-80 hover:opacity-100 transition-opacity duration-200'
            src="/vercel.svg"
            width={100}
            height={100}
            quality={80}
            alt="Technologies Used"
          />
          <Image
            className='w-10 h-10 object-cover rounded-full opacity-80 hover:opacity-100 transition-opacity duration-200'
            src="/vercel.svg"
            width={100}
            height={100}
            quality={80}
            alt="Technologies Used"
          />
          <Image
            className='w-10 h-10 object-cover rounded-full opacity-80 hover:opacity-100 transition-opacity duration-200'
            src="/vercel.svg"
            width={100}
            height={100}
            quality={80}
            alt="Technologies Used"
          />
        </div>
        <p className='uppercase py-2 xl:py-5 text-gray-300 opacity-80 hover:opacity-100 transition-opacity duration-200'>Date to Date</p>
        <ul className='list-disc space-y-1 md:space-y-2 xl:space-y-4 ml-5 text-sm md:text-base xl:text-lg opacity-80 hover:opacity-100 transition-opacity duration-200'>
          <li>Lorem ipsum dolor, si amet consectetur adipisicing elit. Inventoe, distinctio!</li>
          <li>Lorem ium dolor, sit amet consetur adipisicing elit. Inventore, distinctio!</li>
          <li>Lorem ipsum dolor, sit amet consectetur adipising elit. Inventore, distinctio!</li>
          <li>Lorem ipsum dolor, sit amet consectur adipicing elit.nventore, diinctio!</li>
          <li>Lorem ipm dolor, sit amet consectetur adipisicing elit. Inventore, distinctio!</li>
        </ul>
      </div>
    </article>
  )
}
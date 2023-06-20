'use client';
import { motion } from 'framer-motion'
import Image from 'next/image';

type Props = {

  directionLeft?: boolean;

}

export default function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true, }}

      >
        <Image
          className='w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 xl:w-28 xl:h-28 object-cover rounded-full border border-gray-500 filter group-hover:grayscale transition duration-300 ease-in-out'
          src="/sticker.webp"
          width={100}
          height={100}
          quality={80}
          alt="Technologies Used"
        />
      </motion.div>
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#7928ca] w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 xl:w-28 xl:h-28 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-sm sm:text-base md:text-xl xl:text-2xl font-bold text-white opacity-100'>100%</p>
        </div>
      </div>
    </div>
  )
}
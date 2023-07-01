'use client';
import { SkillHardCoded } from '@/type';
import { motion, useInView } from 'framer-motion'
import Image from 'next/image';
import { useRef} from "react";

type Props = {
  directionLeft?: boolean;
  skill: SkillHardCoded;

}

export default function Skill({ directionLeft, skill }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref}>
      <div className='group relative flex cursor-pointer'>
        <motion.div
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
          }}
          transition={{ type: 'spring', duration: 1 }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : (directionLeft ? -200 : 200),
          }}
          viewport={{ once: true, }}
        >
          <Image
            className='w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 xl:w-28 xl:h-28 object-cover rounded-full border border-gray-500 filter group-hover:grayscale transition duration-300 ease-in-out'
            src={skill.image}
            width={120}
            height={120}
            quality={80}
            alt={skill.title}
            loading='eager'
          />
        </motion.div>
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#7928ca] w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 xl:w-28 xl:h-28 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-sm sm:text-base md:text-xl xl:text-2xl font-bold text-white opacity-100'>{skill.progress}%</p>
          </div>
        </div>
      </div>
    </div>
  )
}
'use client';
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExperienceHardCoded } from '@/type';

type Props = {
  experiences: ExperienceHardCoded
}

export default function ExperienceCard({ experiences }: Props) {
  return (
    <article className='mt-28 md:mt-32 flex flex-col rounded-lg items-center space-y-2 xl:space-y-7 2xl:space-y-10 flex-shrink-0 min-w-min max-w-xs sm:max-w-md md:max-w-2xl xl:max-w-4xl snap-center bg-[#14121c] hover:bg-[#27253D]/40 p-10 xl:py-16 2xl:py-20 cursor-pointer transition-opacity duration-200 overflow-hidden'>
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
          type: 'spring', duration: 1
        }}
        className='flex-shrink-0 w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 2xl:w-44 2xl:h-44'
      >
        <Image
          className='relative object-contain h-full w-full rounded-full opacity-80 hover:opacity-100 transition-opacity duration-200'
          src={experiences?.companyImage}
          width={200}
          height={200}
          quality={75}
          priority={true}
          loading='eager'
          alt={experiences?.company}
        />
      </motion.div>
      <div className='text-left px-0 xl:px-10 space-y-1 pt-7 '>
        <h4 className='text-2xl md:text-4xl xl:text-5xl font-light md:whitespace-nowrap'>{experiences.jobTitle}</h4>
        <p className='text-xl text-[#7928ca] md:text-2xl mt-1 opacity-80 hover:opacity-100 transition-opacity duration-200'>{experiences.company}</p>

        <p className='uppercase py-2 xl:py-5 text-gray-300 opacity-80 hover:opacity-100 transition-opacity duration-200'>
          {new Date(experiences.dateStarted).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" })} - {experiences.dateEnded ? new Date(experiences.dateEnded).toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }) : 'present'}
        </p>
        <ul className='list-disc space-y-1 xl:space-y-2 2xl:space-y-3 ml-6 text-sm md:text-base xl:text-lg opacity-80 hover:opacity-100 transition-opacity duration-200'>
          {experiences.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}
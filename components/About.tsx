'use client';
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react';
import myImage from '../public/cropped-image.png'

type Props = {}

export default function About({ }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className='flex flex-col relative min-h-screen xl:max-w-7xl 2xl:max-w-[80%] p-10 justify-evenly mx-auto items-center touch-pan-y'>
      <h3 className='uppercase tracking-[20px] text-gray-500 text-xl 2xl:text-2xl mt-7'>About</h3>
      <div ref={ref} className='text-center md:text-left flex flex-col md:flex-row justify-evenly items-center mb-20 mt-8 md:mb-0 space-y-8 md:space-y-0'>
        <motion.div
          initial={{
            x: -300,
            opacity: 0,
          }}
          animate={{
            x: isInView ? 0 : -300,
            opacity: isInView ? 1 : 0
          }}
          viewport={{
            once: true,
          }}
          transition={{
            type: 'spring', duration: 1
          }}
          className='flex-shrink-0 w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-96 xl:w-1/4 xl:h-fit'
        >
          <Image
            className='relative object-cover h-full w-full rounded-full md:rounded-lg'
            src={myImage}
            width={1600}
            height={2400}
            quality={80}
            loading='eager'
            placeholder='blur'
            alt="It's Tarek Mia"
          />
        </motion.div>

        <div className='space-y-5 2xl:space-y-10 px-0 sm:pl-10 mb-20'>
          <h4 className='text-4xl md:text-5xl 2xl:text-7xl mb-6 md:mb-0 font-semibold'>Expert <span className='underline decoration-[#7928ca]/50'>Laravel</span>  SPA Developer</h4>
          <p className='text-base leading-normal md:leading-relaxed 2xl:leading-loose xl:text-lg 2xl:text-xl max-h-64 md:max-h-72 2xl:max-h-fit overflow-y-auto opacity-80 hover:opacity-100 scrollbar-none hover:scrollbar-thin scrollbar-track-[#14121c] scrollbar-thumb-[#7928ca] scrollbar-corner-[#7928ca] scrollbar-thumb-rounded-xl'>
            I’m here to support you in getting your project up and running on production, or to help you transform your creative ideas into functional code blocks.
            <br className='mb-3' />
            I am experienced in building single page applications using my favorite frameworks, Laravel, Inertia & Vue. I have working experience with MVC (Model View Controller). I have also designed and developed web user controls, pdf pages, validation controls, using technologies like TailwindCSS, Vuetify, Vuelidate, Axios.
            <br className='mb-3' />
            When working on a new project, I like to speak with my clients so that I can have a clear understanding of their needs and vision of the project. Thanks for spending some time with me. I look forward to working with you soon.
          </p>
        </div>
      </div>
    </div>
  )
}
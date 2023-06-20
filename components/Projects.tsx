'use client';
import { motion } from 'framer-motion'
import Image from 'next/image';

type Props = {}

export default function Projects({ }: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className='min-h-screen flex flex-col relative text-center md:text-left max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl'>projects</h3>

      <div className='relative w-full flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory snap-always z-20 mb-30 md:mb-20 scrollbar-thin xl:scrollbar-none hover:scrollbar-thin scrollbar-track-[#14121c] scrollbar-thumb-[#7928ca] scrollbar-corner-[#7928ca] scrollbar-thumb-rounded-xl'>

        {projects.map((project, i) => (
          <div key={i} className='min-w-min max-w-sm sm:max-w-xl md:max-w-4xl xl:max-w-5xl flex flex-col items-center justify-evenly flex-shrink-0 snap-center space-y-5 lg:mt-6 p-10 md:p-16 2xl:p-24'>
            <motion.div
              initial={{
                y: -200,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0, }}
              viewport={{ once: true, }}
              className='mt-20 flex-shrink-0 w-80 h-36 md:w-[350px] md:h-52 2xl:w-[450px] 2xl:h-64'
            >
              <Image
                className='relative object-cover h-full w-auto rounded-lg mx-auto opacity-80 hover:opacity-100 transition-opacity duration-200'
                src="/projects.png"
                width={666}
                height={375}
                quality={80}
                alt="Projects"
              />
            </motion.div>
            <div className='space-y-4 md:space-y-7 xl:space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-2xl md:text-3xl xl:text-4xl mb-6 md:mb-0 font-semibold text-center'>
                <span className='underline decoration-[#7928ca]/50'>
                  Case Study {i + 1} of {projects.length}:
                </span>{" "} UPS Clone
              </h4>

              <p className='text-base md:text-xl 2xl:text-2xl text-center md:text-left opacity-80 hover:opacity-100 transition-opacity duration-200'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellat doloribus nobis? Cupiditate assumenda nobis dolorum est eligendi deleniti aliquam ipsum facere, tenetur illo voluptate molestias, minus ea, consequatur quisquam.
              </p>

            </div>

          </div>
        ))}

      </div>

      <div className='absolute w-full top-[30%] bg-[#7928ca]/10 left-0 h-[300px] xl:h-[400px] 2xl:h-[500px] -skew-y-12' />
    </div>
  )
}
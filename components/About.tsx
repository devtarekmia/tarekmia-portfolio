'use client';
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {}

export default function About({ }: Props) {
  return (
    <div className='flex flex-col relative min-h-screen xl:max-w-7xl 2xl:max-w-[80%] p-10 justify-evenly mx-auto items-center touch-pan-y'>
      <h3 className='uppercase tracking-[20px] text-gray-500 text-xl mt-7'>About</h3>
      <div className='text-center md:text-left flex flex-col md:flex-row justify-evenly items-center mb-20 mt-8 md:mb-0 space-y-8 md:space-y-0'>
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
          }}
          className='flex-shrink-0 w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-96 xl:w-1/4 xl:h-fit'
        >
          <Image
            className='relative object-cover h-full w-full rounded-full md:rounded-lg'
            src="/image-long.jpg"
            width={700}
            height={700}
            quality={80}
            alt="It's Tarek Mia"
          />
        </motion.div>

        <div className='space-y-5 2xl:space-y-10 px-0 sm:pl-10 mb-20'>
          <h4 className='text-4xl md:text-5xl 2xl:text-7xl mb-6 md:mb-0 font-semibold'>Here is a <span className='underline decoration-[#7928ca]/50'>little</span> background</h4>
          <p className='text-base xl:text-lg 2xl:text-xl max-h-64 md:max-h-72 2xl:max-h-fit overflow-y-auto opacity-80 hover:opacity-100 scrollbar-none hover:scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#7928ca] scrollbar-corner-[#7928ca] scrollbar-thumb-rounded-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores perferendis sapiente dolor, necessitatibus assumenda quod. Quia quis dolorem rerum corporis vitae dolor itaque officia magni, eaque natus harum totam eos aperiam voluptas error saepe officiis omnis, nihil quas necessitatibus tempora voluptatibus laudantium ullam? Numquam pariatur ad vel quo sit, repellat, optio amet ea minus ipsam culpa porro eaque atque. Eveniet ab, cumque debitis officia perspiciatis rem beatae ducimus error neque atque magni distinctio natus alias nemo quas laboriosam sunt ad! Nemo iure eius quas repellat ducimus sit non perspiciatis asperiores, obcaecati debitis amet recusandae, iste alias minima ut omnis id.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores perferendis sapiente dolor, necessitatibus assumenda quod. Quia quis dolorem rerum corporis vitae dolor itaque officia magni, eaque natus harum totam eos aperiam voluptas error saepe officiis omnis, nihil quas necessitatibus tempora voluptatibus laudantium ullam? Numquam pariatur ad vel quo sit, repellat, optio amet ea minus ipsam culpa porro eaque atque. Eveniet ab, cumque debitis officia perspiciatis rem beatae ducimus error neque atque magni di
          </p>
        </div>
      </div>
    </div>
  )
}
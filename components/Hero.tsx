'use client';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image'

type Props = { scrolltoHash: Function }

export default function Hero({ scrolltoHash }: Props) {
  const [text] = useTypewriter({
    words: ["I Write JavaScript",
      "I build things for the <web/>"],
    loop: true,
    delaySpeed: 3500,
    typeSpeed: 100 - Math.random() * 500,
    deleteSpeed: 10,
  })


  return (
    <div className='min-h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image
        className='relative rounded-full w-32 h-32 xl:w-36 xl:h-36 mx-auto object-cover'
        src="/sticker.webp"
        width={100}
        height={100}
        alt="It's Tarek Mia"
      />
      <div className='z-30 space-y-4'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Web Developer</h2>
        <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold px-8'>
          Hi, I&apos;m <span className='text-[#9E4BEE]'>Tarek Mia</span>
        </h1>
        <h4 className='font-mono md:text-lg lg:text-xl px-8 pt-2'>
          <span>{text}</span>
          <Cursor cursorColor='#7928ca' cursorStyle='▂' />
        </h4>

        <div className='pt-5'>

          <button className='herobtn' onClick={() => scrolltoHash('about')} >about</button>
          <button className='herobtn' onClick={() => scrolltoHash('experience')} >Experience</button>
          <button className='herobtn' onClick={() => scrolltoHash('skills')} >Skills</button>
          <button className='herobtn' onClick={() => scrolltoHash('projects')} >Projects</button>

        </div>
      </div>
    </div>
  )
}
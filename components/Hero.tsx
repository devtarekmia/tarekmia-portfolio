'use client';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image'
import Link from 'next/link';

type Props = {}

export default function Hero({ }: Props) {
  const [text, count] = useTypewriter({
    words: ["I Love JavaScript",
      "I build amazing things for the <web/>"],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className='min-h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <Image
        className='relative rounded-full w-32 h-32 mx-auto object-cover'
        src="/sticker.webp"
        width={100}
        height={100}
        alt="It's Tarek Mia"
      />
      <div className='z-30 space-y-4'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Web Developer</h2>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold px-8'>
          Hi, I&apos;m <span className='text-[#9E4BEE]'>Tarek Mia</span>
        </h1>
        <h4 className=' text-xl md:text-2xl lg:text-3xl px-8'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#7928ca' />
        </h4>

        <div className='pt-5'>
          <Link href='#about' >
            <button className='herobtn'>about</button>
          </Link>
          <Link legacyBehavior href='#experience'>
            <button className='herobtn'>Experience</button>
          </Link>
          <Link legacyBehavior href='#skills' >
            <button className='herobtn'>Skills</button>
          </Link>
          <Link legacyBehavior href='#projects'>
            <button className='herobtn'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
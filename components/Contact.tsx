'use client';
import React from 'react'
import { motion } from 'framer-motion'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from 'react-hook-form';
import Link from 'next/link';

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
}

type Props = {}

export default function Contact({ }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:dev.tarekmia@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} %0D%0A%0D%0ADo not hesitate to contact me at ${formData.email}%0D%0A`;
  };

  const openPhone = function () {
    window.open("tel:+8801796821678");
  }

  const openMail = function () {
    window.location.href = `mailto:dev.tarekmia@gmail.com`;
  }

  const openMap = function () {
    window.open("https://goo.gl/maps/zeyKrgNszoNb6hQ56");
  };

  return (
    <motion.div
      initial={{ opacity: 0, }}
      whileInView={{ opacity: 1, }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true, }}
      className='flex flex-col relative min-h-screen xl:max-w-7xl 2xl:max-w-[80%] p-10 justify-evenly mx-auto items-center touch-pan-y'>
      <h3 className='uppercase tracking-[20px] text-gray-500 text-xl mt-8 sm:mt-16'>Contact</h3>

      <div className='text-center flex flex-col justify-evenly items-center pb-10 mt-8 space-y-8'>
        <h4 className='text-2xl md:text-3xl 2xl:text-4xl font-semibold text-center'>
          <span className='underline decoration-[#7928ca]/60'>Say Hello</span>&nbsp;and Let&apos;s Explore the Possibilities Together!
        </h4>
        <div className='space-y-7 md:space-y-10 2xl:space-y-14 w-full'>
          <div className='space-y-5'>
            <div className='flex items-center space-x-2 md:space-x-4 2xl:space-x-6 justify-center' onClick={() => openPhone()}>
              <PhoneIcon className='text-[#9E4BEE] w-4 h-4 md:w-7 md:h-7 2xl:w-8 2xl:h-8 animate-pulse cursor-pointer' />
              <p className='text-lg md:text-xl xl:text-2xl opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-pointer'>+8801796821678</p>
            </div>
            <div className='flex items-center space-x-2 md:space-x-4 2xl:space-x-6 justify-center' onClick={() => openMail()}>
              <EnvelopeIcon className='text-[#9E4BEE] w-4 h-4 md:w-7 md:h-7 2xl:w-8 2xl:h-8 animate-pulse cursor-pointer' />
              <p className='text-lg md:text-xl xl:text-2xl opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-pointer'>dev.tarekmia@gmail.com</p>
            </div>
            <div className='flex items-center space-x-2 md:space-x-4 2xl:space-x-6 justify-center ' onClick={() => openMap()}>
              <MapPinIcon className='text-[#9E4BEE] w-4 h-4 md:w-7 md:h-7 2xl:w-8 2xl:h-8 animate-pulse cursor-pointer' />
              <p className='text-lg md:text-xl xl:text-2xl opacity-80 hover:opacity-100 transition-opacity duration-200 cursor-pointer' >5030 Tetulia, Panchagarh, BD</p>
            </div>
          </div>

          <form className='flex flex-col space-y-2 w-full sm:w-11/12 md:w-4/5 xl:w-full  mx-auto' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2'>
              <input {...register('name')} className='contactInput w-full' type="text" placeholder='Name' />
              <input {...register('email')} className='contactInput w-full' type="email" placeholder='Email' />
            </div>
            <input {...register('subject')} className='contactInput' type="text" placeholder='Subject' />
            <textarea {...register('message')} className='contactInput' placeholder='Message'></textarea>
            <button type='submit' className='btneffect py-2 md:py-4 2xl:py-5 px-10 rounded-md text-white uppercase text-lg 2xl:text-xl'>Send</button>
          </form>
        </div>
      </div>

      <footer className='py-10 font-mono text-gray-500'><small className='flex items-center'> &copy; Made with <CodeBracketIcon className='w-5 h-5 mx-2' /> by Tarek. Circa 2023.</small></footer>
    </motion.div>
  )
}
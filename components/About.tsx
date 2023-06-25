'use client';
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react';

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
            src="/cropped-image.png"
            width={1600}
            height={2400}
            quality={80}
            loading='eager'
            placeholder='blur'
            alt="It's Tarek Mia"
          />
        </motion.div>

        <div className='space-y-5 2xl:space-y-10 px-0 sm:pl-10 mb-20'>
          <h4 className='text-4xl md:text-5xl 2xl:text-7xl mb-6 md:mb-0 font-semibold'>Here is a <span className='underline decoration-[#7928ca]/50'>little</span> background</h4>
          <p className='text-base leading-normal md:leading-relaxed 2xl:leading-loose xl:text-lg 2xl:text-xl max-h-64 md:max-h-72 2xl:max-h-fit overflow-y-auto opacity-80 hover:opacity-100 scrollbar-none hover:scrollbar-thin scrollbar-track-[#14121c] scrollbar-thumb-[#7928ca] scrollbar-corner-[#7928ca] scrollbar-thumb-rounded-xl'>
            I specialize in creating vibrant websites that authentically reflect my clients&apos; brands, visions, and unique personalities. With unwavering support and clear communication, I prioritize exceptional service throughout the entire journey. Constantly learning and sharing experiences, I stay at the forefront of industry trends.
            <br className='mb-3' />
            My area of expertise lies in Responsive Web Application development, utilizing powerful frameworks like Tailwind CSS and Bootstrap. With a versatile skill set encompassing TypeScript, JavaScript, PHP, MySQL, Node.js, Next.js, React, Sanity, jQuery, HTML5, CSS3, Photoshop, Illustrator, Yarn, VS Code, Git, and GitHub, I offer comprehensive solutions tailored to your needs. By combining technical proficiency with a keen eye for design aesthetics, I craft websites that seamlessly align with your brand identity.
            <br className='mb-3' />
            As an independent professional, I offer flexibility and an unwavering commitment to ongoing growth, ensuring the delivery of exceptional service and optimal productivity for my clients. I am excited to contribute my expertise to the success of your projects, tailored to your specific requirements. If you believe that I am the ideal fit for you and your esteemed team, I eagerly await the opportunity to connect with you!
          </p>
        </div>
      </div>
    </div>
  )
}
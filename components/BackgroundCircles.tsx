import { motion } from "framer-motion"

type Props = {}

export default function BackgroundCircles({ }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className='relative flex justify-center items-center'>
      <div className='absolute border border-[#302a4b]/30 rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
      <div className='absolute border border-[#302a4b]/30 rounded-full h-[300px] w-[300px] mt-52' />
      <div className='absolute border border-[#302a4b]/30 rounded-full h-[470px] w-[470px] mt-52' />
      <div className='absolute border border-[#7928ca]/40 rounded-full h-[650px] w-[650px] mt-52 animate-pulse' />
      <div className='absolute border border-[#302a4b]/30 rounded-full h-[850px] w-[850px] mt-52' />
    </motion.div>
  )
}
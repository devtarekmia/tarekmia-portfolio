"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {

  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  }

  const [navDotted, setDotted] = useState(false);
  const [navShow, setShow] = useState(true);
  const [footBtnShow, setFoot] = useState(false);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });
  const previousScrollYProgressRef = useRef(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.15) {
      setDotted(false);
      setShow(true);
      setFoot(false)
    } else if (latest > 0.15 && latest < previousScrollYProgressRef.current) {
      // Scrolling downward
      setDotted(true);
      setShow(true);
      setFoot(true)
      previousScrollYProgressRef.current = latest;
    } else if (latest > 0.15 && latest > previousScrollYProgressRef.current) {
      // Scrolling upward
      setShow(false);
      previousScrollYProgressRef.current = latest;
      setFoot(false)
    }

    // latest >= 0.1 ? setNav(true) : setNav(false);
  })


  // return <motion.div style={{ scaleX: scrollYProgress }} />

  return (

    <div ref={ref} id="content" className="bg-[#0f0d15] text-white h-screen mt-0 snap-y snap-mandatory snap-always xl:snap-none overflow-y-auto overflow-x-hidden z-0 select-none scrollbar-thin scrollbar-track-[#14121c] scrollbar-thumb-[#7928ca]">

      <Header scrolltoHash={scrolltoHash} navDotted={navDotted} navShow={navShow} />

      <section id="hero" className="snap-start">
        <Hero scrolltoHash={scrolltoHash} />
      </section>

      <section id="about" className="snap-start">
        <About />
      </section>

      <section id="experience" className="snap-start">
        <Experiences />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <div className={`${footBtnShow ? 'bottom-6' : '-bottom-40'} fixed z-50 w-full transition-all duration-1000`}>
        <Image
          id="back-to-top"
          className='relative rounded-full w-8 h-8 mx-auto object-cover cursor-pointer grayscale hover:grayscale-0'
          src="/sticker.webp"
          width={100}
          height={100}
          alt="Go to Top"
          onClick={() => scrolltoHash('hero')}
        />
      </div>

    </div>
  )
}

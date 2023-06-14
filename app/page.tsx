"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experiences from "@/components/Experiences";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory snap-always overflow-y-auto overflow-x-hidden z-0 select-none scroll-smooth scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#7928ca]">

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
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

      {/*Contact*/}
      <section id="contact" className="snap-start">
        <Contact />
      </section>

    </div>
  )
}

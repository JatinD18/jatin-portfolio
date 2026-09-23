"use client";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background overlay for noise/texture */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-0 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center select-none pt-20">
        
        {/* Massive Background Typography */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-full text-center pointer-events-none mt-10"
        >
          <h1 className="text-[16vw] md:text-[12vw] lg:text-[14rem] font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-none uppercase">
            PORTFOLIO
          </h1>
        </motion.div>

        {/* Center Parallax Element (Profile Picture) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="relative z-20 flex flex-col items-center mt-8 md:mt-20"
        >
          <div className="w-64 md:w-80 lg:w-96" style={{ filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.8))" }}>
            <Image
              src="/ai_half_body.png" 
              alt={personalInfo.name}
              width={512}
              height={512}
              className="object-contain w-full h-auto transition-all duration-700"
              priority
            />
          </div>
        </motion.div>

        {/* Name and Title Text Overlays */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative z-20 mt-8 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-2 uppercase">
            {personalInfo.name}
          </h2>
          <p className="text-white text-base md:text-2xl lg:text-3xl drop-shadow-md">
            <span className="font-bold">Data</span> <span className="font-light italic text-gray-300">Analyst</span>
            <span className="mx-3 text-gray-500 font-thin">|</span>
            <span className="font-bold">Electrical</span> <span className="font-light italic text-gray-300">Engineer</span>
          </p>
        </motion.div>

        {/* Glassmorphic CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative z-20 mt-12 flex items-center gap-4 pointer-events-auto"
        >
          {/* Circular Icon Button */}
          <a 
            href="#projects" 
            className="group w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-400/30 flex items-center justify-center backdrop-blur-md bg-white/5 hover:bg-white/10 hover:border-gray-400/50 transition-all duration-300 cursor-pointer shadow-lg"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-300 transition-transform duration-300 group-hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 7L7 17M7 17H16M7 17V8" />
            </svg>
          </a>
          
          {/* Pill Button */}
          <a 
            href={personalInfo.resumeLink}
            download
            className="px-6 py-3 md:px-8 md:py-3.5 rounded-full border border-gray-400/30 flex items-center justify-center backdrop-blur-md bg-white/5 hover:bg-white/10 hover:border-gray-400/50 transition-all cursor-pointer shadow-lg"
          >
            <span className="text-gray-300 text-sm md:text-base italic font-light tracking-wider">
              Download Resume
            </span>
          </a>
        </motion.div>
      </div>

    </section>
  );
}
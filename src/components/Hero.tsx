"use client";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 relative overflow-hidden bg-gray-950"
    >
      {/* Safe, error-free subtle background glow */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at top right, rgba(59, 130, 246, 0.15), transparent 50%), radial-gradient(circle at bottom left, rgba(139, 92, 246, 0.15), transparent 50%)"
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Profile Picture with Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8 relative inline-block"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl shadow-blue-500/30">
            <Image
              src="/profile.jpg" 
              alt={personalInfo.name}
              width={160}
              height={160}
              className="object-cover"
              priority
            />
          </div>
          {/* Animated ring around profile */}
          <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-75" />
        </motion.div>

        {/* Welcome Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-blue-400 font-medium mb-4 text-sm tracking-widest uppercase"
        >
          Welcome to my portfolio
        </motion.p>

        {/* Name with Safe, Error-Free Styling */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
        >
          Hi, I&apos;m{" "}
          <span 
            className="text-blue-400"
            style={{
              backgroundImage: "linear-gradient(to right, #60a5fa, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-400 mb-6"
        >
          {personalInfo.title}
        </motion.h2>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-gray-400 max-w-2xl mb-10 text-base md:text-lg leading-relaxed mx-auto"
        >
          {personalInfo.bio}
        </motion.p>

        {/* CTA Buttons with Hover Effects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition flex items-center gap-2 shadow-lg shadow-blue-500/20"
          >
            View Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
          
          <motion.a
            href={personalInfo.resumeLink}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-gray-600 hover:border-white text-white px-8 py-3 rounded-lg font-medium transition flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-blue-500 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
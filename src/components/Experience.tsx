"use client";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-white mb-4 text-center"
      >
        Professional Experience
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
      >
        From managing ground-level electrical operations to building automated
        data pipelines.
      </motion.p>

      <div className="relative border-l-2 border-gray-800 ml-4 md:ml-0">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="mb-10 ml-8 relative"
          >
            <div className="absolute -left-10 top-1 w-5 h-5 bg-gray-400 rounded-full border-4 border-black" />

            <div className="flex items-center gap-2 mb-1">
              <Briefcase size={16} className="text-gray-400" />
              <span className="text-sm text-gray-500">{exp.period}</span>
            </div>

            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
            <p className="text-gray-300 font-medium mb-3">{exp.company}</p>

            <ul className="space-y-2">
              {exp.highlights.map((item, i) => (
                <li
                  key={i}
                  className="text-gray-400 text-sm leading-relaxed flex gap-2"
                >
                  <span className="text-gray-500 mt-1">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
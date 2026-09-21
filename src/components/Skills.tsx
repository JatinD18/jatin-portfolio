"use client";
import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-white mb-4 text-center"
      >
        Technical Skills
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
      >
        A blend of data analytics, business intelligence, and core electrical
        engineering expertise.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition duration-300"
          >
            <h3 className="text-lg font-semibold text-blue-400 mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="text-sm bg-gray-800 text-gray-300 px-3 py-1.5 rounded-full border border-gray-700 hover:border-blue-500/50 hover:text-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
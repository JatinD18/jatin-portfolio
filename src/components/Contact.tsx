"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-white mb-4 text-center"
      >
        Get In Touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
      >
        I&apos;m always open to discussing data analytics opportunities,
        freelance projects, or collaborations. Feel free to reach out!
      </motion.p>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-300">
              <Mail size={18} className="text-blue-400" />
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-blue-400 transition"
              >
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Phone size={18} className="text-blue-400" />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <MapPin size={18} className="text-blue-400" />
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          action="https://formspree.io/f/xzezeaaj"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition resize-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition flex items-center justify-center gap-2"
          >
            <Send size={16} /> Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
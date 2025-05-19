import { div } from "framer-motion/client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
            >
              Tanay Kumar
            </motion.h1>
            <motion.span
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              I am a passionate Python Full Stack Developer currently working at
              LVPEI, where I contribute to building impactful web applications.
              With expertise in Python, React, Tailwind CSS, Django, MySQL, and
              Framer Motion, I craft seamless, efficient, and visually engaging
              digital solutions. I am dedicated to continuous learning and enjoy
              leveraging my skills to create user-friendly and innovative web
              experiences.
            </motion.h1>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-2xl"
              src="tanay-fotor.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

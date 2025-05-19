import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500  ">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src="tanay1-fotor.png" alt="" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              Hi! I’m a Python Full Stack Developer with a strong passion for
              crafting efficient and user-friendly web applications. Currently,
              I am working at LVPEI, where I utilize my skills in Python, React,
              Tailwind CSS, Django, MySQL, and Framer Motion to build innovative
              solutions that make an impact. I thrive on solving complex
              problems, exploring new technologies, and continuously improving
              my expertise. Whether it’s back-end development, front-end design,
              or creating engaging animations, I aim to deliver high-quality and
              seamless digital experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

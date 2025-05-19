import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo with animation */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.6 }}
        className="flex flex-shrink-0 items-center"
      >
        <p className="font-bold text-white text-2xl">It's Me</p>
      </motion.div>

      {/* Social Icons with animation */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.6 }}
        className="m-8 flex items-center justify-center gap-4 text-2xl"
      >
        <a
          href="https://www.linkedin.com/in/tanaykumar1432/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/NTanayK"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          <FaGithub />
        </a>
        <FaInstagram className="hover:text-pink-500 transition" />
      </motion.div>
    </nav>
  );
};

export default Navbar;

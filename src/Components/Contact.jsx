import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <div className="border-b border-neutral-800 px-6 py-16 flex justify-center">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl w-full rounded-xl shadow-lg p-10 text-center"
        >
          {/* Heading */}
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-6 text-white"
          >
            Get In Touch
          </motion.h1>

          {/* Location */}
          <p className="text-neutral-400 text-lg mb-4">
            📍{" "}
            <span className="font-medium text-white">
              Himayatnagar, Hyderabad
            </span>
          </p>

          {/* Phone */}
          <p className="text-neutral-400 text-lg mb-4">
            📞{" "}
            <a
              href="tel:+919949430630"
              className="text-purple-400 hover:text-purple-500 font-medium transition"
            >
              9949430630
            </a>
          </p>

          {/* Email */}
          <p className="text-neutral-400 text-lg mb-6">
            📧{" "}
            <a
              href="mailto:tanaykumar251@gmail.com"
              className="text-purple-400 hover:text-purple-500 font-medium transition"
            >
              tanaykumar251@gmail.com
            </a>
          </p>

          {/* Optional Social Links Section */}
          <div className="mt-6 flex justify-center space-x-5">
            <motion.a
              href="https://www.linkedin.com/in/tanaykumar1432"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin className="text-2xl text-white hover:text-blue-500" />
            </motion.a>
            <motion.a
              href="https://github.com/NTanayK"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <FaGithub className="text-2xl text-white hover:text-gray-400" />
            </motion.a>
            <motion.a
              href="https://wa.me/919949430630"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <FaWhatsapp className="text-2xl text-white hover:text-green-500" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;

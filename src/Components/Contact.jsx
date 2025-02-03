import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <div className="border-b border-neutral-800 pb-24 px-6">
        {/* Heading */}
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="my-10 text-center text-4xl font-bold"
        >
          Get In Touch
        </motion.h1>

        {/* Contact Info */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          className="text-center tracking-tighter"
        >
          <p className="my-4">📍 Himayatnagar, Hyderabad</p>
          <p className="my-4">
            📞 Contact No.:{" "}
            <a href="tel:+919949430630" className="hover:text-purple-500">
              9949430630
            </a>
          </p>

          <motion.a
            href="mailto:tanaykumar251@gmail.com"
            whileHover={{ scale: 1.1 }}
            className="border-b hover:text-purple-500"
          >
            📧 tanaykumar251@gmail.com
          </motion.a>
        </motion.div>

        {/* Social Media Links
        <div className="flex justify-center space-x-6 mt-6">
          <motion.a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin className="text-2xl hover:text-blue-500" />
          </motion.a>
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub className="text-2xl hover:text-gray-500" />
          </motion.a>
          <motion.a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaTwitter className="text-2xl hover:text-blue-400" />
          </motion.a>
          <motion.a
            href="https://wa.me/919949430630"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FaWhatsapp className="text-2xl hover:text-green-500" />
          </motion.a>
        </div> */}



   
        
        {/* Business Hours
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold">Business Hours</h2>
          <p className="mt-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday - Sunday: Closed</p>
        </div> */}
      </div>
    </>
  );
};

export default Contact;

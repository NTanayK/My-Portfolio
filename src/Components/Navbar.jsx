import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <p className="font-bold text-white text-2xl">It's Me</p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a 
          href="https://www.linkedin.com/in/tanay-kumar-32a230241/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/NTanayK" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import {FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaTiktok,  } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-blue-950 text-gray-400 py-6">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Credit Text Side-by-Side */}
        <div className="text-sm flex items-center gap-2 flex-wrap justify-center sm:justify-start">
          <p className='text-xl'>
            Designed & Developed by <span className="font-semibold text-white">CHIZARAM OBI</span>
          </p>
          <span className="hidden sm:inline">|</span>
          <p className='text-xl'>© 2025 Zheecodes. All rights reserved.</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 text-xl">
           <a aria-label="GitHub" href="https://github.com/chizaram25" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                    <FaGithub />
                  </a>
                  <a aria-label="LinkedIn" href="https://linkedin.com/in/chizaram-obi" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                    <FaLinkedin />
                  </a>
                  <a aria-label="Twitter/X" href="https://x.com/Afambu_chizaram?t=x1vM2mMYMf6xLzMuma706A&s=09" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                    <FaTwitter />
                  </a>
                  <a aria-label="Facebook" href="https://www.facebook.com/share/16mNUcbBWD/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                    <FaFacebook />
                  </a>
                  <a aria-label="TikTok" href="https://www.tiktok.com/@chizaramobi25_?_t=ZM-8xOkKYAbZ13&_r=1" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                    <FaTiktok />
                  </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

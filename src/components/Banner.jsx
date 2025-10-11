import React, { useMemo, useEffect, useState } from 'react';
import '../App.css';
import Image1 from '../assets/images/portfolio image 1.jpg';
import Image5 from '../assets/images/WhatsApp Image 2025-06-22 at 02.19.56_54f52bda.jpg';
import { Typewriter } from 'react-simple-typewriter';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaTiktok,
} from 'react-icons/fa';
import ContactUs from './ContactUs';

const Banner = () => {
  const shootingStars = useMemo(
    () =>
      Array.from({ length: 5 }).map((_, i) => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${i * 2}s`,
      })),
    []
  );

  const [showIcons, setShowIcons] = useState(true);
  const [flipped, setFlipped] = useState(false);

  // Toggle social icons visibility based on scroll direction
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowIcons(!(currentScrollY > lastScrollY && currentScrollY > 50));
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-flip image every 4 seconds
  useEffect(() => {
    const flipInterval = setInterval(() => {
      setFlipped(prev => !prev);
    }, 2000);

    return () => clearInterval(flipInterval);
  }, []);

  return (
    <div className="relative bg-gradient-to-tl from-[#030637] via-[#3c0753] to-[#720455] min-h-screen overflow-hidden text-white">
      {/* ✨ Twinkling stars */}
      <div className="twinkling-stars"></div>

      {/* 🌠 Shooting stars */}
      <div className="shooting-stars">
        {shootingStars.map((star, i) => (
          <div
            key={i}
            className="shooting-star"
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Social Icons */}
      <div
        className={`fixed bottom-4 right-4 z-50 transition-all duration-500
        ${showIcons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        flex flex-row md:flex-col items-center
        space-x-4 md:space-x-0 md:space-y-3 p-3 rounded-2xl shadow-lg text-2xl
        bg-transparent md:bg-white/10 md:backdrop-blur-md md:border md:border-white/20`}
      >
        <a href="https://github.com/chizaram25" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300"><FaGithub /></a>
        <a href="https://linkedin.com/in/chizaram-obi" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300"><FaLinkedin /></a>
        <a href="https://x.com/Afambu_chizaram" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300"><FaTwitter /></a>
        <a href="https://www.facebook.com/benita.obi.77" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300"><FaFacebook /></a>
        <a href="https://www.tiktok.com/@chizaramobi25_" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300"><FaTiktok /></a>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10">
          {/* Left Text */}
          <div className="text-center md:text-left md:w-1/2 space-y-4" data-aos="fade-right">
            <h1 className="text-white text-5xl font-bold">
              Hi! <span className="inline-block animate-wave">👋🏾</span>
            </h1>
            <p className="text-white text-5xl md:text-6xl font-bold">
              I'm <span className="text-yellow-300">Chizaram Obi</span>
            </p>
            <p className="text-yellow-300 text-3xl md:text-4xl font-extrabold pt-2">
              <Typewriter
                words={['FREELANCER', 'MERN STACK DEVELOPER', 'FULL-STACK DEVELOPER']}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
          </div>

          {/* Right Auto-Flipping Image */}
          <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
            <div className="relative w-52 h-52 md:w-60 md:h-60">
              <div className={`transition-transform duration-700 ease-in-out transform-style preserve-3d w-full h-full ${flipped ? 'rotate-y-180' : ''}`}>
                {/* Front */}
                <img
                  src={Image1}
                  alt="Front"
                  className="absolute w-full h-full rounded-full object-cover border-4 border-yellow-300 shadow-xl backface-hidden"
                />
                {/* Back */}
                <img
                  src={Image5}
                  alt="Back"
                  className="absolute w-full h-full rounded-full object-cover border-4 border-yellow-300 shadow-xl rotate-y-180 backface-hidden"

                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactUs/>
    </div>
  );
};

export default Banner;

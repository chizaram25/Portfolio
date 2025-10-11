import React, { useMemo, useEffect, useRef, useState } from "react";
import Nav from "../components/Nav";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Image2 from "../assets/video/WhatsApp Video 2025-09-07 at 07.15.48_92c0d254.mp4";

const About = () => {
  const shootingStars = useMemo(
    () =>
      Array.from({ length: 5 }).map((_, i) => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${i * 2}s`,
      })),
    []
  );

  // Skills array
  const skills = [
    { name: "HTML5", level: "95%" },
    { name: "CSS3", level: "95%" },
    { name: "JavaScript", level: "90%" },
    { name: "React", level: "95%" },
    { name: "Next.js", level: "95%" },
    { name: "Node.js", level: "85%" },
    { name: "MongoDB", level: "80%" },
    { name: "Tailwind CSS", level: "95%" },
  ];

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          // run only once
          observer.disconnect(); 
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="flex flex-col min-h-screen bg-gradient-to-tl from-[#030637] via-[#3c0753] to-[#720455] overflow-hidden text-white relative">
      <Nav />

      {/* Twinkling stars */}
      <div className="twinkling-stars absolute inset-0 z-0" />

      {/* Shooting stars */}
      <div className="shooting-stars absolute inset-0 z-0">
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

      <main className="relative z-10 flex-grow py-20 px-4 sm:px-6 md:px-20 max-w-6xl mx-auto">
        <div className="w-full flex flex-col md:flex-row items-start gap-12 py-20">
          {/* Title and Video */}
          <div
            className="w-full md:w-1/2 flex flex-col items-center md:items-start"
            data-aos="fade-right"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 text-center md:text-left">
              About Me
            </h1>

            <div className="mockup-phone border-primary">
              <div className="mockup-phone-camera"></div>
              <div className="mockup-phone-display bg-black">
                <div className="h-full w-full flex items-center justify-center">
                  <video
                    className="w-full h-full object-cover rounded-xl"
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={Image2} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Quote and Skills */}
          <div
            className="w-full md:w-1/2 flex flex-col items-center md:items-start"
            data-aos="fade-left"
          >
            <p className="text-purple-400 font-bold text-lg sm:text-xl py-5 px-4 italic border-l-4 border-purple-400 mb-8 text-center md:text-left">
              "From Mongo to React, every line I write connects logic with
              imagination." <br />
              <span className="text-white">– Chizaram</span>
            </p>

            {/* Tech Logos Marquee */}
            <div className="overflow-hidden w-full mb-10">
              <h1 className="text-center md:text-left font-extrabold text-2xl sm:text-3xl md:text-4xl mb-6">
                Professional Skillset
              </h1>
              <div className="relative w-full h-20">
                <div className="absolute flex items-center scroll-marquee min-w-full gap-6 sm:gap-10">
                  {[
                    "html5",
                    "css3",
                    "javascript",
                    "react",
                    "nextjs",
                    "nodejs",
                    "express",
                    "mongodb",
                    "tailwindcss",
                    "html5",
                    "css3",
                    "javascript",
                    "react",
                    "nodejs",
                    "express",
                    "mongodb",
                    "tailwindcss",
                  ].map((tech, idx) => (
                    <img
                      key={idx}
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                      alt={tech}
                      className={`w-10 h-10 mx-2 ${
                        tech === "express" ? "bg-white rounded p-1" : ""
                      }`}
                      title={tech.toUpperCase()}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Progress Bars */}
            <div className="w-full" ref={sectionRef}>
              <h2 className="text-center md:text-left text-2xl font-bold mb-6">
                Tech Proficiency
              </h2>

              {skills.map((skill, idx) => (
                <div key={idx} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-200 font-semibold">
                      {skill.name}
                    </span>
                    <span className="text-yellow-300 font-semibold">
                      {skill.level}
                    </span>
                  </div>

                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-yellow-300 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: visible ? skill.level : "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Faq />
      <Footer />
    </section>
  );
};

export default About;

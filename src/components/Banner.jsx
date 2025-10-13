import React, { useMemo, useEffect, useState } from "react";
import "../App.css";
import Image1 from "../assets/images/portfolio image 1.jpg";
import Image2 from "../assets/video/WhatsApp Video 2025-09-07 at 07.15.48_92c0d254.mp4";
import Screenshot4 from "../assets/images/WhatsApp Image 2025-10-01 at 11.28.21_8185f4e4.jpg";
import Image5 from "../assets/images/WhatsApp Image 2025-06-22 at 02.19.56_54f52bda.jpg";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaTiktok,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";
import ContactUs from "./ContactUs";
import { Link } from "react-router-dom";
import Client1 from "../assets/images/miss Fay.jpg";
import Client2 from "../assets/images/alameen.jpg";

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

  const projects = [
    {
      title: "AYOMAMA",
      description:
        "Ayomama is an intelligent pregnancy and maternity care app designed to support expecting mothers every step of their journey. With personalized guidance, appointment tracking, multilingual support, and an AI-powered chatbot, Ayomama ensures every mom feels informed, cared for, and connected.",
      skillset: "React Native, Expo, NativeWind",
      image: Screenshot4,
      github:
        "https://github.com/Ayomama-Health-Project/Frontend-Ayomama.git",
      livedemo:
        "https://expo.dev/accounts/biodun42/projects/ayomama/builds/81d651f0-1cde-436c-8cd8-9b1e503d0f78",
    },
  ];

  const testimonials = [
    {
      name: "Favour Chinemerem",
      role: "Product Manager, Madein Africa",
      image: Client1,
      rating: 5,
      review:
        "Working with Chizaram was a fantastic experience. She never says no to any challenges and always gives her all. Any company she works with has gained a great asset. I highly recommend her to anyone looking for a dedicated and skilled developer.",
    },
    {
      name: "Al-ameen Balogun",
      role: "Frontend Developer, Ayomama",
      image: Client2,
      rating: 4.5,
      review:
        "Chizaram is skilled, reliable, and highly adaptable. She approaches every project with professionalism, positivity, and a strong drive to deliver results. A truly dependable and talented collaborator. Her attention to detail and timely delivery made collaboration seamless.",
    },
  ];

  const [showIcons, setShowIcons] = useState(true);
  const [flipped, setFlipped] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  // 👇 Hide icons when scrolling down
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowIcons(false);
      } else {
        setShowIcons(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 👇 Detect when footer (ContactUs) is visible on mobile
  useEffect(() => {
    if (window.innerWidth >= 768) return; // Only run on mobile

    const footer =
      document.querySelector("footer") ||
      document.querySelector("#contact-us");
    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsNearFooter(entry.isIntersecting));
      },
      {
        root: null,
        rootMargin: "150px", // starts fading out before footer fully appears
        threshold: 0.1,
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  // 👇 Auto flip avatar every 2 seconds
  useEffect(() => {
    const flipInterval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 2000);
    return () => clearInterval(flipInterval);
  }, []);

  return (
    <div className="relative bg-gradient-to-tl from-[#030637] via-[#3c0753] to-[#720455] min-h-screen overflow-hidden text-white">
      {/* Stars */}
      <div className="twinkling-stars"></div>

      {/* Shooting Stars */}
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
        className={`fixed bottom-4 right-4 z-50 transition-all duration-700 ${
          showIcons && !isNearFooter
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        } flex flex-row md:flex-col items-center space-x-4 md:space-x-0 md:space-y-3 p-3 rounded-2xl shadow-lg text-2xl bg-transparent md:bg-white/10 md:backdrop-blur-md md:border md:border-white/20`}
      >
        <a
          href="https://github.com/chizaram25"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/chizaram-obi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/Afambu_chizaram"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.facebook.com/benita.obi.77"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.tiktok.com/@chizaramobi25_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-cyan-300"
        >
          <FaTiktok />
        </a>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 md:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10">
          {/* Left Text */}
          <div
            className="text-center md:text-left md:w-1/2 space-y-4"
            data-aos="fade-right"
          >
            <h1 className="text-white text-5xl font-bold">
              Hi! <span className="inline-block animate-wave">👋🏾</span>
            </h1>
            <p className="text-white text-5xl md:text-6xl font-bold">
              I'm <span className="text-yellow-300">Chizaram</span>
            </p>
            <p className="text-yellow-300 text-3xl md:text-4xl font-extrabold pt-2">
              <Typewriter
                words={[
                  "FREELANCER",
                  "MERN STACK DEVELOPER",
                  "FULL-STACK DEVELOPER",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
          </div>

          {/* Right Flipping Image */}
          <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
            <div className="relative w-52 h-52 md:w-60 md:h-60">
              <div
                className={`transition-transform duration-700 ease-in-out transform-style preserve-3d w-full h-full ${
                  flipped ? "rotate-y-180" : ""
                }`}
              >
                <img
                  src={Image1}
                  alt="Front"
                  className="absolute w-full h-full rounded-full object-cover border-4 border-yellow-300 shadow-xl backface-hidden"
                />
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

      {/* 📱 Mobile Section */}
      <div className="block md:hidden px-6 py-10 space-y-10">
        {/* About Me */}
        <div
          className="w-full flex flex-col items-center"
          data-aos="fade-right"
        >
          <h1 className="text-5xl sm:text-4xl text-yellow-400 font-extrabold mb-6 text-center">
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
                </video>
              </div>
            </div>
          </div>
          <Link
            to="/about"
            className="mt-4 text-blue-400 underline hover:text-blue-300 transition"
          >
            See more →
          </Link>
        </div>

        {/* Resume */}
        <section id="resume" className="py-20 mt-20 text-center relative z-10">
          <h2 className="text-5xl text-yellow-400 font-bold mb-6" data-aos="fade-right">
            Resume
          </h2>
          <p className="mb-8 text-gray-100" data-aos="fade-left">
            You can view or download my resume below.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-black rounded-lg hover:bg-purple-900"
              data-aos="fade-right"
            >
              View Resume
            </a>
            <a
              href="/Resume.pdf"
              download
              className="px-6 py-2 bg-black text-white rounded-lg shadow hover:bg-gray-800"
              data-aos="fade-left"
            >
              Download Resume
            </a>
          </div>
        </section>

        {/* Project */}
        <main className="flex-1 px-6 py-10">
          <h1
            className="text-5xl font-bold text-center text-yellow-300 mb-12"
            data-aos="fade-down"
          >
            Projects
          </h1>
          <div className="grid gap-8">
            {projects.map((proj, index) => (
              <React.Fragment key={index}>
                <div
                  className="bg-white w-full rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
                  data-aos="fade-down"
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h2
                      className="font-bold text-lg mb-2 text-black"
                      data-aos="fade-right"
                    >
                      {proj.title}
                    </h2>
                    <p
                      className="text-gray-600 mb-4 font-bold"
                      data-aos="fade-left"
                    >
                      {proj.skillset}
                    </p>
                    <p className="text-gray-600 mb-4" data-aos="fade-right">
                      {proj.description}
                    </p>
                    <div className="flex justify-center">
                      <a
                        href={proj.github}
                        className="inline-block border text-black px-4 py-2 rounded hover:bg-purple-900 hover:text-white transition"
                      >
                        View On GitHub
                      </a>
                      <a
                        href={proj.livedemo}
                        className="inline-block bg-purple-950 ml-10 text-white px-4 py-2 rounded hover:bg-purple-900"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-4" data-aos="fade-left">
                  <Link
                    to="/project"
                    className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-blue-600 border border-blue-600 rounded-lg transition-colors duration-200 hover:bg-blue-50"
                  >
                    See More Projects →
                  </Link>
                </div>
              </React.Fragment>
            ))}
          </div>
        </main>

        {/* Testimonials */}
        <section className="w-full py-20 px-8 md:px-16 flex flex-col items-center justify-center">
          <h2
            className="text-5xl font-bold text-center text-yellow-400 mb-12"
            data-aos="fade-down"
          >
            Testimonials
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center place-items-center max-w-6xl w-full">
            {testimonials.map((testimonial, index) => {
              const fullStars = Math.floor(testimonial.rating);
              const hasHalfStar = testimonial.rating % 1 !== 0;
              const emptyStars = 5 - Math.ceil(testimonial.rating);

              return (
                <div
                  key={index}
                  className="bg-purple-950 p-6 rounded-2xl shadow-md hover:shadow-xl transition w-full max-w-sm"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-bold text-lg text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-white text-sm">{testimonial.role}</p>
                    </div>
                  </div>

                  <p className="text-white italic mb-4">
                    “{testimonial.review}”
                  </p>

                  <div className="flex justify-center">
                    {[...Array(fullStars)].map((_, i) => (
                      <FaStar
                        key={`full-${i}`}
                        className="text-yellow-400 text-lg"
                      />
                    ))}
                    {hasHalfStar && (
                      <FaStarHalfAlt className="text-yellow-400 text-lg" />
                    )}
                    {[...Array(emptyStars)].map((_, i) => (
                      <FaRegStar
                        key={`empty-${i}`}
                        className="text-gray-300 text-lg"
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Footer / Contact */}
      <ContactUs />
    </div>
  );
};

export default Banner;

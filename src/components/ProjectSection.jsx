import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Screenshot3 from "../assets/images/screenshot 3.PNG";
import Screenshot4 from "../assets/images/WhatsApp Image 2025-10-01 at 11.28.21_8185f4e4.jpg";
import Screenshot5 from "../assets/images/edited.png";
import Client1 from "../assets/images/miss Fay.jpg";
import Client2 from "../assets/images/alameen.jpg";
import Client3 from "../assets/images/bayo.jpg";

const projects = [
  {
    title: "TODO APP",
    description:
      "Todo App is a simple and intuitive task management tool designed to help you stay organized and productive. With features like task creation, editing, deletion, and status updates (completed or pending), it makes tracking your daily activities effortless. Its clean interface and responsive design make it easy to use on any device.",
    skillset: "React, Tailwindcss",
    image: Screenshot3,
    github: "https://github.com/chizaram25/Todo-app.git",
    livedemo: "https://todo-h9lu27b8g-chizaram-obis-projects.vercel.app",
  },
  {
    title: "AYOMAMA",
    description:
      "Ayomama is an intelligent pregnancy and maternity care app designed to support expecting mothers every step of their journey. With personalized guidance, appointment tracking, multilingual support, and an AI-powered chatbot, Ayomama ensures every mom feels informed, cared for, and connected.",
    skillset: "React Native, Expo, NativeWind",
    image: Screenshot4,
    github: "https://github.com/Ayomama-Health-Project/Frontend-Ayomama.git",
    livedemo:
      "https://expo.dev/accounts/biodun42/projects/ayomama/builds/81d651f0-1cde-436c-8cd8-9b1e503d0f78",
  },
  {
    title: "Unitrack",
    description:
      "UniTrack is a comprehensive, GPS-verified attendance management system designed specifically for educational institutions. Built with modern web technologies, it provides real-time attendance tracking, location verification, device fingerprinting, and comprehensive reporting features.",
    skillset: "Nextjs, Tailwindcss, Typescript, Nodejs, Express, MongoDB",
    image: Screenshot5,
    github: "#",
    livedemo: "https://uni-track-l0902du9o-chizaram-obis-projects.vercel.app",
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

  {
    name: "Adebayo",
    role: "CEO, GMT TRAINING INSTITUTE",
    image: Client3,
    rating: 5,
    review:
      "During her internship at GMT Training Institute, Chizaram proved to be a creative and dependable full-stack and frontend developer. She consistently showed enthusiasm for learning, delivered quality work, and brought a positive attitude that made her a valued member of the team.",
  },
];

const PortfolioSection = () => {
  return (
    <div className="min-h-screen flex flex-col text-gray-800">
      {/* Projects Section */}
      <main className="flex-1 px-12 py-20">
        <h1
          className="text-4xl font-bold text-center text-yellow-300 mb-12"
          data-aos="fade-down"
        >
          Projects
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="bg-white w-full rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="font-bold text-lg mb-2 text-purple-900">
                  {proj.title}
                </h2>
                <p className="text-gray-600 mb-2 font-semibold">
                  {proj.skillset}
                </p>
                <p className="text-gray-600 mb-4">{proj.description}</p>
                <div className="flex justify-center">
                  <a
                    href={proj.github}
                    className="inline-block border text-black px-4 py-2 rounded hover:bg-purple-900 hover:text-white transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={proj.livedemo}
                    className="inline-block bg-purple-950 ml-4 text-white px-4 py-2 rounded hover:bg-purple-900 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <section className="w-full py-20 px-8 md:px-16 flex flex-col items-center justify-center">
          <h2
            className="text-4xl font-bold text-center text-yellow-400 mb-12"
            data-aos="fade-down"
          >
            What Clients Say
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
      </main>
    </div>
  );
};

export default PortfolioSection;

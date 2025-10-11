import React from "react";
import Screenshot3 from "../assets/images/screenshot 3.PNG";
import Screenshot4 from "../assets/images/WhatsApp Image 2025-10-01 at 11.28.21_8185f4e4.jpg";
import Screenshot5 from "../assets/images/edited.png";

const projects = [
  {
    title: "TODO APP",
    description: "Todo App is a simple and intuitive task management tool designed to help you stay organized and productive. With features like task creation, editing, deletion, and status updates (completed or pending), it makes tracking your daily activities effortless.Its clean interface and responsive design make it easy to use on any device.",
    skillset:"React, Tailwindcss",
    image: Screenshot3,
    github: "https://github.com/chizaram25/Todo-app.git",
    livedemo: "https://todo-h9lu27b8g-chizaram-obis-projects.vercel.app",
  },
  {
    title: "AYOMAMA",
    description: "Ayomama is an intelligent pregnancy and maternity care app designed to support expecting mothers every step of their journey. With personalized guidance, appointment tracking, multilingual support, and an AI-powered chatbot, Ayomama ensures every mom feels informed, cared for, and connected.",
    skillset:"React Native, Expo, NativeWind",
    image: Screenshot4,
    github: "https://github.com/Ayomama-Health-Project/Frontend-Ayomama.git",
    livedemo: "https://expo.dev/accounts/biodun42/projects/ayomama/builds/81d651f0-1cde-436c-8cd8-9b1e503d0f78",
  },
  {
    title: "Unitrack",
    description: "UniTrack is a comprehensive, GPS-verified attendance management system designed specifically for educational institutions. Built with modern web technologies, it provides real-time attendance tracking, location verification, device fingerprinting, and comprehensive reporting features.",
    image: Screenshot5,
    github: "#",
    livedemo: "uni-track-l0902du9o-chizaram-obis-projects.vercel.app",
  },
];

const PortfolioSection = () => {
  return (
    <div className="min-h-screen flex text-gray-800">
      
      {/* Main Content */}
      <main className="flex-1 px-12 py-20">
        <h1 className="text-4xl font-bold text-center text-yellow-300 mb-12" data-aos="fade-down">Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition" data-aos="fade-down"
            >
              <img src={proj.image} alt={proj.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="font-bold text-lg mb-2" data-aos="fade-right">{proj.title}</h2>
                <p className="text-gray-600 mb-4 font-bold" data-aos="fade-left">{proj.skillset}</p>
                <p className="text-gray-600 mb-4" data-aos="fade-right">{proj.description}</p>
                <div className="flex justify-center">
                <a
                  href={proj.github}
                  className="inline-block border text-black px-4 py-2 rounded hover:bg-purple-900 hover:text-white transition" data-aos="fade-left"
                >
                  View On GitHub
                </a>

                <a href={proj.livedemo}
                className="inline-block bg-purple-950 ml-10 text-white px-4 py-2 rounded hover:bg-purple-900" data-aos="fade-right">
                  Live Demo
                </a>

                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
};

export default PortfolioSection;

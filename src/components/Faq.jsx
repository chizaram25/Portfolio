import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Faq = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const faqData = [
    {
      id: 1,
      question: "Who are you?",
      answer:
        "I’m Chizaram Obi, a MERN stack developer passionate about building functional and creative digital experiences.",
    },
    {
      id: 2,
      question: "What do you specialize in?",
      answer:
        "I focus on full-stack web development with React, Node.js, Express, and MongoDB. I also enjoy working with Tailwind CSS for clean UI and creative coding.",
    },
    {
      id: 3,
      question: "Why do you enjoy coding?",
      answer:
        "Coding lets me solve problems while creating tools and products people can use every day, it’s both challenging and rewarding.",
    },
    {
      id: 4,
      question: "Are you available for freelance or collaborations?",
      answer:
        "Yes! I’m always open to exciting projects, freelance work, and collaborations that align with my skills.",
    },
    {
      id: 5,
      question: "What inspires your work?",
      answer:
        "Simplicity, innovation, and the joy of turning ideas into real products.",
    },
    {
      id: 6,
      question: "What do you do outside of coding?",
      answer:
        "I enjoy music, reading, or swimming, which help me stay creative and balanced.",
    },
    {
      id: 7,
      question: "How can I contact you?",
      answer:
        "You can reach me via my contact form or any of my social links ",
    },
  ];

  const toggleItem = (id) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className=" max-w-4xl mx-auto px-6 py-12 " >
      {/* Header Section */}
      <div className="text-center mb-12" data-aos="fade-right">
        <h2 className="text-4xl font-bold text-gray-100 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          Find answers to the most common questions about me.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqData.map((item) => {
          const isOpen = openItems.has(item.id);

          return (
            <div
              key={item.id}
              className="rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-purple-950 rounded-xl transition-colors duration-200 focus:outline-none"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
              >
                <h3 className="text-lg font-semibold text-white pr-4" data-aos="fade-right">
                  {item.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  strokeWidth={2.5} data-aos="fade-left"
                />
              </button>

              <div
                id={`faq-answer-${item.id}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "max-h-96 opacity-100 pointer-events-auto"
                    : "max-h-0 opacity-0 pointer-events-none"
                }`}
              >
                <div className="px-6 pb-5">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-100 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="relative z-10 text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100" data-aos="fade-left">
        <h3 className="text-xl font-semibold text-gray-900 mb-2" data-aos="fade-right">
          Still have questions?
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-left">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-purple-950 text-white rounded-lg shadow-sm transition transform duration-200 ease-in-out hover:bg-purple-900 hover:-translate-y-0.5 focus:outline-none"
            
          >
            Contact Us
          </a>
          <Link
            to="/project"
            className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-blue-600 border border-blue-600 rounded-lg transition-colors duration-200 hover:bg-purple-950 hover:text-white focus:outline-none"
          >
            View projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Faq;

import React from "react";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 mt-20 text-center relative z-10">
      <h2 className="text-3xl font-bold mb-6" data-aos="fade-right">Resume</h2>
      <p className="mb-8 text-gray-100" data-aos="fade-left">
        You can view or download my resume below.
      </p>
      <div className="flex justify-center gap-4">
        {/* View Resume */}
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border border-black rounded-lg hover:bg-purple-900"
          data-aos="fade-right"
        >
          View Resume
        </a>

        {/* Download Resume */}
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
  );
};

export default ResumeSection;

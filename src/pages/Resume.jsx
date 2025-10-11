import React, {useMemo} from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ResumeSection from '../components/ResumeSection';

const Resume = () => {

  const shootingStars = useMemo(
      () =>
        Array.from({ length: 5 }).map((_, i) => ({
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          delay: `${i * 2}s`,
        })),
      []
    );
  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-tl from-[#030637] via-[#3c0753] to-[#720455] overflow-hidden text-white">
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

  {/* Resume content should sit above stars */}
  <div className="relative z-10 flex-grow">
    <ResumeSection />
  </div>

  {/* Sticky footer */}
  <div className="relative z-10 mt-auto">
    <Footer />
  </div>
</div>

  )
}

export default Resume
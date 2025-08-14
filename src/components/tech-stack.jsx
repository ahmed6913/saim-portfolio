"use client";

import { useState, useEffect } from 'react';

const technologies = [
  { name: 'React', icon: '/react.png', category: 'Frontend' },
  { name: 'Next.js', icon: '/tech/next.svg', category: 'Frontend' },
  { name: 'TypeScript', icon: '/tech/typescript.svg', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: '/tailwind.png', category: 'Frontend' },
  { name: 'Go', icon: '/go.png', category: 'Backend' },
  { name: 'MongoDB', icon: '/tech/mongodb.svg', category: 'Database' },
  { name: 'MySQL', icon: '/tech/mysql.svg', category: 'Database' },
  { name: 'Docker', icon: '/docker.png', category: 'Tools' },
];

export default function TechStack() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('tech-stack');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="tech-stack" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My  <span className="text-blue-600">Tech Stack</span> 
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tools & technologies I use to build modern software applications.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center relative" style={{ minHeight: '400px' }}>
          {/* Orbital icons with rotation */}
          <div className="relative w-[340px] h-[340px] mx-auto mb-8" style={{ animation: 'rotateStack 8s linear infinite' }}>
            {/* Orbit icons */}
            {technologies.map((tech, i) => {
              const angle = (i / technologies.length) * 2 * Math.PI;
              const radius = 120;
              const x = Math.cos(angle) * radius + 170 - 32;
              const y = Math.sin(angle) * radius + 170 - 32;
              return (
                <div
                  key={tech.name}
                  className="absolute flex flex-col items-center"
                  style={{ left: `${x}px`, top: `${y}px`, width: '64px', height: '64px' }}
                >
                  <div className="w-14 h-14 rounded-full bg-white border border-blue-300 flex items-center justify-center shadow-lg mb-1 hover:scale-110 transition-transform duration-300">
                    <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
                  </div>
                  <span className="text-xs text-gray-700 font-medium text-center" style={{ width: '64px' }}>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Add this to your global CSS (e.g., styles/globals.css):
@keyframes rotateStack {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
*/
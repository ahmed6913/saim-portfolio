"use client";

import { useState, useEffect } from 'react';

const technologies = [
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'Next.js', icon: '▲', category: 'Frontend' },
  { name: 'TypeScript', icon: '📘', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: '🎨', category: 'Frontend' },
  { name: 'Go', icon: '🟢', category: 'Backend' },
  { name: 'MongoDB', icon: '🍃', category: 'Database' },
  { name: 'MySQL', icon: '🐘', category: 'Database' },
  { name: 'Docker', icon: '🐳', category: 'Tools' },
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
    <section id="tech-stack" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Tech <span className="text-blue-600 dark:text-blue-400"> Stack </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-3">{tech.icon}</div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                {tech.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {tech.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
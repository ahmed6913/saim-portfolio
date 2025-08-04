"use client";

import { useState, useEffect } from 'react';

const reviews = [
  {
    id: 1,
    name: "@sarah_dev",
    content: "Just discovered Saim's portfolio — a sleek, minimal, and super dev-friendly developer. Clean code, easy to work with, and perfect for modern projects. ✨",
    avatar: "👩‍💻"
  },
  {
    id: 2,
    name: "@mike_tech",
    content: "Really impressed by Saim's work. Check it out. The portfolio design is amazing and the projects showcase real talent. 🚀",
    avatar: "👨‍💻"
  },
  {
    id: 3,
    name: "@emily_design",
    content: "Saim's ability to create beautiful, functional web applications is outstanding. His attention to detail and user experience focus is exactly what clients need. ☕",
    avatar: "👩‍🎨"
  },
  {
    id: 4,
    name: "@david_fullstack",
    content: "As a fellow developer, I can attest to Saim's technical expertise. Clean code, modern tech stack, and excellent problem-solving skills. Highly recommended! 💻",
    avatar: "👨‍🔧"
  },
  {
    id: 5,
    name: "@alex_startup",
    content: "Saim helped us build a robust e-commerce platform from scratch. His full-stack skills and project management abilities are top-notch. ⭐",
    avatar: "👨‍💼"
  },
  {
    id: 6,
    name: "@lisa_agency",
    content: "Working with Saim was a game-changer for our agency. He delivered our client's project on time and exceeded expectations. Professional and reliable! 🎯",
    avatar: "👩‍💼"
  }
];

export default function ReviewsSlider() {
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

    const element = document.getElementById('reviews-slider');
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
    <section id="reviews-slider" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-black-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            See what developers are saying about <span className="text-blue-600 dark:text-blue-400">Saim</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Testimonials from colleagues and clients I've worked with
          </p>
        </div>

        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-200 dark:hover:border-gray-600/50"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Review Content */}
                <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed mb-4">
                  {review.content}
                </p>

                {/* Reviewer Info */}
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-sm">
                    {review.avatar}
                  </div>
                  <span className="text-gray-900 dark:text-white font-medium text-sm">
                    {review.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">

              Add Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 
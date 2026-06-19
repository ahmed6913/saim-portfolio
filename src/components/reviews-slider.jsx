"use client";

import { useState, useEffect } from 'react';

const reviews = [
  {
    id: 1,
    name: "@sarah_marketing",
    content: "Saim's data-driven approach transformed our marketing campaigns. His ability to extract actionable insights from complex datasets is outstanding. Results speak for themselves! 📊",
    avatar: "👩‍💼"
  },
  {
    id: 2,
    name: "@mike_analytics",
    content: "Working with Saim on our analytics pipeline was smooth. He optimized our data workflows and cut processing time by 40%. A true data engineer! ⚡",
    avatar: "👨‍💻"
  },
  {
    id: 3,
    name: "@emily_product",
    content: "Saim provided brilliant market insights that shaped our product strategy. His analysis is thorough, clear, and always on point. Highly valuable! 📈",
    avatar: "👩‍💼"
  },
  {
    id: 4,
    name: "@david_business",
    content: "As a business analyst, I appreciate Saim's technical depth and business acumen. His SQL queries and visualizations make complex data accessible. Outstanding work! 💡",
    avatar: "👨‍💼"
  },
  {
    id: 5,
    name: "@alex_finance",
    content: "Saim built our financial dashboard using Python and BigQuery. The performance is incredible and the insights are game-changing for our team. 🎯",
    avatar: "👨‍💼"
  },
  {
    id: 6,
    name: "@lisa_data_science",
    content: "Collaborated with Saim on predictive modeling projects. His expertise in machine learning and data engineering solved critical business problems. Excellent partner! 🔬",
    avatar: "👩‍🔬"
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
            See what clients and colleagues are saying about <span className="text-blue-600 dark:text-blue-400">Saim</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Testimonials from teams and organizations I've partnered with on data analytics and engineering projects
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
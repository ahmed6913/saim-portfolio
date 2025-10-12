"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-4 text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50/80 backdrop-blur-sm text-blue-700 font-medium text-sm shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <a
                href="https://www.upwork.com/freelancers/~015c3c40c30aa13b55?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-800"
              >
                Available for freelance work
              </a>
            </span>
            <svg
              className="w-4 h-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 pt-6">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Saim</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Software Developer passionate about creating beautiful, functional, scalable and user-friendly
            web applications & web3 products from design, development and deployment with project coordination and DevOps
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                View My Work
              </button>
            </Link>
            <a href="/Software-DEV.%20Saim%20CV.K.pdf" target="_blank" rel="noopener noreferrer">
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

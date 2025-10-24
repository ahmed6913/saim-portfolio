"use client"

import { useEffect } from "react"
import Hero from "@/components/hero"
import TechStack from "@/components/tech-stack"
import ExperienceProjects from "@/components/experience-projects"
import ReviewsSlider from "@/components/reviews-slider"
import BackToTop from "@/components/back-to-top"
import FlipLink from "@/components/fliplink"
import CurvedLoop from '@/components/CurvedLoop';

// analytics for views
import { Analytics } from '@vercel/analytics/next';






export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth"
  }, [])


  return (
    <main className="bg-white text-black min-h-screen pt-5">
      <Hero />

      {/* Curved Loop Text Section */}
      <CurvedLoop
        marqueeText="Software Developer ✦ Frontend Developer ✦ DevOps Explorer ✦"
        speed={2}
        curveAmount={400}
        direction="right"
        interactive={true}
        className="py-8"
      />

      {/* Social Links Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Let's <span className="text-blue-600 dark:text-blue-400">Connect</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Follow me on social media and let's collaborate on amazing projects together.
            </p>
          </div>

          <div className="mb-8">
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50/80 backdrop-blur-sm text-blue-700 font-medium text-sm shadow-sm hover:shadow-md transition-all duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Hover Over Links
            </button>
          </div>

          <div className="space-y-12">
            <div className="flex items-center justify-center gap-6">
              <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-700">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">in</span>
              </div>
              <FlipLink href="https://www.linkedin.com/in/saim-ahmed-5903a0339/" children="LINKEDIN" />
            </div>


            <div className="flex items-center justify-center gap-6">
              <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-700">
                <svg className="w-7 h-7 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <FlipLink href="https://github.com/ahmed6913" children="GITHUB" />
            </div>

            <div className="flex items-center justify-center gap-6">
              <FlipLink href="https://x.com/Saimahmed777" children="TWITTER" />
              <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-700">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">X</span>
              </div>
            </div>



            <div className="flex items-center justify-center gap-6">
              <FlipLink href="mailto:shaikhsaim777121@gmail.com" children="EMAIL" />
              <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-700">
                <svg className="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TechStack />
      <ExperienceProjects />
      <ReviewsSlider />
      <BackToTop />

       {/* analytics */} 
      <Analytics />
    </main>
  );
}

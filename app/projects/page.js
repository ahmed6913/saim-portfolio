"use client"

import { useEffect } from "react"
import ProjectCard from "@/components/projectcard"
import BackToTop from "@/components/back-to-top"
import CardCarousel from "@/components/card-carousel";
import { Badge } from "@/components/ui/badge";



export default function Projects() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth"
  }, [])

  return (
    <main className="bg-white text-black min-h-screen pt-15">
      <ProjectCard />
      <BackToTop />
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Explore More <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Check out my other projects and see what I've been working on.
          </p>
          <CardCarousel
            images={[
              { src: "/ai.png", alt: "Project 1" },
              { src: "/foodappui.png", alt: "Project 2" },
              { src: "/uikit.png", alt: "Project 3" },
            ]}
            autoplayDelay={2000}
            showPagination={true}
            showNavigation={true}
          />
        </div>
      </section>
    </main>
  );
}

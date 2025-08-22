"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ExperienceProjects() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    years: 0,
    clients: 0
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const animateCounters = () => {
      const targetCounts = {
        projects: 25,
        years: 2,
        clients: 15
      };

      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounts({
          projects: Math.floor(targetCounts.projects * progress),
          years: Math.floor(targetCounts.years * progress),
          clients: Math.floor(targetCounts.clients * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounts(targetCounts);
        }
      }, stepDuration);
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  const learningConcepts = [
    {
      category: "Frontend Development",
      concepts: [
        "React Hooks & State Management",
        "Next.js App Router & Server Components",
        "TypeScript for Type Safety",
        "Responsive Design with Tailwind CSS",
        "Performance Optimization",
        "Web Design",
        "UI/UX Principles"
      ]
    },
    {
      category: "Backend Development",
      concepts: [
        "Golang & Firebase",
        "Database Design (MySQL) & MongoDB",
        "RESTful API Development",
        "Authentication & Authorization",
        "Server-side Rendering",
        "APIs",
        "Microservices Architecture"
      ]
    },
    {
      category: "DevOps & Tools",
      concepts: [
        "Git Version Control",
        "CI/CD Pipelines",
        "Docker Containerization",
        "Cloud Deployment (Vercel, AWS)",
        "Performance Monitoring",
        "Testing & Debugging"
      ]
    },
    {
    category: "Project Mangement",
      concepts: [
        "Agile SDLC",
        "Scrum framework",
        "Jira Tool",
        "Notion Project Planning",
        "Product Backlog",
        "Stand-Ups"
      ]
    },
     {

      category: "Blockchain",
      concepts: [
        "Solidity & ThirdwebSDK",
        "EVM",
        "JavaScript Libraries web3.js/ether.js",
        "Smart Contract Security",
        "Metamask Integration",
        "NFT, DeFi, & dApp Development"
      ]
    
    }
  ];

  

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Experience & <span className="text-blue-600 dark:text-blue-400">Learning Journey</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My journey from a beginner to a full-stack developer, constantly learning and building real-world applications.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center border border-gray-200 dark:border-gray-700">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {counts.projects}+
              </div>
              <div className="text-lg text-gray-600 dark:text-gray-300 font-medium">
                Projects Completed
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center border border-gray-200 dark:border-gray-700">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {counts.years}+
              </div>
              <div className="text-lg text-gray-600 dark:text-gray-300 font-medium">
                Years of Experience
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center border border-gray-200 dark:border-gray-700">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {counts.clients}+
              </div>
              <div className="text-lg text-gray-600 dark:text-gray-300 font-medium">
                 Clients
              </div>
            </div>
          </div>

          {/* Learning Concepts */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Concepts I've Mastered
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {learningConcepts.map((category, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                    {category.category}
                  </h4>
                  <ul className="space-y-3">
                    {category.concepts.map((concept, conceptIndex) => (
                      <li key={conceptIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {concept}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

      

                     {/* Call to Action */}
           <div className="text-center mt-16">
             <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
               Always learning, always building, always improving.
             </p>
             <Link href="/projects">
               <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                 View My Projects
               </button>
             </Link>
           </div>
        </div>
      </div>
    </section>
  );
}

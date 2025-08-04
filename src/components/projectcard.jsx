"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

function ProjectCard() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "POS with NFT Marketplace",
      description:
        "A modern Point of Sale (POS) system with NFT-based customer rewards and an integrated NFT Marketplace.",
      technologies: ["Next.js", "React", "Go", "MongoDB", "MySQL", "Firebase"],
      liveLink: "https://nft-marketplace-81f39.web.app/",
      githubLink: "https://github.com/ahmed6913/NFT-Marketplace.git",
      image: "/NFT.png",
    },
  ];

  return (
    <section className="flex items-center justify-center px-4 py-12 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 pt-7">
          My <span className="text-blue-600 dark:text-blue-400">Projects (visit my github for more)</span> 
     
        </h2>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`transition-all duration-700 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } bg-white text-black p-6 rounded-xl shadow-md`}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-lg mb-4 object-cover"
              />
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-700 mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ✅ IMPORTANT
export default ProjectCard;

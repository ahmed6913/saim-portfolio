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
      title: "NFT Marketplace with admin page",
      description:
        "A modern Point of Sale (POS) system with NFT-based customer rewards and an integrated NFT Marketplace.",
      technologies: ["Next.js", "React","TailwindCSS", "Go", "MongoDB", "MySQL", "Firebase"],
      liveLink: "https://nft-marketplace-81f39.web.app/",
      githubLink: "https://github.com/ahmed6913/NFT-Marketplace.git",
      image: "/NFT.png",
    },
    {
      id: 2,
      title: "POS with admin page",
      description:
        "A modern Point of Sale (POS) system.",
      technologies: ["Next.js", "React","TailwindCSS", "Go", "MongoDB", "MySQL", "Firebase","APIs","AWS"],
      liveLink: "https://web-app-pos-1deda.web.app/",
      githubLink: "https://github.com/ahmed6913/web-app-pos.git",
      image: "/pos.png",
    },
     {
      id: 3,
      title: "DeFi Staking App (Decentralized Finance Application)",
      description:
        "A DeFi stack app (Decentralized Finance stack application) is a full-stack decentralized application that enables users to interact with financial services on the blockchain—without intermediaries.",
      technologies: [ "React","TailwindCSS", "Go","Ether.js","Typescript", "Pinata", "Firebase","APIs"],
      liveLink: "https://ahmed6913.github.io/DeFi-staking-app/",
      githubLink: "https://github.com/ahmed6913/DeFi-staking-app.git",
      image: "/defi.png",
    },
    {
      id: 4,
      title: "Cubiclabs official website",
      description:
        "A service based startup landing page",
      technologies: [ "Nextjs","TailwindCSS", "Firebase","APIs"],
      liveLink: "https://cubiclabs.vercel.app/",
      githubLink: "https://github.com/saim-cubiclabs/cubiclabs.git",
      image: "/cb.png",
    },
     {
      id: 5,
      title: "Lawyer Appointment Booking System",
      description:
        "Clients can book appointments with lawyers and lawyers can manage their appointments.",
      technologies: [ "Nextjs","TailwindCSS", "Firebase","FormspreeAPI"],
      liveLink: "https://leqal-ack6.vercel.app/",
      githubLink: "https://github.com/saim-cubiclabs/leqal.git",
      image: "/leqal.png",
    },
    {
      id: 6,
      title: "Reward Platform",
      description:
"A platform where users earn points by watching, liking, and sharing brand videos (Reels-style). Points can be redeemed for brand-specific rewards/coupons. Brands can upload campaigns, allocate points per engagement, and track basic analytics.",
        
      technologies: [ "Nextjs","TailwindCSS", "Firebase",],
      liveLink: "",
      githubLink: "",
      image: "/reward.png",
    },


  ];

  return (
    <section className="flex items-center justify-center px-4 py-12 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 pt-7">
          My <span className="text-blue-600 dark:text-blue-400">Projects (visit my <a href="https://github.com/ahmed6913" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-800">github</a> for more)</span>
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

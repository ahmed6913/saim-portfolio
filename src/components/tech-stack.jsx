"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

const technologies = [
  // Frontend
  { name: 'React', icon: '/react.png', category: 'Frontend', color: 'from-blue-400 to-cyan-400' },
  { name: 'Next', icon: '/next.png', category: 'Frontend', color: 'from-gray-700 to-gray-900' },
  { name: 'TypeScript', icon: '/t.png', category: 'Frontend', color: 'from-blue-500 to-blue-700' },
  { name: 'JavaScript', icon: '/js.png', category: 'Frontend', color: 'from-yellow-400 to-yellow-600' },
  { name: 'Tailwind CSS', icon: '/tailwind.png', category: 'Frontend', color: 'from-teal-400 to-blue-500' },
  { name: 'ShadCN/UI', icon: '/scn.png', category: 'Frontend', color: 'from-teal-400 to-blue-500' },

  // Backend
  { name: 'Go', icon: '/go.png', category: 'Backend', color: 'from-cyan-400 to-blue-500' },
  { name: 'Firebase', icon: '/firebase.png', category: 'Backend', color: 'from-yellow-400 to-orange-500' },
  { name: 'MongoDB', icon: '/mdb.png', category: 'Backend', color: 'from-green-400 to-green-600' },
  { name: 'MySQL', icon: '/mysql.png', category: 'Backend', color: 'from-blue-500 to-blue-700' },



 

  // DevOps
  { name: 'Docker', icon: '/docker.png', category: 'DevOps', color: 'from-blue-400 to-blue-600' },
  { name: 'Git & GitHub', icon: '/git.png', category: 'DevOps', color: 'from-gray-600 to-gray-800' },
  { name: 'GitHub CI/CD', icon: '/gith.png', category: 'DevOps', color: 'from-green-400 to-blue-500' },
  { name: 'AWS', icon: '/aws.png', category: 'DevOps', color: 'from-orange-400 to-orange-600' },
  { name: 'Vercel', icon: '/v.png', category: 'DevOps', color: 'from-orange-400 to-orange-600' },


  // Design
  { name: 'Figma', icon: '/fg.png', category:'Design', color: 'from-purple-400 to-pink-400' },
];

const categories = [
  { name: 'All', color: 'text-blue-600' },
  { name: 'Frontend', color: 'text-cyan-600' },
  { name: 'Backend', color: 'text-green-600' },
  { name: 'DevOps', color: 'text-orange-600' },
  { name: 'Design', color: 'text-pink-600' },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredTech, setHoveredTech] = useState(null);

  const filteredTechnologies = activeCategory === 'All'
    ? technologies
    : technologies.filter(tech => tech.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="tech-stack" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-background via-secondary/20 to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-blue-600">Tech Stack</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tools & technologies I use to build modern, scalable software applications and deliver exceptional user experiences.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={categoryVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${activeCategory === category.name
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-card/80 text-muted-foreground hover:bg-blue-50 hover:text-blue-600 border border-border'
                }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8"
        >
          {filteredTechnologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                rotateY: 10,
                z: 50
              }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredTech(tech.name)}
              onHoverEnd={() => setHoveredTech(null)}
              className="relative group cursor-pointer"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />

              {/* Card */}
              <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:border-blue-300">
                {/* Icon container */}
                <div className="relative mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-xl bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-8 h-8 sm:w-10 sm:h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Floating particles */}
                  {hoveredTech === tech.name && (
                    <>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          y: [-5, 5, -5],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute -top-2 -right-2 w-2 h-2 bg-blue-400 rounded-full"
                      />
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          x: [-3, 3, -3],
                          opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                        className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-purple-400 rounded-full"
                      />
                    </>
                  )}
                </div>

                {/* Tech name */}
                <h3 className="font-semibold text-sm sm:text-base text-foreground group-hover:text-blue-600 transition-colors duration-300">
                  {tech.name}
                </h3>

                {/* Category badge */}
                <span className="inline-block mt-2 px-2 py-1 text-xs bg-blue-50 text-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {tech.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
}
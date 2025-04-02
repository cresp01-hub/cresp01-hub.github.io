// src/components/Projects.js
'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

export default function Projects() {
  const { isDarkMode } = useTheme();
  // Pour Projects.js
const projects = [
  {
    id: 1,
    title: "ATLAS VOTE GATE",
    description: "Système de vote national en tant qu'application web sécurisée et évolutive. Implémentation d'un pipeline DevOps complet pour le développement et le déploiement.",
    image: "/projects/atlas-vote.jpg",
    technologies: ["Spring Boot", "Angular", "MySQL", "Docker", "Jenkins", "CI/CD"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "EconoPortal",
    description: "Application RH complète développée lors d'un stage chez ECONOCOM MAROC. Gestion des congés, des utilisateurs, des documents et des formations.",
    image: "/projects/econoportal.jpg",
    technologies: ["Angular", "Spring Boot", "Bootstrap", "Agile", "Git"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Gestion des Stages Professionnels",
    description: "Plateforme de gestion des stages professionnels (PFA, PFE) permettant le suivi et l'organisation des stages académiques.",
    image: "/projects/stages.jpg",
    technologies: ["Spring Boot", "Angular", "MySQL", "REST API"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Système Expert",
    description: "Système d'aide à la décision pour le choix des langages de programmation selon les besoins des clients, basé sur des structures de données avancées.",
    image: "/projects/systeme-expert.jpg",
    technologies: ["C++", "Graphes", "Arbres", "Algorithmes"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 5,
    title: "Application de Gestion de Rendez-vous",
    description: "Développée lors d'un stage chez ACTUARIA GLOBAL, cette application back-end permet la gestion efficace des rendez-vous.",
    image: "/projects/rendez-vous.jpg",
    technologies: ["Spring Boot", "JPA", "Git"],
    githubUrl: "#",
    liveUrl: "#",
  }
];
  return (
    <section id="projects" className={`py-24 transition-colors duration-300 ${isDarkMode ? 'bg-[#0F0F0F]' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${
            isDarkMode 
              ? 'text-white' 
              : 'bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-500'
          }`}>
            Mes Projets
          </h2>
          <p className={`text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300`}>
            Découvrez les projets sur lesquels j'ai travaillé, démontrant mes compétences en développement web et logiciel
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-600/10 transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-[#1A1A1A] border-[#333333]' 
                  : 'bg-gray-100 border-gray-200'
              } border`}
            >
              <motion.div 
                className={`h-48 w-full relative transition-colors duration-300 ${
                  isDarkMode ? 'bg-[#252525]' : 'bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Remplacer par vos vraies images quand disponibles */}
                <div className={`absolute inset-0 flex items-center justify-center transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Image du projet
                </div>
                {/* Décommentez quand vous aurez les images
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                */}
              </motion.div>
              
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`text-sm mb-4 line-clamp-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-700'
                }`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex} 
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(147, 51, 234, 0.1)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`text-xs px-2 py-1 rounded-md transition-colors duration-300 ${
                        isDarkMode 
                          ? 'bg-[#252525] text-purple-400' 
                          : 'bg-gray-200 text-purple-600'
                      }`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <motion.a 
                    href={project.liveUrl} 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="text-sm px-4 py-2 w-full text-center rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:shadow-lg hover:shadow-purple-600/20 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir le projet
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
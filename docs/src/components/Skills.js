// src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  // Pour Skills.js
const skillGroups = [
  {
    title: "Front-end",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "HTML/CSS", icon: "html" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ]
  },
  {
    title: "Back-end",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Firebase", icon: "firebase" },
    ]
  },
  {
    title: "Outils & Méthodes",
    skills: [
      { name: "Git & GitHub", icon: "github" },
      { name: "VS Code", icon: "vscode" },
      { name: "Responsive Design", icon: "responsive" },
      { name: "Jest", icon: "jest" },
      { name: "CI/CD", icon: "cicd" },
    ]
  }
];
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  // Pour simplifier, nous utiliserons un texte pour les icônes
  const getIconPlaceholder = (iconName) => {
    return <div className="w-6 h-6 text-amber-500 flex items-center justify-center">{iconName[0].toUpperCase()}</div>;
  };

  return (
    <section id="skills" className="py-24 bg-[#0F0F0F]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Mes Compétences
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Un aperçu des technologies et outils que je maîtrise pour créer des applications web performantes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div 
              key={groupIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#121212] border border-[#333333] rounded-xl p-6 hover:shadow-lg hover:shadow-amber-700/10 transition-all"
            >
              <h3 className="text-xl font-semibold mb-6 text-white relative inline-block">
                {group.title}
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + groupIndex * 0.1 }}
                  className="absolute bottom-0 left-0 h-0.5 bg-amber-500 transform"
                ></motion.span>
              </h3>

              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {group.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    variants={itemVariants} 
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(26, 26, 26, 0.7)" }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 p-2 rounded-lg transition-all"
                  >
                    {getIconPlaceholder(skill.icon)}
                    <span className="text-gray-200">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Section compétences supplémentaires */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-white relative inline-block">
              Autres Technologies
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="absolute bottom-0 left-0 h-0.5 bg-amber-500 transform"
              ></motion.span>
            </h3>
          </div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {["Docker", "AWS", "GraphQL", "Redux", "Figma", "Sass", "WebSockets", "PWA", "SEO", "UI/UX"].map((tech, index) => (
              <motion.span 
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, color: "#F59E0B", borderColor: "rgba(245, 158, 11, 0.5)" }}
                className="px-4 py-2 bg-[#1A1A1A] border border-[#333333] rounded-lg text-gray-300 transition-all"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
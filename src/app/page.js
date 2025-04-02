'use client' 
import Image from "next/image";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import BackgroundAnimation from '../components/BackgroundAnimation';
import { motion } from 'framer-motion';
import { ThemeProvider, useTheme } from '../components/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';

// Composant interne qui utilise useTheme
function MainContent() {
  const { isDarkMode } = useTheme();
  
  // Variantes pour animations staggered
  const navVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${isDarkMode ? 'bg-[#0F0F0F] text-white' : 'bg-white text-gray-800'} font-[family-name:var(--font-geist-sans)]`}>
      <BackgroundAnimation />
      
      {/* Header / Navigation */}
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${isDarkMode ? 'bg-[#121212]/80 border-[#2A2A2A]' : 'bg-white/80 border-gray-200'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400"
          >
            Mosaab Lachhab
          </motion.div>
          
          <div className="flex items-center gap-6">
            <motion.nav 
              variants={navVariants}
              initial="hidden"
              animate="visible"
              className="hidden md:flex gap-8"
            >
              <motion.a 
                variants={navItemVariants} 
                href="#about" 
                className={`relative py-2 transition-colors after:absolute after:w-0 after:h-0.5 after:bg-purple-500 after:bottom-0 after:left-0 hover:after:w-full after:transition-all ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                À propos
              </motion.a>
              <motion.a 
                variants={navItemVariants} 
                href="#projects" 
                className={`relative py-2 transition-colors after:absolute after:w-0 after:h-0.5 after:bg-purple-500 after:bottom-0 after:left-0 hover:after:w-full after:transition-all ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Projets
              </motion.a>
              <motion.a 
                variants={navItemVariants} 
                href="#skills" 
                className={`relative py-2 transition-colors after:absolute after:w-0 after:h-0.5 after:bg-purple-500 after:bottom-0 after:left-0 hover:after:w-full after:transition-all ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Compétences
              </motion.a>
              <motion.a 
                variants={navItemVariants} 
                href="#contact" 
                className={`relative py-2 transition-colors after:absolute after:w-0 after:h-0.5 after:bg-purple-500 after:bottom-0 after:left-0 hover:after:w-full after:transition-all ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Contact
              </motion.a>
            </motion.nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 min-h-[90vh] flex items-center transition-colors duration-300">
        <div className="w-full py-20 flex flex-col items-center md:flex-row md:justify-between">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <motion.h1 
              className={`text-4xl md:text-6xl font-bold mb-6 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Bonjour, je suis{" "}
              <motion.span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400 inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Mosaab Lachhab
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Développeur Web | Designer | Créateur
            </motion.p>
            
            <motion.div 
              className="flex gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <motion.a 
                href="#contact" 
                whileHover={{ y: -5, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-purple-600/20 transition-all"
              >
                Me contacter
              </motion.a>
              <motion.a 
                href="#projects" 
                whileHover={{ y: -5, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`px-8 py-3 rounded-lg border transition-all ${
                  isDarkMode 
                    ? 'bg-[#1A1A1A] border-[#333333] text-gray-300 hover:bg-[#2A2A2A]' 
                    : 'bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200'
                } font-medium hover:shadow-lg`}
              >
                Voir mes projets
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-16 md:mt-0 md:w-2/5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              type: "spring",
              stiffness: 100 
            }}
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
              className={`w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-purple-600 p-1 shadow-xl hover:shadow-2xl hover:shadow-purple-600/20 transition-all`}
            >
              <div className={`w-full h-full rounded-full overflow-hidden relative transition-colors duration-300 ${
                isDarkMode ? 'bg-[#1A1A1A]' : 'bg-white'
              }`}>
                <Image
                  src="/profile.png"
                  alt="Mosaab Lachhab"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Les autres sections */}
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

// Composant principal qui fournit le ThemeProvider
export default function Home() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}
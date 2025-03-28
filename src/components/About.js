// src/components/About.js
'use client'
// ... rest of code remains the same ...
import { motion } from 'framer-motion';

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24 bg-[#121212]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            À propos de moi
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ingénieur logiciel passionné par la création d'expériences web innovantes et performantes.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Colonne gauche avec image - style modernisé */}
          <motion.div 
            className="w-full md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className="w-64 h-64 mx-auto bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-2xl shadow-lg shadow-amber-700/10 p-4 border border-[#333333]"
              whileHover={{ rotate: 3, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Image secondaire */}
              <div className="w-full h-full bg-[#1E1E1E] rounded-xl overflow-hidden relative flex items-center justify-center text-gray-600">
                Image secondaire
              </div>
            </motion.div>
          </motion.div>
          
          {/* Colonne droite avec texte - style modernisé */}
          <motion.div 
            className="w-full md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Qui suis-je?</h3>
            
            <div className="space-y-4 text-gray-300">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Bienvenue sur mon portfolio! Je suis <span className="font-semibold text-amber-500">Mosaab Lachhab</span>, ingénieur logiciel spécialisé en développement web avec une passion pour la création de solutions numériques élégantes et fonctionnelles.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Mon expertise couvre l'ensemble du spectre du développement web, du front-end réactif au back-end robuste et diverses bases de données. J'accorde une importance particulière à l'expérience utilisateur, à la performance et à l'accessibilité dans chacun de mes projets.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Au-delà du code, je m'intéresse activement aux dernières tendances technologiques, à l'architecture logicielle et à l'optimisation des processus de développement. Je suis constamment en quête d'apprentissage et toujours prêt à relever de nouveaux défis techniques pour créer des applications web modernes et évolutives.
              </motion.p>
            </div>
            
            <motion.div 
              className="mt-8 flex gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.a 
                href="#projects" 
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-lg hover:shadow-lg hover:shadow-amber-600/20 transition-all"
              >
                Voir mes projets
              </motion.a>
              <motion.a 
                href="/cv.pdf" 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(217, 119, 6, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 border border-amber-700/30 text-amber-500 rounded-lg hover:bg-amber-900/20 transition-all"
                download
              >
                Télécharger mon CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
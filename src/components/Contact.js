// src/components/Contact.js
'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

export default function Contact() {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formState, setFormState] = useState({
    submitted: false,
    submitting: false,
    error: null
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ ...formState, submitting: true });
    
    // Simuler l'envoi du formulaire (remplacer par votre logique d'envoi réelle)
    try {
      // Ici, vous ajouterez votre logique d'envoi d'email 
      // avec EmailJS, Formspree, API personnalisée, etc.
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormState({
        submitted: true,
        submitting: false,
        error: null
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setTimeout(() => {
        setFormState(prev => ({ ...prev, submitted: false }));
      }, 5000);
    } catch (error) {
      setFormState({
        ...formState,
        submitting: false,
        error: "Une erreur s'est produite. Veuillez réessayer."
      });
    }
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className={`py-24 transition-colors duration-300 ${isDarkMode ? 'bg-[#0F0F0F]' : 'bg-white'}`}>
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
            Contactez-moi
          </h2>
          <p className={`text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300`}>
            Vous avez un projet en tête ou souhaitez discuter d'une opportunité ? N'hésitez pas à me contacter !
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
          {/* Colonne gauche - Informations de contact */}
          <motion.div 
            className="w-full md:w-1/3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={`rounded-xl p-6 sticky top-28 transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-[#121212] border-[#333333]' 
                : 'bg-gray-100 border-gray-200'
            } border`}>
              <h3 className={`text-xl font-semibold mb-6 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Mes coordonnées</h3>
              
              <motion.ul 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.li variants={itemVariants} className="flex items-center gap-4">
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-purple-400/10 text-purple-400' 
                      : 'bg-purple-500/10 text-purple-500'
                  }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-8.486 8.486l4.243 4.243 4.243-4.243a6 6 0 000-8.486zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className={`text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>Adresse</p>
                    <p className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-200' : 'text-gray-700'
                    }`}>Rabat, Maroc</p>
                  </div>
                </motion.li>
                
                <motion.li variants={itemVariants} className="flex items-center gap-4">
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-purple-400/10 text-purple-400' 
                      : 'bg-purple-500/10 text-purple-500'
                  }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className={`text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>Email</p>
                    <p className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-200' : 'text-gray-700'
                    }`}>mosaablachhab06@gmail.com</p>
                  </div>
                </motion.li>
                
                <motion.li variants={itemVariants} className="flex items-center gap-4">
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-purple-400/10 text-purple-400' 
                      : 'bg-purple-500/10 text-purple-500'
                  }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className={`text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>Téléphone</p>
                    <p className={`transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-200' : 'text-gray-700'
                    }`}>+212 645556569</p>
                  </div>
                </motion.li>
              </motion.ul>
              
              <div className={`mt-8 border-t pt-6 transition-colors duration-300 ${
                isDarkMode ? 'border-[#2a2a2a]' : 'border-gray-200'
              }`}>
                <p className={`text-sm mb-4 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>Suivez-moi sur les réseaux</p>
                <div className="flex gap-4">
                  <motion.a 
                    href="https://www.linkedin.com/in/mosaab-lachhab-06a7a0254/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className={`w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-[#1E1E1E] text-gray-400 hover:text-purple-400' 
                        : 'bg-gray-200 text-gray-600 hover:text-purple-500'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="https://github.com/cresp01-hub" 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className={`w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-[#1E1E1E] text-gray-400 hover:text-purple-400' 
                        : 'bg-gray-200 text-gray-600 hover:text-purple-500'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Colonne droite - Formulaire de contact */}
          <motion.div 
            className="w-full md:w-2/3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {formState.submitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 p-8 rounded-xl text-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className={`text-2xl font-semibold mb-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Message envoyé!</h3>
                <p className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Merci de m'avoir contacté. Je vous répondrai dans les plus brefs délais.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className={`rounded-xl p-8 transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-[#121212] border-[#333333]' 
                  : 'bg-gray-100 border-gray-200'
              } border`}>
                <h3 className={`text-xl font-semibold mb-6 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Envoyez-moi un message</h3>
                
                <motion.div 
                  className="space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div variants={itemVariants}>
                    <label className={`block text-sm mb-2 transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`} htmlFor="name">
                      Nom complet
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="off"
                      className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-colors duration-300 ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#333333] text-white' 
                          : 'bg-white border-gray-300 text-gray-800'
                      }`}
                      placeholder="Votre nom"
                      required
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label className={`block text-sm mb-2 transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`} htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="new-password"
                      data-form-type="other"
                      className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-colors duration-300 ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#333333] text-white [&:-webkit-autofill]:!bg-[#1A1A1A] [&:-webkit-autofill]:!text-white [&:-webkit-autofill]:!border-[#333333] [&:-webkit-autofill]:!box-shadow-none [&:-webkit-autofill]:!-webkit-text-fill-color-white' 
                          : 'bg-white border-gray-300 text-gray-800'
                      }`}
                      placeholder="votre@email.com"
                      required
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label className={`block text-sm mb-2 transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`} htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-colors duration-300 resize-none ${
                        isDarkMode 
                          ? 'bg-[#1A1A1A] border-[#333333] text-white' 
                          : 'bg-white border-gray-300 text-gray-800'
                      }`}
                      placeholder="Votre message ici..."
                      required
                    />
                  </motion.div>
                  
                  {formState.error && (
                    <motion.div 
                      variants={itemVariants}
                      className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-800 dark:text-red-200 text-sm transition-colors duration-300"
                    >
                      {formState.error}
                    </motion.div>
                  )}
                  
                  <motion.div variants={itemVariants} className="pt-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={formState.submitting}
                      className={`w-full md:w-auto px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-purple-600/20 transition-all ${formState.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      type="submit"
                    >
                      {formState.submitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Envoi en cours...
                        </span>
                      ) : (
                        'Envoyer le message'
                      )}
                    </motion.button>
                  </motion.div>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
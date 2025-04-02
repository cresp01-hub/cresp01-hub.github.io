'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

export default function BackgroundAnimation() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div 
        className={`absolute w-[600px] h-[600px] rounded-full ${
          isDarkMode ? 'bg-purple-600/10' : 'bg-purple-400/10'
        } blur-[120px] opacity-30`}
        animate={{
          x: ['-10%', '15%', '-10%'],
          y: ['5%', '25%', '5%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className={`absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full ${
          isDarkMode ? 'bg-purple-400/10' : 'bg-purple-300/10'
        } blur-[100px] opacity-30`}
        animate={{
          x: ['10%', '-15%', '10%'],
          y: ['-5%', '15%', '-5%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
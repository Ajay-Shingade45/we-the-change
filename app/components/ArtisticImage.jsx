'use client';

import { motion } from 'framer-motion';

export default function ArtisticImage({ program, className = "", onClick }) {
  // AI-generated style images based on program
  const getArtisticImage = (program) => {
    const images = {
      'paint-me-red': {
        gradient: 'from-red-500 via-pink-500 to-red-700',
        icon: '🎨',
        title: 'Art & Creativity',
        description: 'Breaking taboos through art'
      },
      'red-waste': {
        gradient: 'from-teal-500 via-green-500 to-teal-700',
        icon: '♻️',
        title: 'Eco Solutions',
        description: 'Sustainable waste management'
      },
      'train-the-trainer': {
        gradient: 'from-yellow-500 via-orange-500 to-yellow-700',
        icon: '🌟',
        title: 'Leadership Training',
        description: 'Empowering community leaders'
      },
      'project-sachet': {
        gradient: 'from-blue-500 via-teal-500 to-blue-700',
        icon: '💧',
        title: 'Health Access',
        description: 'Making hygiene accessible'
      }
    };
    
    return images[program] || images['paint-me-red'];
  };

  const imageData = getArtisticImage(program);

  return (
    <motion.div 
      className={`relative overflow-hidden group cursor-pointer ${className}`} 
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Animated gradient background */}
      <div className={`w-full h-full bg-gradient-to-br ${imageData.gradient} relative overflow-hidden`}>
        {/* Animated floating elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
          <motion.div
            className="text-6xl mb-4"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {imageData.icon}
          </motion.div>
          
          <motion.h3 
            className="text-2xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {imageData.title}
          </motion.h3>
          
          <motion.p 
            className="text-white/80 text-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {imageData.description}
          </motion.p>
        </div>

        {/* Animated border */}
        <motion.div
          className="absolute inset-0 border-2 border-white/30 rounded-lg"
          animate={{ borderColor: ['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.8)', 'rgba(255,255,255,0.3)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
    </motion.div>
  );
}

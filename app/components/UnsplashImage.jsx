'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { trackDownload } from '../utils/unsplash';

export default function UnsplashImageComponent({ image, className = "", onClick }) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = async () => {
    setIsLoading(false);
    // Track download for Unsplash compliance
    await trackDownload(image.links.download_location);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className={`bg-gradient-to-br from-primary/20 to-teal/20 flex items-center justify-center ${className}`}>
        <div className="text-center p-4">
          <div className="text-4xl mb-2">⚠️</div>
          <p className="text-muted text-sm">Image unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className={`relative overflow-hidden group cursor-pointer ${className}`} 
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-teal/20 flex items-center justify-center z-10">
          <div className="text-center p-8">
            {/* Animated spinning loader */}
            <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white/80 text-sm">Loading beautiful image...</p>
          </div>
        </div>
      )}
      
      <motion.img
        src={image.urls.regular}
        alt={image.alt_description || 'Program image'}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        onLoad={handleImageLoad}
        onError={handleImageError}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-transparent group-hover:from-black/20 transition-all duration-500"></div>
      
      {/* Attribution with smooth animation */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4"
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <motion.p 
          className="text-white text-xs"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          Photo by{' '}
          <a 
            href={`https://unsplash.com/@${image.user.username}?utm_source=we-the-change&utm_medium=referral`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline transition-all duration-200 hover:text-coral"
          >
            {image.user.name}
          </a>{' '}
          on{' '}
          <a 
            href="https://unsplash.com/?utm_source=we-the-change&utm_medium=referral"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline transition-all duration-200 hover:text-teal"
          >
            Unsplash
          </a>
        </motion.p>
      </motion.div>

      {/* Subtle border animation on hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-lg transition-all duration-300"></div>
    </motion.div>
  );
}
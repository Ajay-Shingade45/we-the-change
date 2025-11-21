'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function ProgramCard({ item, index }) {
  const gradientClasses = {
    coral: 'from-coral/20 to-coral/5',
    teal: 'from-teal/20 to-teal/5'
  };

  const iconBgClasses = {
    coral: 'bg-coral/20 text-coral w-24 h-24', // Increased size and opacity
    teal: 'bg-teal/20 text-teal w-24 h-24'
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="group relative card-enhanced card-primary hover:shadow-glow overflow-hidden h-full"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClasses[item.gradient]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Content */}
      <div className="relative z-10 p-8 flex flex-col h-full">
        {/* Icon */}
        <div className={`rounded-3xl ${iconBgClasses[item.gradient]} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
          <div className="w-12 h-12"> {/* Increased from w-8 h-8 */}
            {item.icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-primary mb-6 group-hover:text-coral transition-colors duration-300">
          {item.title}
        </h3>

        {/* Summary */}
        <p className="text-gray-700 leading-relaxed mb-8 text-base font-medium flex-grow group-hover:text-gray-600 transition-colors duration-300">
          {item.summary}
        </p>

        {/* Learn More Button */}
        {item.learnMoreLink && (
          <Link
            to={item.learnMoreLink}
            className="inline-flex items-center text-primary font-semibold hover:text-coral transition-colors duration-300 group-hover:translate-x-1 transform transition-transform duration-300 mt-auto"
          >
            Learn More
            <svg 
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transform transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>

      {/* Hover Shadow */}
      <div className="absolute inset-0 rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
           style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
    </motion.div>
  );
}

export default function Programs({ items, className = "" }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className={`py-20 lg:py-32 bg-mixed-vibrant-1 pattern-dots relative overflow-hidden ${className}`}>
      {/* Enhanced Decorative Elements */}
      <div className="decorative-blob blob-pink w-96 h-96 -top-48 -right-48"></div>
      <div className="decorative-blob blob-teal w-64 h-64 -bottom-32 -left-32"></div>
      <div className="decorative-blob blob-purple w-80 h-80 top-1/2 right-1/4"></div>
      <div className="decorative-blob blob-coral w-72 h-72 top-1/3 -left-36"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text-glow mb-6">
            Our Programs
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Comprehensive initiatives designed to create lasting change through education, 
            awareness, and community empowerment.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {items.map((item, index) => (
            <ProgramCard key={item.id} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

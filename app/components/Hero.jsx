'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DonateButton from './DonateButton';

const defaultSpeechBubbles = [
  {
    text: "We never spoke of it.",
    speaker: "grandmother",
    position: { top: "20%", left: "10%" }
  },
  {
    text: "We whispered about it.",
    speaker: "mother", 
    position: { top: "50%", left: "70%" }
  },
  {
    text: "We're changing it.",
    speaker: "daughter",
    position: { top: "75%", left: "20%" }
  }
];

export default function Hero({ 
  showSpeechBubbles = true, 
  heroImage,
  heroImageAlt = "Community members working together for change"
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const bubbleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.6,
        delay: 0.8
      }
    }
  };

  return (
    <section className="bg-bg py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <motion.div 
          className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Copy */}
          <motion.div 
            className="space-y-8 order-2 lg:order-1"
            variants={itemVariants}
          >
            <div className="space-y-6">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary"
                variants={itemVariants}
              >
                Breaking the Silence
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-muted leading-relaxed max-w-prose"
                variants={itemVariants}
              >
                For generations, women have carried the weight of unspoken struggles. 
                Today, we're creating a movement where every voice matters, every story 
                is heard, and every woman can stand in her power.
              </motion.p>
            </div>

            {/* CTAs - Mobile optimized */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gradient-primary text-white rounded-full px-8 md:px-10 py-4 md:py-5 font-bold text-base md:text-lg hover:scale-105 hover:shadow-glow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/30 touch-manipulation min-h-[44px] group"
              >
                <span>Join the Movement</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <DonateButton className="inline-flex items-center justify-center bg-white text-primary border-2 border-primary/20 shadow-md rounded-full px-8 md:px-10 py-4 md:py-5 font-bold text-base md:text-lg hover:bg-primary hover:text-white hover:scale-105 hover:shadow-glow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 touch-manipulation min-h-[44px]">
                Donate for Dignity
              </DonateButton>
            </motion.div>

            {/* Stats Preview */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8 border-t border-muted/20"
              variants={itemVariants}
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-teal">2,500+</div>
                <div className="text-sm text-muted">Women Reached</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-coral">150+</div>
                <div className="text-sm text-muted">Leaders Trained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-mustard">12</div>
                <div className="text-sm text-muted">States Impacted</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image with Speech Bubbles */}
          <motion.div 
            className="relative order-1 lg:order-2"
            variants={itemVariants}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {heroImage ? (
                <img
                  src={heroImage}
                  alt={heroImageAlt}
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              ) : (
                <div className="w-full h-[500px] lg:h-[600px] bg-gradient-to-br from-primary/20 via-teal/20 to-coral/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Community Together</h3>
                    <p className="text-muted">Building bridges, creating change</p>
                  </div>
                </div>
              )}
              
              {/* Speech Bubbles */}
              {showSpeechBubbles && (
                <div className="absolute inset-0 pointer-events-none">
                  {defaultSpeechBubbles.map((bubble, index) => (
                    <motion.div
                      key={index}
                      className="absolute"
                      style={bubble.position}
                      variants={bubbleVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <div className="relative">
                        {/* Speech Bubble */}
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg border border-white/20 max-w-[200px]">
                          <p className="text-sm font-medium text-primary leading-relaxed">
                            "{bubble.text}"
                          </p>
                          <p className="text-xs text-muted mt-1 italic">
                            — {bubble.speaker}
                          </p>
                        </div>
                        
                        {/* Speech Bubble Tail */}
                        <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white/95"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-coral/10 rounded-full blur-xl"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade, Parallax } from 'swiper/modules';
import { FaHeart, FaUsers, FaHandHoldingHeart } from 'react-icons/fa';
import { IoSparkles } from 'react-icons/io5';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import DonateButton from './DonateButton';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/parallax';

export default function ImpactSlider({ className = '' }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/images/image1.jpg',
      title: 'Breaking the Silence',
      subtitle: 'We never spoke of it. We whispered about it. We\'re changing it.',
      statLabel1: 'Pads Distributed',
      statValue1: '385K+',
      statLabel2: 'Women Educated',
      statValue2: '85K+',
      statLabel3: 'Trainers',
      statValue3: '200+',
    },
    {
      id: 2,
      image: '/images/image2.jpg',
      title: 'Empowering Communities',
      subtitle: 'Training local leaders to become menstrual health advocates',
      statLabel1: 'States Reached',
      statValue1: '15+',
      statLabel2: 'Communities',
      statValue2: '250+',
      statLabel3: 'Workshops',
      statValue3: '500+',
    },
    {
      id: 3,
      image: '/images/image3.jpg',
      title: 'Sustainable Change',
      subtitle: 'Field work transforming rural communities across India and Africa',
      statLabel1: 'CO2 Avoided',
      statValue1: '11.55T',
      statLabel2: 'Rural Villages',
      statValue2: '180+',
      statLabel3: 'Years Active',
      statValue3: '8+',
    },
    {
      id: 4,
      image: '/images/image5.jpg',
      title: 'Youth Leadership',
      subtitle: 'Young leaders driving change in their communities',
      statLabel1: 'Youth Trained',
      statValue1: '3,500+',
      statLabel2: 'Schools',
      statValue2: '120+',
      statLabel3: 'Programs',
      statValue3: '4',
    },
    {
      id: 5,
      image: '/images/image6.jpg',
      title: 'Global Impact',
      subtitle: 'Expanding our mission to empower women across Africa',
      statLabel1: 'Countries',
      statValue1: '2',
      statLabel2: 'International',
      statValue2: 'Kenya',
      statLabel3: 'Growing',
      statValue3: '∞',
    },
  ];

  return (
    <section className={`relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade, Parallax]}
        effect="fade"
        speed={1000}
        parallax={true}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination-custom',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            {/* Background Image with Parallax */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ 
                backgroundImage: `url(${slide.image})`,
              }}
              data-swiper-parallax="-23%"
            >
              {/* Dark overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center text-center p-4">
              <div className="max-w-4xl mx-auto">
                {/* Title with parallax */}
                <motion.h2
                  data-swiper-parallax="-300"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {slide.title}
                </motion.h2>

                {/* Subtitle with parallax */}
                <motion.p
                  data-swiper-parallax="-200"
                  className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {slide.subtitle}
                </motion.p>

                {/* CTAs */}
                <motion.div
                  data-swiper-parallax="-100"
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Link
                    to="/contact"
                    className="group bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-glow-lg text-sm sm:text-base lg:text-lg flex items-center justify-center gap-2"
                  >
                    <FaUsers className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Join the Movement
                  </Link>
                  <DonateButton
                    className="group gradient-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-glow-lg text-sm sm:text-base lg:text-lg flex items-center justify-center gap-2"
                    amount={500}
                  >
                    <FaHeart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Donate for Dignity
                  </DonateButton>
                </motion.div>

                {/* Impact Statistics */}
                <motion.div
                  data-swiper-parallax="-50"
                  className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="glass px-4 sm:px-6 py-3 sm:py-4 rounded-xl backdrop-blur-md">
                    <div className="text-2xl sm:text-3xl font-bold">{slide.statValue1}</div>
                    <div className="text-xs sm:text-sm opacity-90">{slide.statLabel1}</div>
                  </div>
                  <div className="glass px-4 sm:px-6 py-3 sm:py-4 rounded-xl backdrop-blur-md">
                    <div className="text-2xl sm:text-3xl font-bold">{slide.statValue2}</div>
                    <div className="text-xs sm:text-sm opacity-90">{slide.statLabel2}</div>
                  </div>
                  <div className="glass px-4 sm:px-6 py-3 sm:py-4 rounded-xl backdrop-blur-md">
                    <div className="text-2xl sm:text-3xl font-bold">{slide.statValue3}</div>
                    <div className="text-xs sm:text-sm opacity-90">{slide.statLabel3}</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <button
        className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <HiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
      </button>
      <button
        className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <HiChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
      </button>

      {/* Custom Pagination */}
      <div className="swiper-pagination-custom absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2"></div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 z-10 hidden lg:block">
        <IoSparkles className="w-12 h-12 text-white/30 animate-pulse-slow" />
      </div>
      <div className="absolute bottom-20 left-10 z-10 hidden lg:block">
        <FaHandHoldingHeart className="w-10 h-10 text-white/30 animate-float" />
      </div>

      {/* Custom Swiper Pagination Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          width: 32px;
          border-radius: 6px;
          background: #FFFFFF;
        }
      `}} />
    </section>
  );
}

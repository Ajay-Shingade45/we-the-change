'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Zoom, Thumbs, FreeMode } from 'swiper/modules';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { FiMapPin } from 'react-icons/fi';
import DonateButton from '../components/DonateButton';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: "/images/image1.jpg",
      alt: "Menstrual Health Workshop in Delhi",
      category: "Workshops",
      location: "Delhi",
      description: "Interactive workshop on menstrual health and hygiene management"
    },
    {
      id: 2,
      src: "/images/image2.jpg",
      alt: "Community Training in Mumbai",
      category: "Training",
      location: "Mumbai",
      description: "Train The Trainer program for community educators"
    },
    {
      id: 3,
      src: "/images/image3.jpg",
      alt: "Field Visit to Rural Rajasthan",
      category: "Field Work",
      location: "Rajasthan",
      description: "Distributing menstrual hygiene kits in rural communities"
    },
    {
      id: 4,
      src: "/images/image4.jpg",
      alt: "Awareness Session in Assam",
      category: "Awareness",
      location: "Assam",
      description: "Breaking taboos through open conversations about menstruation"
    },
    {
      id: 5,
      src: "/images/image5.jpg",
      alt: "Youth Leadership Program",
      category: "Youth",
      location: "Mumbai",
      description: "Empowering young leaders to become menstrual health advocates"
    },
    {
      id: 6,
      src: "/images/image6.jpg",
      alt: "International Workshop in Kenya",
      category: "International",
      location: "Kenya",
      description: "Expanding our impact to communities in East Africa"
    },
    {
      id: 7,
      src: "/images/image7.jpg",
      alt: "Environmental Awareness Campaign",
      category: "Environment",
      location: "Delhi",
      description: "Promoting sustainable menstrual waste management"
    },
    {
      id: 8,
      src: "/images/image8.jpg",
      alt: "Community Outreach in West Bengal",
      category: "Outreach",
      location: "West Bengal",
      description: "Reaching marginalized communities with essential health education"
    },
    {
      id: 9,
      src: "/images/image10.JPG",
      alt: "Product Distribution in Jharkhand",
      category: "Distribution",
      location: "Jharkhand",
      description: "Making menstrual hygiene products accessible to all"
    },
    {
      id: 10,
      src: "/images/image11.JPG",
      alt: "Women's Empowerment Session",
      category: "Workshops",
      location: "Community Centers",
      description: "Building confidence and knowledge among women"
    },
    {
      id: 11,
      src: "/images/image12.JPG",
      alt: "Rural Distribution Program",
      category: "Distribution",
      location: "Rural Communities",
      description: "Ensuring access to menstrual hygiene products"
    },
    {
      id: 12,
      src: "/images/image13.jpg",
      alt: "Training Workshop",
      category: "Training",
      location: "Community Centers",
      description: "Building capacity among local educators"
    },
    {
      id: 13,
      src: "/images/image14.jpg",
      alt: "Awareness Campaign",
      category: "Awareness",
      location: "Urban Areas",
      description: "Spreading awareness about menstrual health"
    },
    {
      id: 14,
      src: "/images/image15.jpg",
      alt: "Field Work Activities",
      category: "Field Work",
      location: "Rural India",
      description: "Direct community engagement and support"
    },
    {
      id: 15,
      src: "/images/image16.jpg",
      alt: "Youth Engagement Program",
      category: "Youth",
      location: "Schools",
      description: "Engaging young people in menstrual health advocacy"
    },
    {
      id: 16,
      src: "/images/image17.JPG",
      alt: "Community Training Session",
      category: "Training",
      location: "Community Centers",
      description: "Empowering community members with knowledge"
    },
    {
      id: 17,
      src: "/images/image18.JPG",
      alt: "Workshop Activities",
      category: "Workshops",
      location: "Various Locations",
      description: "Interactive learning sessions on menstrual health"
    },
    {
      id: 18,
      src: "/images/image19.JPG",
      alt: "Outreach Program",
      category: "Outreach",
      location: "Remote Areas",
      description: "Reaching underserved communities"
    },
    {
      id: 19,
      src: "/images/image20.JPG",
      alt: "Environmental Initiative",
      category: "Environment",
      location: "Multiple States",
      description: "Promoting sustainable menstrual hygiene practices"
    },
    {
      id: 20,
      src: "/images/image21.JPG",
      alt: "Training Program",
      category: "Training",
      location: "Educational Institutions",
      description: "Building capacity in menstrual health education"
    },
    {
      id: 21,
      src: "/images/image22.JPG",
      alt: "Community Workshop",
      category: "Workshops",
      location: "Community Centers",
      description: "Engaging communities in menstrual health discussions"
    },
    {
      id: 22,
      src: "/images/image23.JPG",
      alt: "Field Activities",
      category: "Field Work",
      location: "Rural Communities",
      description: "Direct implementation of menstrual health programs"
    },
    {
      id: 23,
      src: "/images/image24.JPG",
      alt: "Awareness Program",
      category: "Awareness",
      location: "Various Locations",
      description: "Breaking taboos and spreading awareness"
    },
    {
      id: 24,
      src: "/images/image25.JPG",
      alt: "Distribution Initiative",
      category: "Distribution",
      location: "Underserved Areas",
      description: "Ensuring access to menstrual hygiene products"
    },
    {
      id: 25,
      src: "/images/image28.png",
      alt: "Program Documentation",
      category: "Workshops",
      location: "Program Sites",
      description: "Capturing moments of impact and change"
    },
    {
      id: 26,
      src: "/images/image31.jpg",
      alt: "Community Engagement",
      category: "Outreach",
      location: "Community Centers",
      description: "Building strong community connections"
    },
    {
      id: 27,
      src: "/images/image32.jpeg",
      alt: "Training Session",
      category: "Training",
      location: "Educational Centers",
      description: "Capacity building for menstrual health educators"
    },
    {
      id: 28,
      src: "/images/image33.jpeg",
      alt: "Workshop Activities",
      category: "Workshops",
      location: "Community Spaces",
      description: "Interactive learning and skill building"
    },
    {
      id: 29,
      src: "/images/image35.jpeg",
      alt: "Field Implementation",
      category: "Field Work",
      location: "Rural Areas",
      description: "Direct program implementation in communities"
    },
    {
      id: 30,
      src: "/images/image36.jpeg",
      alt: "Awareness Campaign",
      category: "Awareness",
      location: "Public Spaces",
      description: "Public awareness about menstrual health"
    },
    {
      id: 31,
      src: "/images/image37.jpg",
      alt: "Community Training",
      category: "Training",
      location: "Community Centers",
      description: "Building local capacity for menstrual health"
    },
    {
      id: 32,
      src: "/images/image38.jpg",
      alt: "Workshop Session",
      category: "Workshops",
      location: "Educational Institutions",
      description: "Educational workshops on menstrual hygiene"
    },
    {
      id: 33,
      src: "/images/image39.jpg",
      alt: "Outreach Activities",
      category: "Outreach",
      location: "Remote Communities",
      description: "Reaching the most underserved populations"
    },
    {
      id: 34,
      src: "/images/image40.jpg",
      alt: "Field Work Program",
      category: "Field Work",
      location: "Rural India",
      description: "Direct community engagement and support"
    },
    {
      id: 35,
      src: "/images/image41.jpg",
      alt: "Training Workshop",
      category: "Training",
      location: "Community Centers",
      description: "Empowering local educators and advocates"
    },
    {
      id: 36,
      src: "/images/image42.jpg",
      alt: "Awareness Initiative",
      category: "Awareness",
      location: "Various Locations",
      description: "Spreading awareness and breaking taboos"
    },
    {
      id: 37,
      src: "/images/image43.JPG",
      alt: "Community Program",
      category: "Outreach",
      location: "Community Centers",
      description: "Community-based menstrual health programs"
    },
    {
      id: 38,
      src: "/images/image44.JPG",
      alt: "Training Session",
      category: "Training",
      location: "Educational Centers",
      description: "Building capacity in menstrual health education"
    },
    {
      id: 39,
      src: "/images/image45.jpeg",
      alt: "Workshop Activities",
      category: "Workshops",
      location: "Community Spaces",
      description: "Interactive learning and community engagement"
    },
    {
      id: 40,
      src: "/images/image46.JPG",
      alt: "Field Activities",
      category: "Field Work",
      location: "Rural Communities",
      description: "Direct implementation and community support"
    },
    {
      id: 41,
      src: "/images/image47.JPG",
      alt: "Program Implementation",
      category: "Training",
      location: "Program Sites",
      description: "On-ground implementation of menstrual health programs"
    }
  ];

  const categories = ["All", "Workshops", "Training", "Field Work", "Awareness", "Youth", "International", "Environment", "Outreach", "Distribution"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-mixed-vibrant-2 pattern-waves">
      {/* Hero Section */}
          <section className="relative py-20 lg:py-32 overflow-hidden bg-animated-gradient">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-coral/10 to-teal/20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold gradient-text-glow mb-6">
              Gallery
            </h1>
            <p className="text-xl text-gray-700 mb-8 font-medium">
              Moments from our fieldwork, workshops, and community events across India and Africa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeCategory === category
                        ? 'gradient-primary text-white shadow-glow scale-105'
                        : 'bg-white text-dark hover:bg-bg-alt border border-light-gray'
                    }`}
                  >
                    {category}
                  </button>
                ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            layout
          >
            {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.03 }}
                    onClick={() => setSelectedImage(index)}
                  >
                    <div className="relative aspect-square overflow-hidden rounded-3xl bg-light-gray shadow-md group-hover:shadow-glow transition-all duration-300">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-3 py-1 bg-white/20 glass rounded-full text-xs font-semibold">
                              {image.category}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-xs">
                            <FiMapPin className="w-3 h-3" />
                            {image.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Image Modal with Swiper */}
      {selectedImage !== null && (
        <motion.div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="w-full h-full flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full glass-dark text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              <HiX className="w-6 h-6" />
            </button>

            {/* Swiper Lightbox */}
            <div className="w-full max-w-6xl">
              <Swiper
                modules={[Navigation, Pagination, Zoom]}
                initialSlide={selectedImage}
                navigation
                pagination={{ clickable: true }}
                zoom={true}
                className="gallery-lightbox"
              >
                {filteredImages.map((image, idx) => (
                  <SwiperSlide key={image.id}>
                    <div className="flex flex-col items-center">
                      {/* Image */}
                      <div className="swiper-zoom-container mb-6">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="max-h-[70vh] w-auto rounded-2xl"
                        />
                      </div>
                      
                      {/* Image Info */}
                      <div className="glass-dark rounded-2xl p-6 max-w-2xl w-full">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-4 py-2 gradient-primary text-white rounded-full text-sm font-semibold">
                            {image.category}
                          </span>
                          <span className="text-white/80 flex items-center gap-1">
                            <FiMapPin className="w-4 h-4" />
                            {image.location}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {image.alt}
                        </h3>
                        <p className="text-white/70 leading-relaxed">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Custom Lightbox Styles */}
          <style dangerouslySetInnerHTML={{__html: `
            .gallery-lightbox .swiper-button-next,
            .gallery-lightbox .swiper-button-prev {
              color: #FFFFFF !important;
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(10px);
              width: 48px;
              height: 48px;
              border-radius: 50%;
            }
            .gallery-lightbox .swiper-button-next:after,
            .gallery-lightbox .swiper-button-prev:after {
              font-size: 20px !important;
            }
            .gallery-lightbox .swiper-pagination-bullet {
              background: #FFFFFF !important;
            }
          `}} />
        </motion.div>
      )}

      {/* Call to Action */}
      <section className="py-16 lg:py-24 gradient-warm text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Be Part of Our Story
            </h2>
            <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Join us in creating more moments of change and empowerment across communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:scale-105 hover:shadow-glow-lg transition-all duration-300">
                Share Your Story
              </button>
              <DonateButton 
                amount={1000}
                className="px-8 py-4 bg-white/10 glass text-white font-bold rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                Support Our Mission
              </DonateButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}



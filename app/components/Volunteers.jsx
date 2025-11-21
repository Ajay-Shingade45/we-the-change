'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DEFAULT_VOLUNTEERS = [
  { 
    id: 'v1', 
    name: 'Aamna S Qazi', 
    role: 'Menstrual Educator', 
    photo: '/volunteer/Aamna Qazi.webp', 
    description: 'Champions revolutionary menstrual education through innovative partnership between Pink Legal Ibtida and WTC, creating transformative spaces where legal awareness meets menstrual advocacy.' 
  },
  { 
    id: 'v2', 
    name: 'Fatima', 
    role: 'State Lead, Delhi', 
    photo: '/volunteer/Fatima.webp', 
    description: 'Dedicated member for 4.5 years, originally serving as Bihar Lead. Specializes in Menstrual Hygiene Management training, empowering underprivileged women with awareness and resources.' 
  },
  { 
    id: 'v3', 
    name: 'Jeeya Thukral', 
    role: 'Menstrual Trainer', 
    photo: '/volunteer/Jeeya Thukral.webp', 
    description: 'Trained over 3,500 Delhi government school students on menstrual hygiene and gender sensitization. Creates meaningful connections across diverse communities in Hyderabad.' 
  },
  { 
    id: 'v4', 
    name: 'Sana Khan', 
    role: 'Menstrual Educator', 
    photo: '/volunteer/Sana Khan.webp', 
    description: 'Brings powerful dual perspective representing Pink Legal Ibtida partnership. Weaves together menstrual health awareness with legal literacy for comprehensive empowerment.' 
  },
  { 
    id: 'v5', 
    name: 'Hoinunnem Chongloi', 
    role: 'Lead Impact Trainer, Assam', 
    photo: '/volunteer/Hoinunnem Chongloi.webp', 
    description: 'Dynamic leader with years of dedicated service in menstrual hygiene management and waste sustainability across Assam. Successfully led numerous training sessions and rural outreach programs.' 
  },
  { 
    id: 'v6', 
    name: 'Suinila Joseph', 
    role: 'Lead for North-East India', 
    photo: '/volunteer/Suinila Joseph.webp', 
    description: 'Serves as vital bridge connecting WTC\'s central mission to peripheral communities across North-East India. Delivered menstrual hygiene kits during Manipur riots, ensuring critical support reached women in crisis.' 
  },
  { 
    id: 'v7', 
    name: 'Zaheer Alam', 
    role: 'State Lead, Rajasthan', 
    photo: '/volunteer/Zaheer Alam.webp', 
    description: 'State Lead for Rajasthan while working as District Coordinator with ActionAid Association. Spearheads MHHM campaigns across the state, focusing on empowering children and young girls through education and sustainable menstrual health management.' 
  },
];

export default function Volunteers({ items = DEFAULT_VOLUNTEERS }) {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-bg via-bg-alt to-bg">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Our Volunteers
          </h2>
          <p className="text-muted max-w-3xl mx-auto text-lg">
            Meet the dedicated team powering programs on the ground.
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className="pb-12"
        >
          {items.map((volunteer) => (
            <SwiperSlide key={volunteer.id}>
              <motion.div
                className="bg-white rounded-3xl p-6 shadow-md hover:shadow-glow border border-light-gray card-hover h-full"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Photo */}
                <div className="relative mb-5 group">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-md group-hover:border-primary/40 transition-all duration-300">
                    <img 
                      src={volunteer.photo} 
                      alt={volunteer.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                  {/* Decorative circle */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-slow"></div>
                </div>

                {/* Name & Role */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-primary mb-1">{volunteer.name}</h3>
                  <p className="text-sm text-coral font-semibold">{volunteer.role}</p>
                </div>

                {/* Quote Icon */}
                <div className="flex justify-center mb-3">
                  <FaQuoteLeft className="w-5 h-5 text-primary/30" />
                </div>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed text-center line-clamp-4">
                  {volunteer.description}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Swiper Navigation Styles */}
        <style dangerouslySetInnerHTML={{__html: `
          .swiper-button-next,
          .swiper-button-prev {
            color: #EC008C !important;
            background: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 16px !important;
            font-weight: bold;
          }
          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            background: #EC008C;
            color: white !important;
          }
          .swiper-pagination-bullet {
            background: #EC008C !important;
            opacity: 0.5;
          }
          .swiper-pagination-bullet-active {
            opacity: 1 !important;
          }
        `}} />
      </div>
    </section>
  );
}

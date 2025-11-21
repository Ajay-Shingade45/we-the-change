'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DonateButton from '../../../components/DonateButton';
import AnimatedHumanDialogues from '../../../components/AnimatedHumanDialogues';
import { searchImages } from '../../../utils/unsplash';

export default function PaintMeRedPage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const artImages = await searchImages('women art workshop community', 4);
        setImages(artImages);
      } catch (error) {
        console.error('Error loading images:', error);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-coral/10 via-primary/5 to-teal/10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center bg-coral/10 text-coral px-4 py-2 rounded-full text-sm font-medium mb-4">
                  🎨 Art & Awareness Program
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary">
                  #PaintMeRed
                </h1>
                
                <p className="text-lg md:text-xl text-muted leading-relaxed">
                  Providing safe and hygienic menstrual products to menstruators who lack access to them. 
                  We distribute menstrual hygiene kits, including bio-compostable sanitary pads, disposal bags, panties, and soap.
                </p>
              </motion.div>

              {/* Real Key Stats */}
              <motion.div 
                className="grid grid-cols-2 gap-6 pt-8 border-t border-muted/20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-coral">385,000+</div>
                  <div className="text-sm text-muted">Bio-compostable Pads Distributed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-teal">12</div>
                  <div className="text-sm text-muted">States Reached</div>
                </div>
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center bg-coral text-white rounded-lg px-8 py-4 font-semibold text-lg hover:bg-coral/90 transition-colors duration-200"
                >
                  Join Our Program
                </Link>
                
                <DonateButton 
                  amount={2000}
                  className="inline-flex items-center justify-center bg-bg-alt text-coral border-2 border-coral/30 rounded-lg px-8 py-4 font-semibold text-lg hover:bg-coral/5 hover:border-coral/50 transition-all duration-200">
                  Support This Program
                </DonateButton>
              </motion.div>
            </div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <AnimatedHumanDialogues 
                  program="paint-me-red"
                  className="w-full h-[500px] lg:h-[600px]"
                />
              </div>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-coral/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal/20 rounded-full blur-xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Program Details Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                How #PaintMeRed Works
              </h2>
              <p className="text-lg text-muted max-w-3xl mx-auto">
                Our commitment to menstrual education and safe products has enabled us to reach menstruators across 12 states in India.
              </p>
            </motion.div>

            {/* Program Steps */}
            <div className="grid gap-8 md:gap-12">
              {[
                {
                  step: "01",
                  title: "Product Distribution",
                  description: "We distribute comprehensive menstrual hygiene kits including bio-compostable sanitary pads, disposal bags, panties, and soap to individuals in need.",
                  image: "🩸"
                },
                {
                  step: "02", 
                  title: "Community Education",
                  description: "We conduct menstrual awareness sessions to educate communities about proper hygiene practices and break taboos surrounding menstruation.",
                  image: "📚"
                },
                {
                  step: "03",
                  title: "Sustainable Solutions",
                  description: "Our bio-compostable pads transform into manure within approximately six months, addressing both menstrual product needs and environmental concerns.",
                  image: "🌱"
                },
                {
                  step: "04",
                  title: "Impact Measurement",
                  description: "We track and measure the impact of our interventions, ensuring that our programs create lasting change in communities across India.",
                  image: "📊"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col lg:flex-row gap-8 items-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-br from-coral/20 to-coral/5 rounded-2xl flex items-center justify-center text-4xl">
                      {item.image}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl font-bold text-coral/30">{item.step}</span>
                      <h3 className="text-2xl font-bold text-primary">{item.title}</h3>
                    </div>
                    <p className="text-muted leading-relaxed text-lg">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real Impact Stories */}
      <section className="py-16 lg:py-24 bg-bg-alt">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Real Impact Stories
            </h2>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              Testimonials from our beneficiaries across India who have experienced the impact of #PaintMeRed.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Maharashtra Beneficiary",
                location: "Maharashtra",
                story: "I feel like I'm wearing absolutely No Pad even after wearing these Bio-Compostable Pads. These are super thin and give a rash-free experience. I almost forget I'm on my period.",
                image: "🩸"
              },
              {
                name: "Jharkhand Beneficiary", 
                location: "Jharkhand",
                story: "From Soil to Freedom: Girls from tribal communities in Jharkhand bid farewell to makeshift cloth pads sandwiched with soil, sand, wood husk, and dry leaves. With WeTheChange, they now enjoy comfort and dignity.",
                image: "🩸"
              },
              {
                name: "2022 Impact Report",
                location: "Multiple States",
                story: "What I liked most about these pads is that somebody, somewhere loves me because she made these beautiful pads and donated them to me, giving me a rash-free and comfortable experience for the first time ever.",
                image: "💝"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-muted/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{story.image}</div>
                <blockquote className="text-muted italic mb-4 leading-relaxed">
                  "{story.story}"
                </blockquote>
                <div className="font-semibold text-primary">{story.name}</div>
                <div className="text-sm text-muted">{story.location}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center bg-gradient-to-r from-coral/10 to-teal/10 rounded-3xl p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Join Our Mission
            </h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              Help us reach more menstruators across India with safe, hygienic, and sustainable menstrual products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-coral text-white rounded-lg px-8 py-4 font-semibold text-lg hover:bg-coral/90 transition-colors duration-200"
              >
                Partner With Us
              </Link>
              <DonateButton 
                amount={2000}
                className="inline-flex items-center justify-center bg-primary text-white rounded-lg px-8 py-4 font-semibold text-lg hover:bg-primary/90 transition-colors duration-200">
                Support This Program
              </DonateButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

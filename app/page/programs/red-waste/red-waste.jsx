'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DonateButton from '../../../components/DonateButton';
import AnimatedHumanDialogues from '../../../components/AnimatedHumanDialogues';

export default function RedWastePage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/10 via-primary/5 to-coral/10"></div>
        
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
                <div className="inline-flex items-center bg-teal/10 text-teal px-4 py-2 rounded-full text-sm font-medium mb-4">
                  🌱 Environmental Sustainability
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary">
                  #RedWaste
                </h1>
                
                <p className="text-lg md:text-xl text-muted leading-relaxed">
                  We are committed to highlighting the hazardous effects of menstrual waste on the health of 
                  sanitation workers and raising awareness about proper disposal methods.
                </p>
              </motion.div>

              <motion.div 
                className="grid grid-cols-2 gap-6 pt-8 border-t border-muted/20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-teal">180,000+</div>
                  <div className="text-sm text-muted">Red Dot Disposal Bags</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-coral">1.03</div>
                  <div className="text-sm text-muted">Metric Tons CO2 Reduced</div>
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
                  className="inline-flex items-center justify-center bg-teal text-white rounded-lg px-8 py-4 font-semibold text-lg hover:bg-teal/90 transition-colors duration-200"
                >
                  Learn More
                </Link>
                
                <DonateButton 
                  amount={2000}
                  className="inline-flex items-center justify-center bg-bg-alt text-teal border-2 border-teal/30 rounded-lg px-8 py-4 font-semibold text-lg hover:bg-teal/5 hover:border-teal/50 transition-all duration-200">
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
                  program="red-waste"
                  className="w-full h-[500px] lg:h-[600px]"
                />
              </div>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-coral/20 rounded-full blur-xl"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Program Details */}
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
                Our Sustainable Approach
              </h2>
              <p className="text-lg text-muted max-w-3xl mx-auto">
                Through this initiative, we distribute disposal bags to sensitize menstruators to the importance 
                of responsible menstrual waste management.
              </p>
            </motion.div>

            <div className="grid gap-8 md:gap-12">
              {[
                {
                  step: "01",
                  title: "Red Dot Sanitary Pad Disposal Bags",
                  description: "We distribute specially designed disposal bags that help menstruators dispose of their sanitary products safely and responsibly, protecting sanitation workers.",
                  image: "♻️"
                },
                {
                  step: "02", 
                  title: "Community Sensitization",
                  description: "We conduct awareness sessions to educate communities about the importance of proper menstrual waste disposal and its impact on sanitation workers' health.",
                  image: "📚"
                },
                {
                  step: "03",
                  title: "Environmental Impact",
                  description: "Our paper-based disposal bags contribute to 1.03 metric tons of CO2 reduction, making a significant environmental impact through sustainable waste management.",
                  image: "🌱"
                },
                {
                  step: "04",
                  title: "Worker Safety",
                  description: "By promoting proper disposal methods, we protect the health and safety of sanitation workers who handle menstrual waste in communities across India.",
                  image: "🛡️"
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
                    <div className="w-32 h-32 bg-gradient-to-br from-teal/20 to-teal/5 rounded-2xl flex items-center justify-center text-4xl">
                      {item.image}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl font-bold text-teal/30">{item.step}</span>
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

      {/* Real Impact Section */}
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
              Environmental Impact
            </h2>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              Our sustainable practices are making a real difference for our planet and communities.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "1.03", label: "Metric Tons CO2 Reduced", icon: "🌱" },
              { number: "180,000+", label: "Red Dot Disposal Bags Distributed", icon: "♻️" },
              { number: "57%", label: "Reduction vs Traditional Products", icon: "📈" },
              { number: "60,000+", label: "Individuals Sensitized", icon: "👥" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-white rounded-2xl p-8 shadow-sm border border-muted/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-teal mb-2">{stat.number}</div>
                <div className="text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Testimonial */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center bg-gradient-to-r from-teal/10 to-coral/10 rounded-3xl p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-6">💬</div>
            <blockquote className="text-2xl md:text-3xl font-medium text-primary mb-6 italic">
              "Now I know the right way of disposing of my Menstrual Waste with this Red Dot Sanitary Pad Disposal Bag. I care for the lives of Sanitation Workers."
            </blockquote>
            <div className="text-lg text-muted">- A responsible menstruator, West Bengal</div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center bg-gradient-to-r from-teal/10 to-coral/10 rounded-3xl p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Join the Green Revolution
            </h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              Help us create a more sustainable future for menstrual health management and protect our environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-teal text-white rounded-lg px-8 py-4 font-semibold text-lg hover:bg-teal/90 transition-colors duration-200"
              >
                Get Involved
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

'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DonateButton from '../../../components/DonateButton';
import AnimatedHumanDialogues from '../../../components/AnimatedHumanDialogues';

export default function ProjectSachetPage() {
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
                  🎓 2025 Visionary Initiative
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary">
                  Project सचेत (Sachet)
                </h1>
                
                <p className="text-lg md:text-xl text-muted leading-relaxed">
                  Our most ambitious initiative launching in 2025 - training certified 'Puberty Coaches' 
                  to disseminate vital information to students in schools and colleges across India.
                </p>
              </motion.div>

              <motion.div 
                className="grid grid-cols-2 gap-6 pt-8 border-t border-muted/20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-teal">60,000+</div>
                  <div className="text-sm text-muted">Adolescents to Impact</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-coral">2025</div>
                  <div className="text-sm text-muted">Launch Year</div>
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
                  Become a Puberty Coach
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
                  program="project-sachet"
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
                Project सचेत: Growing Up Informed, Growing Up Safe
              </h2>
              <p className="text-lg text-muted max-w-3xl mx-auto">
                A comprehensive approach to adolescent education that addresses puberty, consent, boundaries, 
                and Sexual and Reproductive Health and Rights (SRHR) with a Social and Emotional Learning (SEL) approach.
              </p>
            </motion.div>

            <div className="grid gap-8 md:gap-12">
              {[
                {
                  step: "01",
                  title: "Puberty Coach Training",
                  description: "We train passionate volunteers as certified 'Puberty Coaches' who serve as frontline change agents, disseminating vital information to students in schools and colleges.",
                  image: "🎓"
                },
                {
                  step: "02", 
                  title: "Comprehensive Curriculum",
                  description: "Our curriculum covers puberty education, safe/unsafe touch, consent, boundaries, agency, body autonomy, and Sexual and Reproductive Health and Rights (SRHR).",
                  image: "📚"
                },
                {
                  step: "03",
                  title: "Accessibility & Inclusion",
                  description: "We create accessible content for the spectrum of intellectual and physical disabilities and their caregivers, ensuring no one is left behind.",
                  image: "♿"
                },
                {
                  step: "04",
                  title: "Phase-wise Implementation",
                  description: "Partner schools across Delhi NCR, Hyderabad, Bengaluru, Kolkata → Rural, tribal, and urban slum communities → Long-term sustainability measures.",
                  image: "🗺️"
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

      {/* Implementation Strategy */}
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
              Phase-wise Program Implementation Strategy
            </h2>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              Our structured approach to scaling impact across India
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { 
                phase: "Phase 1", 
                title: "Pilot Program Launch", 
                description: "Partner schools, Community based organisations across Delhi NCR, Hyderabad, Bengaluru, Kolkata",
                color: "coral"
              },
              { 
                phase: "Phase 2", 
                title: "Program Expansion", 
                description: "Impact over 60,000 adolescents across locations. Implement chatbot training and deployment using real-time user data",
                color: "teal"
              },
              { 
                phase: "Phase 3", 
                title: "Sustainability Measures", 
                description: "Expansion into rural, tribal, and urban slum communities across states with partner organisations",
                color: "yellow"
              },
              { 
                phase: "Phase 4", 
                title: "Focus on Accessibility", 
                description: "Holistic inclusion of Persons with Disabilities with expert trainers and tools. Ensure continued effectiveness with adequate funding",
                color: "primary"
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                className="text-center bg-white rounded-2xl p-8 shadow-sm border border-muted/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={`text-2xl font-bold text-${phase.color} mb-2`}>{phase.phase}</div>
                <h3 className="text-lg font-bold text-primary mb-4">{phase.title}</h3>
                <p className="text-sm text-muted">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Impact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Project सचेत Impact Goals
            </h2>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              Our ambitious but achievable targets for 2025-2030
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "60,000+", label: "Adolescents Impacted (2025)", icon: "👥" },
              { number: "1,000+", label: "Puberty Coaches Trained", icon: "🎓" },
              { number: "50", label: "Metric Tons CO2 Reduction", icon: "🌱" },
              { number: "100%", label: "Accessibility & Inclusion", icon: "♿" }
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
      <section className="py-16 lg:py-24 bg-bg-alt">
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
              "Understanding the significance of menstruation, not just for women but for the entire life cycle, brings us closer to a conscious and mature society."
            </blockquote>
            <div className="text-lg text-muted">- Farheen Naaz, Founder & CEO - WeTheChange</div>
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
              Be Part of the Change
            </h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              Join us in creating a world where adolescents grow up informed, safe, and empowered to make informed decisions about their bodies and lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-teal text-white rounded-lg px-8 py-4 font-semibold text-lg hover:bg-teal/90 transition-colors duration-200"
              >
                Become a Puberty Coach
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

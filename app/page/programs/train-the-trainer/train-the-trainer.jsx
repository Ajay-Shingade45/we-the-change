'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DonateButton from '../../../components/DonateButton';
import AnimatedHumanDialogues from '../../../components/AnimatedHumanDialogues';

export default function TrainTheTrainerPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow/10 via-primary/5 to-teal/10"></div>
        
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
                <div className="inline-flex items-center bg-yellow/10 text-yellow px-4 py-2 rounded-full text-sm font-medium mb-4">
                  🎓 Education & Training Program
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary">
                  Train The Trainer
                </h1>
                
                <p className="text-lg md:text-xl text-muted leading-relaxed">
                  We believe in the power of education and knowledge dissemination. Under this initiative, 
                  we conduct menstrual awareness training programs for teachers and volunteers, equipping them 
                  to address the queries of young menstruators and conduct workshops.
                </p>
              </motion.div>

              <motion.div 
                className="grid grid-cols-2 gap-6 pt-8 border-t border-muted/20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-yellow">200+</div>
                  <div className="text-sm text-muted">Community Trainers Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-teal">14</div>
                  <div className="text-sm text-muted">Regional Languages</div>
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
                  className="inline-flex items-center justify-center bg-yellow text-white rounded-lg px-8 py-4 font-semibold text-lg hover:bg-yellow/90 transition-colors duration-200"
                >
                  Become a Trainer
                </Link>
                
                <DonateButton 
                  amount={2000}
                  className="inline-flex items-center justify-center bg-bg-alt text-yellow border-2 border-yellow/30 rounded-lg px-8 py-4 font-semibold text-lg hover:bg-yellow/5 hover:border-yellow/50 transition-all duration-200">
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
                  program="train-the-trainer"
                  className="w-full h-[500px] lg:h-[600px]"
                />
              </div>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal/20 rounded-full blur-xl"></div>
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
                How Train The Trainer Works
              </h2>
              <p className="text-lg text-muted max-w-3xl mx-auto">
                We equip passionate individuals with the knowledge and skills to become effective menstrual health educators in their communities.
              </p>
            </motion.div>

            <div className="grid gap-8 md:gap-12">
              {[
                {
                  step: "01",
                  title: "Comprehensive Curriculum",
                  description: "We develop detailed curriculum on menstrual health along with teaching aids for the ease of training communities. Our curriculum is available in 14 regional languages.",
                  image: "📚"
                },
                {
                  step: "02", 
                  title: "Interactive Training Sessions",
                  description: "We conduct in-person trainings on Menstrual Health and Hygiene Management (MHHM) across 19 states in villages and communities located at the fringes.",
                  image: "👥"
                },
                {
                  step: "03",
                  title: "Community Partnership",
                  description: "We work with 25 community partners across 19 states and UTs, directly engaging with communities from marginalized backgrounds.",
                  image: "🤝"
                },
                {
                  step: "04",
                  title: "Ongoing Support",
                  description: "Our Community Partners organize sessions on MHHM every month as part of their milestone, and we help them drive change through various knowledge and logistical support.",
                  image: "🔄"
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
                    <div className="w-32 h-32 bg-gradient-to-br from-yellow/20 to-yellow/5 rounded-2xl flex items-center justify-center text-4xl">
                      {item.image}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl font-bold text-yellow/30">{item.step}</span>
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
              Training Impact
            </h2>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              Our training programs have created a multiplier effect across communities in India.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { number: "200+", label: "Community Trainers Trained", icon: "🎓" },
              { number: "14", label: "Regional Languages", icon: "🌐" },
              { number: "25", label: "Community Partners", icon: "🤝" },
              { number: "19", label: "States & UTs Covered", icon: "🇮🇳" }
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
                <div className="text-3xl font-bold text-yellow mb-2">{stat.number}</div>
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
            className="text-center bg-gradient-to-r from-yellow/10 to-teal/10 rounded-3xl p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-6">💬</div>
            <blockquote className="text-2xl md:text-3xl font-medium text-primary mb-6 italic">
              "We are immensely grateful for the partnership and support of We The Change in our mission to raise awareness about menstrual hygiene in the regions we serve. Working alongside Farheen and her dedicated team has not only been a pleasure but also a valuable learning experience."
            </blockquote>
            <div className="text-lg text-muted">- WTC's Change Partner Sunbird Trust</div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center bg-gradient-to-r from-yellow/10 to-teal/10 rounded-3xl p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Become a Change Agent
            </h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              Join our network of trained educators and help spread menstrual health awareness in your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-yellow text-white rounded-lg px-8 py-4 font-semibold text-lg hover:bg-yellow/90 transition-colors duration-200"
              >
                Apply for Training
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

'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DonateButton from '../components/DonateButton';

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-mixed-vibrant-3 pattern-triangles">
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
              Our Impact
            </h1>
            <p className="text-xl text-gray-700 mb-8 font-medium">
              Menstrual Equity in Action: WeTheChange's Environmental and Social Impact (2021-2025)
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Impact in Numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real impact from our work across India and Africa
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { number: "85,000+", label: "Total Beneficiaries Served", icon: "👥", color: "text-primary" },
              { number: "385,000+", label: "Bio-compostable Pads Distributed", icon: "🩸", color: "text-coral" },
              { number: "180,000+", label: "Disposal Bags Provided", icon: "♻️", color: "text-teal" },
              { number: "200+", label: "Community Trainers Trained", icon: "🎓", color: "text-yellow" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Environmental Sustainability
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Creating sustainable menstrual solutions while reducing environmental impact
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-6xl mb-6">🌱</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Carbon Footprint Reduction</h3>
              <div className="text-4xl font-bold text-teal mb-4">11.55 Metric Tons CO₂</div>
              <p className="text-lg text-gray-700 mb-6">
                Through our sustainable menstrual product initiatives, we've achieved a verified reduction of 11.55 metric tons of carbon dioxide emissions.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="font-medium">Compostable Sanitary Pads</span>
                  <span className="text-teal font-bold">5.38 MT CO₂</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="font-medium">Silicone Menstrual Cups</span>
                  <span className="text-teal font-bold">5.14 MT CO₂</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="font-medium">Paper-Based Disposal Bags</span>
                  <span className="text-teal font-bold">1.03 MT CO₂</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-primary mb-6">Product Impact Comparison</h3>
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-2xl shadow-lg">
                  <h4 className="text-lg font-bold text-coral mb-2">Bio-compostable Pads</h4>
                  <p className="text-gray-700 mb-2">385,000 units distributed</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-coral h-2 rounded-full" style={{width: '72%'}}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">72% reduction vs traditional products</p>
                </div>

                <div className="p-6 bg-white rounded-2xl shadow-lg">
                  <h4 className="text-lg font-bold text-teal mb-2">Menstrual Cups</h4>
                  <p className="text-gray-700 mb-2">100 units distributed</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-teal h-2 rounded-full" style={{width: '99%'}}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">99% reduction vs traditional products</p>
                </div>

                <div className="p-6 bg-white rounded-2xl shadow-lg">
                  <h4 className="text-lg font-bold text-yellow mb-2">Disposal Bags</h4>
                  <p className="text-gray-700 mb-2">180,000 units distributed</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow h-2 rounded-full" style={{width: '57%'}}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">57% reduction vs traditional products</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Geographic Reach */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Geographic Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Reaching communities across India and Africa
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-6xl mb-6">🇮🇳</div>
              <h3 className="text-2xl font-bold text-primary mb-4">India: 19 States & UTs</h3>
              <p className="text-lg text-gray-700 mb-6">
                WeTheChange has established itself as a leader in sustainable menstrual health solutions across India, working with 25 community partners.
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  "Maharashtra", "Karnataka", "Tamil Nadu", "Kerala",
                  "Delhi", "Haryana", "Punjab", "Rajasthan",
                  "Gujarat", "Madhya Pradesh", "Uttar Pradesh", "Bihar",
                  "West Bengal", "Odisha", "Andhra Pradesh", "Telangana",
                  "Assam", "Jharkhand", "Chhattisgarh"
                ].map((state, index) => (
                  <div key={index} className="p-2 bg-gray-100 rounded text-center">
                    {state}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-6xl mb-6">🌍</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Africa: Kenya & Uganda</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our work extends to Bidibidi, the largest refugee settlement in the world, located in northwestern Uganda.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-teal/10 rounded-lg">
                  <h4 className="font-bold text-teal">Kenya</h4>
                  <p className="text-sm text-gray-600">Lamu County: 1,500 beneficiaries</p>
                  <p className="text-sm text-gray-600">Nairobi: 800 beneficiaries</p>
                </div>
                <div className="p-4 bg-coral/10 rounded-lg">
                  <h4 className="font-bold text-coral">Uganda</h4>
                  <p className="text-sm text-gray-600">Bidibidi Refugee Settlement: 1,000 beneficiaries</p>
                </div>
                <div className="p-4 bg-yellow/10 rounded-lg">
                  <h4 className="font-bold text-yellow">Total Africa Impact</h4>
                  <p className="text-sm text-gray-600">3,300 beneficiaries served (2024-2025)</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Impact */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Education & Awareness Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Breaking taboos and building knowledge through education
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-primary mb-4">Menstrual Education</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Individuals Sensitized</span>
                  <span className="font-bold text-teal">60,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Regional Languages</span>
                  <span className="font-bold text-teal">14</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Menstrupedia Partnership</span>
                  <span className="font-bold text-teal">85,000+</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-primary mb-4">Training Impact</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Community Trainers</span>
                  <span className="font-bold text-coral">200+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Curriculum Languages</span>
                  <span className="font-bold text-coral">14</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Teaching Aids</span>
                  <span className="font-bold text-coral">Available</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-primary mb-4">Knowledge Improvement</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Understanding Menstrual Cycle</span>
                  <span className="font-bold text-yellow">+86%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sports Participation</span>
                  <span className="font-bold text-yellow">+48%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Product Satisfaction</span>
                  <span className="font-bold text-yellow">+50%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real Testimonials - Updated with correct states */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Voices of Change
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real testimonials from our beneficiaries across India and Africa
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                quote: "I feel like I'm wearing absolutely No Pad even after wearing these Bio-Compostable Pads. These are super thin and give a rash-free experience. I almost forget I'm on my period.",
                author: "Bio-compostable pad user",
                location: "Maharashtra"
              },
              {
                quote: "It's absolutely leak-proof and incredibly comfortable!",
                author: "Menstrual Cup user",
                location: "Tamil Nadu"
              },
              {
                quote: "Now I know the right way of disposing of my Menstrual Waste with this Red Dot Sanitary Pad Disposal Bag. I care for the lives of Sanitation Workers.",
                author: "Responsible menstruator",
                location: "West Bengal"
              },
              {
                quote: "What I liked most about these pads is that somebody, somewhere loves me because she made these beautiful pads and donated them to me, giving me a rash-free and comfortable experience for the first time ever.",
                author: "Beneficiary",
                location: "2022 Impact Report"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">💬</div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t pt-4">
                  <div className="font-bold text-primary">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Be Part of Our Impact
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join us in creating a world where every woman and girl has access to menstrual health education and resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <DonateButton amount={1000} />
              <Link 
                to="/get-involved" 
                className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

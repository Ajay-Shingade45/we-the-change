'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DonateButton from '../components/DonateButton';
import DonationForm from '../components/DonationForm';
import VolunteerForm from '../components/VolunteerForm';
import PartnershipForm from '../components/PartnershipForm';

export default function GetInvolvedPage() {
  const [donationFormOpen, setDonationFormOpen] = useState(false);
  const [volunteerFormOpen, setVolunteerFormOpen] = useState(false);
  const [partnershipFormOpen, setPartnershipFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-coral/5 to-teal/10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary mb-6">
              Get Involved
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-8">
              There are many ways to support our mission. Choose how you'd like to make a difference 
              in the lives of women and girls across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ways to Get Involved */}
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
              How You Can Help
            </h2>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              Every contribution, big or small, helps us create lasting change in communities.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Donate */}
            <motion.div
              className="bg-bg-alt rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-primary mb-4">Donate</h3>
              <p className="text-muted mb-6">
                Your financial support helps us reach more communities, distribute more products, 
                and train more leaders.
              </p>
              <button
                onClick={() => setDonationFormOpen(true)}
                className="w-full bg-primary text-white rounded-lg px-6 py-3 font-semibold hover:bg-primary/90 transition-colors duration-200"
              >
                Donate Now
              </button>
            </motion.div>

            {/* Volunteer */}
            <motion.div
              className="bg-bg-alt rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-primary mb-4">Volunteer</h3>
              <p className="text-muted mb-6">
                Join our team of passionate volunteers. Help with workshops, events, 
                or administrative tasks.
              </p>
              <button
                onClick={() => setVolunteerFormOpen(true)}
                className="w-full bg-coral text-white rounded-lg px-6 py-3 font-semibold hover:bg-coral/90 transition-colors duration-200"
              >
                Apply to Volunteer
              </button>
            </motion.div>

            {/* Partner */}
            <motion.div
              className="bg-bg-alt rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-primary mb-4">Partner With Us</h3>
              <p className="text-muted mb-6">
                Organizations, schools, and companies can partner with us to amplify 
                our impact in their communities.
              </p>
              <button
                onClick={() => setPartnershipFormOpen(true)}
                className="w-full bg-teal text-white rounded-lg px-6 py-3 font-semibold hover:bg-teal/90 transition-colors duration-200"
              >
                Become a Partner
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
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
              Donation Impact
            </h2>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              See how your donation directly impacts the lives of women and girls.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                amount: "₹500",
                impact: "10 Sanitary Kits",
                description: "Provides a month's supply for one woman",
                icon: "🧻"
              },
              {
                amount: "₹1,000",
                impact: "20 Sanitary Kits",
                description: "Supports two women for a month",
                icon: "🧻"
              },
              {
                amount: "₹2,500",
                impact: "1 Workshop",
                description: "Funds an awareness workshop for 25 people",
                icon: "📚"
              },
              {
                amount: "₹5,000",
                impact: "1 Trainer",
                description: "Trains one community leader for a month",
                icon: "👩‍🏫"
              }
            ].map((tier, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-sm border border-muted/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{tier.icon}</div>
                <div className="text-3xl font-bold text-primary mb-2">{tier.amount}</div>
                <div className="text-lg font-semibold text-coral mb-2">{tier.impact}</div>
                <p className="text-muted text-sm">{tier.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
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
              Volunteer Opportunities
            </h2>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              Join our team and make a direct impact in your community.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Field Volunteer",
                description: "Help with workshops, distribution, and community outreach activities.",
                requirements: "Passion for women's health, good communication skills",
                time: "4-8 hours per week",
                icon: "👥"
              },
              {
                title: "Content Creator",
                description: "Create educational materials, social media content, and awareness campaigns.",
                requirements: "Writing skills, social media knowledge, creativity",
                time: "2-4 hours per week",
                icon: "✍️"
              },
              {
                title: "Event Coordinator",
                description: "Organize workshops, fundraising events, and community programs.",
                requirements: "Event planning experience, organizational skills",
                time: "6-10 hours per week",
                icon: "🎉"
              },
              {
                title: "Translator",
                description: "Translate materials into local languages and help with communication.",
                requirements: "Fluency in local languages, translation skills",
                time: "2-6 hours per week",
                icon: "🌐"
              }
            ].map((role, index) => (
              <motion.div
                key={index}
                className="bg-bg-alt rounded-2xl p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{role.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-4">{role.title}</h3>
                <p className="text-muted mb-4">{role.description}</p>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-coral">Requirements:</span> {role.requirements}</p>
                  <p><span className="font-semibold text-teal">Time Commitment:</span> {role.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Partnerships */}
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
              Corporate Partnerships
            </h2>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              Partner with us to create meaningful impact in your community and beyond.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "CSR Partnership",
                description: "Align your CSR goals with our mission to support women's health and education.",
                benefits: "Tax benefits, brand visibility, community impact",
                icon: "🏢"
              },
              {
                title: "Employee Engagement",
                description: "Involve your employees in volunteer activities and awareness programs.",
                benefits: "Team building, employee satisfaction, social impact",
                icon: "👔"
              },
              {
                title: "Product Donation",
                description: "Donate sanitary products or other resources to support our programs.",
                benefits: "Direct impact, brand association, community goodwill",
                icon: "📦"
              }
            ].map((partnership, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-sm border border-muted/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{partnership.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-4">{partnership.title}</h3>
                <p className="text-muted mb-4">{partnership.description}</p>
                <p className="text-sm text-coral font-medium">{partnership.benefits}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center bg-gradient-to-r from-primary/10 to-coral/10 rounded-3xl p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
              Choose how you'd like to get involved and start creating change today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-primary text-white rounded-lg px-8 py-4 font-semibold text-lg hover:bg-primary/90 transition-colors duration-200"
              >
                Get Started
              </Link>
              <DonateButton className="inline-flex items-center justify-center bg-coral text-white rounded-lg px-8 py-4 font-semibold text-lg hover:bg-coral/90 transition-colors duration-200">
                Donate Now
              </DonateButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Forms */}
      <DonationForm 
        isOpen={donationFormOpen} 
        onClose={() => setDonationFormOpen(false)} 
      />
      <VolunteerForm 
        isOpen={volunteerFormOpen} 
        onClose={() => setVolunteerFormOpen(false)} 
      />
      <PartnershipForm 
        isOpen={partnershipFormOpen} 
        onClose={() => setPartnershipFormOpen(false)} 
      />
    </div>
  );
}

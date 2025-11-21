'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import DonateButton from '../components/DonateButton';
import DonationForm from '../components/DonationForm';

export default function DonatePage() {
  const [showDonationForm, setShowDonationForm] = useState(false);

  const donateOptions = [
    { amount: 500, label: "General Support Program", description: "Support our core initiatives" },
    { amount: 1000, label: "Education Workshop", description: "Fund Menstrual Health Seminars" },
    { amount: 2500, label: "Community Training", description: "Sponsor Train-the-Trainer sessions" },
    { amount: 5000, label: "Program Implementation", description: "Complete program village adoption" },
  ];

  return (
    <div className="min-h-screen bg-vibrant-orange pattern-dots-orange">
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
              Support Our Mission
            </h1>
            <p className="text-xl text-gray-700 mb-8 font-medium">
              Your contribution directly supports menstrual health education, sustainable products distribution, 
              and community empowerment programs across India and Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="p4 16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Your Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Every donation contributes to breaking taboos and creating lasting change
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "₹500", text: "Educates 10 women" },
              { number: "₹1000", text: "Distributes 50 pads" },
              { number: "₹2500", text: "Trains 1 community leader" },
              { number: "₹5000", text: "Adopts 1 village" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-2xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Donation Options */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Quick Donation</h2>
            <p className="text-lg text-gray-600">Choose an amount or donate custom</p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {donateOptions.map((option, index) => (
              <motion.div
                key={option.amount}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl font-bold text-primary mb-3">₹{option.amount.toLocaleString()}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{option.label}</div>
                <div className="text-sm text-gray-600 mb-4">{option.description}</div>
                <DonateButton
                  amount={option.amount}
                  className="w-full"
                  hostedLinkFallback="https://razorpay.com/payment-gateway/"
                >
                  Donate Now
                </DonateButton>
              </motion.div>
            ))}
          </div>

          {/* Custom Donation */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-r from-primary/10 to-coral/10 rounded-2xl p-8 max-w-md mx-auto">
              <h3 className="text-xl font-bold text-primary mb-4">Custom Amount</h3>
              <p className="text-gray-600 mb-6">Have a specific amount in mind?</p>
              <div className="space-y-4">
                <button
                  onClick={() => setShowDonationForm(true)}
                  className="w-full bg-primary text-white rounded-lg px-6 py-4 font-semibold hover:bg-primary/90 transition-colors"
                >
                  Choose Custom Amount
                </button>
                <DonateButton
                  amount={10000}
                  className="w-full bg-coral text-white rounded-lg px-6 py-4 font-semibold hover:bg-coral/90 transition-colors"
                  hostedLinkFallback="https://razorpay.com/payment-gateway/"
                >
                  ₹10,000+ Major Impact
                </DonateButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tax Benefits Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Tax Benefits Available
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              50% tax exemption under section 80G. CSR eligible organization. 
              Get instant receipt for tax deduction.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-2xl font-bold mb-2">80G Certified</div>
                <div className="text-sm opacity-90">Income Tax Exemption</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-2xl font-bold mb-2">CSR Eligible</div>
                <div className="text-sm opacity-90">Corporate Social Responsibility</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-2xl font-bold mb-2">Instant Receipt</div>
                <div className="text-sm opacity-90">Email Invoice Immediately</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bank Details */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Bank Transfer Option</h2>
            <p className="text-lg text-gray-600">Prefer bank transfer?</p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-teal/10 to-green/10 rounded-2xl p-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4 text-center">
              <div><strong>Account Name:</strong> WE THE CHANGE TRUST</div>
              <div><strong>Account Number:</strong> 922020045541686</div>
              <div><strong>Bank:</strong> AXIS BANK, CHAWRI BAZAR</div>
              <div><strong>IFSC:</strong> UTIB0001548</div>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <div className="text-sm text-gray-600 mb-2">For bank transfer receipts:</div>
                <div className="text-sm">Email: farheen@wethechangeindia.org</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Donation Form Modal */}
      <DonationForm 
        isOpen={showDonationForm} 
        onClose={() => setShowDonationForm(false)} 
      />
    </div>
  );
}
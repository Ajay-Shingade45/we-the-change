'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { openDonationCheckout } from '../utils/razorpay';

const PRESETS = [500, 1000, 2500, 5000];

export default function DonateCTA() {
  const [amount, setAmount] = useState(PRESETS[1]);
  const [loading, setLoading] = useState(false);

  const donate = async () => {
    try {
      setLoading(true);
      const loadingToast = toast.loading('Opening payment gateway...');
      await openDonationCheckout({ amountInRupees: amount });
      toast.dismiss(loadingToast);
    } catch (e) {
      console.error(e);
      toast.error('Unable to open donation checkout. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 lg:py-20 gradient-warm relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Text Content */}
          <div className="text-white text-center md:text-left md:max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaHeart className="w-12 h-12 mb-4 mx-auto md:mx-0 animate-pulse-slow" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Support Dignity with Your Donation
              </h2>
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
                Your contribution enables pads, education, and empowers community leaders across India and Africa.
              </p>
            </motion.div>
          </div>

          {/* Donation Options */}
          <motion.div 
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Amount Selection */}
            <div className="flex flex-wrap justify-center gap-3">
              {PRESETS.map(p => (
                <button
                  key={p}
                  onClick={() => setAmount(p)}
                  className={`px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 ${
                    amount === p 
                      ? 'bg-white/30 glass scale-110 shadow-glow' 
                      : 'bg-white/10 glass hover:bg-white/20 hover:scale-105'
                  }`}
                  aria-pressed={amount === p}
                >
                  ₹{p.toLocaleString('en-IN')}
                </button>
              ))}
            </div>

            {/* Donate Button */}
            <button
              onClick={donate}
              disabled={loading}
              className="px-10 py-5 rounded-full bg-white text-primary font-bold text-lg hover:scale-110 hover:shadow-glow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/30 disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-3 group"
            >
              <FaHeart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {loading ? 'Processing...' : `Donate ₹${amount.toLocaleString('en-IN')} Now`}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}





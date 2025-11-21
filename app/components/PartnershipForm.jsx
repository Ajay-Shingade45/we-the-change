'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function PartnershipForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    organizationType: '',
    partnershipType: '',
    description: '',
    budget: '',
    timeline: '',
    goals: ''
  });

  const organizationTypes = [
    'Corporate',
    'NGO',
    'Educational Institution',
    'Government Agency',
    'Other'
  ];

  const partnershipTypes = [
    'CSR Partnership',
    'Employee Engagement',
    'Product Donation',
    'Event Collaboration',
    'Awareness Campaign',
    'Other'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle partnership inquiry submission
    console.log('Partnership inquiry submitted:', formData);
    toast.success('🤝 Thank you for your interest! We\'ll contact you soon to discuss partnership opportunities.', {
      duration: 6000,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-primary">Partnership Inquiry</h2>
          <button
            onClick={onClose}
            className="text-muted hover:text-primary text-2xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Organization Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Organization Name *
              </label>
              <input
                type="text"
                required
                value={formData.organizationName}
                onChange={(e) => setFormData({...formData, organizationName: e.target.value})}
                className="w-full p-3 border border-muted/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Contact Person *
              </label>
              <input
                type="text"
                required
                value={formData.contactPerson}
                onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                className="w-full p-3 border border-muted/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full p-3 border border-muted/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full p-3 border border-muted/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Organization Type */}
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Organization Type *
            </label>
            <select
              required
              value={formData.organizationType}
              onChange={(e) => setFormData({...formData, organizationType: e.target.value})}
              className="w-full p-3 border border-muted/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="">Select organization type</option>
              {organizationTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Partnership Type */}
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Type of Partnership *
            </label>
            <select
              required
              value={formData.partnershipType}
              onChange={(e) => setFormData({...formData, partnershipType: e.target.value})}
              className="w-full p-3 border border-muted/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="">Select partnership type</option>
              {partnershipTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Partnership Description *
            </label>
            <textarea
              required
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows={4}
              className="w-full p-3 border border-muted/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="Describe your proposed partnership and how it aligns with our mission..."
            />
          </div>

          {/* Budget and Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Budget Range
              </label>
              <input
                type="text"
                value={formData.budget}
                onChange={(e) => setFormData({...formData, budget: e.target.value})}
                className="w-full p-3 border border-muted/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="e.g., ₹50,000 - ₹1,00,000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Timeline
              </label>
              <input
                type="text"
                value={formData.timeline}
                onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                className="w-full p-3 border border-muted/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="e.g., 6 months, 1 year"
              />
            </div>
          </div>

          {/* Goals */}
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              Partnership Goals
            </label>
            <textarea
              value={formData.goals}
              onChange={(e) => setFormData({...formData, goals: e.target.value})}
              rows={3}
              className="w-full p-3 border border-muted/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="What do you hope to achieve through this partnership?"
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-6 border border-muted/30 rounded-lg text-muted hover:bg-muted/10 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 px-6 bg-teal text-white rounded-lg font-semibold hover:bg-teal/90 transition-colors"
            >
              Submit Inquiry
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

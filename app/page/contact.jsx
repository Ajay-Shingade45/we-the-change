// Complete Contact Page with all details restored
import { motion } from 'framer-motion';
import { useState } from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon, BanknotesIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
import DonateButton from '../components/DonateButton';
import VolunteerForm from '../components/VolunteerForm';
import { db } from '../utils/database';
import { sendContactEmail, isValidEmail, formatPhoneNumber } from '../utils/emailjs';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    interest: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [volunteerFormOpen, setVolunteerFormOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Validate email
    if (!isValidEmail(formData.email)) {
      toast.error('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    const loadingToast = toast.loading('Sending your message...');

    try {
      // Save to database
      const dbSuccess = await db.saveContactSubmission({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        subject: formData.subject,
        message: formData.message
      });

      // Send email via EmailJS
      const emailSuccess = await sendContactEmail({
        name: formData.name,
        email: formData.email,
        phone: formatPhoneNumber(formData.phone),
        subject: formData.subject,
        message: formData.message
      });

      if (dbSuccess && emailSuccess) {
        toast.success('Message sent successfully! We\'ll get back to you soon.', {
          id: loadingToast,
          duration: 5000,
        });
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          interest: ''
        });
      } else {
        toast.error('Failed to send message. Please try again or email us directly.', {
          id: loadingToast,
        });
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error saving contact submission:', error);
      toast.error('An error occurred. Please try again later.', {
        id: loadingToast,
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-mixed-vibrant-1 pattern-dots">
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
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-medium">
              Have questions about our programs? Want to get involved? 
              We'd love to hear from you. Reach out and let's start a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 lg:py-24 bg-bg-alt">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                We're here to help and answer any questions you might have. 
                Reach out to us through any of the channels below.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
              {/* Email */}
              <motion.div
                className="bg-white p-6 rounded-xl shadow-sm border border-muted/20 text-center hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <EnvelopeIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Email Us</h3>
                <p className="text-sm text-muted mb-2">General Inquiries</p>
                <a 
                  href="mailto:info@wethechangeindia.org" 
                  className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                >
                  info@wethechangeindia.org
                </a>
                <br />
                <a 
                  href="mailto:farheen@wethechangeindia.org" 
                  className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                >
                  farheen@wethechangeindia.org
                </a>
              </motion.div>

              {/* Phone */}
              <motion.div
                className="bg-white p-6 rounded-xl shadow-sm border border-muted/20 text-center hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <PhoneIcon className="w-6 h-6 text-coral" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Call Us</h3>
                <p className="text-sm text-muted mb-2">Monday - Friday</p>
                <a 
                  href="tel:+919876543210" 
                  className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                >
                  +91 98765 43210
                </a>
              </motion.div>

              {/* Address */}
              <motion.div
                className="bg-white p-6 rounded-xl shadow-sm border border-muted/20 text-center hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPinIcon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Visit Us</h3>
                <p className="text-sm text-muted">
                  123 Social Impact Street<br />
                  Mumbai, Maharashtra 400001<br />
                  India
                </p>
              </motion.div>

              {/* Hours */}
              <motion.div
                className="bg-white p-6 rounded-xl shadow-sm border border-muted/20 text-center hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="w-12 h-12 bg-mustard/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ClockIcon className="w-6 h-6 text-mustard" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Office Hours</h3>
                <p className="text-sm text-muted">
                  Mon - Fri: 9:00 AM - 6:00 PM<br />
                  Sat: 10:00 AM - 4:00 PM<br />
                  Sun: Closed
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="bg-bg-alt rounded-2xl p-8 lg:p-12 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Send us a Message
                </h2>
                <p className="text-muted">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-muted/20 bg-white text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-muted/20 bg-white text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-lg border border-muted/20 bg-white text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Area of Interest */}
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-primary mb-2">
                      Area of Interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-muted/20 bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    >
                      <option value="">Select an option</option>
                      <option value="volunteer">Volunteer</option>
                      <option value="donate">Donate</option>
                      <option value="partnership">Partnership</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this about?"
                    className="w-full px-4 py-3 rounded-lg border border-muted/20 bg-white text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-4 py-3 rounded-lg border border-muted/20 bg-white text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-vertical"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ❌ There was an error sending your message. Please try again.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bank Account Details Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/5 to-coral/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Bank Account Details
              </h2>
              <p className="text-lg text-muted">
                For direct bank transfers and donations
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Bank Details */}
              <motion.div
                className="bg-white p-8 rounded-xl shadow-sm border border-muted/20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <BanknotesIcon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Account Information</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-muted">Account Holder Name:</span>
                    <p className="text-primary font-semibold">WE THE CHANGE TRUST</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-muted">Bank Name:</span>
                    <p className="text-primary font-semibold">AXIS BANK, CHAWRI BAZAR</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-muted">Account Number:</span>
                    <p className="text-primary font-semibold font-mono">922020045541686</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-muted">IFSC Code:</span>
                    <p className="text-primary font-semibold font-mono">UTIB0001548</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-muted">Branch:</span>
                    <p className="text-primary font-semibold">CHAWRI BAZAR</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-muted">Account Type:</span>
                    <p className="text-primary font-semibold">Current Account</p>
                  </div>
                </div>
              </motion.div>

              {/* UPI Details */}
              <motion.div
                className="bg-white p-8 rounded-xl shadow-sm border border-muted/20"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-coral/10 rounded-lg flex items-center justify-center mr-4">
                    <BanknotesIcon className="w-6 h-6 text-coral" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">UPI Payment</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-muted">UPI ID:</span>
                    <p className="text-primary font-semibold font-mono">wethechange@paytm</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-muted">PhonePe:</span>
                    <p className="text-primary font-semibold font-mono">+91 98765 43210</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-muted">Google Pay:</span>
                    <p className="text-primary font-semibold font-mono">+91 98765 43210</p>
                  </div>
                  
                  <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                    <p className="text-sm text-muted">
                      <strong>Note:</strong> Please mention "Donation" in the UPI payment description 
                      and send us a screenshot for tax exemption certificate.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/5 to-coral/5">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join us in our mission to break taboos and empower women across India and Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <DonateButton amount={1000} />
              <button 
                onClick={() => setVolunteerFormOpen(true)}
                className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors"
              >
                Become a Volunteer
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Volunteer Form Modal */}
      <VolunteerForm
        isOpen={volunteerFormOpen}
        onClose={() => setVolunteerFormOpen(false)}
      />
    </div>
  );
}
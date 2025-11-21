'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DonateButton from '../components/DonateButton';

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-mixed-vibrant-2 pattern-hexagons">
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
              Events & Workshops
            </h1>
            <p className="text-xl text-gray-700 mb-8 font-medium">
              Join our community events, workshops, and awareness programs across India and Africa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text-glow mb-6">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
              Join our upcoming workshops, training sessions, and community events
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">
            {[
              {
                title: "Menstrual Health Workshop - Delhi",
                date: "March 15, 2024",
                location: "Delhi NCR",
                type: "Workshop",
                description: "Interactive workshop on menstrual health and hygiene management for young women and girls. Learn about sustainable menstrual products and proper disposal methods.",
                attendees: "50 participants",
                status: "upcoming"
              },
              {
                title: "Train The Trainer Program - Mumbai",
                date: "March 22, 2024",
                location: "Mumbai, Maharashtra",
                type: "Training",
                description: "Comprehensive training program for community educators and volunteers. Learn to conduct menstrual health awareness sessions in your community.",
                attendees: "25 trainers",
                status: "upcoming"
              },
              {
                title: "Project Sachet Launch - Bangalore",
                date: "April 5, 2024",
                location: "Bangalore, Karnataka",
                type: "Launch Event",
                description: "Official launch of Project सचेत (Sachet) - our 2025 initiative for comprehensive adolescent education. Meet our Puberty Coaches and learn about the program.",
                attendees: "100+ attendees",
                status: "upcoming"
              },
              {
                title: "Community Outreach - Rural Rajasthan",
                date: "April 12, 2024",
                location: "Rural Rajasthan",
                type: "Outreach",
                description: "Field visit to rural communities in Rajasthan for menstrual health awareness and product distribution. Join us in making a direct impact.",
                attendees: "200+ beneficiaries",
                status: "upcoming"
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                className="card-enhanced card-primary hover:shadow-glow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {event.type}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{event.title}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <span className="mr-4"> {event.date}</span>
                      <span> {event.location}</span>
                    </div>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <div className="text-sm text-gray-600 mb-4">👥 {event.attendees}</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Link 
                    to="/contact" 
                    className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Register
                  </Link>
                  <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 lg:py-32 bg-vibrant-purple pattern-triangles relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="decorative-blob blob-purple w-96 h-96 -top-48 -right-48"></div>
        <div className="decorative-blob blob-teal w-64 h-64 -bottom-32 -left-32"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text-glow mb-6">
              Past Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
              Highlights from our recent workshops and community events
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Menstrual Health Workshop - Assam",
                date: "February 2024",
                location: "Assam",
                impact: "50+ women trained",
                image: "️",
                description: "Successfully conducted menstrual health awareness workshop in Assam, reaching women in remote areas."
              },
              {
                title: "Train The Trainer - Jharkhand",
                date: "January 2024",
                location: "Jharkhand",
                impact: "25+ community trainers",
                image: "🌿",
                description: "Trained community educators in Jharkhand to conduct menstrual health sessions in their communities."
              },
              {
                title: "Community Outreach - West Bengal",
                date: "December 2023",
                location: "West Bengal",
                impact: "200+ beneficiaries",
                image: "🌾",
                description: "Distributed menstrual hygiene kits and conducted awareness sessions in rural West Bengal."
              },
              {
                title: "Environmental Awareness - Delhi",
                date: "November 2023",
                location: "Delhi",
                impact: "100+ participants",
                image: "🌱",
                description: "Workshop on sustainable menstrual waste management and environmental impact awareness."
              },
              {
                title: "Youth Leadership Program - Mumbai",
                date: "October 2023",
                location: "Mumbai",
                impact: "75+ youth leaders",
                image: "👥",
                description: "Empowered young leaders to become advocates for menstrual health in their communities."
              },
              {
                title: "International Workshop - Kenya",
                date: "September 2023",
                location: "Lamu County, Kenya",
                impact: "150+ women",
                image: "🌍",
                description: "Conducted menstrual health workshop in Kenya as part of our international expansion program."
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                className="card-enhanced card-teal hover:shadow-glow-teal"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{event.image}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{event.title}</h3>
                <div className="text-sm text-gray-600 mb-2">{event.date} • {event.location}</div>
                <p className="text-gray-700 text-sm mb-3">{event.description}</p>
                <div className="text-sm font-medium text-teal">{event.impact}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-animated-gradient-2 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="decorative-blob blob-coral w-80 h-80 top-1/4 -left-40"></div>
        <div className="decorative-blob blob-orange w-96 h-96 bottom-1/4 -right-40"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Host an Event in Your Community
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Want to organize a menstrual health workshop or awareness session in your area? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
              <DonateButton amount={1000} />
            </div>
          </motion.div>
      </div>
    </section>
    </div>
  );
}



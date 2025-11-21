import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DonateButton from '../components/DonateButton';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-vibrant-pink">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-coral/10 to-teal/20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold gradient-text-glow mb-6">
              About We The Change
            </h1>
            <p className="text-xl text-gray-700 mb-8 font-medium">
              A not-for-profit initiative established in 2021 with a vision to bring about positive social change and empower individuals through education and awareness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-32 bg-vibrant-teal pattern-dots-teal">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold gradient-text-glow mb-8">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed font-medium">
                We firmly believe in the power of education and awareness to break barriers and transform society. Our dedicated team of passionate individuals works tirelessly to address pressing issues and dismantle the taboos and stereotypes that hinder progress.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                Through our various projects and campaigns, we strive to make a meaningful impact in the lives of individuals and communities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold gradient-text-glow mb-8">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed font-medium">
                We envision a world where all menstruators can effectively manage, understand, and embrace their bodies—regardless of geographic location or economic status. We firmly believe that this is a fundamental human right.
              </p>
              <div className="bg-teal/10 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-teal mb-3">Our Focus Areas</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Menstrual health and hygiene</li>
                  <li>• Women entrepreneurship</li>
                  <li>• Youth leadership</li>
                  <li>• Inclusivity for transgenders</li>
                  <li>• Knowledge of consent in children</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real Impact Numbers */}
      <section className="py-20 lg:py-32 bg-vibrant-purple pattern-dots-purple">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold gradient-text-glow mb-6">
              Our Impact (2021-2025)
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
              Real numbers from our work across India and Africa
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
            {[
              { number: "85,000+", label: "Beneficiaries Served", icon: "👥", color: "text-primary" },
              { number: "385,000+", label: "Bio-compostable Pads Distributed", icon: "🩸", color: "text-coral" },
              { number: "180,000+", label: "Disposal Bags Provided", icon: "♻️", color: "text-teal" },
              { number: "200+", label: "Community Trainers", icon: "🎓", color: "text-yellow" }
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

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-primary mb-4">Geographic Reach</h3>
              <p className="text-gray-700 mb-4">19 States & UTs in India</p>
              <p className="text-gray-700 mb-4">Kenya & Uganda in Africa</p>
              <p className="text-sm text-teal font-medium">Including Bidibidi Refugee Settlement</p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-primary mb-4">Environmental Impact</h3>
              <p className="text-gray-700 mb-4">11.55 Metric Tons CO₂ Reduced</p>
              <p className="text-gray-700 mb-4">72% Reduction vs Traditional Products</p>
              <p className="text-sm text-teal font-medium">Sustainable Menstrual Solutions</p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-primary mb-4">Education Impact</h3>
              <p className="text-gray-700 mb-4">60,000+ Individuals Sensitized</p>
              <p className="text-gray-700 mb-4">14 Regional Languages</p>
              <p className="text-sm text-teal font-medium">Menstrupedia Partnership</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Founders */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Our Founders
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the passionate leaders driving change across India and Africa
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-6">👩‍💼</div>
              <h3 className="text-2xl font-bold text-primary mb-2">Farheen Naaz</h3>
              <p className="text-lg text-gray-600 mb-4">Founder & CEO</p>
              <p className="text-gray-700 mb-4">
                An experienced senior education management professional who has dedicated her career to driving positive change in the Education and Skill Development sectors. She is also a Menstrual Coach and is deeply committed to breaking the taboos surrounding menstruation in Indian society.
              </p>
              <div className="text-sm text-teal font-medium">
                "Understanding the significance of menstruation, not just for women but for the entire life cycle, brings us closer to a conscious and mature society."
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-6xl mb-6">👨‍💼</div>
              <h3 className="text-2xl font-bold text-primary mb-2">Abu Sufiyan</h3>
              <p className="text-lg text-gray-600 mb-4">Co-Founder & Head of Marketing and Growth</p>
              <p className="text-gray-700 mb-4">
                A renowned Culture Revivalist with a passion for preserving and reviving the cultural heritage of old Delhi. With a background in technology and marketing, Abu brings a unique blend of expertise to our organization.
              </p>
              <div className="text-sm text-teal font-medium">
                "Engaging in conversations about menstruation doesn't diminish our masculinity; instead, it empowers us by providing valuable knowledge and insight."
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Our Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Four flagship initiatives creating sustainable change
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                name: "Project #PaintMeRed",
                description: "Providing safe and hygienic menstrual products to menstruators who lack access to them. We distribute menstrual hygiene kits, including bio-compostable sanitary pads, disposal bags, panties, and soap.",
                impact: "385,000+ pads distributed across 12 states",
                color: "coral"
              },
              {
                name: "Project #RedWaste",
                description: "Highlighting the hazardous effects of menstrual waste on sanitation workers and raising awareness about proper disposal methods through distribution of disposal bags.",
                impact: "180,000+ disposal bags distributed",
                color: "teal"
              },
              {
                name: "Train The Trainer (T3)",
                description: "Conducting menstrual awareness training programs for teachers and volunteers, equipping them to address queries of young menstruators and conduct workshops.",
                impact: "200+ individuals trained",
                color: "yellow"
              },
              {
                name: "Project Sachet (2025)",
                description: "Our most ambitious initiative launching in 2025 - training certified 'Puberty Coaches' to disseminate vital information to students in schools and colleges.",
                impact: "Aiming to impact 60,000+ adolescents",
                color: "primary"
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-primary mb-4">{program.name}</h3>
                <p className="text-gray-700 mb-4">{program.description}</p>
                <div className={`p-4 bg-${program.color}/10 rounded-lg`}>
                  <div className={`text-sm font-medium text-${program.color}`}>Impact:</div>
                  <div className="text-sm text-gray-700">{program.impact}</div>
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
              Join Our Mission
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Together, let's be the change we wish to see in the world! Join us in creating a more equitable and inclusive society.
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

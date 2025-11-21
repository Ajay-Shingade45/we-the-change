import { Link, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Toaster } from 'react-hot-toast';
import DonateButton from '../app/components/DonateButton';
import Home from '../app/page';
import DonatePage from '../app/page/donate.jsx';
import EventsPage from '../app/page/event.jsx';
import GalleryPage from '../app/page/gallery.jsx';
import ContactPage from '../app/page/contact.jsx';
import StoriesPage from '../app/page/stories.jsx';
import AboutPage from '../app/page/about.jsx';
import GetInvolvedPage from '../app/page/get-involved.jsx';
import ImpactPage from '../app/page/impact.jsx';

// Import Program Pages
import PaintMeRedPage from '../app/page/programs/paint-me-red/paint-me-red.jsx';
import RedWastePage from '../app/page/programs/red-waste/red-waste.jsx';
import TrainTheTrainerPage from '../app/page/programs/train-the-trainer/train-the-trainer.jsx';
import ProjectSachetPage from '../app/page/programs/project-sachet/project-sachet.jsx';

// Import Admin Page
import AdminDashboard from '../app/page/admin.jsx';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="antialiased bg-bg text-text font-sans">
      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#FFFFFF',
            color: '#1F2937',
            borderRadius: '12px',
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
            padding: '16px',
          },
          success: {
            iconTheme: {
              primary: '#EC008C',
              secondary: '#FFFFFF',
            },
          },
          error: {
            iconTheme: {
              primary: '#EF4444',
              secondary: '#FFFFFF',
            },
          },
        }}
      />
      
      <header className="w-full bg-black/95 backdrop-blur-md shadow-lg border-b border-gray-800 sticky top-0 z-50 transition-all duration-300">
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center hover:opacity-80 transition-opacity duration-200"
            onClick={closeMobileMenu}
          >
            {/* Logo */}
            <img 
              src="/logo/logo.png" 
              alt="We The Change Logo" 
              className="h-10 md:h-12 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 text-sm">
            <Link to="/" className="px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200" style={{color: '#FFFFFF', fontWeight: 'bold'}}>Home</Link>
            <Link to="/about" className="px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200" style={{color: '#FFFFFF', fontWeight: 'bold'}}>About</Link>
            <Link to="/impact" className="px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200" style={{color: '#FFFFFF', fontWeight: 'bold'}}>Impact</Link>
            <Link to="/get-involved" className="px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200" style={{color: '#FFFFFF', fontWeight: 'bold'}}>Get Involved</Link>
            <Link to="/events" className="px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200" style={{color: '#FFFFFF', fontWeight: 'bold'}}>Events</Link>
            <Link to="/gallery" className="px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200" style={{color: '#FFFFFF', fontWeight: 'bold'}}>Gallery</Link>
            <Link to="/stories" className="px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200" style={{color: '#FFFFFF', fontWeight: 'bold'}}>Stories</Link>
            <Link to="/contact" className="px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200" style={{color: '#FFFFFF', fontWeight: 'bold'}}>Contact</Link>
          </div>
          
          {/* Mobile Menu Button & Donate */}
          <div className="md:hidden flex items-center gap-3">
            <DonateButton 
              className="text-xs px-4 py-2 gradient-primary text-white rounded-full hover:shadow-glow transition-all" 
              amount={500}
            >
              Donate
            </DonateButton>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 text-white hover:text-white/80 hover:bg-white/10 rounded-lg transition-all duration-200 touch-manipulation"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
          
          <DonateButton 
            className="hidden md:inline-flex text-sm gradient-primary text-white px-6 py-3 rounded-full hover:shadow-glow-lg transition-all" 
            amount={500}
          >
            Donate Now
          </DonateButton>
        </nav>
        
        {/* Mobile Menu with better animations */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800 shadow-lg animate-in slide-in-from-top duration-300">
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              <Link 
                to="/" 
                className="py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-base"
                style={{color: '#FFFFFF', fontWeight: 'bold'}} 
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-base"
                style={{color: '#FFFFFF', fontWeight: 'bold'}} 
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link 
                to="/impact" 
                className="py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-base"
                style={{color: '#FFFFFF', fontWeight: 'bold'}} 
                onClick={closeMobileMenu}
              >
                Impact
              </Link>
              <Link 
                to="/get-involved" 
                className="py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-base"
                style={{color: '#FFFFFF', fontWeight: 'bold'}} 
                onClick={closeMobileMenu}
              >
                Get Involved
              </Link>
              <Link 
                to="/events" 
                className="py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-base"
                style={{color: '#FFFFFF', fontWeight: 'bold'}} 
                onClick={closeMobileMenu}
              >
                Events
              </Link>
              <Link 
                to="/gallery" 
                className="py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-base"
                style={{color: '#FFFFFF', fontWeight: 'bold'}} 
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
              <Link 
                to="/stories" 
                className="py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-base"
                style={{color: '#FFFFFF', fontWeight: 'bold'}} 
                onClick={closeMobileMenu}
              >
                Stories
              </Link>
              <Link 
                to="/contact" 
                className="py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-base"
                style={{color: '#FFFFFF', fontWeight: 'bold'}} 
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              
                {/* Mobile Donate CTA */}
                <div className="pt-4 mt-4 border-t border-gray-800">
                  <DonateButton 
                    className="w-full gradient-primary text-white py-4 px-4 rounded-full font-bold hover:shadow-glow-lg transition-all duration-300" 
                    amount={500}
                  >
                    Support Our Mission
                  </DonateButton>
                </div>
            </div>
          </div>
        )}
      </header>

      <main className="min-h-[calc(100vh-160px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Program Pages */}
          <Route path="/programs/paint-me-red" element={<PaintMeRedPage />} />
          <Route path="/programs/red-waste" element={<RedWastePage />} />
          <Route path="/programs/train-the-trainer" element={<TrainTheTrainerPage />} />
          <Route path="/programs/project-sachet" element={<ProjectSachetPage />} />
          
          {/* Admin Panel */}
          <Route path="/admin" element={<AdminDashboard />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

          <footer className="w-full border-t border-light-gray bg-gradient-to-br from-bg-alt to-light shadow-inner">
            <div className="container mx-auto px-6 py-12 flex flex-col md:flex-col space-y-8 text-center md:text-left">
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <p className="text-sm text-muted mb-2">
                © {new Date().getFullYear()} We The Change. All rights reserved.
              </p>
              <p className="text-sm text-muted">
                Empowering women across India and Africa.
              </p>
            </div>
            
                {/* Mobile footer CTA */}
                <div className="md:hidden">
                  <DonateButton 
                    className="gradient-primary text-white px-8 py-4 rounded-full font-bold hover:shadow-glow-lg transition-all w-full" 
                    amount={500}
                  >
                    Support Our Mission
                  </DonateButton>
                </div>
          </div>

          {/* Footer links with better mobile layout */}
          <div className="grid grid-cols-2 md:flex gap-4 md:gap-6 text-sm">
            <Link 
              to="/about" 
              className="hover:text-primary transition-colors py-2 md:py-0" 
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
            <Link 
              to="/impact" 
              className="hover:text-primary transition-colors py-2 md:py-0" 
              onClick={closeMobileMenu}
            >
              Our Impact
            </Link>
            <Link 
              to="/events" 
              className="hover:text-primary transition-colors py-2 md:py-0" 
              onClick={closeMobileMenu}
            >
              Events
            </Link>
            <Link 
              to="/gallery" 
              className="hover:text-primary transition-colors py-2 md:py-0" 
              onClick={closeMobileMenu}
            >
              Gallery
            </Link>
            <Link 
              to="/stories" 
              className="hover:text-primary transition-colors py-2 md:py-0" 
              onClick={closeMobileMenu}
            >
              Stories
            </Link>
            <Link 
              to="/contact" 
              className="hover:text-primary transition-colors py-2 md:py-0" 
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </div>

          {/* Additional footer info */}
          <div className="text-center md:text-left pt-6 border-t border-muted/20">
            <p className="text-xs text-muted">
              Registered as a Section 8 Company in India and trusted by communities across multiple states.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}



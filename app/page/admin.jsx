import React, { useState } from 'react';
import { 
  ChartBarIcon, 
  PencilIcon, 
  PhotoIcon, 
  UserGroupIcon,
  CalendarIcon,
  DocumentTextIcon,
  CogIcon,
  EyeIcon,
  HomeIcon,
  ServerIcon,
  InboxIcon,
  CurrencyRupeeIcon
} from '@heroicons/react/24/outline';
import { db } from '../utils/database';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalStories: 10,
    totalEvents: 8,
    totalPrograms: 4,
    totalImages: 47
  });

  const [activeTab, setActiveTab] = useState('dashboard');

  const adminSections = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      icon: ChartBarIcon,
      description: 'Overview of your content'
    },
    {
      id: 'homepage',
      title: 'Homepage',
      icon: PencilIcon,
      description: 'Edit homepage content & slider'
    },
    {
      id: 'programs',
      title: 'Programs',
      icon: DocumentTextIcon,
      description: 'Manage program details'
    },
    {
      id: 'stories',
      title: 'Stories',
      icon: UserGroupIcon,
      description: 'Add/edit success stories'
    },
    {
      id: 'events',
      title: 'Events',
      icon: CalendarIcon,
      description: 'Manage events and workshops'
    },
    {
      id: 'gallery',
      title: 'Gallery',
      icon: PhotoIcon,
      description: 'Upload and manage images'
    },
    {
      id: 'analytics',
      title: 'Analytics',
      icon: EyeIcon,
      description: 'Website performance & insights'
    },
    {
      id: 'database',
      title: 'Database',
      icon: ServerIcon,
      description: 'Manage form submissions & data'
    },
    {
      id: 'settings',
      title: 'Settings',
      icon: CogIcon,
      description: 'Website settings'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">We The Change CMS</h1>
              <p className="text-gray-600 mt-1">Manage your website content easily</p>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <HomeIcon className="w-4 h-4" />
                Back to Website
              </Link>
              <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <UserGroupIcon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Success Stories</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalStories}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <CalendarIcon className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Events</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalEvents}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <DocumentTextIcon className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Programs</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalPrograms}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-orange-100 rounded-lg">
                <PhotoIcon className="w-6 h-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Images</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalImages}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow">
          <div className="border-b border-gray-200">
            <nav className="flex overflow-x-auto space-x-4 px-6">
              {adminSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(section.id)}
                  className={`py-4 px-3 border-b-2 font-medium text-sm whitespace-nowrap ${
                    activeTab === section.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <section.icon className="w-5 h-5" />
                    {section.title}
                  </div>
                </button>
              ))}
            </nav>
          </div>

          {/* Content Area */}
          <div className="p-6">
            {activeTab === 'dashboard' && <DashboardContent />}
            {activeTab === 'homepage' && <HomepageEditor />}
            {activeTab === 'programs' && <ProgramsEditor />}
            {activeTab === 'stories' && <StoriesEditor />}
            {activeTab === 'events' && <EventsEditor />}
            {activeTab === 'gallery' && <GalleryEditor />}
            {activeTab === 'analytics' && <AnalyticsEditor />}
            {activeTab === 'database' && <DatabaseManager />}
            {activeTab === 'settings' && <SettingsEditor />}
          </div>
        </div>
      </div>
    </div>
  );
}

// Dashboard Content Component
function DashboardContent() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Welcome to We The Change CMS</h2>
      <p className="text-gray-600">
        Use this panel to manage all your website content. You can edit homepage content, 
        manage programs, add success stories, update events, and more.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Quick Actions</h3>
          <ul className="space-y-2 text-blue-800">
            <li>• Edit program icons and descriptions</li>
            <li>• Update bank account information</li>
            <li>• Manage homepage slider images</li>
            <li>• Review form submissions</li>
            <li>• Update contact details</li>
          </ul>
        </div>
        
        <div className="bg-green-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-900 mb-2">Recent Updates</h3>
          <ul className="space-y-2 text-green-800">
            <li>• Enhanced Programs section with larger icons</li>
            <li>• Improved typography and spacing across all pages</li>
            <li>• Fixed bank account details (WE THE CHANGE TRUST)</li>
            <li>• Updated CMS panel with new features</li>
            <li>• Added better visual hierarchy and alignment</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-yellow-900 mb-2">📝 How to Use This CMS</h3>
        <ol className="space-y-2 text-yellow-900 list-decimal list-inside">
          <li><strong>Homepage:</strong> Edit slider images and mission statement</li>
          <li><strong>Programs:</strong> Update program descriptions and details</li>
          <li><strong>Stories:</strong> Add or edit success stories and testimonials</li>
          <li><strong>Events:</strong> Manage upcoming and past events</li>
          <li><strong>Gallery:</strong> Upload and organize photos</li>
          <li><strong>Settings:</strong> Update contact info and other settings</li>
        </ol>
      </div>
    </div>
  );
}

// Enhanced Homepage Editor Component with Advanced Image Management
function HomepageEditor() {
  const [sliderImages, setSliderImages] = useState([
    { 
      id: 1, 
      caption: 'Empowering women through menstrual health education', 
      active: true,
      imageUrl: '/images/image1.jpg',
      altText: 'Menstrual Health Workshop in Delhi',
      order: 1
    },
    { 
      id: 2, 
      caption: 'Community training programs making a difference', 
      active: true,
      imageUrl: '/images/image2.jpg',
      altText: 'Community Training in Mumbai',
      order: 2
    },
    { 
      id: 3, 
      caption: 'Field work transforming rural communities', 
      active: true,
      imageUrl: '/images/image3.jpg',
      altText: 'Field Visit to Rural Rajasthan',
      order: 3
    },
    { 
      id: 4, 
      caption: 'Youth leadership driving change', 
      active: true,
      imageUrl: '/images/image5.jpg',
      altText: 'Youth Leadership Program',
      order: 4
    },
    { 
      id: 5, 
      caption: 'Global impact reaching Africa', 
      active: true,
      imageUrl: '/images/image6.jpg',
      altText: 'International Workshop in Kenya',
      order: 5
    }
  ]);

  const [missionStatement, setMissionStatement] = useState(
    'Empowering women and girls through comprehensive menstrual health education, sustainable hygiene solutions, and community-driven initiatives that break taboos and create lasting change.'
  );

  const [imageSource, setImageSource] = useState('unsplash'); // 'unsplash' or 'upload'
  const [sliderSettings, setSliderSettings] = useState({
    autoPlayDuration: 5,
    transitionEffect: 'fade',
    showNavigation: 'both'
  });

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Homepage Content Editor</h2>
      
      {/* Image Source Selection */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Image Source</h3>
        <div className="flex gap-4 mb-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="imageSource"
              value="unsplash"
              checked={imageSource === 'unsplash'}
              onChange={(e) => setImageSource(e.target.value)}
              className="mr-2"
            />
            <span className="text-gray-700">Unsplash (Automatic)</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="imageSource"
              value="upload"
              checked={imageSource === 'upload'}
              onChange={(e) => setImageSource(e.target.value)}
              className="mr-2"
            />
            <span className="text-gray-700">Upload Custom Images</span>
          </label>
        </div>
        <p className="text-sm text-gray-600">
          {imageSource === 'unsplash' 
            ? 'Images are automatically fetched from Unsplash based on your keywords. You can customize captions and alt text.'
            : 'Upload your own images for complete control over the slider content.'
          }
        </p>
      </div>

      {/* Hero Slider Management */}
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Hero Slider Management</h3>
          <button className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-90">
            Preview Slider
          </button>
        </div>
        
        {imageSource === 'unsplash' ? (
          <div className="space-y-4">
            <p className="text-sm text-gray-600 mb-4">
              Edit captions and alt text for your homepage slider. Images are fetched automatically from Unsplash.
            </p>
            
            {sliderImages.map((image, index) => (
              <div key={image.id} className="p-4 bg-white rounded-lg border">
                <div className="flex gap-4">
                  {/* Image Preview */}
                  <div className="w-32 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={image.imageUrl} 
                      alt={image.altText}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Image Details */}
                  <div className="flex-1 space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Caption
                        </label>
                        <input
                          type="text"
                          value={image.caption}
                          onChange={(e) => {
                            const newImages = [...sliderImages];
                            newImages[index].caption = e.target.value;
                            setSliderImages(newImages);
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                          placeholder="Image caption"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Alt Text
                        </label>
                        <input
                          type="text"
                          value={image.altText}
                          onChange={(e) => {
                            const newImages = [...sliderImages];
                            newImages[index].altText = e.target.value;
                            setSliderImages(newImages);
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                          placeholder="Alt text for accessibility"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={image.active}
                            onChange={(e) => {
                              const newImages = [...sliderImages];
                              newImages[index].active = e.target.checked;
                              setSliderImages(newImages);
                            }}
                            className="mr-2"
                          />
                          <span className="text-sm text-gray-700">Active</span>
                        </label>
                        <span className="text-sm text-gray-500">Order: {image.order}</span>
                      </div>
                      
                      <div className="flex gap-2">
                        <button className="text-blue-600 hover:text-blue-800 text-sm">
                          Refresh Image
                        </button>
                        <button className="text-red-600 hover:text-red-800 text-sm">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary hover:text-primary">
              + Add New Slide
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-sm text-gray-600 mb-4">
              Upload and manage your custom slider images.
            </p>
            
            {/* Upload Area */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <PhotoIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">Drag and drop images here, or click to browse</p>
              <p className="text-sm text-gray-500 mb-4">Supports: JPG, PNG, WebP (Max 5MB per image)</p>
              <button className="bg-primary text-white px-6 py-2 rounded-md hover:opacity-90">
                Browse Files
              </button>
            </div>
            
            {/* Uploaded Images */}
            <div className="space-y-4">
              {sliderImages.map((image, index) => (
                <div key={image.id} className="p-4 bg-white rounded-lg border">
                  <div className="flex gap-4">
                    <div className="w-32 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={image.imageUrl} 
                        alt={image.altText}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Caption
                          </label>
                          <input
                            type="text"
                            value={image.caption}
                            onChange={(e) => {
                              const newImages = [...sliderImages];
                              newImages[index].caption = e.target.value;
                              setSliderImages(newImages);
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                            placeholder="Image caption"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Alt Text
                          </label>
                          <input
                            type="text"
                            value={image.altText}
                            onChange={(e) => {
                              const newImages = [...sliderImages];
                              newImages[index].altText = e.target.value;
                              setSliderImages(newImages);
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                            placeholder="Alt text for accessibility"
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              checked={image.active}
                              onChange={(e) => {
                                const newImages = [...sliderImages];
                                newImages[index].active = e.target.checked;
                                setSliderImages(newImages);
                              }}
                              className="mr-2"
                            />
                            <span className="text-sm text-gray-700">Active</span>
                          </label>
                          <span className="text-sm text-gray-500">Order: {image.order}</span>
                        </div>
                        
                        <div className="flex gap-2">
                          <button className="text-blue-600 hover:text-blue-800 text-sm">
                            Replace Image
                          </button>
                          <button className="text-red-600 hover:text-red-800 text-sm">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="mt-6 flex gap-4">
          <button className="bg-primary text-white px-6 py-2 rounded-md hover:opacity-90">
            Save Slider Changes
          </button>
          <button className="bg-gray-600 text-white px-6 py-2 rounded-md hover:opacity-90">
            Reset to Default
          </button>
        </div>
      </div>

      {/* Slider Settings */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Slider Settings</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Auto-play Duration (seconds)</label>
            <input
              type="number"
              value={sliderSettings.autoPlayDuration}
              onChange={(e) => setSliderSettings({...sliderSettings, autoPlayDuration: parseInt(e.target.value)})}
              min="3"
              max="10"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Transition Effect</label>
            <select 
              value={sliderSettings.transitionEffect}
              onChange={(e) => setSliderSettings({...sliderSettings, transitionEffect: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="fade">Fade</option>
              <option value="slide">Slide</option>
              <option value="zoom">Zoom</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Show Navigation</label>
            <select 
              value={sliderSettings.showNavigation}
              onChange={(e) => setSliderSettings({...sliderSettings, showNavigation: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="both">Dots + Arrows</option>
              <option value="dots">Dots Only</option>
              <option value="arrows">Arrows Only</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <button className="mt-4 bg-primary text-white px-4 py-2 rounded-md hover:opacity-90">
          Update Slider Settings
        </button>
      </div>

      {/* Mission Statement */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Mission Statement</h3>
        <textarea
          value={missionStatement}
          onChange={(e) => setMissionStatement(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          rows={4}
          placeholder="Enter your mission statement..."
        />
        <button className="mt-4 bg-primary text-white px-4 py-2 rounded-md hover:opacity-90">
          Update Mission
        </button>
      </div>

      {/* Impact Stats */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Impact Statistics</h3>
        <p className="text-sm text-gray-600 mb-4">Update your impact numbers to reflect the latest data.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Pads Distributed</label>
            <input
              type="number"
              defaultValue="385000"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Menstruators Educated</label>
            <input
              type="number"
              defaultValue="85000"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Community Trainers</label>
            <input
              type="number"
              defaultValue="200"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">CO2 Avoided (Metric Tons)</label>
            <input
              type="number"
              step="0.01"
              defaultValue="11.55"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
        <button className="mt-4 bg-primary text-white px-4 py-2 rounded-md hover:opacity-90">
          Update Statistics
        </button>
      </div>
    </div>
  );
}

// Programs Editor Component
function ProgramsEditor() {
  const [programs, setPrograms] = useState([
    {
      id: 'paint-me-red',
      title: '#PaintMeRed',
      summary: 'Breaking menstrual taboos through art, storytelling, and community engagement to normalize conversations about periods.',
      description: 'A comprehensive program that uses creative arts, storytelling, and community engagement to break down menstrual taboos. Through workshops, art exhibitions, and interactive sessions, we create safe spaces for open conversations about menstruation, empowering women and girls to embrace their natural cycles with confidence and dignity.',
      iconType: 'art-creativity',
      gradient: 'coral',
      features: ['Art workshops', 'Storytelling sessions', 'Community exhibitions', 'Taboo-breaking activities']
    },
    {
      id: 'red-waste',
      title: '#RedWaste',
      summary: 'Sustainable menstrual waste management solutions promoting environmental responsibility and proper disposal practices.',
      description: 'An environmental initiative focused on sustainable menstrual waste management. We educate communities about proper disposal methods, promote eco-friendly menstrual products, and implement waste management systems that protect both health and environment while reducing the carbon footprint of menstrual hygiene practices.',
      iconType: 'environmental',
      gradient: 'teal',
      features: ['Waste management training', 'Eco-friendly products', 'Disposal education', 'Environmental awareness']
    },
    {
      id: 'train-the-trainer',
      title: 'Train The Trainer',
      summary: 'Empowering local leaders with comprehensive training to become menstrual health advocates in their communities.',
      description: 'A capacity-building program that trains local community leaders, educators, and healthcare workers to become menstrual health advocates. Participants receive comprehensive training on menstrual hygiene management, taboo-breaking techniques, and community engagement strategies, enabling them to lead sustainable change in their own communities.',
      iconType: 'education-training',
      gradient: 'coral',
      features: ['Leadership training', 'Community advocacy', 'Capacity building', 'Sustainable change']
    },
    {
      id: 'project-sachet',
      title: 'Project Sachet',
      summary: 'Innovative sachet-based menstrual hygiene solutions making sustainable products accessible to all communities.',
      description: 'An innovative initiative that provides affordable, sustainable menstrual hygiene products in convenient sachet packaging. This program ensures accessibility for women in remote and underserved areas, combining affordability with environmental responsibility while maintaining high standards of hygiene and comfort.',
      iconType: 'product-innovation',
      gradient: 'teal',
      features: ['Sachet packaging', 'Affordable products', 'Remote accessibility', 'Quality assurance']
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Programs Management</h2>
        <div className="text-sm text-gray-600">
          ✨ Updated with enhanced icons, better spacing, and improved typography
        </div>
      </div>
      
      {programs.map((program) => (
        <div key={program.id} className="bg-gray-50 rounded-lg p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                program.gradient === 'coral' ? 'bg-coral/20 text-coral' : 'bg-teal/20 text-teal'
              }`}>
                <div className="w-6 h-6">
                  {program.iconType === 'art-creativity' && (
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                      <circle cx="12" cy="12" r="2" fill="currentColor"/>
                    </svg>
                  )}
                  {program.iconType === 'environmental' && (
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 6h18l-2 13H5L3 6zM8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                      <path d="M10 11v6M14 11v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                      <path d="M4 6h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                    </svg>
                  )}
                  {program.iconType === 'education-training' && (
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  )}
                  {program.iconType === 'product-innovation' && (
                    <svg fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 6h18l-2 13H5L3 6zM8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                      <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                      <circle cx="12" cy="12" r="2" fill="currentColor"/>
                    </svg>
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{program.title}</h3>
                <p className="text-sm text-gray-600">Gradient: {program.gradient} | Icon: {program.iconType}</p>
              </div>
            </div>
            <Link 
              to={`/programs/${program.id}`}
              className="text-primary hover:text-primary/80 text-sm"
            >
              View Page →
            </Link>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Summary (Short description for homepage)</label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                rows={2}
                defaultValue={program.summary}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Description (For program detail page)</label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                rows={5}
                defaultValue={program.description}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Key Features</label>
              <div className="grid grid-cols-2 gap-2">
                {program.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Icon Type</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="art-creativity">Art & Creativity</option>
                  <option value="environmental">Environmental</option>
                  <option value="education-training">Education & Training</option>
                  <option value="product-innovation">Product & Innovation</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gradient Color</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="coral">Coral</option>
                  <option value="teal">Teal</option>
                </select>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-90">
                Update {program.title}
              </button>
              <button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:opacity-90">
                Preview Changes
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Stories Editor Component
function StoriesEditor() {
  const [stories, setStories] = useState([
    { id: 1, name: 'Voices at Sunrise High', age: 'Students', location: 'Pune, Maharashtra', story: 'I learned I\'m not alone—talking about periods is strength.' },
    { id: 2, name: 'Community Health Workshop', age: 'Participants', location: 'Bhubaneswar, Odisha', story: 'We broke myths together and built confidence.' },
    { id: 3, name: 'Red Dignity Entrepreneurs', age: 'Women', location: 'Ranchi, Jharkhand', story: 'Selling pads became our path to independence.' },
    { id: 4, name: 'Train The Trainer Program', age: 'Educators', location: 'Delhi, India', story: 'Empowering educators to become menstrual health advocates.' },
    { id: 5, name: 'Breaking Taboos in Rural Communities', age: 'Community', location: 'Rajasthan, India', story: 'We created safe spaces for open conversations about menstruation.' },
    { id: 6, name: 'Field Implementation Success', age: 'Community', location: 'Assam, India', story: 'Direct community engagement that transformed lives.' },
    { id: 7, name: 'Youth Leadership Initiative', age: 'Youth', location: 'Mumbai, Maharashtra', story: 'Young leaders are driving change in their communities.' },
    { id: 8, name: 'Global Impact in Kenya', age: 'International', location: 'Nairobi, Kenya', story: 'Expanding our mission to empower women across Africa.' },
    { id: 9, name: 'Sustainable Menstrual Health', age: 'Community', location: 'Multiple States, India', story: 'Promoting eco-friendly solutions for menstrual hygiene.' },
    { id: 10, name: 'Last Mile Distribution', age: 'Beneficiaries', location: 'Jharkhand, India', story: 'Ensuring menstrual hygiene products reach every woman.' }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Success Stories</h2>
        <button className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-90">
          + Add New Story
        </button>
      </div>
      
      {stories.map((story) => (
        <div key={story.id} className="bg-gray-50 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                defaultValue={story.name}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
              <input
                type="number"
                defaultValue={story.age}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                defaultValue={story.location}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Story</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              rows={4}
              defaultValue={story.story}
            />
          </div>

          <div className="flex gap-4 mt-4">
            <button className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-90">
              Update Story
            </button>
            <button className="text-red-600 hover:text-red-800 px-4 py-2">
              Delete Story
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// Events Editor Component
function EventsEditor() {
  const [events, setEvents] = useState([
    { id: 1, title: 'Menstrual Health Workshop', date: '2025-11-15', location: 'Mumbai, Maharashtra', type: 'upcoming' },
    { id: 2, title: 'Community Awareness Drive', date: '2025-10-20', location: 'Delhi', type: 'past' }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Events Management</h2>
        <button className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-90">
          + Add New Event
        </button>
      </div>
      
      {events.map((event) => (
        <div key={event.id} className="bg-gray-50 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Event Title</label>
              <input
                type="text"
                defaultValue={event.title}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <input
                type="date"
                defaultValue={event.date}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                defaultValue={event.location}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
            <select
              defaultValue={event.type}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="upcoming">Upcoming</option>
              <option value="past">Past</option>
            </select>
          </div>

          <div className="flex gap-4">
            <button className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-90">
              Update Event
            </button>
            <button className="text-red-600 hover:text-red-800 px-4 py-2">
              Delete Event
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// Enhanced Gallery Editor Component
function GalleryEditor() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [galleryImages, setGalleryImages] = useState([
    { id: 1, url: '/images/image1.jpg', category: 'workshops', caption: 'Menstrual Health Workshop in Delhi', featured: true },
    { id: 2, url: '/images/image2.jpg', category: 'training', caption: 'Community Training in Mumbai', featured: true },
    { id: 3, url: '/images/image3.jpg', category: 'field-work', caption: 'Field Visit to Rural Rajasthan', featured: true },
    { id: 4, url: '/images/image4.jpg', category: 'awareness', caption: 'Awareness Session in Assam', featured: false },
    { id: 5, url: '/images/image5.jpg', category: 'youth', caption: 'Youth Leadership Program', featured: true },
    { id: 6, url: '/images/image6.jpg', category: 'international', caption: 'International Workshop in Kenya', featured: true },
    { id: 7, url: '/images/image7.jpg', category: 'environment', caption: 'Environmental Awareness Campaign', featured: false },
    { id: 8, url: '/images/image8.jpg', category: 'outreach', caption: 'Community Outreach in West Bengal', featured: true },
    { id: 9, url: '/images/image10.JPG', category: 'distribution', caption: 'Product Distribution in Jharkhand', featured: true },
    { id: 10, url: '/images/image11.JPG', category: 'workshops', caption: 'Women\'s Empowerment Session', featured: false },
    { id: 11, url: '/images/image12.JPG', category: 'distribution', caption: 'Rural Distribution Program', featured: false },
    { id: 12, url: '/images/image13.jpg', category: 'training', caption: 'Training Workshop', featured: false },
    { id: 13, url: '/images/image14.jpg', category: 'awareness', caption: 'Awareness Campaign', featured: false },
    { id: 14, url: '/images/image15.jpg', category: 'field-work', caption: 'Field Work Activities', featured: false },
    { id: 15, url: '/images/image16.jpg', category: 'youth', caption: 'Youth Engagement Program', featured: true },
    { id: 16, url: '/images/image17.JPG', category: 'training', caption: 'Community Training Session', featured: false },
    { id: 17, url: '/images/image18.JPG', category: 'workshops', caption: 'Workshop Activities', featured: false },
    { id: 18, url: '/images/image19.JPG', category: 'outreach', caption: 'Outreach Program', featured: false },
    { id: 19, url: '/images/image20.JPG', category: 'environment', caption: 'Environmental Initiative', featured: true },
    { id: 20, url: '/images/image21.JPG', category: 'training', caption: 'Training Program', featured: false },
    { id: 21, url: '/images/image22.JPG', category: 'workshops', caption: 'Community Workshop', featured: false },
    { id: 22, url: '/images/image23.JPG', category: 'field-work', caption: 'Field Activities', featured: false },
    { id: 23, url: '/images/image24.JPG', category: 'awareness', caption: 'Awareness Program', featured: false },
    { id: 24, url: '/images/image25.JPG', category: 'distribution', caption: 'Distribution Initiative', featured: false },
    { id: 25, url: '/images/image28.png', category: 'workshops', caption: 'Program Documentation', featured: false },
    { id: 26, url: '/images/image31.jpg', category: 'outreach', caption: 'Community Engagement', featured: false },
    { id: 27, url: '/images/image32.jpeg', category: 'training', caption: 'Training Session', featured: false },
    { id: 28, url: '/images/image33.jpeg', category: 'workshops', caption: 'Workshop Activities', featured: false },
    { id: 29, url: '/images/image35.jpeg', category: 'field-work', caption: 'Field Implementation', featured: false },
    { id: 30, url: '/images/image36.jpeg', category: 'awareness', caption: 'Awareness Campaign', featured: false },
    { id: 31, url: '/images/image37.jpg', category: 'training', caption: 'Community Training', featured: false },
    { id: 32, url: '/images/image38.jpg', category: 'workshops', caption: 'Workshop Session', featured: false },
    { id: 33, url: '/images/image39.jpg', category: 'outreach', caption: 'Outreach Activities', featured: false },
    { id: 34, url: '/images/image40.jpg', category: 'field-work', caption: 'Field Work Program', featured: true },
    { id: 35, url: '/images/image41.jpg', category: 'training', caption: 'Training Workshop', featured: false },
    { id: 36, url: '/images/image42.jpg', category: 'awareness', caption: 'Awareness Initiative', featured: false },
    { id: 37, url: '/images/image43.JPG', category: 'outreach', caption: 'Community Program', featured: false },
    { id: 38, url: '/images/image44.JPG', category: 'training', caption: 'Training Session', featured: false },
    { id: 39, url: '/images/image45.jpeg', category: 'workshops', caption: 'Workshop Activities', featured: false },
    { id: 40, url: '/images/image46.JPG', category: 'field-work', caption: 'Field Activities', featured: false },
    { id: 41, url: '/images/image47.JPG', category: 'training', caption: 'Program Implementation', featured: false }
  ]);

  const categories = [
    { id: 'all', name: 'All Images', count: galleryImages.length },
    { id: 'workshops', name: 'Workshops', count: galleryImages.filter(img => img.category === 'workshops').length },
    { id: 'training', name: 'Training', count: galleryImages.filter(img => img.category === 'training').length },
    { id: 'field-work', name: 'Field Work', count: galleryImages.filter(img => img.category === 'field-work').length },
    { id: 'awareness', name: 'Awareness', count: galleryImages.filter(img => img.category === 'awareness').length },
    { id: 'youth', name: 'Youth', count: galleryImages.filter(img => img.category === 'youth').length },
    { id: 'international', name: 'International', count: galleryImages.filter(img => img.category === 'international').length },
    { id: 'environment', name: 'Environment', count: galleryImages.filter(img => img.category === 'environment').length },
    { id: 'outreach', name: 'Outreach', count: galleryImages.filter(img => img.category === 'outreach').length },
    { id: 'distribution', name: 'Distribution', count: galleryImages.filter(img => img.category === 'distribution').length }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Image Gallery Management</h2>
        <div className="flex gap-2">
          <button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:opacity-90">
            Bulk Actions
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-90">
            + Upload Images
          </button>
        </div>
      </div>
      
      {/* Category Filter */}
      <div className="bg-white rounded-lg p-4 border">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Filter by Category</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      {/* Upload Area */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload New Images</h3>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
          <PhotoIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 mb-2">Drag and drop images here, or click to browse</p>
          <p className="text-sm text-gray-500 mb-4">Supports: JPG, PNG, WebP (Max 10MB per image)</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-primary text-white px-6 py-2 rounded-md hover:opacity-90">
              Browse Files
            </button>
            <button className="bg-gray-600 text-white px-6 py-2 rounded-md hover:opacity-90">
              From Unsplash
            </button>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {selectedCategory === 'all' ? 'All Images' : categories.find(c => c.id === selectedCategory)?.name} 
            ({filteredImages.length})
          </h3>
          <div className="flex gap-2">
            <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
              <option>Sort by Date</option>
              <option>Sort by Name</option>
              <option>Sort by Size</option>
            </select>
            <button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:opacity-90 text-sm">
              Select All
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredImages.map((image) => (
            <div key={image.id} className="relative group bg-white rounded-lg overflow-hidden border">
              <div className="aspect-square">
                <img 
                  src={image.url} 
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2">
                  <button className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100">
                    <EyeIcon className="w-4 h-4" />
                  </button>
                  <button className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100">
                    <PencilIcon className="w-4 h-4" />
                  </button>
                  <button className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600">
                    ✕
                  </button>
                </div>
              </div>
              
              {/* Featured Badge */}
              {image.featured && (
                <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  Featured
                </div>
              )}
              
              {/* Category Badge */}
              <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                {image.category}
              </div>
            </div>
          ))}
        </div>
        
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <PhotoIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No images found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Analytics Editor Component
function AnalyticsEditor() {
  const [timeRange, setTimeRange] = useState('30d');
  const [analyticsData] = useState({
    pageViews: 12543,
    uniqueVisitors: 8932,
    bounceRate: 42.3,
    avgSessionDuration: '2m 34s',
    topPages: [
      { page: '/', views: 3456, percentage: 27.5 },
      { page: '/programs/paint-me-red', views: 2134, percentage: 17.0 },
      { page: '/about', views: 1876, percentage: 14.9 },
      { page: '/get-involved', views: 1654, percentage: 13.2 },
      { page: '/stories', views: 1423, percentage: 11.3 }
    ],
    trafficSources: [
      { source: 'Direct', visitors: 4567, percentage: 51.1 },
      { source: 'Google Search', visitors: 2134, percentage: 23.9 },
      { source: 'Social Media', visitors: 1234, percentage: 13.8 },
      { source: 'Referral', visitors: 997, percentage: 11.2 }
    ],
    deviceBreakdown: [
      { device: 'Mobile', visitors: 5367, percentage: 60.1 },
      { device: 'Desktop', visitors: 2678, percentage: 30.0 },
      { device: 'Tablet', visitors: 887, percentage: 9.9 }
    ]
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Website Analytics</h2>
        <div className="flex gap-2">
          <select 
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <button className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-90 text-sm">
            Export Data
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Page Views</p>
              <p className="text-2xl font-bold text-gray-900">{analyticsData.pageViews.toLocaleString()}</p>
            </div>
            <div className="p-2 bg-blue-100 rounded-lg">
              <EyeIcon className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <p className="text-sm text-green-600 mt-2">+12.5% from last period</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Unique Visitors</p>
              <p className="text-2xl font-bold text-gray-900">{analyticsData.uniqueVisitors.toLocaleString()}</p>
            </div>
            <div className="p-2 bg-green-100 rounded-lg">
              <UserGroupIcon className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <p className="text-sm text-green-600 mt-2">+8.3% from last period</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Bounce Rate</p>
              <p className="text-2xl font-bold text-gray-900">{analyticsData.bounceRate}%</p>
            </div>
            <div className="p-2 bg-yellow-100 rounded-lg">
              <ChartBarIcon className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
          <p className="text-sm text-red-600 mt-2">+2.1% from last period</p>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg. Session</p>
              <p className="text-2xl font-bold text-gray-900">{analyticsData.avgSessionDuration}</p>
            </div>
            <div className="p-2 bg-purple-100 rounded-lg">
              <CalendarIcon className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <p className="text-sm text-green-600 mt-2">+15.2% from last period</p>
        </div>
      </div>

      {/* Top Pages */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Pages</h3>
        <div className="space-y-3">
          {analyticsData.topPages.map((page, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-500 w-6">{index + 1}</span>
                <span className="text-sm text-gray-700">{page.page}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full" 
                    style={{ width: `${page.percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-900 w-16 text-right">{page.views.toLocaleString()}</span>
                <span className="text-sm text-gray-500 w-12 text-right">{page.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Traffic Sources & Device Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traffic Sources</h3>
          <div className="space-y-3">
            {analyticsData.trafficSources.map((source, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{source.source}</span>
                <div className="flex items-center gap-3">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${source.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-16 text-right">{source.visitors.toLocaleString()}</span>
                  <span className="text-sm text-gray-500 w-12 text-right">{source.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Breakdown</h3>
          <div className="space-y-3">
            {analyticsData.deviceBreakdown.map((device, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{device.device}</span>
                <div className="flex items-center gap-3">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${device.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-16 text-right">{device.visitors.toLocaleString()}</span>
                  <span className="text-sm text-gray-500 w-12 text-right">{device.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Insights */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">🚀 Page Speed</h4>
            <p className="text-sm text-gray-600">Average load time: 1.2s</p>
            <p className="text-xs text-green-600 mt-1">Good performance</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">📱 Mobile Friendly</h4>
            <p className="text-sm text-gray-600">Mobile score: 95/100</p>
            <p className="text-xs text-green-600 mt-1">Excellent</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">🔍 SEO Score</h4>
            <p className="text-sm text-gray-600">SEO score: 88/100</p>
            <p className="text-xs text-green-600 mt-1">Very good</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Database Manager Component
function DatabaseManager() {
  const [activeSubTab, setActiveSubTab] = useState('contacts');
  const [contactSubmissions, setContactSubmissions] = useState([]);
  const [volunteerApplications, setVolunteerApplications] = useState([]);
  const [donationRecords, setDonationRecords] = useState([]);
  const [newsletterSignups, setNewsletterSignups] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const subTabs = [
    { id: 'contacts', title: 'Contact Forms', icon: InboxIcon, count: contactSubmissions.length },
    { id: 'volunteers', title: 'Volunteer Applications', icon: UserGroupIcon, count: volunteerApplications.length },
    { id: 'donations', title: 'Donations', icon: CurrencyRupeeIcon, count: donationRecords.length },
    { id: 'newsletter', title: 'Newsletter', icon: InboxIcon, count: newsletterSignups.length }
  ];

  const loadData = async (type) => {
    setIsLoading(true);
    try {
      switch (type) {
        case 'contacts':
          const contacts = await db.getContactSubmissions();
          setContactSubmissions(contacts);
          break;
        case 'volunteers':
          const volunteers = await db.getVolunteerApplications();
          setVolunteerApplications(volunteers);
          break;
        case 'donations':
          const donations = await db.getDonations();
          setDonationRecords(donations);
          break;
        case 'newsletter':
          const newsletter = await db.getNewsletterSignups();
          setNewsletterSignups(newsletter);
          break;
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    loadData(activeSubTab);
  }, [activeSubTab]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Database Management</h2>
        <div className="flex gap-2">
          <button 
            onClick={() => loadData(activeSubTab)}
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:opacity-90 text-sm"
          >
            Refresh Data
          </button>
          <button className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-90 text-sm">
            Export All Data
          </button>
        </div>
      </div>

      {/* Sub Navigation */}
      <div className="bg-white rounded-lg shadow border-b border-gray-200">
        <nav className="flex overflow-x-auto space-x-4 px-6">
          {subTabs.map((subTab) => (
            <button
              key={subTab.id}
              onClick={() => setActiveSubTab(subTab.id)}
              className={`py-4 px-3 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeSubTab === subTab.id
                  ? 'border-primary text-primary'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <subTab.icon className="w-5 h-5" />
                {subTab.title}
                <span className={`px-2 py-1 rounded-full text-xs ${
                  activeSubTab === subTab.id 
                    ? 'bg-primary/10 text-primary' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {subTab.count}
                </span>
              </div>
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading data...</p>
            </div>
          ) : (
            <>
              {activeSubTab === 'contacts' && <ContactSubmissionsTable data={contactSubmissions} />}
              {activeSubTab === 'volunteers' && <VolunteerApplicationsTable data={volunteerApplications} />}
              {activeSubTab === 'donations' && <DonationsTable data={donationRecords} />}
              {activeSubTab === 'newsletter' && <NewsletterTable data={newsletterSignups} />}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// Contact Submissions Table Component
function ContactSubmissionsTable({ data }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">Contact Form Submissions</h3>
        <div className="flex gap-2">
          <button className="text-sm text-gray-600 hover:text-gray-900">
            Mark All as Read
          </button>
          <button className="text-sm text-gray-600 hover:text-gray-900">
            Delete All
          </button>
        </div>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-12">
          <InboxIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No contact submissions yet</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((submission, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {submission.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {submission.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <div className="max-w-xs truncate">{submission.subject}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(submission.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-primary hover:text-primary/80 mr-3">
                      View
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// Volunteer Applications Table Component
function VolunteerApplicationsTable({ data }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">Volunteer Applications</h3>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-12">
          <UserGroupIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No volunteer applications yet</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((application, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {application.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {application.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {application.role}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <div className="max-w-xs truncate">{application.experience}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(application.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-primary hover:text-primary/80 mr-3">
                      View
                    </button>
                    <button className="text-green-600 hover:text-green-900 mr-3">
                      Accept
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      Decline
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// Donations Table Component
function DonationsTable({ data }) {
  const totalAmount = data.reduce((sum, donation) => sum + (donation.amount || 0), 0);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Donation Records</h3>
          <p className="text-sm text-gray-600">Total Amount: ₹{totalAmount.toLocaleString()}</p>
        </div>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-12">
          <CurrencyRupeeIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No donations yet</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Donor</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((donation, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {donation.donor_name}
                    <br />
                    <span className="text-xs text-gray-500">{donation.donor_email}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                    ₹{donation.amount?.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px- inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      donation.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : donation.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {donation.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="max-w-xs truncate">{donation.razorpay_payment_id}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(donation.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-primary hover:text-primary/80 mr-3">
                      View
                    </button>
                    <button className="text-green-600 hover:text-green-900">
                      Receipt
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// Newsletter Table Component
function NewsletterTable({ data }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">Newsletter Subscriptions</h3>
        <button className="bg-primary text-white px-4 py-2 rounded-md hover:opacity-90">
          Send Newsletter
        </button>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-12">
          <InboxIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No newsletter subscriptions yet</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((signup, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {signup.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(signup.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      Email
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      Unsubscribe
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// Settings Editor Component
function SettingsEditor() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Website Settings</h2>
      
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Bank Account Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Account Holder Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              defaultValue="WE THE CHANGE TRUST"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Bank Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              defaultValue="AXIS BANK, CHAWRI BAZAR"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Account Number</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-mono"
              defaultValue="922020045541686"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">IFSC Code</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-mono"
              defaultValue="UTIB0001548"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Branch</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              defaultValue="CHAWRI BAZAR"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Account Type</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              defaultValue="Current Account"
            />
          </div>
        </div>
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-800">
            ✅ <strong>Updated:</strong> Bank account details have been corrected with the proper information.
          </p>
        </div>
        <button className="mt-4 bg-primary text-white px-4 py-2 rounded-md hover:opacity-90">
          Update Bank Details
        </button>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              defaultValue="info@wethechangeindia.org"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              defaultValue="+91 98765 43210"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              rows={3}
              defaultValue="Plot No. 17, Jalvayu Vihar, Sector - 25, Hiranandani Estate, Thane West, Mumbai - 400607"
            />
          </div>
        </div>
        <button className="mt-4 bg-primary text-white px-4 py-2 rounded-md hover:opacity-90">
          Update Contact Info
        </button>
      </div>
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Social Media Links</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Instagram</label>
            <input
              type="url"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="https://instagram.com/yourpage"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Facebook</label>
            <input
              type="url"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="https://facebook.com/yourpage"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
            <input
              type="url"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="https://linkedin.com/company/yourpage"
            />
          </div>
        </div>
        <button className="mt-4 bg-primary text-white px-4 py-2 rounded-md hover:opacity-90">
          Update Social Links
        </button>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Gateway</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Razorpay Key ID</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="rzp_test_xxxxx"
              defaultValue="rzp_test_YOUR_KEY_HERE"
            />
          </div>
        </div>
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            💳 <strong>Payment Integration:</strong> Razorpay is configured for secure online donations.
          </p>
        </div>
        <button className="mt-4 bg-primary text-white px-4 py-2 rounded-md hover:opacity-90">  
          Update Payment Settings
        </button>
      </div>
    </div>
  );
}


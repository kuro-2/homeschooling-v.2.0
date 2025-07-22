import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, Users, BarChart3, Activity, Home, ChevronDown } from 'lucide-react';
import Dashboard from './Dashboard';
import RecentActivity from './RecentActivity';

// Landing Page Component
function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/70"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#385cfc]/20 to-purple-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-teal-400/20 to-[#385cfc]/20 rounded-full blur-xl animate-float animation-delay-500"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-green-400/20 to-[#385cfc]/20 rounded-full blur-xl animate-pulse-slow"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="scroll-animate">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span className="text-[#385cfc]">Dumroo.AI</span>
              <br />
              <span className="text-[#141721]">Homeschooling</span>
              <br />
              <span className="bg-gradient-to-r from-[#385cfc] to-teal-500 bg-clip-text text-transparent">
                Revolution
              </span>
            </h1>
          </div>
          
          <div className="scroll-animate animation-delay-200">
            <p className="text-base xs:text-lg sm:text-xl lg:text-2xl text-[#02060d] mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              Transform your child's education with AI-powered personalized learning, 
              comprehensive curriculum management, and intelligent progress tracking.
            </p>
          </div>
          
          <div className="scroll-animate animation-delay-400 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <button className="w-full sm:w-auto bg-[#385cfc] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-[#3D67FF]/95 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl min-w-[140px]">
              Start Free Trial
            </button>
            <button className="w-full sm:w-auto border-2 border-[#385cfc] text-[#385cfc] px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-[#385cfc] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl min-w-[140px]">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-[#385cfc]/20 rounded-full blur-xl animate-float"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[#385cfc] scroll-animate">
              Revolutionary Features
            </h2>
            <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-[#030303] max-w-3xl mx-auto scroll-animate animation-delay-200 px-4">
              Discover how our AI-powered platform transforms traditional homeschooling into an engaging, personalized learning experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: BookOpen,
                title: "AI-Powered Curriculum",
                description: "Personalized learning paths that adapt to your child's pace, learning style, and interests.",
                color: "from-blue-500/10 to-[#385cfc]/10",
                iconColor: "text-[#385cfc]",
                borderColor: "border-blue-200/30"
              },
              {
                icon: BarChart3,
                title: "Smart Analytics",
                description: "Comprehensive progress tracking with detailed insights and performance analytics.",
                color: "from-green-400/20 to-teal-400/20",
                iconColor: "text-teal-600",
                borderColor: "border-teal-200/30"
              },
              {
                icon: Users,
                title: "Family Dashboard",
                description: "Centralized hub for parents to monitor progress, schedule lessons, and track achievements.",
                color: "from-purple-400/20 to-[#385cfc]/20",
                iconColor: "text-purple-600",
                borderColor: "border-blue-200/30"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`scroll-animate bg-white/70 backdrop-blur-sm rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border ${feature.borderColor} group`}
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <div className={`w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 sm:w-8 h-6 sm:h-8 ${feature.iconColor}`} />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-[#040404]">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-[#070707] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-[#385cfc]/20 to-green-400/20 rounded-full blur-xl animate-float animation-delay-700"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="scroll-animate">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[#385cfc]">
                About Dumroo.AI
              </h2>
              <p className="text-sm xs:text-base sm:text-lg text-[#000000] mb-4 sm:mb-6 leading-relaxed">
                We're revolutionizing homeschooling with cutting-edge AI technology that creates personalized learning experiences for every child. Our platform combines the flexibility of homeschooling with the power of artificial intelligence.
              </p>
              <p className="text-sm xs:text-base sm:text-lg text-[#000000] mb-6 sm:mb-8 leading-relaxed">
                Founded by educators and technologists, Dumroo.AI understands the unique challenges of homeschooling families and provides intelligent solutions that adapt to each child's learning journey.
              </p>
              <div className="flex flex-col xs:flex-row gap-3 xs:gap-4">
                <button className="bg-[#385cfc] text-white px-4 xs:px-6 py-2 xs:py-3 rounded-lg text-sm xs:text-base font-semibold hover:bg-[#3D67FF]/95 transition-all duration-300 hover:-translate-y-0.5">
                  Learn More
                </button>
                <button className="border border-[#385cfc] text-[#385cfc] px-4 xs:px-6 py-2 xs:py-3 rounded-lg text-sm xs:text-base font-semibold hover:bg-[#385cfc] hover:text-white transition-all duration-300 hover:-translate-y-0.5">
                  Our Story
                </button>
              </div>
            </div>
            
            <div className="scroll-animate animation-delay-300">
              <div className="relative">
                <div className="bg-gradient-to-br from-[#385cfc]/20 to-teal-400/20 rounded-2xl p-6 sm:p-8">
                  <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#385cfc]">Our Mission</h3>
                    <p className="text-sm sm:text-base text-[#f5f5f5] mb-4">
                      To empower families with intelligent, adaptive learning tools that make homeschooling more effective, engaging, and enjoyable for both parents and children.
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="w-8 sm:w-12 h-8 sm:h-12 bg-[#385cfc] rounded-full flex items-center justify-center">
                        <BookOpen className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-lg sm:text-xl font-bold text-[#385cfc]">10,000+</div>
                        <div className="text-xs sm:text-sm text-gray-600">Families Served</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Navigation Component
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Dashboard', path: '/dashboard', icon: BarChart3 },
    { name: 'Activity', path: '/activity', icon: Activity },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#385cfc] rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-[#385cfc]">Dumroo.AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'bg-[#385cfc] text-white'
                    : 'text-gray-700 hover:text-[#385cfc] hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-[#385cfc] hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'bg-[#385cfc] text-white'
                    : 'text-gray-700 hover:text-[#385cfc] hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="pt-16"> {/* Add padding-top to account for fixed navigation */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/activity" element={<RecentActivity />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
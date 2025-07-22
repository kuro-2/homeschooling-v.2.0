import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Users, BookOpen, Calendar, Sparkles, Star, ChevronRight, Brain, Target, BarChart3, Library, Clock, TrendingUp, Eye, Zap, UserPlus, FileText, Settings, Wand2, Award, PieChart, Activity, Plus, MessageCircle, Download, CheckCircle } from 'lucide-react';
import Dashboard from './Dashboard'; // Import the new Dashboard component
import RecentActivity from './RecentActivity'; // Import the new RecentActivity component

// Custom hook for scroll-triggered animations
const useScrollAnimation = (currentPage) => { // Accept currentPage as a prop
  React.useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.scroll-animate');

    // If navigating back to home, reset animations and re-observe
    if (currentPage === 'home') {
      animateElements.forEach((el) => {
        el.classList.remove('animate-in'); // Remove the class to reset animation
        observer.unobserve(el); // Unobserve before re-observing to prevent issues
        observer.observe(el); // Re-observe to trigger animation on scroll
      });
    } else {
      // For other pages, just observe if not already observed
      animateElements.forEach((el) => {
        observer.observe(el);
      });
    }


    return () => observer.disconnect();
  }, [currentPage]); // Re-run effect when currentPage changes
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Removed isDarkMode state, now always in light mode
  const [currentPage, setCurrentPage] = useState('home'); 
  
  // Initialize scroll animations, passing currentPage
  useScrollAnimation(currentPage);

  // useEffect to set the document title and favicon
  useEffect(() => {
    document.title = "Dumroo AI"; // Set the tab title

    // Create or update the favicon link
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    // Assuming the uploaded image is placed in the public folder and accessible via this path
    link.href = '/undefined - Imgur.png'; 
  }, []); // Empty dependency array ensures this runs once on mount

  // Data for various sections (kept in App.tsx as they are used in multiple places or are core to the landing page)
  const aboutFeatures = [
    {
      icon: Users,
      title: "Add a Student",
      description: "Simple onboarding process that creates personalized learning profiles for each student in minutes.",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-blue-600 to-blue-600"
    },
    {
      icon: BookOpen,
      title: "Syllabus AI",
      description: "Intelligent curriculum builder that structures comprehensive learning paths tailored to your educational goals.",
      image: "https://images.pexels.com/photos/8613297/pexels-photo-8613297.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-blue-600 to-teal-600"
    },
    {
      icon: Calendar,
      title: "Planning AI",
      description: "Smart scheduling that auto-plans lessons week-by-week with adaptable timelines that fit your family's rhythm.",
      image: "https://images.pexels.com/photos/8613202/pexels-photo-8613202.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-teal-600 to-blue-600"
    },
    {
      icon: Sparkles,
      title: "Personalize AI",
      description: "The magic of AI personalization—customized to each student's unique pace, learning style, and interests.",
      image: "https://images.pexels.com/photos/8613264/pexels-photo-8613264.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-blue-600 to-blue-600"
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI Curriculum Assistant",
      description: "Get personalized curriculum planning and lesson design assistance",
      gradient: "from-blue-400 to-blue-400"
    },
    {
      icon: Target,
      title: "Learning Path Designer",
      description: "Create customized learning paths for each child",
      gradient: "from-blue-600 to-blue-600"
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Monitor learning progress with detailed analytics",
      gradient: "from-teal-600 to-blue-600"
    },
    {
      icon: Library,
      title: "Resource Library",
      description: "Access curated educational resources and materials",
      gradient: "from-blue-600 to-teal-600"
    }
  ];

  const aiTools = [
    {
      title: "Syllabus AI",
      description: "Creates comprehensive curricula tailored to your student's grade level, learning objectives, and interests.",
      image: "/image1.png",
      features: [
        "Grade-appropriate content",
        "Subject integration",
        "Learning objective alignment",
        "Progress tracking"
      ],
      gradient: "from-blue-400 to-blue-400"
    },
    {
      title: "Planning AI",
      description: "Intelligent scheduling and lesson planning that adapts to your family's pace and learning goals.",
      image: "/image2.png",
      features: [
        "Adaptive scheduling",
        "Optimal learning paths",
        "Progress monitoring",
        "Resource suggestions"
      ],
      gradient: "from-blue-600 to-teal-600"
    },
    {
      title: "Personalize AI",
      description: "Customizes content delivery and learning experiences to match each student's unique learning style.",
      image: "/image3.png",
      features: [
        "Learning style adaptation",
        "Interest-based content",
        "Difficulty adjustment",
        "Engagement optimization"
      ],
      gradient: "from-blue-600 to-blue-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeschooling Mother of 3",
      content: "Dumroo.AI transformed our homeschooling journey. The AI-powered planning saved me hours every week and my kids are more engaged than ever.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Former Teacher, Now Homeschooling Dad",
      content: "As an educator, I'm impressed by how Dumroo.AI adapts to each child's learning style. It's like having a personal tutor for every subject.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Homeschooling Coordinator",
      content: "The syllabus AI is incredible. It created a comprehensive curriculum that would have taken me months to develop on my own.",
      rating: 5
    }
  ];

  // Modified handleNavLinkClick to support scrolling to specific sections on the home page
  const handleNavLinkClick = (pageId, sectionId = null) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false); // Close mobile menu on navigation

    if (pageId === 'home' && sectionId) {
      // If navigating to home and a specific section is provided, scroll to it
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100); // Small delay to allow state update and DOM rendering
    } else if (pageId === 'home' && !sectionId) {
        // If navigating to home without a specific section (e.g., clicking logo), scroll to hero
        setTimeout(() => {
            document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
  };

  return (
    <div className={`bg-gray-50 text-gray-900 overflow-x-hidden transition-colors duration-300`}>
      {/* Custom Scrollbar Styles */}
      <style>
        {`
        /* For Webkit browsers (Chrome, Safari) */
        ::-webkit-scrollbar {
          width: 8px; /* Width of the scrollbar */
        }

        ::-webkit-scrollbar-track {
          background: transparent; /* Color of the track */
        }

        ::-webkit-scrollbar-thumb {
          background-color: rgba(107, 114, 128, 0.3); /* Color of the scroll thumb */
          border-radius: 10px; /* Roundness of the scroll thumb */
          border: 2px solid transparent; /* Creates padding around the thumb */
          background-clip: content-box; /* Ensures border is outside the thumb */
        }

        ::-webkit-scrollbar-thumb:hover {
          background-color: rgba(107, 114, 128, 0.5); /* Color of the scroll thumb on hover */
        }

        /* For Firefox */
        html {
          scrollbar-width: thin; /* "auto" or "thin" */
          scrollbar-color: rgba(107, 114, 128, 0.3) transparent; /* thumb and track color */
        }
        `}
      </style>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full bg-[#3D67FF]/95 border-[#3D67FF] backdrop-blur-sm z-50 border-b transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              {/* Replaced Sparkles icon and text with image logo */}
              <img 
                src="/logo.png" // Path to your logo image
                alt="Dumroo AI Logo" 
                className="h-8 sm:h-10 w-auto cursor-pointer transition-transform duration-300 hover:scale-105" 
                onClick={() => handleNavLinkClick('home')}
              />
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {/* Updated navigation links to use handleNavLinkClick with sectionId */}
              <button onClick={() => handleNavLinkClick('home', 'about')} className={`text-white hover:text-blue-200 transition-all duration-300 hover:scale-105 relative group`}>
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-300 to-blue-300 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => handleNavLinkClick('home', 'how-it-works')} className={`text-white hover:text-blue-200 transition-all duration-300 hover:scale-105 relative group`}>
                How It Works
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-300 to-blue-300 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => handleNavLinkClick('home', 'ai-tools')} className={`text-white hover:text-blue-200 transition-all duration-300 hover:scale-105 relative group`}>
                AI Tools
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-300 to-blue-300 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => handleNavLinkClick('home', 'why-choose-us')} className={`text-white hover:text-blue-200 transition-all duration-300 hover:scale-105 relative group`}>
                Why Choose Us?
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-300 to-blue-300 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => handleNavLinkClick('home', 'testimonials')} className={`text-white hover:text-blue-200 transition-all duration-300 hover:scale-105 relative group`}>
                Testimonials
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-300 to-blue-300 group-hover:w-full transition-all duration-300"></span>
              </button>
              {/* New Navigation Links */}
              <button 
                onClick={() => handleNavLinkClick('dashboard')} 
                className={`text-white hover:text-blue-200 transition-all duration-300 hover:scale-105 relative group`}
              >
                Dashboard
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-300 to-blue-300 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button 
                onClick={() => handleNavLinkClick('recent-activity')} 
                className={`text-white hover:text-blue-200 transition-all duration-300 hover:scale-105 relative group`}
              >
                Activity
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-300 to-blue-300 group-hover:w-full transition-all duration-300"></span>
              </button>
              {/* End New Navigation Links */}
              {/* Changed Get Started button color to yellow */}
              <a href="https://dumroo.ai/login" className={`bg-yellow-400 hover:bg-yellow-500 text-[#f5f5f5] px-4 lg:px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-0.5`}>
                Get Started
              </a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 transform rotate-90 transition-transform duration-300" /> : <Menu className="w-6 h-6 transform hover:scale-110 transition-all duration-300" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className={`md:hidden bg-[#3D67FF] border-[#3D67FF] border-t transition-all duration-300 animate-slide-down`}>
            <div className="px-4 py-4 space-y-4">
              {/* Updated mobile navigation links */}
              <button onClick={() => handleNavLinkClick('home', 'about')} className={`block text-white hover:text-blue-200 transition-all duration-300 hover:translate-x-2 hover:scale-105`}>About Us</button>
              <button onClick={() => handleNavLinkClick('home', 'how-it-works')} className={`block text-white hover:text-blue-200 transition-all duration-300 hover:translate-x-2 hover:scale-105`}>How It Works</button>
              <button onClick={() => handleNavLinkClick('home', 'ai-tools')} className={`block text-white hover:text-blue-200 transition-all duration-300 hover:translate-x-2 hover:scale-105`}>AI Tools</button>
              <button onClick={() => handleNavLinkClick('home', 'why-choose-us')} className={`block text-white hover:text-blue-200 transition-all duration-300 hover:translate-x-2 hover:scale-105`}>Why Choose Us?</button>
              <button onClick={() => handleNavLinkClick('home', 'testimonials')} className={`block text-white hover:text-blue-200 transition-all duration-300 hover:translate-x-2 hover:scale-105`}>Testimonials</button>
              {/* New Mobile Navigation Links */}
              <button 
                onClick={() => handleNavLinkClick('dashboard')} 
                className={`flex items-center gap-2 text-white hover:text-blue-200 transition-all duration-300 hover:translate-x-2 hover:scale-105`}
              >
                <BarChart3 className="w-5 h-5" />
                Dashboard
              </button>
              <button 
                onClick={() => handleNavLinkClick('recent-activity')} 
                className={`flex items-center gap-2 text-white hover:text-blue-200 transition-all duration-300 hover:translate-x-2 hover:scale-105`}
              >
                <Activity className="w-5 h-5" />
                Recent Activity
              </button>
              {/* End New Mobile Navigation Links */}
              {/* Removed dark mode toggle button */}
              <a href="https://dumroo.ai/login" className="block w-full bg-gradient-to-r from-blue-400 to-blue-400 hover:from-blue-500 hover:to-blue-500 px-6 py-3 rounded-lg font-medium transition-all duration-300 text-center transform hover:scale-105 hover:shadow-lg text-white">
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area - Conditional Rendering */}
      {currentPage === 'home' && (
        <>
          {/* Hero Section */}
          <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-16 sm:py-20">
            {/* Improved background for both modes */}
            <div className={`absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white/40 to-blue-50/30 transition-all duration-500`}></div>
            
            {/* Subtle pattern overlay for light mode */}
            <div className={`absolute inset-0 bg-[url("https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1600")] bg-cover bg-center opacity-30 hover:scale-105 transition-transform duration-700`}></div>
            
            {/* Geometric shapes for visual interest in light mode */}
            <>
              <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-blue-200/20 rounded-full blur-xl animate-float"></div>
              <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-teal-200/20 rounded-full blur-xl animate-float animation-delay-300"></div>
              <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-teal-200/20 to-blue-200/20 rounded-full blur-xl animate-float animation-delay-500"></div>
            </>
            
            <div className="relative z-10 max-w-6xl mx-auto text-center w-full">
              <div className="space-y-8 scroll-animate">
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in-up px-2">
                  <span className={"text-black mb-2 block"}> {/* Added mb-2 and block */}
                    Empower Your
                  </span>
                  <span className={"text-[#385cfc]"}>
                    Homeschooling Journey
                  </span>
                </h1>
                
                <p className={`text-sm xs:text-base sm:text-lg md:text-xl text-[#02060d] max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200 px-4`}>
                  Transform your homeschooling experience with AI-powered tools designed specifically for homeschooling educators. From personalized curricula to adaptive lesson plans, we make quality education accessible and engaging.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8 animate-fade-in-up animation-delay-400 px-4">
                  <a href="https://dumroo.ai/login" className="w-full xs:w-auto sm:w-auto bg-gradient-to-r from-blue-400 to-blue-400 hover:from-blue-500 hover:to-blue-500 px-4 xs:px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white text-sm xs:text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group min-w-[140px]">
                    Get Started
                    <ArrowRight className="w-3 xs:w-4 sm:w-5 h-3 xs:h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <button className={`w-full xs:w-auto sm:w-auto border border-gray-300 hover:border-gray-500 hover:bg-gray-100 px-4 xs:px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm xs:text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-0.5 min-w-[140px]`}>
                    Watch Demo
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section id="about" className={`py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-gray-100 transition-colors duration-300 min-h-screen flex items-center`}> {/* Added min-h-screen and flex items-center */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16 scroll-animate">
                <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in-up px-2">
                  <span className={'text-[#3D67FF]'}>Everything You Need to</span>
                  <br />
                  <span className={"text-[#060606]"}>
                    Succeed
                  </span>
                </h2>
                <p className={`text-sm xs:text-base sm:text-lg md:text-xl text-[#02060d] max-w-4xl mx-auto animate-fade-in-up animation-delay-200 px-4`}>
                  Powerful tools and features designed specifically for homeschooling educators
                </p>
              </div>

              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {features.map((feature, index) => (
                  <div key={index} className={`bg-white/70 border-gray-200 hover:border-gray-300 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:-translate-y-2 group scroll-animate`} style={{animationDelay: `${index * 100}ms`}}>
                    <div className={`p-2 sm:p-3 lg:p-4 rounded-lg bg-gradient-to-r ${feature.gradient} w-fit mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <feature.icon className="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8 text-white" />
                    </div>
                    
                    <h3 className={`text-base sm:text-lg lg:text-xl font-bold text-[#3D67FF] mb-2 sm:mb-3 lg:mb-4 group-hover:text-blue-400 transition-colors duration-300`}>
                      {feature.title}
                    </h3>
                    
                    <p className={`text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed`}>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works Section with Visual Illustrations */}
          <section id="how-it-works" className={`min-h-screen flex items-center py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-100 to-white transition-colors duration-300`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16 scroll-animate">
                <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
                  <span className={'text-[#070707]'}>How It </span>
                  <span className={"text-[#3D67FF]"}>
                    Works
                  </span>
                </h2>
                <p className={`text-sm xs:text-base sm:text-lg md:text-xl text-[#02060d] max-w-4xl mx-auto px-4`}>
                  Get started with Dumroo.AI in four simple steps and transform your homeschooling experience
                </p>
              </div>

              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {/* Step 1: Add Student */}
                <div className="text-center scroll-animate">
                  <div className={`relative mx-auto w-24 xs:w-28 sm:w-32 h-24 xs:h-28 sm:h-32 mb-4 sm:mb-6 bg-white/80 rounded-full flex items-center justify-center border-2 sm:border-4 border-blue-200/30 hover:border-blue-400/50 transition-all duration-300 group`}>
                    {/* Animated background circles */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-200/20 to-blue-200/20 animate-pulse-slow"></div>
                    <div className="absolute inset-1 sm:inset-2 rounded-full bg-gradient-to-r from-blue-300/10 to-blue-300/10 group-hover:scale-110 transition-transform duration-300"></div>
                    
                    {/* Icon with number */}
                    <div className="relative z-10 flex flex-col items-center">
                      <UserPlus className="w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 text-blue-400 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-xs font-bold bg-gradient-to-r from-blue-400 to-blue-400 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">1</span>
                    </div>
                    
                    {/* Connecting line */}
                    <div className="hidden lg:block absolute top-1/2 -right-6 xl:-right-8 w-12 xl:w-16 h-0.5 bg-gradient-to-r from-blue-400/50 to-transparent"></div>
                  </div>
                  
                  <h3 className={`text-base sm:text-lg lg:text-xl font-bold text-[#3D67FF] mb-2 sm:mb-3 px-2`}>Add Student</h3>
                  <p className={`text-xs sm:text-sm text-gray-600 leading-relaxed px-2`}>
                    Create a personalized profile for your student with their learning preferences and goals
                  </p>
                </div>

                {/* Step 2: Generate Syllabus */}
                <div className="text-center scroll-animate animation-delay-200">
                  <div className={`relative mx-auto w-24 xs:w-28 sm:w-32 h-24 xs:h-28 sm:h-32 mb-4 sm:mb-6 bg-white/80 rounded-full flex items-center justify-center border-2 sm:border-4 border-blue-200/30 hover:border-blue-400/50 transition-all duration-300 group`}>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-teal-400/20 animate-pulse-slow animation-delay-100"></div>
                    <div className="absolute inset-1 sm:inset-2 rounded-full bg-gradient-to-r from-blue-500/10 to-teal-500/10 group-hover:scale-110 transition-transform duration-300"></div>
                    
                    <div className="relative z-10 flex flex-col items-center">
                      <FileText className="w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 text-blue-500 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-xs font-bold bg-gradient-to-r from-blue-600 to-teal-600 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">2</span>
                    </div>
                    
                    <div className="hidden lg:block absolute top-1/2 -right-6 xl:-right-8 w-12 xl:w-16 h-0.5 bg-gradient-to-r from-blue-400/50 to-transparent"></div>
                  </div>
                  
                  <h3 className={`text-base sm:text-lg lg:text-xl font-bold text-[#3D67FF] mb-2 sm:mb-3 px-2`}>Generate Syllabus</h3>
                  <p className={`text-xs sm:text-sm text-gray-600 leading-relaxed px-2`}>
                    AI creates a comprehensive curriculum tailored to your student's grade level and interests
                  </p>
                </div>

                {/* Step 3: Plan Lessons */}
                <div className="text-center scroll-animate animation-delay-300">
                  <div className={`relative mx-auto w-24 xs:w-28 sm:w-32 h-24 xs:h-28 sm:h-32 mb-4 sm:mb-6 bg-white/80 rounded-full flex items-center justify-center border-2 sm:border-4 border-teal-200/30 hover:border-teal-400/50 transition-all duration-300 group`}>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 to-blue-400/20 animate-pulse-slow animation-delay-200"></div>
                    <div className="absolute inset-1 sm:inset-2 rounded-full bg-gradient-to-r from-teal-500/10 to-blue-500/10 group-hover:scale-110 transition-transform duration-300"></div>
                    
                    <div className="relative z-10 flex flex-col items-center">
                      <Calendar className="w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 text-teal-500 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-xs font-bold bg-gradient-to-r from-teal-600 to-blue-600 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">3</span>
                    </div>
                    
                    <div className="hidden lg:block absolute top-1/2 -right-6 xl:-right-8 w-12 xl:w-16 h-0.5 bg-gradient-to-r from-blue-400/50 to-transparent"></div>
                  </div>
                  
                  <h3 className={`text-base sm:text-lg lg:text-xl font-bold text-[#3D67FF] mb-2 sm:mb-3 px-2`}>Plan Lessons</h3>
                  <p className={`text-xs sm:text-sm text-gray-600 leading-relaxed px-2`}>
                    Smart scheduling creates weekly lesson plans that adapt to your family's rhythm
                  </p>
                </div>

                {/* Step 4: Personalize Learning */}
                <div className="text-center scroll-animate animation-delay-400">
                  <div className={`relative mx-auto w-24 xs:w-28 sm:w-32 h-24 xs:h-28 sm:h-32 mb-4 sm:mb-6 bg-white/80 rounded-full flex items-center justify-center border-2 sm:border-4 border-blue-200/30 hover:border-blue-400/50 transition-all duration-300 group`}>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-200/20 to-blue-200/20 animate-pulse-slow animation-delay-300"></div>
                    <div className="absolute inset-1 sm:inset-2 rounded-full bg-gradient-to-r from-blue-300/10 to-blue-300/10 group-hover:scale-110 transition-transform duration-300"></div>
                    
                    <div className="relative z-10 flex flex-col items-center">
                      <Wand2 className="w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 text-blue-500 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-xs font-bold bg-gradient-to-r from-blue-400 to-blue-400 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">4</span>
                    </div>
                  </div>
                  
                  <h3 className={`text-base sm:text-lg lg:text-xl font-bold text-[#3D67FF] mb-2 sm:mb-3 px-2`}>Personalize</h3>
                  <p className={`text-xs sm:text-sm text-gray-600 leading-relaxed px-2`}>
                    AI continuously adapts content to match your student's learning style and pace
                  </p>
                </div>
              </div>

              {/* Call to action for this section */}
              <div className="text-center mt-8 sm:mt-12 lg:mt-16 scroll-animate animation-delay-500">
                <a href="https://dumroo.ai/login" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-400 to-blue-400 hover:from-blue-500 hover:to-blue-500 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 group">
                  Start Your Journey
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="ai-tools" className={`py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50 transition-colors duration-300 min-h-screen flex items-center`}> {/* Added min-h-screen and flex items-center */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16 scroll-animate">
                <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in-up px-2">
                  <span className={'text-[#000000]'}>Meet Your AI</span>
                  <br />
                  <span className={"text-[#3D67FF]"}>
                    Teaching Assistants
                  </span>
                </h2>
                <p className={`text-sm xs:text-base sm:text-lg md:text-xl text-[#02060d] max-w-4xl mx-auto animate-fade-in-up animation-delay-200 px-4`}>
                  Three specialized AI tools working together to create the perfect homeschooling experience for your family
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {aiTools.map((tool, index) => (
                  <div key={index} className={`bg-white/70 border-gray-200 hover:border-gray-300 backdrop-blur-sm rounded-xl overflow-hidden border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:-translate-y-3 group scroll-animate ${index === 2 && 'sm:col-span-2 lg:col-span-1'}`} style={{animationDelay: `${index * 150}ms`}}>
                    <div className="relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r ${tool.gradient} opacity-30`}></div>
                      <img 
                        src={tool.image} 
                        alt={tool.title}
                        className="w-full h-32 xs:h-36 sm:h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-2 sm:top-3 lg:top-4 left-2 sm:left-3 lg:left-4">
                        <div className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gradient-to-r ${tool.gradient} text-white text-xs sm:text-sm font-medium transform group-hover:scale-110 transition-all duration-300`}>
                          {tool.title}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 xs:p-4 sm:p-6 lg:p-8">
                      <h3 className={`text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-[#3D67FF] mb-2 sm:mb-3 lg:mb-4 group-hover:text-blue-400 transition-colors duration-300`}>
                        {tool.title}
                      </h3>
                      
                      <p className={`text-xs xs:text-sm lg:text-base text-gray-600 mb-3 sm:mb-4 lg:mb-6 leading-relaxed`}>
                        {tool.description}
                      </p>
                      
                      <div className="space-y-1.5 sm:space-y-2 lg:space-y-3">
                        <h4 className={`text-sm xs:text-base lg:text-lg font-semibold text-gray-900`}>Key Features:</h4>
                        <ul className="space-y-1 sm:space-y-1.5 lg:space-y-2">
                          {tool.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className={`flex items-center gap-1.5 sm:gap-2 lg:gap-3 text-xs xs:text-sm lg:text-base text-gray-600 group-hover:translate-x-1 transition-transform duration-300`} style={{transitionDelay: `${featureIndex * 50}ms`}}>
                              <div className={`w-1 xs:w-1.5 lg:w-2 h-1 xs:h-1.5 lg:h-2 rounded-full bg-gradient-to-r ${tool.gradient} group-hover:scale-125 transition-transform duration-300 flex-shrink-0`}></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section id="why-choose-us" className={`py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white transition-colors duration-300 min-h-screen flex items-center`}> {/* Added min-h-screen and flex items-center */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16 scroll-animate">
                <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in-up px-2">
                  <span className={'text-[#040404]'}>Why Homeschooling Educators</span>
                  <br />
                  <span className={"text-[#3D67FF]"}>
                    Love Dumroo AI
                  </span>
                </h2>
                <p className={`text-sm xs:text-base sm:text-lg md:text-xl text-[#02060d] max-w-4xl mx-auto animate-fade-in-up animation-delay-200 px-4`}>
                  See the impact our platform has on homeschooling success
                </p>
              </div>

              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <div className={`text-center bg-white/70 border-gray-200 hover:border-gray-300 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:-translate-y-2 group scroll-animate`}>
                  <div className="mb-4 sm:mb-6">
                    <div className={`text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300 text-[#141721]`}>
                      50%
                    </div>
                    <div className={`text-base sm:text-lg lg:text-xl font-semibold text-[#3D67FF] mb-1 sm:mb-2 group-hover:text-blue-400 transition-colors duration-300`}>
                      Time Saved
                    </div>
                    <p className={`text-xs sm:text-sm lg:text-base text-gray-600`}>
                      Reduce planning time by up to 50%
                    </p>
                  </div>
                  <div className="w-8 sm:w-12 lg:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-blue-400 to-blue-400 mx-auto rounded-full group-hover:w-12 sm:group-hover:w-16 lg:group-hover:w-20 transition-all duration-300"></div>
                </div>

                <div className={`text-center bg-white/70 border-gray-200 hover:border-gray-300 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:-translate-y-2 group scroll-animate animation-delay-100`}>
                  <div className="mb-4 sm:mb-6">
                    <div className={`text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300 text-[#141721]`}>
                      85%
                    </div>
                    <div className={`text-base sm:text-lg lg:text-xl font-semibold text-[#3D67FF] mb-1 sm:mb-2 group-hover:text-blue-400 transition-colors duration-300`}>
                      Better Outcomes
                    </div>
                    <p className={`text-xs sm:text-sm lg:text-base text-gray-600`}>
                      Improved learning results
                    </p>
                  </div>
                  <div className="w-8 sm:w-12 lg:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full group-hover:w-12 sm:group-hover:w-16 lg:group-hover:w-20 transition-all duration-300"></div>
                </div>

                <div className={`text-center bg-white/70 border-gray-200 hover:border-gray-300 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:-translate-y-2 group scroll-animate animation-delay-200`}>
                  <div className="mb-4 sm:mb-6">
                    <div className={`text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300 text-[#141721]`}>
                      90%
                    </div>
                    <div className={`text-base sm:text-lg lg:text-xl font-semibold text-[#3D67FF] mb-1 sm:mb-2 group-hover:text-teal-400 transition-colors duration-300`}>
                      Engagement
                    </div>
                    <p className={`text-xs sm:text-sm lg:text-base text-gray-600`}>
                      Increased student engagement
                    </p>
                  </div>
                  <div className="w-8 sm:w-12 lg:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full group-hover:w-12 sm:group-hover:w-16 lg:group-hover:w-20 transition-all duration-300"></div>
                </div>

                <div className={`text-center bg-white/70 border-gray-200 hover:border-gray-300 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:-translate-y-2 group scroll-animate animation-delay-300`}>
                  <div className="mb-4 sm:mb-6">
                    <div className={`text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300 text-[#141721]`}>
                      100%
                    </div>
                    <div className={`text-base sm:text-lg lg:text-xl font-semibold text-[#3D67FF] mb-1 sm:mb-2 group-hover:text-blue-400 transition-colors duration-300`}>
                      Personalization
                    </div>
                    <p className={`text-xs sm:text-sm lg:text-base text-gray-600`}>
                      Tailored learning experiences
                    </p>
                  </div>
                  <div className="w-8 sm:w-12 lg:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-blue-500 mx-auto rounded-full group-hover:w-12 sm:group-hover:w-16 lg:group-hover:w-20 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className={`py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50 transition-colors duration-300 min-h-screen flex items-center`}> {/* Added min-h-screen and flex items-center */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16 scroll-animate">
                <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in-up px-2">
                  <span className={'text-[#02060d]'}>Trusted by</span>
                  <br />
                  <span className={"text-[#3D67FF]"}>
                    Homeschooling Families
                  </span>
                </h2>
                <p className={`text-sm xs:text-base sm:text-lg md:text-xl text-[#000000] max-w-4xl mx-auto animate-fade-in-up animation-delay-200 px-4`}>
                  See how Dumroo.AI is transforming homeschooling experiences across the country
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className={`bg-white/70 border-gray-200 hover:border-gray-300 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 border transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:-translate-y-2 group scroll-animate ${index === 2 && 'sm:col-span-2 lg:col-span-1'}`} style={{animationDelay: `${index * 150}ms`}}>
                    <div className="flex items-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 xs:w-4 lg:w-5 h-3 xs:h-4 lg:h-5 text-yellow-400 fill-current hover:scale-125 transition-transform duration-300" style={{transitionDelay: `${i * 50}ms`}} />
                      ))}
                    </div>
                    
                    <p className={`text-xs xs:text-sm lg:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed`}>
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                      <div className="w-8 xs:w-10 lg:w-12 h-8 xs:h-10 lg:h-12 bg-gradient-to-r from-blue-400 to-blue-400 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 flex-shrink-0">
                        <span className="text-white font-bold text-xs xs:text-sm lg:text-lg">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className={`text-xs xs:text-sm lg:text-base font-semibold text-gray-900 group-hover:text-blue-400 transition-colors duration-300`}>{testimonial.name}</div>
                        <div className={`text-gray-500 text-xs lg:text-sm`}>{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className={`py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-100 via-gray-50 to-blue-100 transition-colors duration-300`}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-animate">
              <h2 className={`text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[#3D67FF] animate-fade-in-up px-2`}>
                Ready to Transform Your
                <br />
                <span className={"text-[#3D67FF]"}>
                  Homeschooling Journey?
                </span>
              </h2>
              
              <p className={`text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 px-4`}>
                Join thousands of families who've already discovered the power of AI-assisted homeschooling. Start your free trial today.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in-up animation-delay-400 px-4">
                <a href="https://dumroo.ai/login" className="w-full xs:w-auto sm:w-auto bg-gradient-to-r from-blue-400 to-blue-400 hover:from-blue-500 hover:to-blue-500 px-4 xs:px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white text-sm xs:text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group min-w-[140px]">
                  Get Started
                  <ArrowRight className="w-3 xs:w-4 sm:w-5 h-3 xs:h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <button className={`w-full xs:w-auto sm:w-auto border border-gray-300 hover:border-gray-500 hover:bg-gray-100 px-4 xs:px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm xs:text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-0.5 min-w-[140px]`}>
                  Schedule Demo
                </button>
              </div>
              
              <p className={`text-gray-500 mt-4 sm:mt-6 text-xs sm:text-sm animate-fade-in-up animation-delay-600 px-4`}>
                No credit card required • Free to start • Cancel anytime
              </p>
            </div>
          </section>
        </>
      )}

      {currentPage === 'dashboard' && <Dashboard />} {/* Pass false for isDarkMode */}
      {currentPage === 'recent-activity' && <RecentActivity />} {/* Pass false for isDarkMode */}

      {/* Footer */}
      <footer className={`py-8 sm:py-10 lg:py-12 transition-colors duration-300 bg-[#3D67FF] border-[#3D67FF]`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-4 sm:gap-x-6 lg:gap-x-8 mb-6 sm:mb-8">
            {/* Brand Section */}
            <div className="xs:col-span-2 md:col-span-1 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                {/* Replaced Sparkles icon and text with image logo */}
                <img 
                  src="/logo.png" // Path to your logo image
                  alt="Dumroo AI Logo" 
                  className="h-6 sm:h-8 w-auto transition-transform duration-300 hover:scale-105" 
                />
              </div>
              <p className={`text-blue-100 text-xs sm:text-sm leading-relaxed`}>
                Empowering homeschooling families with AI-powered educational tools for personalized learning experiences.
              </p>
            </div>

            {/* Contact Us Section */}
            <div>
              <h3 className={`text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base`}>Contact Us</h3>
              <ul className={`space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-blue-100`}>
                <li>405 Northfield Ave Ste 201,</li>
                <li>West Orange, NJ 07078</li>
                <li>
                  <a href="mailto:info@dumroo.ai" className={`hover:text-white transition-all duration-300 hover:translate-x-1`}>
                    info@dumroo.ai
                  </a>
                </li>
                <li>
                  <a href="tel:1-800-EDU-HELP" className={`hover:text-white transition-all duration-300 hover:translate-x-1`}>
                    1-800-EDU-HELP
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className={`text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base`}>Quick Links</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                <li><a href="#" className={`text-blue-100 hover:text-white transition-all duration-300 text-xs sm:text-sm hover:translate-x-1`}>About Us</a></li>
                <li><a href="https://dumroo.ai/news" className={`text-blue-100 hover:text-white transition-all duration-300 text-xs sm:text-sm hover:translate-x-1`}>News</a></li>
                <li><a href="https://dumroo.ai/blog" className={`text-blue-100 hover:text-white transition-all duration-300 text-xs sm:text-sm hover:translate-x-1`}>Blog</a></li>
                <li><a href="https://dumroo.ai/gallery" className={`text-blue-100 hover:text-white transition-all duration-300 text-xs sm:text-sm hover:translate-x-1`}>Gallery</a></li>
                <li><a href="https://dumroo.ai/contact" className={`text-blue-100 hover:text-white transition-all duration-300 text-xs sm:text-sm hover:translate-x-1`}>Contact</a></li>
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <h3 className={`text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base`}>Resources</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                <li><a href="https://dumroo.ai/academy" className={`text-blue-100 hover:text-white transition-all duration-300 text-xs sm:text-sm hover:translate-x-1`}>Dumroo Academy</a></li>
                <li><a href="https://pioneers.dumroo.ai/" className={`text-blue-100 hover:text-white transition-all duration-300 text-xs sm:text-sm hover:translate-x-1`}>Pioneer Teachers</a></li>
                <li><a href="https://dumroo.ai/privacy" className={`text-blue-100 hover:text-white transition-all duration-300 text-xs sm:text-sm hover:translate-x-1`}>Privacy Policy</a></li>
                <li><a href="https://qtiknlfjwgcshfrcqznk.supabase.co/storage/v1/object/sign/companyassets/Terms%20of%20Service%20v1.0.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjb21wYW55YXNzZXRzL1Rlcm1zIG9mIFNlcnZpY2UgdjEuMC5wZGYiLCJpYXQiOjE3NDIyMDAxNTIsImV4cCI6MTgwNTI3MjE1Mn0.X1MgpS7g3Zj1Mpe513as_KMH5ak_pIWBNUQaEcE8aOo" className={`text-blue-100 hover:text-white transition-all duration-300 text-xs sm:text-sm hover:translate-x-1`}>Terms of Service</a></li>
                <li><a href="https://help.dumroo.ai/" className={`text-blue-100 hover:text-white transition-all duration-300 text-xs sm:text-sm hover:translate-x-1`}>Help Center</a></li>
              </ul>
            </div>

            {/* Connect With Us & Newsletter */}
            <div className="lg:col-span-1">
              {/* Connect With Us */}
              <h3 className={`text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base`}>Connect With Us</h3>
              <div className="flex space-x-4 mb-6 sm:mb-8">
                <a href="https://www.facebook.com/people/Dumrooai-AI-Ecosystem-for-Education/61571653776425/" target="_blank" rel="noopener noreferrer" className={`text-blue-100 hover:text-white transition-all duration-300 transform hover:scale-125`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.208 8.167h-2.125c-.23 0-.417.187-.417.417v1.667h2.5l-.333 2.5h-2.167v6.667h-2.5V12.75h-2.167v-2.5h2.167V8.5c0-1.795 1.455-3.25 3.25-3.25h2.125v2.917z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/dumroo.ai/#" target="_blank" rel="noopener noreferrer" className={`text-blue-100 hover:text-white transition-all duration-300 transform hover:scale-125`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 0C8.74 0 8.333.014 7.053.072 5.775.132 4.905.333 4.043.633c-.878.327-1.745.997-2.484 1.735S.633 3.165.333 4.043C.033 4.905-.167 5.775-.227 7.053-.286 8.333-.3 8.74-.3 12s.014 3.26.072 4.538c.06 1.278.261 2.146.561 3.008.327.878.997 1.745 1.735 2.484s1.597 1.407 2.484 1.735c.862.3 1.73.501 3.008.561C8.74 24.3 9.147 24.3 12 24s3.26-.014 4.538-.072c1.278-.06 2.146-.261 3.008-.561.878-.327 1.745-.997 2.484-1.735s1.407-1.597 1.735-2.484c.3-.862.501-1.73.561-3.008C24.3 15.26 24.3 14.853 24.3 12s-.014-3.26-.072-4.538c-.06-1.278-.261-2.146-.561-3.008-.327-.878-.997-1.745-1.735-2.484S20.835.633 19.957.333C19.095.033 18.225-.167 16.947-.227 15.667-.286 15.26-.3 12-.3zm0 2.167c3.259 0 3.667.014 4.938.072 1.17.058 1.8.245 2.222.406.609.22.969.484 1.34.855.37.37.635.731.855 1.34.161.422.348 1.052.406 2.222.058 1.271.072 1.679.072 4.938s-.014 3.667-.072 4.938c-.058 1.17-.245 1.8-.406 2.222-.22.609-.484.969-.855 1.34-.37.37-.731.635-1.34.855-.422.161-1.052.348-2.222.406-1.271-.058-1.679-.072-4.938-.072s-3.667-.014-4.938-.072c-1.17-.058-1.8-.245-2.222-.406-.609-.22-.969-.484-1.34-.855-.37-.37-.635-.731-.855-1.34-.161-.422-.348-1.052-.406-2.222-.058-1.271-.072-1.679-.072-4.938s.014-3.667.072-4.538c.058-1.17.245-1.8.406-2.222.22-.609.484-.969.855-1.34.37-.37.731-.635 1.34-.855.422-.161 1.052-.348 2.222-.406C8.333 2.167 8.74 2.167 12 2.167zm0 3.667c-3.458 0-6.25 2.792-6.25 6.25s2.792 6.25 6.25 6.25 6.25-2.792 6.25-6.25-2.792-6.25-6.25-6.25zm0 2.167c2.257 0 4.083 1.826 4.083 4.083s-1.826 4.083-4.083 4.083-4.083-1.826-4.083-4.083S9.743 7.917 12 7.917zm6.292-5.75c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z"/>
                  </svg>
                </a>
                <a href="https://x.com/Damroo_AI" target="_blank" rel="noopener noreferrer" className={`text-blue-100 hover:text-white transition-all duration-300 transform hover:scale-125`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M18.901 1.153h3.682l-8.024 9.199L24 22.846h-7.406l-5.874-7.545L4.103 22.846H.337l8.62-9.873L0 1.153h8.21L13.4 8.683l5.501-7.53zM16.92 20.913h2.09L6.219 3.088H4.06L16.92 20.913z"/>
                  </svg>
                </a>
              </div>

              {/* Subscribe to Newsletter */}
              <h3 className={`text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base`}>Subscribe to Our Newsletter</h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className={`flex-1 p-2 rounded-md border bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300 text-sm`}
                />
                <button className=" bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-md font-medium text-white text-sm transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className={`pt-6 sm:pt-8 border-t border-[#374155] flex flex-col sm:flex-row justify-between items-center gap-4`}>
            <div className={`text-blue-100 text-xs sm:text-sm text-center sm:text-left`}>
              © 2025 Dumroo AI. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-3 sm:space-x-6 text-xs sm:text-sm">
              <a href="https://dumroo.ai/privacy" className={`text-blue-100 hover:text-white transition-all duration-300 hover:scale-105 whitespace-nowrap`}>Privacy Policy</a>
              <a href="https://qtiknlfjwgcshfrcqznk.supabase.co/storage/v1/object/sign/companyassets/Terms%20of%20Service%20v1.0.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjb21wYW55YXNzZXRzL1Rlcm1zIG9mIFNlcnZpY2UgdjEuMC5wZGYiLCJpYXQiOjE3NDIyMDAxNTIsImV4cCI6MTgwNTI3MjE1Mn0.X1MgpS7g3Zj1Mpe513as_KMH5ak_pIWBNUQaEcE8aOo" className={`text-blue-100 hover:text-white transition-all duration-300 hover:scale-105 whitespace-nowrap`}>Terms of Service</a>
              <a href="https://dumroo.ai/sitemap" className={`text-blue-100 hover:text-white transition-all duration-300 hover:scale-105 whitespace-nowrap`}>Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

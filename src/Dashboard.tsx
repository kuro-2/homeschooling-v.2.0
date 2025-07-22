import React from 'react';
import { BookOpen, FileText, Award, TrendingUp, PieChart, BarChart3, Clock, Zap, Target } from 'lucide-react';

function Dashboard({ isDarkMode }) {
  // Data for Key Metrics Cards
  const metrics = [
    { title: "Total Syllabi", value: "12", icon: BookOpen, color: "blue", change: "+2 this month" },
    { title: "Learning Assets", value: "248", icon: FileText, color: "green", change: "+15 this week" },
    { title: "Current GPA", value: "3.8", icon: Award, color: "purple", change: "+0.2 this term" },
    { title: "Engagement", value: "87%", icon: TrendingUp, color: "teal", change: "+5% this week" }
  ];

  return (
    <section className={`py-20 relative overflow-hidden ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      {/* Background Elements */}
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50/30 via-white/40 to-purple-50/30'}`}></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-full blur-xl animate-float animation-delay-500"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-xl animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 relative z-10">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-blue-800'}`}>
            Student Dashboard
          </h2>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-lg max-w-3xl mx-auto`}>
            Comprehensive insights and analytics to track your student's educational journey
          </p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative z-10">
          {metrics.map((metric, index) => (
            <div key={index} className={`${isDarkMode ? 'bg-white/10 border-gray-700' : 'bg-white/70 border-gray-200'} backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border`}>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                metric.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                metric.color === 'green' ? 'bg-green-100 text-green-600' :
                metric.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                'bg-teal-100 text-teal-600'
              }`}>
                <metric.icon className="w-6 h-6" />
              </div>
              <h3 className={`text-2xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{metric.value}</h3>
              <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{metric.title}</p>
              <p className={`text-xs font-medium ${
                metric.color === 'blue' ? 'text-blue-400' :
                metric.color === 'green' ? 'text-green-400' :
                metric.color === 'purple' ? 'text-purple-400' :
                'text-teal-400'
              }`}>{metric.change}</p>
            </div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 relative z-10">
          {/* Subject Distribution Chart */}
          <div className={`${isDarkMode ? 'bg-white/10 border-gray-700' : 'bg-white/70 border-gray-200'} backdrop-blur-sm rounded-xl p-6 shadow-lg border`}>
            <h3 className={`text-xl font-semibold mb-6 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <PieChart className="w-5 h-5 mr-2 text-blue-600" />
              Subject Distribution
            </h3>
            <div className="space-y-4">
              {[
                { subject: "Mathematics", percentage: 25, color: "bg-blue-500" },
                { subject: "Science", percentage: 20, color: "bg-green-500" },
                { subject: "Language Arts", percentage: 20, color: "bg-purple-500" },
                { subject: "History", percentage: 15, color: "bg-yellow-500" },
                { subject: "Arts", percentage: 12, color: "bg-blue-500" }, // Changed from pink to blue
                { subject: "Other", percentage: 8, color: "bg-gray-500" }
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-24 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.subject}</div>
                  <div className="flex-1 mx-4">
                    <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} w-full rounded-full h-2`}>
                      <div 
                        className={`h-2 rounded-full ${item.color}`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className={`w-12 text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.percentage}%</div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Plan Progress */}
          <div className={`${isDarkMode ? 'bg-white/10 border-gray-700' : 'bg-white/70 border-gray-200'} backdrop-blur-sm rounded-xl p-6 shadow-lg border`}>
            <h3 className={`text-xl font-semibold mb-6 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
              Learning Plan Progress
            </h3>
            <div className="space-y-4">
              {[
                { plan: "Algebra Fundamentals", progress: 85, status: "On Track" },
                { plan: "Biology Basics", progress: 72, status: "Ahead" },
                { plan: "Creative Writing", progress: 60, status: "On Track" },
                { plan: "World History", progress: 45, status: "Behind" },
                { plan: "Art Appreciation", progress: 90, status: "Complete" }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.plan}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.status === 'Complete' ? 'bg-green-100 text-green-800' :
                      item.status === 'Ahead' ? 'bg-blue-100 text-blue-800' :
                      item.status === 'On Track' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>{item.status}</span>
                  </div>
                  <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} w-full rounded-full h-2`}>
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        item.progress >= 90 ? 'bg-green-500' :
                        item.progress >= 70 ? 'bg-blue-500' :
                        item.progress >= 50 ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                  <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{item.progress}% Complete</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance and Engagement Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {/* Performance Trends */}
          <div className={`${isDarkMode ? 'bg-white/10 border-gray-700' : 'bg-white/70 border-gray-200'} backdrop-blur-sm rounded-xl p-6 shadow-lg border`}>
            <h3 className={`text-xl font-semibold mb-6 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <TrendingUp className="w-5 h-5 mr-2 text-purple-600" />
              Performance Trends
            </h3>
            <div className="space-y-4">
              {[
                { month: "Jan", score: 78 },
                { month: "Feb", score: 82 },
                { month: "Mar", score: 85 },
                { month: "Apr", score: 88 },
                { month: "May", score: 91 }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.month}</span>
                  <div className="flex items-center space-x-2">
                    <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} w-20 rounded-full h-2`}>
                      <div 
                        className="h-2 bg-purple-500 rounded-full"
                        style={{ width: `${item.score}%` }}
                      ></div>
                    </div>
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} w-8`}>{item.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Student Performance */}
          <div className={`${isDarkMode ? 'bg-white/10 border-gray-700' : 'bg-white/70 border-gray-200'} backdrop-blur-sm rounded-xl p-6 shadow-lg border`}>
            <h3 className={`text-xl font-semibold mb-6 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <Award className="w-5 h-5 mr-2 text-yellow-600" />
              Student Performance
            </h3>
            <div className="space-y-4">
              {[
                { category: "Assignments", score: 92, grade: "A-" },
                { category: "Quizzes", score: 88, grade: "B+" },
                { category: "Projects", score: 95, grade: "A" },
                { category: "Participation", score: 87, grade: "B+" },
                { category: "Overall", score: 90, grade: "A-" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.category}</span>
                  <div className="flex items-center space-x-3">
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.score}%</span>
                    <span className={`text-sm font-bold px-2 py-1 rounded ${
                      item.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                      item.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>{item.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Engagement Metrics */}
          <div className={`${isDarkMode ? 'bg-white/10 border-gray-700' : 'bg-white/70 border-gray-200'} backdrop-blur-sm rounded-xl p-6 shadow-lg border`}>
            <h3 className={`text-xl font-semibold mb-6 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <Activity className="w-5 h-5 mr-2 text-teal-600" />
              Engagement Metrics
            </h3>
            <div className="space-y-4">
              {[
                { metric: "Daily Login", value: "95%", trend: "up" },
                { metric: "Time on Task", value: "4.2h", trend: "up" },
                { metric: "Completion Rate", value: "89%", trend: "stable" },
                { metric: "Discussion Posts", value: "12", trend: "up" },
                { metric: "Help Requests", value: "3", trend: "down" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.metric}</span>
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.value}</span>
                    <div className={`w-2 h-2 rounded-full ${
                      item.trend === 'up' ? 'bg-green-500' :
                      item.trend === 'down' ? 'bg-red-500' :
                      'bg-yellow-500'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;

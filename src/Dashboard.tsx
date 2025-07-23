import React from 'react';
import { BookOpen, FileText, Award, TrendingUp, PieChart, BarChart3, Clock, Zap, Target, Activity } from 'lucide-react'; // Added Activity to import

function Dashboard() { // Removed isDarkMode prop
  // Data for Key Metrics Cards
  const metrics = [
    { title: "Total Syllabi", value: "12", icon: BookOpen, color: "#385cfc", change: "+2 this month" }, // Changed color to #385cfc
    { title: "Learning Assets", value: "248", icon: FileText, color: "green", change: "+15 this week" },
    { title: "Current GPA", value: "3.8", icon: Award, color: "purple", change: "+0.2 this term" },
    { title: "Engagement", value: "87%", icon: TrendingUp, color: "teal", change: "+5% this week" }
  ];

  return (
    <section className={`py-20 relative overflow-hidden bg-gray-50 text-gray-900 transition-colors duration-300 min-h-screen flex items-center`}> {/* Removed isDarkMode conditional class, added min-h-screen and flex items-center */}
      {/* Background Elements */}
      
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"> {/* Added w-full to make it take full width */}
         {/* Removed isDarkMode conditional class, added min-h-screen and flex items-center */}
        <div className="text-center mb-12 relative z-10">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#385cfc]`}> {/* Changed text-blue-800 to #385cfc */}
            Student Dashboard
          </h2>
          <p className={`text-gray-600 text-lg max-w-3xl mx-auto`}> {/* Removed isDarkMode conditional class */}
            Comprehensive insights and analytics to track your student's educational journey
          </p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative z-10">
          {metrics.map((metric, index) => (
            <div key={index} className={`bg-white/70 border-gray-200 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border h-full flex flex-col`}> {/* Removed isDarkMode conditional class, added h-full and flex flex-col */}
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                metric.color === '#385cfc' ? 'bg-blue-100 text-[#385cfc]' : // Changed blue-600 to #385cfc
                metric.color === 'green' ? 'bg-green-100 text-green-600' :
                metric.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                'bg-teal-100 text-teal-600'
              }`}>
                <metric.icon className="w-6 h-6" />
              </div>
              <h3 className={`text-2xl font-bold mb-1 text-gray-900`}>{metric.value}</h3> {/* Removed isDarkMode conditional class */}
              <p className={`text-sm mb-2 text-gray-600`}>{metric.title}</p> {/* Removed isDarkMode conditional class */}
              <p className={`text-xs font-medium ${
                metric.color === '#385cfc' ? 'text-[#385cfc]' : // Changed blue-400 to #385cfc
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
          <div className={`bg-white/70 border-gray-200 backdrop-blur-sm rounded-xl p-6 shadow-lg border h-full flex flex-col`}> {/* Removed isDarkMode conditional class, added h-full and flex flex-col */}
            <h3 className={`text-xl font-semibold mb-6 flex items-center text-gray-900`}> {/* Removed isDarkMode conditional class */}
              <PieChart className="w-5 h-5 mr-2 text-[#385cfc]" /> {/* Changed blue-600 to #385cfc */}
              Subject Distribution
            </h3>
            <div className="space-y-4 flex-grow"> {/* Added flex-grow */}
              {[
                { subject: "Mathematics", percentage: 25, color: "bg-[#385cfc]" }, // Changed bg-blue-500 to bg-[#385cfc]
                { subject: "Science", percentage: 20, color: "bg-green-500" },
                { subject: "Language Arts", percentage: 20, color: "bg-purple-500" },
                { subject: "History", percentage: 15, color: "bg-yellow-500" },
                { subject: "Arts", percentage: 12, color: "bg-[#385cfc]" }, // Changed bg-blue-500 to bg-[#385cfc]
                { subject: "Other", percentage: 8, color: "bg-gray-500" }
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-24 text-sm text-gray-600`}>{item.subject}</div> {/* Removed isDarkMode conditional class */}
                  <div className="flex-1 mx-4">
                    <div className={`bg-gray-200 w-full rounded-full h-2`}> {/* Removed isDarkMode conditional class */}
                      <div 
                        className={`h-2 rounded-full ${item.color}`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className={`w-12 text-sm font-medium text-gray-900`}>{item.percentage}%</div> {/* Removed isDarkMode conditional class */}
                </div>
              ))}
            </div>
          </div>

          {/* Learning Plan Progress */}
          <div className={`bg-white/70 border-gray-200 backdrop-blur-sm rounded-xl p-6 shadow-lg border h-full flex flex-col`}> {/* Removed isDarkMode conditional class, added h-full and flex flex-col */}
            <h3 className={`text-xl font-semibold mb-6 flex items-center text-gray-900`}> {/* Removed isDarkMode conditional class */}
              <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
              Learning Plan Progress
            </h3>
            <div className="space-y-4 flex-grow"> {/* Added flex-grow */}
              {[
                { plan: "Algebra Fundamentals", progress: 85, status: "On Track" },
                { plan: "Biology Basics", progress: 72, status: "Ahead" },
                { plan: "Creative Writing", progress: 60, status: "On Track" },
                { plan: "World History", progress: 45, status: "Behind" },
                { plan: "Art Appreciation", progress: 90, status: "Complete" }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className={`text-sm font-medium text-gray-900`}>{item.plan}</span> {/* Removed isDarkMode conditional class */}
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.status === 'Complete' ? 'bg-green-100 text-green-800' :
                      item.status === 'Ahead' ? 'bg-blue-100 text-[#385cfc]' : // Changed text-blue-800 to #385cfc
                      item.status === 'On Track' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>{item.status}</span>
                  </div>
                  <div className={`bg-gray-200 w-full rounded-full h-2`}> {/* Removed isDarkMode conditional class */}
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        item.progress >= 90 ? 'bg-green-500' :
                        item.progress >= 70 ? 'bg-[#385cfc]' : // Changed bg-blue-500 to bg-[#385cfc]
                        item.progress >= 50 ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                  <div className={`text-xs text-gray-500`}>{item.progress}% Complete</div> {/* Removed isDarkMode conditional class */}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance and Engagement Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
          {/* Performance Trends */}
          <div className={`bg-white/70 border-gray-200 backdrop-blur-sm rounded-xl p-6 shadow-lg border h-full flex flex-col`}> {/* Removed isDarkMode conditional class, added h-full and flex flex-col */}
            <h3 className={`text-xl font-semibold mb-6 flex items-center text-gray-900`}> {/* Removed isDarkMode conditional class */}
              <TrendingUp className="w-5 h-5 mr-2 text-purple-600" />
              Performance Trends
            </h3>
            <div className="space-y-4 flex-grow"> {/* Added flex-grow */}
              {[
                { month: "Jan", score: 78 },
                { month: "Feb", score: 82 },
                { month: "Mar", score: 85 },
                { month: "Apr", score: 88 },
                { month: "May", score: 91 }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className={`text-sm text-gray-600`}>{item.month}</span> {/* Removed isDarkMode conditional class */}
                  <div className="flex items-center space-x-2">
                    <div className={`bg-gray-200 w-20 rounded-full h-2`}> {/* Removed isDarkMode conditional class */}
                      <div 
                        className="h-2 bg-purple-500 rounded-full"
                        style={{ width: `${item.score}%` }}
                      ></div>
                    </div>
                    <span className={`text-sm font-medium text-gray-900 w-8`}>{item.score}</span> {/* Removed isDarkMode conditional class */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Student Performance */}
          <div className={`bg-white/70 border-gray-200 backdrop-blur-sm rounded-xl p-6 shadow-lg border h-full flex flex-col`}> {/* Removed isDarkMode conditional class, added h-full and flex flex-col */}
            <h3 className={`text-xl font-semibold mb-6 flex items-center text-gray-900`}> {/* Removed isDarkMode conditional class */}
              <Award className="w-5 h-5 mr-2 text-yellow-600" />
              Student Performance
            </h3>
            <div className="space-y-4 flex-grow"> {/* Added flex-grow */}
              {[
                { category: "Assignments", score: 92, grade: "A-" },
                { category: "Quizzes", score: 88, grade: "B+" },
                { category: "Projects", score: 95, grade: "A" },
                { category: "Participation", score: 87, grade: "B+" },
                { category: "Overall", score: 90, grade: "A-" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className={`text-sm text-gray-600`}>{item.category}</span> {/* Removed isDarkMode conditional class */}
                  <div className="flex items-center space-x-3">
                    <span className={`text-sm font-medium text-gray-900`}>{item.score}%</span> {/* Removed isDarkMode conditional class */}
                    <span className={`text-sm font-bold px-2 py-1 rounded ${
                      item.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                      item.grade.startsWith('B') ? 'bg-blue-100 text-[#385cfc]' : // Changed text-blue-800 to #385cfc
                      'bg-yellow-100 text-yellow-800'
                    }`}>{item.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Engagement Metrics */}
          <div className={`bg-white/70 border-gray-200 backdrop-blur-sm rounded-xl p-6 shadow-lg border h-full flex flex-col`}> {/* Removed isDarkMode conditional class, added h-full and flex flex-col */}
            <h3 className={`text-xl font-semibold mb-6 flex items-center text-gray-900`}> {/* Removed isDarkMode conditional class */}
              <Activity className="w-5 h-5 mr-2 text-teal-600" />
              Engagement Metrics
            </h3>
            <div className="space-y-4 flex-grow"> {/* Added flex-grow */}
              {[
                { metric: "Daily Login", value: "95%", trend: "up" },
                { metric: "Time on Task", value: "4.2h", trend: "up" },
                { metric: "Completion Rate", value: "89%", trend: "stable" },
                { metric: "Discussion Posts", value: "12", trend: "up" },
                { metric: "Help Requests", value: "3", trend: "down" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className={`text-sm text-gray-600`}>{item.metric}</span> {/* Removed isDarkMode conditional class */}
                  <div className="flex items-center space-x-2">
                    <span className={`text-sm font-medium text-gray-900`}>{item.value}</span> {/* Removed isDarkMode conditional class */}
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

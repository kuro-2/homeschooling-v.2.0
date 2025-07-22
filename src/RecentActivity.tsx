import React from 'react';
import { Award, Clock, CheckCircle, Star, FileText, Calendar, Zap, Target, Brain, BarChart3 } from 'lucide-react';

function RecentActivity() { // Removed isDarkMode prop
  return (
    <div className={`bg-gray-50 text-gray-900 transition-colors duration-300`}>
      {/* Recent Activity Section */}
      <section className={`py-20 bg-white min-h-screen flex items-center`}> {/* Added min-h-screen and flex items-center */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#385cfc]`}> {/* Removed isDarkMode conditional class */}
              Recent Activity
            </h2>
            <p className={`text-sm sm:text-base lg:text-lg max-w-3xl mx-auto text-gray-600 px-4`}> {/* Removed isDarkMode conditional class */}
              Stay updated with your student's latest achievements and activities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Recent Achievements */}
            <div className={`bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 sm:p-6 h-full flex flex-col`}> {/* Added h-full and flex flex-col */}
              <h3 className={`text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center text-gray-900`}> {/* Removed isDarkMode conditional class */}
                <Award className="w-5 h-5 mr-2 text-green-600" />
                Recent Achievements
              </h3>
              <div className="space-y-3 sm:space-y-4 flex-grow"> {/* Added flex-grow */}
                {[
                  { achievement: "Completed Algebra Chapter 5", date: "2 hours ago", type: "completion" },
                  { achievement: "Scored 95% on Biology Quiz", date: "1 day ago", type: "score" },
                  { achievement: "Submitted Creative Writing Essay", date: "2 days ago", type: "submission" },
                  { achievement: "Perfect Attendance This Week", date: "3 days ago", type: "attendance" }
                ].map((item, index) => (
                  <div key={index} className={`bg-white rounded-lg p-3 sm:p-4 flex items-center space-x-3 sm:space-x-4`}> {/* Removed isDarkMode conditional class */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      item.type === 'completion' ? 'bg-blue-100 text-[#385cfc]' :
                      item.type === 'score' ? 'bg-green-100 text-green-600' :
                      item.type === 'submission' ? 'bg-purple-100 text-purple-600' :
                      'bg-yellow-100 text-yellow-600'
                    }`}>
                      {item.type === 'completion' ? <CheckCircle className="w-4 h-4" /> :
                       item.type === 'score' ? <Star className="w-4 h-4" /> :
                       item.type === 'submission' ? <FileText className="w-4 h-4" /> :
                       <Calendar className="w-4 h-4" />}
                    </div>
                    <div className="flex-1">
                      <p className={`text-xs sm:text-sm font-medium text-gray-900`}>{item.achievement}</p> {/* Removed isDarkMode conditional class */}
                      <p className={`text-xs text-gray-500`}>{item.date}</p> {/* Removed isDarkMode conditional class */}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Tasks */}
            <div className={`bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 sm:p-6 h-full flex flex-col`}> {/* Added h-full and flex flex-col */}
              <h3 className={`text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center text-gray-900`}> {/* Removed isDarkMode conditional class */}
                <Clock className="w-5 h-5 mr-2 text-[#385cfc]" />
                Upcoming Tasks
              </h3>
              <div className="space-y-3 sm:space-y-4 flex-grow"> {/* Added flex-grow */}
                {[
                  { task: "Math Quiz - Quadratic Equations", due: "Tomorrow", priority: "high" },
                  { task: "Science Lab Report", due: "In 3 days", priority: "medium" },
                  { task: "History Essay Draft", due: "Next week", priority: "low" },
                  { task: "Art Project Presentation", due: "In 10 days", priority: "medium" }
                ].map((item, index) => (
                  <div key={index} className={`bg-white rounded-lg p-3 sm:p-4 flex items-center space-x-3 sm:space-x-4`}> {/* Removed isDarkMode conditional class */}
                    <div className={`w-3 h-3 rounded-full ${
                      item.priority === 'high' ? 'bg-red-500' :
                      item.priority === 'medium' ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className={`text-xs sm:text-sm font-medium text-gray-900`}>{item.task}</p> {/* Removed isDarkMode conditional class */}
                      <p className={`text-xs text-gray-500`}>Due: {item.due}</p> {/* Removed isDarkMode conditional class */}
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${
                      item.priority === 'high' ? 'bg-red-100 text-red-800' :
                      item.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {item.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Dashboard Widgets */}
      <section className={`py-20 bg-gray-50 min-h-screen flex items-center`}> {/* Added min-h-screen and flex items-center */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Study Time Analytics */}
            <div className={`bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg h-full flex flex-col`}> {/* Added h-full and flex flex-col */}
              <h3 className={`text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center text-gray-900`}> {/* Removed isDarkMode conditional class */}
                <Clock className="w-5 h-5 mr-2 text-[#385cfc]" />
                Study Time Analytics
              </h3>
              <div className="text-center mb-4 sm:mb-6">
                <div className={`text-3xl font-bold mb-2 text-[#385cfc]`}>4.2</div> {/* Removed isDarkMode conditional class */}
                <div className={`text-xs sm:text-sm text-gray-500`}>Hours Today</div> {/* Removed isDarkMode conditional class */}
              </div>
              <div className="space-y-2 sm:space-y-3 flex-grow"> {/* Added flex-grow */}
                {[
                  { day: "Mon", hours: 3.5 },
                  { day: "Tue", hours: 4.2 },
                  { day: "Wed", hours: 3.8 },
                  { day: "Thu", hours: 4.5 },
                  { day: "Fri", hours: 4.2 },
                  { day: "Sat", hours: 2.1 },
                  { day: "Sun", hours: 1.8 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className={`text-xs sm:text-sm text-gray-600`}>{item.day}</span> {/* Removed isDarkMode conditional class */}
                    <div className="flex items-center space-x-2">
                      <div className={`bg-gray-200 w-12 sm:w-16 rounded-full h-2`}> {/* Removed isDarkMode conditional class */}
                        <div 
                          className="h-2 bg-[#385cfc] rounded-full"
                          style={{ width: `${(item.hours / 5) * 100}%` }}
                        ></div>
                      </div>
                      <span className={`text-xs sm:text-sm font-medium text-gray-900 w-6 sm:w-8`}>{item.hours}h</span> {/* Removed isDarkMode conditional class */}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Streaks */}
            <div className={`bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg h-full flex flex-col`}> {/* Added h-full and flex flex-col */}
              <h3 className={`text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center text-gray-900`}> {/* Removed isDarkMode conditional class */}
                <Zap className="w-5 h-5 mr-2 text-orange-600" />
                Learning Streaks
              </h3>
              <div className="space-y-4 sm:space-y-6 flex-grow"> {/* Added flex-grow */}
                <div className="text-center">
                  <div className={`text-2xl sm:text-3xl font-bold mb-2 text-orange-600`}>15</div> {/* Removed isDarkMode conditional class */}
                  <div className={`text-xs sm:text-sm text-gray-500`}>Day Streak</div> {/* Removed isDarkMode conditional class */}
                  <div className={`text-xs text-gray-400`}>Keep it up!</div> {/* Removed isDarkMode conditional class */}
                </div>
                <div className="grid grid-cols-7 gap-1 justify-center">
                  {Array.from({ length: 21 }, (_, i) => (
                    <div key={i} className={`w-4 sm:w-6 h-4 sm:h-6 rounded ${
                      i < 15 ? 'bg-orange-500' : 'bg-gray-200' // Removed isDarkMode conditional class
                    }`}></div>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className={`text-xs sm:text-sm text-gray-600`}>Best Streak</span> {/* Removed isDarkMode conditional class */}
                    <span className={`text-xs sm:text-sm font-medium text-gray-900`}>23 days</span> {/* Removed isDarkMode conditional class */}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={`text-xs sm:text-sm text-gray-600`}>This Month</span> {/* Removed isDarkMode conditional class */}
                    <span className={`text-xs sm:text-sm font-medium text-gray-900`}>28/30 days</span> {/* Removed isDarkMode conditional class */}
                  </div>
                </div>
              </div>
            </div>

            {/* Goals & Milestones */}
            <div className={`bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg h-full flex flex-col md:col-span-2 lg:col-span-1`}> {/* Added h-full and flex flex-col */}
              <h3 className={`text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center text-gray-900`}> {/* Removed isDarkMode conditional class */}
                <Target className="w-5 h-5 mr-2 text-[#385cfc]" />
                Goals & Milestones
              </h3>
              <div className="space-y-3 sm:space-y-4 flex-grow"> {/* Added flex-grow */}
                {[
                  { goal: "Complete Algebra Course", progress: 75, target: "End of Term" },
                  { goal: "Read 20 Books", progress: 60, target: "This Year" },
                  { goal: "Science Fair Project", progress: 40, target: "Next Month" },
                  { goal: "Improve Writing Skills", progress: 85, target: "Ongoing" }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className={`text-xs sm:text-sm font-medium text-gray-900 flex-1 mr-2`}>{item.goal}</span> {/* Removed isDarkMode conditional class */}
                      <span className={`text-xs text-gray-500 whitespace-nowrap`}>{item.progress}%</span> {/* Removed isDarkMode conditional class */}
                    </div>
                    <div className={`bg-gray-200 w-full rounded-full h-2`}> {/* Removed isDarkMode conditional class */}
                      <div 
                        className="h-2 bg-[#385cfc] rounded-full transition-all duration-500"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                    <div className={`text-xs text-gray-500`}>Target: {item.target}</div> {/* Removed isDarkMode conditional class */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent/Educator Insights */}
      <section className={`py-20 bg-white min-h-screen flex items-center`}> {/* Added min-h-screen and flex items-center */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#385cfc]`}> {/* Removed isDarkMode conditional class */}
              Educator Insights
            </h2>
            <p className={`text-sm sm:text-base lg:text-lg max-w-3xl mx-auto text-gray-600 px-4`}> {/* Removed isDarkMode conditional class */}
              AI-powered recommendations and insights to optimize your student's learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* AI Recommendations */}
            <div className={`bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 sm:p-6 h-full flex flex-col`}> {/* Added h-full and flex flex-col */}
              <h3 className={`text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center text-gray-900`}> {/* Removed isDarkMode conditional class */}
                <Brain className="w-5 h-5 mr-2 text-[#385cfc]" />
                AI Recommendations
              </h3>
              <div className="space-y-3 sm:space-y-4 flex-grow"> {/* Added flex-grow */}
                {[
                  {
                    type: "Focus Area",
                    recommendation: "Consider additional practice in algebraic word problems",
                    confidence: "High",
                    action: "View Resources"
                  },
                  {
                    type: "Learning Style",
                    recommendation: "Student responds well to visual learning materials",
                    confidence: "Medium",
                    action: "Adjust Content"
                  },
                  {
                    type: "Schedule",
                    recommendation: "Peak learning time appears to be 10-11 AM",
                    confidence: "High",
                    action: "Optimize Schedule"
                  },
                  {
                    type: "Engagement",
                    recommendation: "Interactive science experiments boost engagement by 40%",
                    confidence: "High",
                    action: "Add Activities"
                  }
                ].map((item, index) => (
                  <div key={index} className={`bg-white rounded-lg p-3 sm:p-4`}> {/* Removed isDarkMode conditional class */}
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-medium text-[#385cfc] bg-purple-100 px-2 py-1 rounded whitespace-nowrap">
                        {item.type}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded ml-2 whitespace-nowrap ${
                        item.confidence === 'High' ? 'bg-green-100 text-green-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.confidence} Confidence
                      </span>
                    </div>
                    <p className={`text-xs sm:text-sm mb-3 text-gray-700`}>{item.recommendation}</p> {/* Removed isDarkMode conditional class */}
                    <button className={`text-xs font-medium text-purple-600 hover:text-purple-800`}> {/* Removed isDarkMode conditional class */}
                      {item.action} →
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Analytics */}
            <div className={`bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 sm:p-6 h-full flex flex-col`}> {/* Added h-full and flex flex-col */}
              <h3 className={`text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center text-gray-900`}> {/* Removed isDarkMode conditional class */}
                <BarChart3 className="w-5 h-5 mr-2 text-teal-600" />
                Learning Analytics
              </h3>
              <div className="space-y-4 sm:space-y-6 flex-grow"> {/* Added flex-grow */}
                <div className={`bg-white rounded-lg p-3 sm:p-4`}> {/* Removed isDarkMode conditional class */}
                  <h4 className={`text-xs sm:text-sm font-medium mb-3 text-gray-900`}>Comprehension Rate</h4> {/* Removed isDarkMode conditional class */}
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className={`bg-gray-200 w-full rounded-full h-3`}> {/* Removed isDarkMode conditional class */}
                        <div className="h-3 bg-teal-500 rounded-full" style={{ width: '87%' }}></div>
                      </div>
                    </div>
                    <span className={`text-xs sm:text-sm font-bold text-teal-600`}>87%</span> {/* Removed isDarkMode conditional class */}
                  </div>
                  <p className={`text-xs mt-2 text-gray-500`}>Above average for grade level</p> {/* Removed isDarkMode conditional class */}
                </div>

                <div className={`bg-white rounded-lg p-3 sm:p-4`}> {/* Removed isDarkMode conditional class */}
                  <h4 className={`text-xs sm:text-sm font-medium mb-3 text-gray-900`}>Retention Score</h4> {/* Removed isDarkMode conditional class */}
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className={`bg-gray-200 w-full rounded-full h-3`}> {/* Removed isDarkMode conditional class */}
                        <div className="h-3 bg-[#385cfc] rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                    <span className={`text-xs sm:text-sm font-bold text-[#385cfc]`}>92%</span> {/* Removed isDarkMode conditional class */}
                  </div>
                  <p className={`text-xs mt-2 text-gray-500`}>Excellent long-term retention</p> {/* Removed isDarkMode conditional class */}
                </div>

                <div className={`bg-white rounded-lg p-3 sm:p-4`}> {/* Removed isDarkMode conditional class */}
                  <h4 className={`text-xs sm:text-sm font-medium mb-3 text-gray-900`}>Problem Solving</h4> {/* Removed isDarkMode conditional class */}
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className={`bg-gray-200 w-full rounded-full h-3`}> {/* Removed isDarkMode conditional class */}
                        <div className="h-3 bg-[#385cfc] rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                    <span className={`text-xs sm:text-sm font-bold text-[#385cfc]`}>78%</span> {/* Removed isDarkMode conditional class */}
                  </div>
                  <p className={`text-xs mt-2 text-gray-500`}>Room for improvement</p> {/* Removed isDarkMode conditional class */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RecentActivity;
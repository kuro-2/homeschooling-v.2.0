import React from 'react';
import { Award, Clock, CheckCircle, Star, FileText, Calendar, Zap, Target, Brain, BarChart3 } from 'lucide-react';

function RecentActivity({ isDarkMode }) {
  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      {/* Recent Activity Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-blue-800'}`}>
              Recent Activity
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Stay updated with your student's latest achievements and activities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Achievements */}
            <div className={`${isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-green-50 to-green-100'} rounded-xl p-6`}>
              <h3 className={`text-xl font-semibold mb-6 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <Award className="w-5 h-5 mr-2 text-green-600" />
                Recent Achievements
              </h3>
              <div className="space-y-4">
                {[
                  { achievement: "Completed Algebra Chapter 5", date: "2 hours ago", type: "completion" },
                  { achievement: "Scored 95% on Biology Quiz", date: "1 day ago", type: "score" },
                  { achievement: "Submitted Creative Writing Essay", date: "2 days ago", type: "submission" },
                  { achievement: "Perfect Attendance This Week", date: "3 days ago", type: "attendance" }
                ].map((item, index) => (
                  <div key={index} className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg p-4 flex items-center space-x-4`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      item.type === 'completion' ? 'bg-blue-100 text-blue-600' :
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
                      <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.achievement}</p>
                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Tasks */}
            <div className={`${isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-blue-50 to-blue-100'} rounded-xl p-6`}>
              <h3 className={`text-xl font-semibold mb-6 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <Clock className="w-5 h-5 mr-2 text-blue-600" />
                Upcoming Tasks
              </h3>
              <div className="space-y-4">
                {[
                  { task: "Math Quiz - Quadratic Equations", due: "Tomorrow", priority: "high" },
                  { task: "Science Lab Report", due: "In 3 days", priority: "medium" },
                  { task: "History Essay Draft", due: "Next week", priority: "low" },
                  { task: "Art Project Presentation", due: "In 10 days", priority: "medium" }
                ].map((item, index) => (
                  <div key={index} className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg p-4 flex items-center space-x-4`}>
                    <div className={`w-3 h-3 rounded-full ${
                      item.priority === 'high' ? 'bg-red-500' :
                      item.priority === 'medium' ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.task}</p>
                      <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Due: {item.due}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
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
      <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Study Time Analytics */}
            <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
              <h3 className={`text-xl font-semibold mb-6 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <Clock className="w-5 h-5 mr-2 text-indigo-600" />
                Study Time Analytics
              </h3>
              <div className="text-center mb-6">
                <div className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>4.2</div>
                <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Hours Today</div>
              </div>
              <div className="space-y-3">
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
                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{item.day}</span>
                    <div className="flex items-center space-x-2">
                      <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} w-16 rounded-full h-2`}>
                        <div 
                          className="h-2 bg-indigo-500 rounded-full"
                          style={{ width: `${(item.hours / 5) * 100}%` }}
                        ></div>
                      </div>
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} w-8`}>{item.hours}h</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Streaks */}
            <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
              <h3 className={`text-xl font-semibold mb-6 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <Zap className="w-5 h-5 mr-2 text-orange-600" />
                Learning Streaks
              </h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`}>15</div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Day Streak</div>
                  <div className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>Keep it up!</div>
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 21 }, (_, i) => (
                    <div key={i} className={`w-6 h-6 rounded ${
                      i < 15 ? 'bg-orange-500' : (isDarkMode ? 'bg-gray-700' : 'bg-gray-200')
                    }`}></div>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Best Streak</span>
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>23 days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>This Month</span>
                    <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>28/30 days</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Goals & Milestones */}
            <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-xl p-6 shadow-lg`}>
              <h3 className={`text-xl font-semibold mb-6 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <Target className="w-5 h-5 mr-2 text-blue-600" />
                Goals & Milestones
              </h3>
              <div className="space-y-4">
                {[
                  { goal: "Complete Algebra Course", progress: 75, target: "End of Term" },
                  { goal: "Read 20 Books", progress: 60, target: "This Year" },
                  { goal: "Science Fair Project", progress: 40, target: "Next Month" },
                  { goal: "Improve Writing Skills", progress: 85, target: "Ongoing" }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.goal}</span>
                      <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{item.progress}%</span>
                    </div>
                    <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} w-full rounded-full h-2`}>
                      <div 
                        className="h-2 bg-blue-500 rounded-full transition-all duration-500"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                    <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Target: {item.target}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent/Educator Insights */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-blue-800'}`}>
              Educator Insights
            </h2>
            <p className={`text-lg max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              AI-powered recommendations and insights to optimize your student's learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AI Recommendations */}
            <div className={`${isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-purple-50 to-purple-100'} rounded-xl p-6`}>
              <h3 className={`text-xl font-semibold mb-6 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <Brain className="w-5 h-5 mr-2 text-purple-600" />
                AI Recommendations
              </h3>
              <div className="space-y-4">
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
                  <div key={index} className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg p-4`}>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded">
                        {item.type}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        item.confidence === 'High' ? 'bg-green-100 text-green-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.confidence} Confidence
                      </span>
                    </div>
                    <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item.recommendation}</p>
                    <button className={`text-xs font-medium ${isDarkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-800'}`}>
                      {item.action} →
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Analytics */}
            <div className={`${isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-700' : 'bg-gradient-to-br from-teal-50 to-teal-100'} rounded-xl p-6`}>
              <h3 className={`text-xl font-semibold mb-6 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <BarChart3 className="w-5 h-5 mr-2 text-teal-600" />
                Learning Analytics
              </h3>
              <div className="space-y-6">
                <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg p-4`}>
                  <h4 className={`text-sm font-medium mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Comprehension Rate</h4>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} w-full rounded-full h-3`}>
                        <div className="h-3 bg-teal-500 rounded-full" style={{ width: '87%' }}></div>
                      </div>
                    </div>
                    <span className={`text-sm font-bold ${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`}>87%</span>
                  </div>
                  <p className={`text-xs mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Above average for grade level</p>
                </div>

                <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg p-4`}>
                  <h4 className={`text-sm font-medium mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Retention Score</h4>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} w-full rounded-full h-3`}>
                        <div className="h-3 bg-blue-500 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                    <span className={`text-sm font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>92%</span>
                  </div>
                  <p className={`text-xs mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Excellent long-term retention</p>
                </div>

                <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg p-4`}>
                  <h4 className={`text-sm font-medium mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Problem Solving</h4>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} w-full rounded-full h-3`}>
                        <div className="h-3 bg-purple-500 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                    </div>
                    <span className={`text-sm font-bold ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>78%</span>
                  </div>
                  <p className={`text-xs mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Room for improvement</p>
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

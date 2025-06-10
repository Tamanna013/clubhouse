import React from 'react';
import Navbar from '../components/Navbar';
import StatCard from '../components/StatCard';
import { TrendingUp, Clock, Target, Lightbulb, Calendar, Users, Zap, Brain } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Area, AreaChart } from 'recharts';

const TrendPredictions = () => {
  const trendData = [
    { week: 'Week 1', ai: 85, crypto: 72, startup: 68, health: 45 },
    { week: 'Week 2', ai: 92, crypto: 78, startup: 71, health: 52 },
    { week: 'Week 3', ai: 88, crypto: 85, startup: 74, health: 58 },
    { week: 'Week 4', ai: 95, crypto: 82, startup: 77, health: 61 },
    { week: 'Week 5', ai: 98, crypto: 89, startup: 79, health: 65 },
    { week: 'Week 6', ai: 102, crypto: 94, startup: 82, health: 68 },
  ];

  const timingData = [
    { hour: '6AM', engagement: 25 },
    { hour: '9AM', engagement: 45 },
    { hour: '12PM', engagement: 75 },
    { hour: '3PM', engagement: 82 },
    { hour: '6PM', engagement: 95 },
    { hour: '9PM', engagement: 88 },
    { hour: '12AM', engagement: 35 },
  ];

  const upcomingTopics = [
    {
      topic: 'AI Regulation Summit',
      probability: 92,
      peakTime: '2:00 PM EST',
      expectedAudience: 1250,
      category: 'Technology',
      trend: 'up',
      keywords: ['AI Ethics', 'Government', 'Regulation']
    },
    {
      topic: 'Crypto Market Analysis',
      probability: 87,
      peakTime: '7:30 PM EST',
      expectedAudience: 980,
      category: 'Finance',
      trend: 'up',
      keywords: ['Bitcoin', 'Market Trends', 'DeFi']
    },
    {
      topic: 'Remote Work Future',
      probability: 79,
      peakTime: '11:00 AM EST',
      expectedAudience: 750,
      category: 'Business',
      trend: 'neutral',
      keywords: ['Hybrid Work', 'Productivity', 'Culture']
    },
    {
      topic: 'Mental Health Tech',
      probability: 74,
      peakTime: '4:00 PM EST',
      expectedAudience: 620,
      category: 'Health',
      trend: 'up',
      keywords: ['Wellness Apps', 'Therapy', 'Mindfulness']
    },
  ];

  const speakerRecommendations = [
    {
      name: 'Dr. Amanda Foster',
      expertise: 'AI Ethics',
      matchScore: 94,
      availability: 'High',
      avgEngagement: 89,
      followersGrowth: '+23%'
    },
    {
      name: 'Michael Chen',
      expertise: 'Blockchain',
      matchScore: 91,
      availability: 'Medium',
      avgEngagement: 86,
      followersGrowth: '+18%'
    },
    {
      name: 'Sarah Johnson',
      expertise: 'Remote Work',
      matchScore: 87,
      availability: 'High',
      avgEngagement: 84,
      followersGrowth: '+15%'
    },
  ];

  const partnerships = [
    { club1: 'Tech Innovators', club2: 'AI Researchers', synergy: 95, audience: 2400 },
    { club1: 'Startup Founders', club2: 'VC Network', synergy: 92, audience: 1950 },
    { club1: 'Crypto Traders', club2: 'DeFi Builders', synergy: 89, audience: 1750 },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Trend Predictions</h1>
          <p className="text-gray-300">AI-powered insights for upcoming conversations</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Prediction Accuracy"
            value="94.2%"
            change="+2.1% improvement"
            icon={Target}
            trend="up"
          />
          <StatCard
            title="Topics Identified"
            value="47"
            change="12 trending up"
            icon={Lightbulb}
            trend="up"
          />
          <StatCard
            title="Optimal Time Slots"
            value="6"
            change="Peak engagement"
            icon={Clock}
            trend="neutral"
          />
          <StatCard
            title="Partnership Opportunities"
            value="23"
            change="8 high-synergy matches"
            icon={Users}
            trend="up"
          />
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Topic Trend Forecast */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">Topic Trend Forecast</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="week" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(0,0,0,0.8)', 
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px'
                  }}
                />
                <Line type="monotone" dataKey="ai" stroke="#8b5cf6" strokeWidth={3} name="AI" />
                <Line type="monotone" dataKey="crypto" stroke="#3b82f6" strokeWidth={3} name="Crypto" />
                <Line type="monotone" dataKey="startup" stroke="#14b8a6" strokeWidth={3} name="Startup" />
                <Line type="monotone" dataKey="health" stroke="#f97316" strokeWidth={3} name="Health" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Optimal Timing */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">Optimal Room Timing</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={timingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="hour" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(0,0,0,0.8)', 
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="engagement" 
                  stroke="#8b5cf6" 
                  fill="#8b5cf6" 
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Upcoming Topics */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Upcoming Hot Topics</h3>
              <div className="flex items-center space-x-2 text-purple-400">
                <Brain className="w-4 h-4" />
                <span className="text-sm">AI Predictions</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {upcomingTopics.map((topic, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{topic.topic}</h4>
                        <p className="text-sm text-gray-300">{topic.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-400">{topic.probability}%</div>
                      <div className="text-xs text-gray-400">Probability</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                    <div>
                      <span className="text-gray-300">Peak Time: </span>
                      <span className="text-white font-medium">{topic.peakTime}</span>
                    </div>
                    <div>
                      <span className="text-gray-300">Expected: </span>
                      <span className="text-white font-medium">{topic.expectedAudience} listeners</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {topic.keywords.map((keyword, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Speaker Recommendations */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-6">Recommended Speakers</h3>
            <div className="space-y-4">
              {speakerRecommendations.map((speaker, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-white text-sm">{speaker.name}</h4>
                    <div className="text-green-400 font-bold">{speaker.matchScore}</div>
                  </div>
                  <p className="text-xs text-gray-300 mb-3">{speaker.expertise}</p>
                  
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Availability</span>
                      <span className={`font-medium ${
                        speaker.availability === 'High' ? 'text-green-400' : 
                        speaker.availability === 'Medium' ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {speaker.availability}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Engagement</span>
                      <span className="text-white font-medium">{speaker.avgEngagement}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Growth</span>
                      <span className="text-green-400 font-medium">{speaker.followersGrowth}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partnership Opportunities */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h3 className="text-lg font-semibold text-white mb-6">Club Partnership Opportunities</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {partnerships.map((partnership, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                    <span className="text-xs text-gray-400">+</span>
                    <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                  </div>
                  <h4 className="font-medium text-white text-sm">
                    {partnership.club1} × {partnership.club2}
                  </h4>
                </div>
                
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Synergy Score</span>
                    <span className="text-green-400 font-bold">{partnership.synergy}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Combined Audience</span>
                    <span className="text-white font-medium">{partnership.audience.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="mt-3 w-full h-2 bg-gray-600 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-600"
                    style={{ width: `${partnership.synergy}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendPredictions;
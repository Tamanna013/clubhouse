import React from 'react';
import Navbar from '../components/Navbar';
import StatCard from '../components/StatCard';
import { Crown, Users, TrendingUp, Award, Star, Network, MessageCircle, Zap } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const InfluenceMetrics = () => {
  const influenceData = [
    { subject: 'Authority', A: 120, fullMark: 150 },
    { subject: 'Engagement', A: 98, fullMark: 150 },
    { subject: 'Reach', A: 86, fullMark: 150 },
    { subject: 'Consistency', A: 99, fullMark: 150 },
    { subject: 'Network', A: 85, fullMark: 150 },
    { subject: 'Quality', A: 110, fullMark: 150 },
  ];

  const networkData = [
    { x: 95, y: 1250, z: 89, name: 'Sarah Chen' },
    { x: 88, y: 980, z: 76, name: 'Marcus Rodriguez' },
    { x: 82, y: 750, z: 68, name: 'Emily Zhang' },
    { x: 79, y: 620, z: 59, name: 'David Kim' },
    { x: 74, y: 480, z: 45, name: 'Lisa Wang' },
    { x: 71, y: 380, z: 38, name: 'Alex Johnson' },
  ];

  const topInfluencers = [
    {
      name: 'Sarah Chen',
      title: 'AI Research Director',
      score: 95,
      followers: 12500,
      avgListeners: 450,
      topics: ['AI', 'ML', 'Tech'],
      trend: 'up',
      growth: '+12%'
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Venture Partner',
      score: 88,
      followers: 9800,
      avgListeners: 380,
      topics: ['Startup', 'VC', 'Business'],
      trend: 'up',
      growth: '+8%'
    },
    {
      name: 'Emily Zhang',
      title: 'Crypto Analyst',
      score: 82,
      followers: 7500,
      avgListeners: 320,
      topics: ['Crypto', 'DeFi', 'Web3'],
      trend: 'up',
      growth: '+15%'
    },
    {
      name: 'David Kim',
      title: 'Product Manager',
      score: 79,
      followers: 6200,
      avgListeners: 280,
      topics: ['Product', 'UX', 'Design'],
      trend: 'neutral',
      growth: '+2%'
    },
  ];

  const clubMetrics = [
    { name: 'Tech Innovators Club', members: 15600, growth: '+24%', influence: 92 },
    { name: 'Startup Founders', members: 12400, growth: '+18%', influence: 88 },
    { name: 'Crypto Pioneers', members: 9800, growth: '+31%', influence: 85 },
    { name: 'Design Masters', members: 7200, growth: '+12%', influence: 79 },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Influence Metrics</h1>
          <p className="text-gray-300">Track speaker authority and network effects</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Top Influencer Score"
            value="95"
            change="Sarah Chen leads"
            icon={Crown}
            trend="up"
          />
          <StatCard
            title="Avg Authority Score"
            value="84.2"
            change="+3.1 this week"
            icon={Award}
            trend="up"
          />
          <StatCard
            title="Network Reach"
            value="47K"
            change="+12% growth"
            icon={Network}
            trend="up"
          />
          <StatCard
            title="Engagement Quality"
            value="8.9"
            change="Industry leading"
            icon={Star}
            trend="up"
          />
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Influence Radar */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">Influence Profile - Sarah Chen</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={influenceData}>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 12 }} />
                <PolarRadiusAxis tick={{ fill: '#9ca3af', fontSize: 10 }} />
                <Radar
                  name="Score"
                  dataKey="A"
                  stroke="#8b5cf6"
                  fill="#8b5cf6"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Network Analysis */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">Network Effect Analysis</h3>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart data={networkData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  type="number" 
                  dataKey="x" 
                  name="Authority Score"
                  stroke="#9ca3af"
                  domain={[60, 100]}
                />
                <YAxis 
                  type="number" 
                  dataKey="y" 
                  name="Followers"
                  stroke="#9ca3af"
                />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3' }}
                  content={({ active, payload }) => {
                    if (active && payload && payload[0]) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-black/80 p-3 rounded-lg border border-white/20">
                          <p className="text-white font-medium">{data.name}</p>
                          <p className="text-gray-300">Authority: {data.x}</p>
                          <p className="text-gray-300">Followers: {data.y}</p>
                          <p className="text-gray-300">Engagement: {data.z}%</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Scatter dataKey="z" fill="#8b5cf6" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Influencers */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-6">Top Influencers</h3>
            <div className="space-y-4">
              {topInfluencers.map((influencer, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{influencer.name[0]}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{influencer.name}</h4>
                        <p className="text-sm text-gray-300">{influencer.title}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2">
                        <div className="text-2xl font-bold text-white">{influencer.score}</div>
                        <div className="flex flex-col items-center">
                          <Zap className="w-4 h-4 text-yellow-400" />
                          <span className={`text-xs ${
                            influencer.trend === 'up' ? 'text-green-400' : 'text-gray-400'
                          }`}>
                            {influencer.growth}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div className="text-sm">
                      <span className="text-gray-300">Followers: </span>
                      <span className="text-white font-medium">{influencer.followers.toLocaleString()}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-gray-300">Avg Listeners: </span>
                      <span className="text-white font-medium">{influencer.avgListeners}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {influencer.topics.map((topic, i) => (
                      <span key={i} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Club Rankings */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-6">Top Clubs by Influence</h3>
            <div className="space-y-4">
              {clubMetrics.map((club, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-white text-sm">{club.name}</h4>
                    <div className="text-right">
                      <div className="text-lg font-bold text-white">{club.influence}</div>
                      <div className="text-xs text-green-400">{club.growth}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-1 text-gray-300">
                      <Users className="w-3 h-3" />
                      <span>{club.members.toLocaleString()} members</span>
                    </div>
                    <div className="w-12 h-2 bg-gray-600 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-600"
                        style={{ width: `${club.influence}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluenceMetrics;
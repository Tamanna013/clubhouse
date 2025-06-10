import React from 'react';
import Navbar from '../components/Navbar';
import StatCard from '../components/StatCard';
import AudioWave from '../components/AudioWave';
import { Users, Radio, Mic, TrendingUp, Clock, Globe } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const engagementData = [
    { time: '00:00', listeners: 120, speakers: 5 },
    { time: '04:00', listeners: 80, speakers: 3 },
    { time: '08:00', listeners: 250, speakers: 8 },
    { time: '12:00', listeners: 420, speakers: 12 },
    { time: '16:00', listeners: 380, speakers: 10 },
    { time: '20:00', listeners: 550, speakers: 15 },
  ];

  const topicData = [
    { name: 'Tech', value: 35, color: '#8b5cf6' },
    { name: 'Business', value: 25, color: '#3b82f6' },
    { name: 'Crypto', value: 20, color: '#14b8a6' },
    { name: 'Health', value: 12, color: '#f97316' },
    { name: 'Other', value: 8, color: '#6b7280' },
  ];

  const activeRooms = [
    { title: 'Web3 Future Discussions', speakers: 8, listeners: 234, duration: '2h 15m' },
    { title: 'Startup Pitch Night', speakers: 5, listeners: 167, duration: '1h 42m' },
    { title: 'AI Ethics Debate', speakers: 12, listeners: 312, duration: '3h 8m' },
    { title: 'Marketing Strategies 2025', speakers: 6, listeners: 89, duration: '45m' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>
          <p className="text-gray-300">Real-time insights from audio social platforms</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Active Listeners"
            value="12.4K"
            change="+15.3% from yesterday"
            icon={Users}
            trend="up"
          />
          <StatCard
            title="Live Rooms"
            value="47"
            change="+8 from last hour"
            icon={Radio}
            trend="up"
          />
          <StatCard
            title="Active Speakers"
            value="289"
            change="+12.1% this week"
            icon={Mic}
            trend="up"
          />
          <StatCard
            title="Engagement Score"
            value="8.7"
            change="+0.3 improvement"
            icon={TrendingUp}
            trend="up"
          />
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Engagement Chart */}
          <div className="lg:col-span-2 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">24-Hour Engagement</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(0,0,0,0.8)', 
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px'
                  }}
                />
                <Line type="monotone" dataKey="listeners" stroke="#8b5cf6" strokeWidth={3} />
                <Line type="monotone" dataKey="speakers" stroke="#3b82f6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Topic Distribution */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">Topic Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={topicData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name} ${value}%`}
                >
                  {topicData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Live Rooms and Audio Wave */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Live Rooms */}
          <div className="lg:col-span-2 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Live Rooms</h3>
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Live</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {activeRooms.map((room, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-white">{room.title}</h4>
                    <div className="flex items-center space-x-1 text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{room.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-300">
                    <div className="flex items-center space-x-1">
                      <Mic className="w-4 h-4" />
                      <span>{room.speakers} speakers</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{room.listeners} listeners</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Audio Visualization */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">Live Audio Activity</h3>
            <div className="space-y-6">
              <div className="text-center">
                <AudioWave height={80} color="#8b5cf6" />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Peak Activity</span>
                  <span className="text-white font-medium">8:47 PM</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Avg Room Size</span>
                  <span className="text-white font-medium">156 people</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Top Location</span>
                  <span className="text-white font-medium">San Francisco</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
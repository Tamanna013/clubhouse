import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import StatCard from '../components/StatCard';
import { Radio, Users, Clock, TrendingUp, Mic, Volume2, Filter } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const RoomAnalytics = () => {
  const [selectedRoom, setSelectedRoom] = useState('web3-future');

  const roomData = [
    { time: '20:00', listeners: 45, speakers: 3, engagement: 65 },
    { time: '20:15', listeners: 67, speakers: 4, engagement: 72 },
    { time: '20:30', listeners: 89, speakers: 5, engagement: 78 },
    { time: '20:45', listeners: 124, speakers: 6, engagement: 85 },
    { time: '21:00', listeners: 156, speakers: 7, engagement: 92 },
    { time: '21:15', listeners: 189, speakers: 8, engagement: 88 },
    { time: '21:30', listeners: 234, speakers: 8, engagement: 95 },
  ];

  const retentionData = [
    { segment: '0-5min', retention: 100 },
    { segment: '5-15min', retention: 85 },
    { segment: '15-30min', retention: 72 },
    { segment: '30-60min', retention: 58 },
    { segment: '60-90min', retention: 45 },
    { segment: '90min+', retention: 32 },
  ];

  const rooms = [
    { 
      id: 'web3-future', 
      title: 'Web3 Future Discussions', 
      speakers: 8, 
      listeners: 234, 
      duration: '2h 15m',
      category: 'Technology',
      engagement: 95
    },
    { 
      id: 'startup-pitch', 
      title: 'Startup Pitch Night', 
      speakers: 5, 
      listeners: 167, 
      duration: '1h 42m',
      category: 'Business',
      engagement: 88
    },
    { 
      id: 'ai-ethics', 
      title: 'AI Ethics Debate', 
      speakers: 12, 
      listeners: 312, 
      duration: '3h 8m',
      category: 'Technology',
      engagement: 92
    },
  ];

  const speakerStats = [
    { name: 'Sarah Chen', speakTime: '18m 32s', engagement: 94, topics: ['AI', 'Web3'] },
    { name: 'Marcus Rodriguez', speakTime: '15m 47s', engagement: 89, topics: ['Blockchain', 'DeFi'] },
    { name: 'Emily Zhang', speakTime: '12m 18s', engagement: 87, topics: ['Startup', 'Venture'] },
    { name: 'David Kim', speakTime: '9m 55s', engagement: 85, topics: ['Tech', 'Innovation'] },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Room Analytics</h1>
            <p className="text-gray-300">Deep dive into live room performance</p>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all duration-200">
            <Filter className="w-4 h-4" />
            <span>Filter Rooms</span>
          </button>
        </div>

        {/* Room Selection */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">Active Rooms</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {rooms.map((room) => (
              <div
                key={room.id}
                onClick={() => setSelectedRoom(room.id)}
                className={`cursor-pointer p-4 rounded-xl border transition-all duration-300 ${
                  selectedRoom === room.id
                    ? 'bg-white/20 border-purple-500 shadow-lg'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-white text-sm">{room.title}</h3>
                  <div className="flex items-center space-x-1 text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-300">
                  <span>{room.category}</span>
                  <span>{room.duration}</span>
                </div>
                <div className="flex items-center justify-between mt-2 text-xs">
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-300">{room.speakers} speakers</span>
                    <span className="text-gray-300">{room.listeners} listeners</span>
                  </div>
                  <span className="text-green-400 font-medium">{room.engagement}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Current Listeners"
            value="234"
            change="+23 in last 15min"
            icon={Users}
            trend="up"
          />
          <StatCard
            title="Active Speakers"
            value="8"
            change="Peak: 12 speakers"
            icon={Mic}
            trend="neutral"
          />
          <StatCard
            title="Avg Session Time"
            value="47m"
            change="+12% vs avg"
            icon={Clock}
            trend="up"
          />
          <StatCard
            title="Engagement Score"
            value="95%"
            change="Excellent rating"
            icon={TrendingUp}
            trend="up"
          />
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Real-time Activity */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">Real-time Activity</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={roomData}>
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
                <Line type="monotone" dataKey="engagement" stroke="#14b8a6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Audience Retention */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4">Audience Retention</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={retentionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="segment" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(0,0,0,0.8)', 
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px'
                  }}
                />
                <Area type="monotone" dataKey="retention" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Speaker Performance */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h3 className="text-lg font-semibold text-white mb-6">Speaker Performance</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {speakerStats.map((speaker, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium text-white">{speaker.name}</h4>
                  <div className="flex items-center space-x-1 text-gray-400">
                    <Volume2 className="w-4 h-4" />
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Speak Time</span>
                    <span className="text-white font-medium">{speaker.speakTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Engagement</span>
                    <span className="text-green-400 font-medium">{speaker.engagement}%</span>
                  </div>
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1">
                      {speaker.topics.map((topic, i) => (
                        <span key={i} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomAnalytics;
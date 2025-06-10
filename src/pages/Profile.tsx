import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { User, Phone, Mail, Calendar, Settings, Bell, Shield, Crown } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const userStats = {
    roomsHosted: 47,
    totalListeners: 12400,
    avgEngagement: 87,
    followersGrowth: '+23%'
  };

  const recentActivity = [
    { type: 'hosted', title: 'AI Ethics Discussion', listeners: 234, time: '2 hours ago' },
    { type: 'spoke', title: 'Startup Funding Panel', listeners: 189, time: '1 day ago' },
    { type: 'hosted', title: 'Tech Trends 2025', listeners: 156, time: '3 days ago' },
    { type: 'spoke', title: 'Remote Work Future', listeners: 98, time: '5 days ago' },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-white" />
              </div>
              
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-white mb-2">Sarah Chen</h1>
                <p className="text-gray-300 mb-4">AI Research Director • Premium Member</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">{userStats.roomsHosted}</div>
                    <div className="text-sm text-gray-300">Rooms Hosted</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">{userStats.totalListeners.toLocaleString()}</div>
                    <div className="text-sm text-gray-300">Total Listeners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-white">{userStats.avgEngagement}%</div>
                    <div className="text-sm text-gray-300">Avg Engagement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-400">{userStats.followersGrowth}</div>
                    <div className="text-sm text-gray-300">Growth</div>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="flex items-center space-x-2 mb-2">
                  <Crown className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-400 font-medium">Premium</span>
                </div>
                <div className="text-2xl font-bold text-purple-400">95</div>
                <div className="text-sm text-gray-300">Influence Score</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'profile', label: 'Profile', icon: User },
              { id: 'activity', label: 'Activity', icon: Calendar },
              { id: 'settings', label: 'Settings', icon: Settings },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-white/20 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === 'profile' && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">Personal Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-white font-medium">Sarah Chen</div>
                      <div className="text-sm text-gray-300">Full Name</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-white font-medium">sarah.chen@email.com</div>
                      <div className="text-sm text-gray-300">Email Address</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <div>
                      <div className="text-white font-medium">+1 (555) 123-4567</div>
                      <div className="text-sm text-gray-300">Phone Number</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">Club Memberships</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Tech Innovators Club', role: 'Admin', members: '15.6K' },
                    { name: 'AI Researchers', role: 'Moderator', members: '8.2K' },
                    { name: 'Startup Founders', role: 'Member', members: '12.4K' },
                    { name: 'Women in Tech', role: 'Speaker', members: '9.8K' },
                  ].map((club, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div>
                        <div className="text-white font-medium text-sm">{club.name}</div>
                        <div className="text-xs text-gray-300">{club.members} members</div>
                      </div>
                      <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded">
                        {club.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activity.type === 'hosted' ? 'bg-purple-500/20' : 'bg-blue-500/20'
                    }`}>
                      {activity.type === 'hosted' ? (
                        <Crown className="w-4 h-4 text-purple-400" />
                      ) : (
                        <User className="w-4 h-4 text-blue-400" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-white font-medium">{activity.title}</span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          activity.type === 'hosted' 
                            ? 'bg-purple-500/20 text-purple-300' 
                            : 'bg-blue-500/20 text-blue-300'
                        }`}>
                          {activity.type === 'hosted' ? 'Hosted' : 'Spoke at'}
                        </span>
                      </div>
                      <div className="text-sm text-gray-300">
                        {activity.listeners} listeners • {activity.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">Notification Preferences</h3>
                <div className="space-y-4">
                  {[
                    { label: 'New room invitations', enabled: true },
                    { label: 'Weekly analytics summary', enabled: true },
                    { label: 'Trending topic alerts', enabled: false },
                    { label: 'Speaker recommendations', enabled: true },
                  ].map((pref, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Bell className="w-4 h-4 text-gray-400" />
                        <span className="text-white">{pref.label}</span>
                      </div>
                      <button
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          pref.enabled ? 'bg-purple-600' : 'bg-gray-600'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            pref.enabled ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">Privacy & Security</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-4 h-4 text-gray-400" />
                      <span className="text-white">Two-factor authentication</span>
                    </div>
                    <span className="text-green-400 text-sm">Enabled</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-white">Profile visibility</span>
                    </div>
                    <span className="text-gray-300 text-sm">Public</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
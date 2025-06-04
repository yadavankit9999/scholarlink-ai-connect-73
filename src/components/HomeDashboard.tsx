
import React from 'react';
import { Bell, Search, User, Briefcase, Users, Sparkles, MessageCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HomeDashboardProps {
  onNavigate: (screen: string) => void;
}

const HomeDashboard = ({ onNavigate }: HomeDashboardProps) => {
  const suggestedExperts = [
    {
      name: "Dr. Sarah Chen",
      title: "AI Research Professor",
      university: "MIT",
      matchScore: 95,
      avatar: "SC",
      field: "Machine Learning"
    },
    {
      name: "Prof. Michael Johnson",
      title: "Quantum Computing",
      university: "Stanford",
      matchScore: 88,
      avatar: "MJ",
      field: "Physics"
    }
  ];

  const recentJobs = [
    {
      title: "Research Assistant",
      company: "Harvard Medical School",
      matchScore: 92,
      status: "New",
      field: "Biology"
    },
    {
      title: "Data Science Intern",
      company: "Google Research",
      matchScore: 85,
      status: "Applied",
      field: "Computer Science"
    }
  ];

  const notifications = [
    {
      text: "Prof. Chen thinks you're a match!",
      type: "match",
      time: "2h ago"
    },
    {
      text: "New job opportunity in AI Research",
      type: "job",
      time: "4h ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Good morning, Alex!</h1>
            <p className="text-gray-600">Ready to explore new opportunities?</p>
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => onNavigate('notifications')}
            className="relative p-2"
          >
            <Bell className="w-6 h-6" />
            <div className="absolute -top-1 -right-1 bg-red-500 rounded-full w-3 h-3"></div>
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-50 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-blue-600">12</div>
            <div className="text-xs text-blue-600">Connections</div>
          </div>
          <div className="bg-green-50 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-green-600">5</div>
            <div className="text-xs text-green-600">Applications</div>
          </div>
          <div className="bg-purple-50 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-purple-600">89%</div>
            <div className="text-xs text-purple-600">Match Score</div>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Notifications */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Recent Activity</h2>
          <div className="space-y-3">
            {notifications.map((notification, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                <div className={`rounded-full p-2 ${
                  notification.type === 'match' ? 'bg-green-100' : 'bg-blue-100'
                }`}>
                  {notification.type === 'match' ? 
                    <Star className="w-4 h-4 text-green-600" /> :
                    <Briefcase className="w-4 h-4 text-blue-600" />
                  }
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{notification.text}</p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Suggested Experts */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Suggested Experts</h2>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => onNavigate('experts')}
            >
              View All
            </Button>
          </div>
          <div className="space-y-3">
            {suggestedExperts.map((expert, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {expert.avatar}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{expert.name}</h3>
                  <p className="text-sm text-gray-600">{expert.title}</p>
                  <p className="text-xs text-gray-500">{expert.university}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-600">{expert.matchScore}%</div>
                  <Badge variant="secondary" className="text-xs">
                    {expert.field}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Jobs */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Job Opportunities</h2>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => onNavigate('jobs')}
            >
              View All
            </Button>
          </div>
          <div className="space-y-3">
            {recentJobs.map((job, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{job.title}</h3>
                  <p className="text-sm text-gray-600">{job.company}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge 
                      variant={job.status === 'New' ? 'default' : 'secondary'} 
                      className="text-xs"
                    >
                      {job.status}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {job.field}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-600">{job.matchScore}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Define Interests Button */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 shadow-sm">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 rounded-full p-3">
                <Sparkles className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Improve Your Matches
            </h3>
            <p className="text-gray-600 mb-4">
              Update your interests to get better recommendations
            </p>
            <Button 
              onClick={() => onNavigate('interests')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Define Interests
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex justify-around">
          <Button variant="ghost" size="sm" className="flex flex-col items-center space-y-1">
            <User className="w-5 h-5" />
            <span className="text-xs">Home</span>
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex flex-col items-center space-y-1"
            onClick={() => onNavigate('experts')}
          >
            <Users className="w-5 h-5" />
            <span className="text-xs">Experts</span>
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex flex-col items-center space-y-1"
            onClick={() => onNavigate('jobs')}
          >
            <Briefcase className="w-5 h-5" />
            <span className="text-xs">Jobs</span>
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex flex-col items-center space-y-1"
            onClick={() => onNavigate('messages')}
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-xs">Messages</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;

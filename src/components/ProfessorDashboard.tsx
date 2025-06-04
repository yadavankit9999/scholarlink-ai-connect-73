
import React, { useState } from 'react';
import { Plus, Users, Briefcase, Star, MessageCircle, Filter, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProfessorDashboardProps {
  onNavigate: (screen: string) => void;
}

const ProfessorDashboard = ({ onNavigate }: ProfessorDashboardProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  const applicants = [
    {
      id: 1,
      name: "Alex Thompson",
      field: "Computer Science",
      university: "UC Berkeley",
      matchScore: 95,
      position: "AI Research Intern",
      status: "new",
      skills: ["Python", "TensorFlow", "Research"],
      gpa: "3.9/4.0",
      avatar: "AT"
    },
    {
      id: 2,
      name: "Maria Garcia",
      field: "Computer Science", 
      university: "Stanford",
      matchScore: 88,
      position: "ML Research Assistant",
      status: "reviewed",
      skills: ["Machine Learning", "Data Science", "Statistics"],
      gpa: "3.8/4.0",
      avatar: "MG"
    }
  ];

  const suggestedStudents = [
    {
      id: 1,
      name: "David Chen",
      field: "Computer Science",
      university: "MIT",
      matchScore: 92,
      skills: ["Deep Learning", "Computer Vision"],
      projects: 5,
      avatar: "DC"
    },
    {
      id: 2,
      name: "Sarah Wilson",
      field: "Data Science",
      university: "Harvard",
      matchScore: 87,
      skills: ["Statistics", "Python", "Research"],
      projects: 8,
      avatar: "SW"
    }
  ];

  const positions = [
    {
      id: 1,
      title: "AI Research Intern",
      applicants: 15,
      status: "active",
      deadline: "2024-07-15",
      field: "Computer Science"
    },
    {
      id: 2,
      title: "ML Research Assistant", 
      applicants: 23,
      status: "active",
      deadline: "2024-06-30",
      field: "Computer Science"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome back, Dr. Chen!</h1>
            <p className="text-gray-600">Manage your research opportunities and connect with students</p>
          </div>
          <Button variant="ghost" size="sm" className="relative p-2">
            <Bell className="w-6 h-6" />
            <div className="absolute -top-1 -right-1 bg-red-500 rounded-full w-3 h-3"></div>
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div className="bg-blue-50 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-blue-600">38</div>
            <div className="text-xs text-blue-600">Applications</div>
          </div>
          <div className="bg-green-50 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-green-600">2</div>
            <div className="text-xs text-green-600">Active Posts</div>
          </div>
          <div className="bg-purple-50 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-purple-600">12</div>
            <div className="text-xs text-purple-600">Matches</div>
          </div>
          <div className="bg-orange-50 rounded-xl p-3 text-center">
            <div className="text-2xl font-bold text-orange-600">5</div>
            <div className="text-xs text-orange-600">Messages</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'applicants', label: 'Applicants' },
            { id: 'suggested', label: 'Suggested' },
            { id: 'positions', label: 'My Positions' }
          ].map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab(tab.id)}
              className="rounded-xl"
            >
              {tab.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="p-4">
        {/* Quick Actions */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-2xl flex flex-col items-center space-y-2"
                  onClick={() => onNavigate('post-position')}
                >
                  <Plus className="w-8 h-8" />
                  <span className="font-semibold">Post New Position</span>
                </Button>
                <Button 
                  variant="outline" 
                  className="p-6 rounded-2xl flex flex-col items-center space-y-2"
                  onClick={() => setActiveTab('suggested')}
                >
                  <Star className="w-8 h-8" />
                  <span className="font-semibold">View Suggestions</span>
                </Button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                  <div className="bg-green-100 rounded-full p-2">
                    <Users className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">New application from Alex Thompson</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                  <Badge className="text-xs">New</Badge>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                  <div className="bg-blue-100 rounded-full p-2">
                    <MessageCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Message from Maria Garcia</p>
                    <p className="text-xs text-gray-500">4 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Applicants Tab */}
        {activeTab === 'applicants' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Current Applicants</h2>
              <Button variant="outline" size="sm" className="rounded-xl">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
            
            {applicants.map((applicant) => (
              <div key={applicant.id} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {applicant.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{applicant.name}</h3>
                        <p className="text-sm text-gray-600">{applicant.field} • {applicant.university}</p>
                        <p className="text-sm text-gray-500">Applied for: {applicant.position}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">{applicant.matchScore}%</div>
                        <Badge 
                          variant={applicant.status === 'new' ? 'default' : 'secondary'} 
                          className="text-xs"
                        >
                          {applicant.status === 'new' ? 'New' : 'Reviewed'}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 mb-3">
                      <span className="text-sm text-gray-600">GPA: {applicant.gpa}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {applicant.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
                        AI Summary
                      </Button>
                      <Button size="sm" variant="outline" className="rounded-xl">
                        View Profile
                      </Button>
                      <Button size="sm" variant="outline" className="rounded-xl">
                        Message
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Suggested Students Tab */}
        {activeTab === 'suggested' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-4 mb-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">AI-Suggested Talents</h2>
              <p className="text-sm text-gray-600">Students from our database who match your research interests</p>
            </div>
            
            {suggestedStudents.map((student) => (
              <div key={student.id} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {student.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{student.name}</h3>
                        <p className="text-sm text-gray-600">{student.field} • {student.university}</p>
                        <p className="text-sm text-gray-500">{student.projects} projects completed</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-purple-600">{student.matchScore}%</div>
                        <div className="text-xs text-gray-500">Match</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {student.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl">
                        <Bell className="w-4 h-4 mr-2" />
                        Notify Student
                      </Button>
                      <Button size="sm" variant="outline" className="rounded-xl">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* My Positions Tab */}
        {activeTab === 'positions' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">My Positions</h2>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
                <Plus className="w-4 h-4 mr-2" />
                Post New
              </Button>
            </div>
            
            {positions.map((position) => (
              <div key={position.id} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{position.title}</h3>
                    <p className="text-sm text-gray-600">{position.field}</p>
                    <p className="text-sm text-gray-500">Deadline: {new Date(position.deadline).toLocaleDateString()}</p>
                  </div>
                  <Badge className="text-xs bg-green-100 text-green-600">
                    {position.status}
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{position.applicants} applicants</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="rounded-xl">
                      View Applicants
                    </Button>
                    <Button size="sm" variant="ghost" className="rounded-xl">
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfessorDashboard;


import React, { useState } from 'react';
import { ArrowLeft, Search, Users, MessageCircle, Star, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface ConnectionsScreenProps {
  onBack: () => void;
}

const ConnectionsScreen = ({ onBack }: ConnectionsScreenProps) => {
  const [activeTab, setActiveTab] = useState('suggested');
  const [searchQuery, setSearchQuery] = useState('');

  const suggestedExperts = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Professor of Machine Learning",
      institution: "Stanford University",
      field: "Computer Science",
      matchScore: 94,
      tags: ["Joint Grant Calls", "Event Planning"],
      expertise: ["Deep Learning", "Computer Vision", "AI Ethics"],
      publications: 85,
      hIndex: 32,
      avatar: "SJ",
      connectionReason: "Similar research interests in AI ethics and computer vision"
    },
    {
      id: 2,
      name: "Prof. Michael Zhang",
      title: "Associate Professor",
      institution: "MIT",
      field: "Data Science",
      matchScore: 89,
      tags: ["Exchange Programs", "Joint Grant Calls"],
      expertise: ["Statistical Learning", "Causal Inference", "Bayesian Methods"],
      publications: 62,
      hIndex: 28,
      avatar: "MZ",
      connectionReason: "Complementary expertise in statistical methods for AI research"
    },
    {
      id: 3,
      name: "Dr. Lisa Patel",
      title: "Research Director",
      institution: "Harvard Medical School",
      field: "Computational Biology",
      matchScore: 87,
      tags: ["Event Planning", "Cross-disciplinary"],
      expertise: ["Bioinformatics", "Medical AI", "Genomics"],
      publications: 94,
      hIndex: 35,
      avatar: "LP",
      connectionReason: "Potential for AI applications in computational biology"
    }
  ];

  const connectedExperts = [
    {
      id: 4,
      name: "Dr. Robert Kim",
      title: "Professor of AI",
      institution: "UC Berkeley",
      lastMessage: "Looking forward to our collaboration on the NSF grant proposal",
      time: "2 hours ago",
      avatar: "RK"
    },
    {
      id: 5,
      name: "Prof. Emma Thompson",
      title: "Data Science Chair",
      institution: "Yale University",
      lastMessage: "The conference abstract deadline is next week",
      time: "1 day ago",
      avatar: "ET"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="flex items-center space-x-4 mb-4">
          <Button variant="ghost" size="sm" onClick={onBack} className="p-2">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold text-gray-900">Connections</h1>
        </div>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, institution, or field..."
            className="pl-10 rounded-xl"
          />
        </div>

        {/* Tabs */}
        <div className="flex space-x-2">
          {[
            { id: 'suggested', label: 'Suggested', count: 12 },
            { id: 'connected', label: 'Connected', count: 8 },
            { id: 'search', label: 'Search All' }
          ].map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab(tab.id)}
              className="rounded-xl"
            >
              {tab.label} {tab.count && `(${tab.count})`}
            </Button>
          ))}
        </div>
      </div>

      <div className="p-4">
        {/* Suggested Experts */}
        {activeTab === 'suggested' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 mb-4">
              <h2 className="font-semibold text-gray-900 mb-2">AI-Suggested Collaborators</h2>
              <p className="text-sm text-gray-600">Based on your research interests and recent publications</p>
            </div>

            {suggestedExperts.map((expert) => (
              <div key={expert.id} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                    {expert.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{expert.name}</h3>
                        <p className="text-sm text-gray-600">{expert.title}</p>
                        <p className="text-sm text-gray-500">{expert.institution}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-blue-600">{expert.matchScore}%</div>
                        <div className="text-xs text-gray-500">Match</div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {expert.tags.map((tag, index) => (
                        <Badge 
                          key={index} 
                          className={`text-xs ${
                            tag === 'Joint Grant Calls' ? 'bg-green-100 text-green-700' :
                            tag === 'Event Planning' ? 'bg-blue-100 text-blue-700' :
                            tag === 'Exchange Programs' ? 'bg-purple-100 text-purple-700' :
                            'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Expertise */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {expert.expertise.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {/* Connection Reason */}
                    <div className="bg-gray-50 rounded-xl p-3 mb-3">
                      <p className="text-sm text-gray-700">{expert.connectionReason}</p>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-sm text-gray-600">{expert.publications} publications</span>
                      <span className="text-sm text-gray-600">h-index: {expert.hIndex}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex-1">
                        <Users className="w-4 h-4 mr-2" />
                        Connect
                      </Button>
                      <Button variant="outline" className="rounded-xl">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Connected Experts */}
        {activeTab === 'connected' && (
          <div className="space-y-4">
            {connectedExperts.map((expert) => (
              <div key={expert.id} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center text-white font-bold">
                    {expert.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{expert.name}</h3>
                    <p className="text-sm text-gray-600">{expert.title}</p>
                    <p className="text-sm text-gray-500">{expert.institution}</p>
                    <p className="text-sm text-gray-700 mt-2">{expert.lastMessage}</p>
                    <p className="text-xs text-gray-500 mt-1">{expert.time}</p>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-xl">
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Search All */}
        {activeTab === 'search' && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Search All Experts</h3>
            <p className="text-gray-600 mb-4">Enter keywords to find experts across the platform</p>
            <Button variant="outline" className="rounded-xl">
              <Filter className="w-4 h-4 mr-2" />
              Advanced Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConnectionsScreen;


import React, { useState } from 'react';
import { ArrowLeft, Bell, Star, Filter, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface AITalentMatchmakerProps {
  onBack: () => void;
}

const AITalentMatchmaker = ({ onBack }: AITalentMatchmakerProps) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const suggestedTalents = [
    {
      id: 1,
      name: "Elena Rodriguez",
      field: "Computer Science",
      university: "Stanford University",
      matchScore: 96,
      tags: ["High Potential", "Emerging Researcher"],
      skills: ["Deep Learning", "Computer Vision", "Python"],
      projects: 12,
      gpa: "3.95/4.0",
      avatar: "ER",
      aiInsight: "Exceptional research potential in AI, published 3 papers as undergrad"
    },
    {
      id: 2,
      name: "Marcus Chen",
      field: "Data Science",
      university: "MIT",
      matchScore: 93,
      tags: ["Rare Skill Match", "High Potential"],
      skills: ["Quantum Computing", "Machine Learning", "Statistics"],
      projects: 8,
      gpa: "3.9/4.0",
      avatar: "MC",
      aiInsight: "Unique combination of quantum computing and ML expertise"
    },
    {
      id: 3,
      name: "Aria Patel",
      field: "Computational Biology",
      university: "Harvard",
      matchScore: 91,
      tags: ["Emerging Researcher", "Cross-disciplinary"],
      skills: ["Bioinformatics", "R", "Statistical Modeling"],
      projects: 15,
      gpa: "3.88/4.0",
      avatar: "AP",
      aiInsight: "Strong interdisciplinary background bridging biology and computation"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Talents', count: 24 },
    { id: 'high-potential', label: 'High Potential', count: 8 },
    { id: 'emerging', label: 'Emerging Researchers', count: 12 },
    { id: 'rare-skills', label: 'Rare Skills', count: 4 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="flex items-center space-x-4 mb-4">
          <Button variant="ghost" size="sm" onClick={onBack} className="p-2">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">AI Talent Matchmaker</h1>
            <p className="text-sm text-gray-600">Discover exceptional students across the platform</p>
          </div>
        </div>

        {/* AI Insight Card */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-4 mb-4">
          <div className="flex items-start space-x-3">
            <div className="bg-purple-100 rounded-full p-2">
              <Bot className="w-5 h-5 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">AI Recommendations</h3>
              <p className="text-sm text-gray-600">Based on your research interests in Computer Vision and your recent job postings</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex space-x-2 overflow-x-auto">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.id)}
              className="rounded-xl whitespace-nowrap"
            >
              {filter.label} ({filter.count})
            </Button>
          ))}
        </div>
      </div>

      <div className="p-4 space-y-4">
        {suggestedTalents.map((talent) => (
          <div key={talent.id} className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                {talent.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{talent.name}</h3>
                    <p className="text-sm text-gray-600">{talent.field}</p>
                    <p className="text-sm text-gray-500">{talent.university}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-600">{talent.matchScore}%</div>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-yellow-500 mr-1" />
                      <span className="text-xs text-gray-500">AI Match</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {talent.tags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      className={`text-xs ${
                        tag === 'High Potential' ? 'bg-green-100 text-green-700' :
                        tag === 'Emerging Researcher' ? 'bg-blue-100 text-blue-700' :
                        tag === 'Rare Skill Match' ? 'bg-purple-100 text-purple-700' :
                        'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {talent.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* AI Insight */}
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-3 mb-3">
                  <div className="flex items-start space-x-2">
                    <Bot className="w-4 h-4 text-purple-600 mt-0.5" />
                    <p className="text-sm text-gray-700">{talent.aiInsight}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-sm text-gray-600">GPA: {talent.gpa}</span>
                  <span className="text-sm text-gray-600">{talent.projects} projects</span>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl flex-1">
                    <Bell className="w-4 h-4 mr-2" />
                    Notify Student
                  </Button>
                  <Button variant="outline" className="rounded-xl">
                    View Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Load More */}
        <Button variant="outline" className="w-full py-3 rounded-2xl">
          Load More Suggestions
        </Button>
      </div>
    </div>
  );
};

export default AITalentMatchmaker;

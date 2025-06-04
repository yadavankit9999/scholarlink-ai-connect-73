
import React, { useState } from 'react';
import { Search, Filter, ChevronLeft, Send, University, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface ExpertSearchProps {
  onBack: () => void;
}

const ExpertSearch = ({ onBack }: ExpertSearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const experts = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      title: "Professor of Artificial Intelligence",
      university: "MIT",
      field: "Machine Learning",
      matchScore: 95,
      avatar: "SC",
      researchAreas: ["Deep Learning", "Computer Vision", "NLP"],
      status: "available",
      rating: 4.9,
      connections: 1250
    },
    {
      id: 2,
      name: "Prof. Michael Johnson",
      title: "Quantum Computing Researcher",
      university: "Stanford University",
      field: "Physics",
      matchScore: 88,
      avatar: "MJ",
      researchAreas: ["Quantum Algorithms", "Quantum Hardware", "Cryptography"],
      status: "pending",
      rating: 4.8,
      connections: 890
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      title: "Biomedical Engineering",
      university: "Harvard Medical School",
      field: "Biology",
      matchScore: 82,
      avatar: "ER",
      researchAreas: ["Tissue Engineering", "Medical Devices", "Biomaterials"],
      status: "connected",
      rating: 4.7,
      connections: 675
    }
  ];

  const filterOptions = ["Computer Science", "Biology", "Physics", "Chemistry", "Available Now"];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'text-green-600 bg-green-50';
      case 'pending': return 'text-yellow-600 bg-yellow-50';
      case 'connected': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available': return 'Available';
      case 'pending': return 'Pending';
      case 'connected': return 'Connected';
      default: return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="flex items-center mb-4">
          <Button variant="ghost" size="sm" onClick={onBack} className="p-2">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold text-gray-900 ml-4">Find Experts</h1>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search by name, institute, or research area..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 rounded-xl"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center space-x-2 mb-4">
          <Button variant="outline" size="sm" className="rounded-xl">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <div className="flex space-x-2 overflow-x-auto">
            {filterOptions.map((filter) => (
              <Badge
                key={filter}
                variant={selectedFilters.includes(filter) ? "default" : "secondary"}
                className="cursor-pointer whitespace-nowrap"
                onClick={() => {
                  if (selectedFilters.includes(filter)) {
                    setSelectedFilters(selectedFilters.filter(f => f !== filter));
                  } else {
                    setSelectedFilters([...selectedFilters, filter]);
                  }
                }}
              >
                {filter}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="p-4 space-y-4">
        {experts.map((expert) => (
          <div key={expert.id} className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {expert.avatar}
              </div>
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{expert.name}</h3>
                    <p className="text-sm text-gray-600">{expert.title}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <University className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{expert.university}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{expert.matchScore}%</div>
                    <div className="text-xs text-gray-500">Match</div>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600">{expert.rating}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    {expert.connections} connections
                  </div>
                  <Badge 
                    className={`text-xs ${getStatusColor(expert.status)}`}
                    variant="secondary"
                  >
                    {getStatusText(expert.status)}
                  </Badge>
                </div>

                {/* Research Areas */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {expert.researchAreas.map((area, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {area}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  {expert.status === 'available' && (
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
                      <Send className="w-4 h-4 mr-2" />
                      Request to Connect
                    </Button>
                  )}
                  {expert.status === 'pending' && (
                    <Button size="sm" variant="outline" className="flex-1 rounded-xl" disabled>
                      Request Pending
                    </Button>
                  )}
                  {expert.status === 'connected' && (
                    <Button size="sm" variant="outline" className="flex-1 rounded-xl">
                      Send Message
                    </Button>
                  )}
                  <Button size="sm" variant="ghost" className="px-3 rounded-xl">
                    View Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertSearch;

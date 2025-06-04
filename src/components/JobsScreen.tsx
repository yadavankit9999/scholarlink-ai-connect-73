
import React, { useState } from 'react';
import { ChevronLeft, Briefcase, Clock, MapPin, Filter, Star, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

interface JobsScreenProps {
  onBack: () => void;
}

const JobsScreen = ({ onBack }: JobsScreenProps) => {
  const [activeTab, setActiveTab] = useState('all');

  const jobs = [
    {
      id: 1,
      title: "AI Research Intern",
      company: "Google Research",
      location: "Mountain View, CA",
      type: "Internship",
      field: "Computer Science",
      matchScore: 95,
      status: "open",
      postedBy: "Dr. Sarah Chen",
      requirements: ["Python", "TensorFlow", "Machine Learning"],
      description: "Work on cutting-edge AI research projects with our team.",
      deadline: "2024-07-15",
      applicants: 45,
      hasQuestionnaire: true,
      minMatchScore: 80
    },
    {
      id: 2,
      title: "Research Assistant",
      company: "Harvard Medical School",
      location: "Boston, MA",
      type: "Part-time",
      field: "Biology",
      matchScore: 88,
      status: "applied",
      postedBy: "Prof. Michael Johnson",
      requirements: ["Biology", "Lab Experience", "Data Analysis"],
      description: "Assist in groundbreaking medical research on gene therapy.",
      deadline: "2024-06-30",
      applicants: 28,
      hasQuestionnaire: false,
      minMatchScore: 75
    },
    {
      id: 3,
      title: "Quantum Computing Researcher",
      company: "IBM Research",
      location: "Yorktown Heights, NY",
      type: "Full-time",
      field: "Physics",
      matchScore: 72,
      status: "shortlisted",
      postedBy: "Dr. Emily Rodriguez",
      requirements: ["Quantum Physics", "Programming", "Mathematics"],
      description: "Develop quantum algorithms for practical applications.",
      deadline: "2024-08-01",
      applicants: 67,
      hasQuestionnaire: true,
      minMatchScore: 85
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'text-green-600 bg-green-50';
      case 'applied': return 'text-blue-600 bg-blue-50';
      case 'shortlisted': return 'text-purple-600 bg-purple-50';
      case 'rejected': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'open': return 'Open';
      case 'applied': return 'Applied';
      case 'shortlisted': return 'Shortlisted';
      case 'rejected': return 'Rejected';
      default: return status;
    }
  };

  const canApply = (job: any) => {
    return job.status === 'open' && job.matchScore >= job.minMatchScore;
  };

  const filteredJobs = jobs.filter(job => {
    if (activeTab === 'all') return true;
    if (activeTab === 'applied') return job.status === 'applied' || job.status === 'shortlisted';
    if (activeTab === 'open') return job.status === 'open';
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="flex items-center mb-4">
          <Button variant="ghost" size="sm" onClick={onBack} className="p-2">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold text-gray-900 ml-4">Job Opportunities</h1>
        </div>

        {/* Search */}
        <div className="mb-4">
          <Input
            placeholder="Search jobs..."
            className="rounded-xl"
          />
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-4">
          {[
            { id: 'all', label: 'All Jobs', count: jobs.length },
            { id: 'open', label: 'Available', count: jobs.filter(j => j.status === 'open').length },
            { id: 'applied', label: 'Applied', count: jobs.filter(j => j.status === 'applied' || j.status === 'shortlisted').length }
          ].map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab(tab.id)}
              className="rounded-xl"
            >
              {tab.label} ({tab.count})
            </Button>
          ))}
        </div>
      </div>

      {/* Job List */}
      <div className="p-4 space-y-4">
        {filteredJobs.map((job) => (
          <div key={job.id} className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{job.title}</h3>
                <div className="flex items-center space-x-2 mb-2">
                  <Building className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{job.company}</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{job.type}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600 mb-1">{job.matchScore}%</div>
                <Badge 
                  className={`text-xs ${getStatusColor(job.status)}`}
                  variant="secondary"
                >
                  {getStatusText(job.status)}
                </Badge>
              </div>
            </div>

            {/* Posted by */}
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                {job.postedBy.split(' ').map(n => n[0]).join('')}
              </div>
              <span className="text-sm text-gray-600">Posted by {job.postedBy}</span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-700 mb-3">{job.description}</p>

            {/* Requirements */}
            <div className="flex flex-wrap gap-2 mb-3">
              {job.requirements.map((req, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {req}
                </Badge>
              ))}
            </div>

            {/* Additional Info */}
            <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <span>{job.applicants} applicants</span>
                <span>Deadline: {new Date(job.deadline).toLocaleDateString()}</span>
                {job.hasQuestionnaire && (
                  <Badge variant="secondary" className="text-xs">
                    Questionnaire Required
                  </Badge>
                )}
              </div>
              <div className="text-xs">
                Min. {job.minMatchScore}% match required
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              {job.status === 'open' && (
                <Button 
                  size="sm" 
                  className={`flex-1 rounded-xl ${
                    canApply(job) 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!canApply(job)}
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  {canApply(job) ? 'Apply Now' : `Need ${job.minMatchScore}% Match`}
                </Button>
              )}
              {job.status === 'applied' && (
                <Button size="sm" variant="outline" className="flex-1 rounded-xl" disabled>
                  Application Submitted
                </Button>
              )}
              {job.status === 'shortlisted' && (
                <Button size="sm" className="flex-1 bg-purple-600 hover:bg-purple-700 text-white rounded-xl">
                  <Star className="w-4 h-4 mr-2" />
                  Shortlisted!
                </Button>
              )}
              <Button size="sm" variant="ghost" className="px-4 rounded-xl">
                View Details
              </Button>
            </div>

            {job.hasQuestionnaire && job.status === 'open' && canApply(job) && (
              <div className="mt-3 p-3 bg-blue-50 rounded-xl">
                <p className="text-sm text-blue-700 font-medium">
                  📝 This position requires completing a questionnaire before applying
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsScreen;

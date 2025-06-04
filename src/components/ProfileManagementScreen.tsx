
import React, { useState } from 'react';
import { ArrowLeft, Edit, Save, Eye, EyeOff, Users, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

interface ProfileManagementScreenProps {
  onBack: () => void;
}

const ProfileManagementScreen = ({ onBack }: ProfileManagementScreenProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [visibilitySettings, setVisibilitySettings] = useState({
    students: true,
    experts: true,
    publications: true,
    contact: false
  });

  const [profileData, setProfileData] = useState({
    name: "Dr. Wei Chen",
    title: "Professor of Computer Science",
    institution: "Stanford University",
    department: "Computer Science Department",
    lab: "AI Research Lab",
    email: "w.chen@stanford.edu",
    expertise: ["Machine Learning", "Computer Vision", "AI Ethics", "Deep Learning"],
    bio: "Professor Chen leads research in ethical AI and computer vision applications. Published 120+ papers in top-tier conferences including NIPS, ICML, and CVPR.",
    publications: 125,
    hIndex: 42,
    citations: 8500
  });

  const toggleVisibility = (setting: keyof typeof visibilitySettings) => {
    setVisibilitySettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const addExpertise = (expertise: string) => {
    if (expertise && !profileData.expertise.includes(expertise)) {
      setProfileData(prev => ({
        ...prev,
        expertise: [...prev.expertise, expertise]
      }));
    }
  };

  const removeExpertise = (expertiseToRemove: string) => {
    setProfileData(prev => ({
      ...prev,
      expertise: prev.expertise.filter(exp => exp !== expertiseToRemove)
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={onBack} className="p-2">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-bold text-gray-900">Profile Management</h1>
          </div>
          <Button
            onClick={() => setIsEditing(!isEditing)}
            variant={isEditing ? "default" : "outline"}
            size="sm"
            className="rounded-xl"
          >
            {isEditing ? (
              <>
                <Save className="w-4 h-4 mr-2" />
                Save
              </>
            ) : (
              <>
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Profile Photo & Basic Info */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-start space-x-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
              WC
            </div>
            <div className="flex-1">
              {isEditing ? (
                <div className="space-y-3">
                  <Input
                    value={profileData.name}
                    onChange={(e) => setProfileData(prev => ({ ...prev, name: e.target.value }))}
                    className="text-xl font-bold rounded-xl"
                  />
                  <Input
                    value={profileData.title}
                    onChange={(e) => setProfileData(prev => ({ ...prev, title: e.target.value }))}
                    className="rounded-xl"
                  />
                  <Input
                    value={profileData.institution}
                    onChange={(e) => setProfileData(prev => ({ ...prev, institution: e.target.value }))}
                    className="rounded-xl"
                  />
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{profileData.name}</h2>
                  <p className="text-lg text-gray-600">{profileData.title}</p>
                  <p className="text-gray-500">{profileData.institution}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Professional Details */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Professional Details</h3>
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium text-gray-700">Department</Label>
              {isEditing ? (
                <Input
                  value={profileData.department}
                  onChange={(e) => setProfileData(prev => ({ ...prev, department: e.target.value }))}
                  className="mt-1 rounded-xl"
                />
              ) : (
                <p className="text-gray-900">{profileData.department}</p>
              )}
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700">Lab/Group</Label>
              {isEditing ? (
                <Input
                  value={profileData.lab}
                  onChange={(e) => setProfileData(prev => ({ ...prev, lab: e.target.value }))}
                  className="mt-1 rounded-xl"
                />
              ) : (
                <p className="text-gray-900">{profileData.lab}</p>
              )}
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700">Email</Label>
              {isEditing ? (
                <Input
                  value={profileData.email}
                  onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                  className="mt-1 rounded-xl"
                />
              ) : (
                <p className="text-gray-900">{profileData.email}</p>
              )}
            </div>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Expertise Areas</h3>
          <div className="flex flex-wrap gap-2 mb-3">
            {profileData.expertise.map((exp, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className={`${isEditing ? 'cursor-pointer' : ''}`}
                onClick={() => isEditing && removeExpertise(exp)}
              >
                {exp} {isEditing && '×'}
              </Badge>
            ))}
          </div>
          {isEditing && (
            <div className="flex space-x-2">
              <Input
                placeholder="Add expertise area..."
                className="flex-1 rounded-xl"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    addExpertise(e.currentTarget.value);
                    e.currentTarget.value = '';
                  }
                }}
              />
              <Button variant="outline" size="sm" className="rounded-xl">
                Add
              </Button>
            </div>
          )}
        </div>

        {/* Bio */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Bio</h3>
          {isEditing ? (
            <textarea
              value={profileData.bio}
              onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
              className="w-full h-24 px-3 py-2 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="text-gray-700">{profileData.bio}</p>
          )}
        </div>

        {/* Academic Metrics */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Academic Metrics</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{profileData.publications}</div>
              <div className="text-sm text-gray-600">Publications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{profileData.hIndex}</div>
              <div className="text-sm text-gray-600">h-index</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{profileData.citations}</div>
              <div className="text-sm text-gray-600">Citations</div>
            </div>
          </div>
        </div>

        {/* Privacy & Visibility Settings */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy & Visibility</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">Visible to Students</p>
                  <p className="text-sm text-gray-600">Allow students to find and contact you</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleVisibility('students')}
                className="p-2"
              >
                {visibilitySettings.students ? (
                  <Eye className="w-5 h-5 text-green-600" />
                ) : (
                  <EyeOff className="w-5 h-5 text-gray-400" />
                )}
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900">Visible to Other Experts</p>
                  <p className="text-sm text-gray-600">Show profile to other professors and researchers</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleVisibility('experts')}
                className="p-2"
              >
                {visibilitySettings.experts ? (
                  <Eye className="w-5 h-5 text-green-600" />
                ) : (
                  <EyeOff className="w-5 h-5 text-gray-400" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileManagementScreen;

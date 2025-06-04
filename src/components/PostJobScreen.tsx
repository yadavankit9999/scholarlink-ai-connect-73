
import React, { useState } from 'react';
import { ArrowLeft, Plus, Save, Bot, ToggleLeft, ToggleRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

interface PostJobScreenProps {
  onBack: () => void;
}

const PostJobScreen = ({ onBack }: PostJobScreenProps) => {
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState('');
  const [autoMatch, setAutoMatch] = useState(true);
  const [hasQuestionnaire, setHasQuestionnaire] = useState(false);

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={onBack} className="p-2">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold text-gray-900">Post New Position</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Job Title */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <Label htmlFor="title" className="text-base font-semibold text-gray-900 mb-3 block">
            Position Title
          </Label>
          <Input
            id="title"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="e.g., AI Research Intern, Data Science Assistant"
            className="rounded-xl"
          />
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <Label htmlFor="description" className="text-base font-semibold text-gray-900 mb-3 block">
            Job Description
          </Label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the role, responsibilities, and what you're looking for..."
            className="w-full h-32 px-3 py-2 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-center justify-between mt-3">
            <span className="text-sm text-gray-500">{description.length}/500 characters</span>
            <Button variant="outline" size="sm" className="rounded-xl">
              <Bot className="w-4 h-4 mr-2" />
              AI Enhance
            </Button>
          </div>
        </div>

        {/* Required Skills */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <Label className="text-base font-semibold text-gray-900 mb-3 block">
            Required Skills
          </Label>
          <div className="flex space-x-2 mb-3">
            <Input
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Add a skill..."
              className="rounded-xl flex-1"
              onKeyPress={(e) => e.key === 'Enter' && addSkill()}
            />
            <Button onClick={addSkill} size="sm" className="rounded-xl">
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="cursor-pointer"
                onClick={() => removeSkill(skill)}
              >
                {skill} ×
              </Badge>
            ))}
          </div>
        </div>

        {/* AI Auto-Match Toggle */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-900">AI Auto-Match</h3>
              <p className="text-sm text-gray-600">Let AI find the best candidates for you</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setAutoMatch(!autoMatch)}
              className="p-2"
            >
              {autoMatch ? (
                <ToggleRight className="w-8 h-8 text-blue-600" />
              ) : (
                <ToggleLeft className="w-8 h-8 text-gray-400" />
              )}
            </Button>
          </div>
        </div>

        {/* Questionnaire Option */}
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="font-semibold text-gray-900">Custom Questionnaire</h3>
              <p className="text-sm text-gray-600">Add specific questions for applicants</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setHasQuestionnaire(!hasQuestionnaire)}
              className="p-2"
            >
              {hasQuestionnaire ? (
                <ToggleRight className="w-8 h-8 text-blue-600" />
              ) : (
                <ToggleLeft className="w-8 h-8 text-gray-400" />
              )}
            </Button>
          </div>
          
          {hasQuestionnaire && (
            <div className="space-y-3">
              <Input
                placeholder="Question 1: What experience do you have with..."
                className="rounded-xl"
              />
              <Input
                placeholder="Question 2: Describe your research interests in..."
                className="rounded-xl"
              />
              <Button variant="outline" size="sm" className="rounded-xl">
                <Plus className="w-4 h-4 mr-2" />
                Add Question
              </Button>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-lg font-semibold">
          <Save className="w-5 h-5 mr-2" />
          Post Position
        </Button>
      </div>
    </div>
  );
};

export default PostJobScreen;

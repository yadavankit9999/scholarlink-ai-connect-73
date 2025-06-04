
import React, { useState } from 'react';
import { ChevronLeft, Search, Users, Sparkles, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface OnboardingScreenProps {
  onNext: () => void;
  onBack: () => void;
}

const OnboardingScreen = ({ onNext, onBack }: OnboardingScreenProps) => {
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [customField, setCustomField] = useState('');

  const fieldOptions = [
    'Computer Science',
    'Biology',
    'Chemistry',
    'Physics',
    'Mathematics',
    'Psychology',
    'Economics',
    'Engineering',
    'Medicine',
    'Literature',
    'History',
    'Art & Design'
  ];

  const toggleField = (field: string) => {
    if (selectedFields.includes(field)) {
      setSelectedFields(selectedFields.filter(f => f !== field));
    } else {
      setSelectedFields([...selectedFields, field]);
    }
  };

  const addCustomField = () => {
    if (customField.trim() && !selectedFields.includes(customField.trim())) {
      setSelectedFields([...selectedFields, customField.trim()]);
      setCustomField('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center mb-6 pt-4">
          <Button variant="ghost" size="sm" onClick={onBack} className="p-2">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-semibold text-gray-900 ml-4">Set Up Your Profile</h1>
        </div>

        {/* Progress Bar */}
        <div className="bg-gray-200 rounded-full h-2 mb-8">
          <div className="bg-blue-600 h-2 rounded-full w-1/3"></div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 rounded-full p-3">
                <Search className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              What are your interests?
            </h2>
            <p className="text-gray-600">
              Select your fields of study to get personalized recommendations
            </p>
          </div>

          {/* Field Selection */}
          <div className="space-y-4 mb-6">
            <div className="grid grid-cols-2 gap-2">
              {fieldOptions.map((field) => (
                <button
                  key={field}
                  onClick={() => toggleField(field)}
                  className={`p-3 rounded-xl text-sm font-medium transition-all ${
                    selectedFields.includes(field)
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {field}
                </button>
              ))}
            </div>

            {/* Custom Field Input */}
            <div className="flex space-x-2">
              <Input
                placeholder="Add custom field..."
                value={customField}
                onChange={(e) => setCustomField(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addCustomField()}
                className="flex-1"
              />
              <Button onClick={addCustomField} size="sm" variant="outline">
                Add
              </Button>
            </div>

            {/* Selected Fields */}
            {selectedFields.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700">Selected fields:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedFields.map((field) => (
                    <Badge
                      key={field}
                      variant="secondary"
                      className="cursor-pointer"
                      onClick={() => toggleField(field)}
                    >
                      {field} ×
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* LinkedIn Import Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 rounded-full p-3">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">Import from LinkedIn</h3>
              <p className="text-sm text-gray-600">Auto-fill your profile information</p>
            </div>
            <Button variant="outline" size="sm">
              <Upload className="w-4 h-4 mr-2" />
              Import
            </Button>
          </div>
        </div>

        {/* AI Suggestion Card */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-6 shadow-sm mb-8">
          <div className="flex items-center space-x-4">
            <div className="bg-purple-100 rounded-full p-3">
              <Sparkles className="w-6 h-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">AI-Generated Intro</h3>
              <p className="text-sm text-gray-600">Let AI create your professional introduction</p>
            </div>
            <Button variant="outline" size="sm">
              Generate
            </Button>
          </div>
        </div>

        {/* Continue Button */}
        <Button 
          onClick={onNext}
          disabled={selectedFields.length === 0}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-lg font-semibold"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default OnboardingScreen;

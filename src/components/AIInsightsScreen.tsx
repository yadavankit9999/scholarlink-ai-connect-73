
import React, { useState } from 'react';
import { ArrowLeft, Bot, TrendingUp, Users, Lightbulb, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface AIInsightsScreenProps {
  onBack: () => void;
}

const AIInsightsScreen = ({ onBack }: AIInsightsScreenProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  const hiringStats = {
    avgMatchScore: 87,
    totalApplicants: 45,
    responseRate: 73,
    hiredCount: 8,
    topSkills: ["Python", "Machine Learning", "Research", "Data Analysis"]
  };

  const insights = [
    {
      type: "improvement",
      title: "Increase Job Visibility",
      description: "Posts with specific skill requirements get 40% more qualified applicants",
      action: "Add more detailed skill requirements to your next job posting",
      impact: "High"
    },
    {
      type: "trend",
      title: "Emerging Skill Demand",
      description: "Students with LLM experience are in high demand this semester",
      action: "Consider adding LLM-related projects to attract top talent",
      impact: "Medium"
    },
    {
      type: "collaboration",
      title: "Collaboration Opportunity",
      description: "3 experts in your field have similar research interests",
      action: "Reach out to potential collaborators for joint projects",
      impact: "Medium"
    }
  ];

  const aiExplanations = [
    {
      question: "How does AI calculate match scores?",
      answer: "Our AI analyzes multiple factors including academic background, skills, research interests, project experience, and publication history to determine compatibility between students and positions."
    },
    {
      question: "What data is used for suggestions?",
      answer: "We use anonymized academic records, project portfolios, skill assessments, and research interests. All data is processed with strict privacy controls and user consent."
    },
    {
      question: "How can I improve my job posting visibility?",
      answer: "Include specific skills, clear project descriptions, and relevant keywords. Posts with detailed requirements and growth opportunities typically perform 60% better."
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
          <div>
            <h1 className="text-xl font-bold text-gray-900">AI Insights & Feedback</h1>
            <p className="text-sm text-gray-600">Understand your hiring patterns and optimize your approach</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'recommendations', label: 'Recommendations' },
            { id: 'how-it-works', label: 'How AI Works' }
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
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* AI Summary Card */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-full p-2">
                  <Bot className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">AI Summary</h2>
                  <p className="text-gray-700">Your hiring performance is above average with a 87% match score. Students respond well to your clear job descriptions and growth opportunities.</p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 rounded-full p-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">{hiringStats.avgMatchScore}%</div>
                    <div className="text-sm text-gray-600">Avg Match Score</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 rounded-full p-2">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{hiringStats.totalApplicants}</div>
                    <div className="text-sm text-gray-600">Total Applicants</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 rounded-full p-2">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">{hiringStats.responseRate}%</div>
                    <div className="text-sm text-gray-600">Response Rate</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-100 rounded-full p-2">
                    <Users className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-600">{hiringStats.hiredCount}</div>
                    <div className="text-sm text-gray-600">Students Hired</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Skills */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">Most Requested Skills</h3>
              <div className="flex flex-wrap gap-2">
                {hiringStats.topSkills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Recommendations Tab */}
        {activeTab === 'recommendations' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-4 mb-4">
              <h2 className="font-semibold text-gray-900 mb-2">Personalized Recommendations</h2>
              <p className="text-sm text-gray-600">AI-generated suggestions to improve your hiring success</p>
            </div>

            {insights.map((insight, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-start space-x-3">
                  <div className={`rounded-full p-2 ${
                    insight.type === 'improvement' ? 'bg-green-100' :
                    insight.type === 'trend' ? 'bg-blue-100' :
                    'bg-purple-100'
                  }`}>
                    {insight.type === 'improvement' ? (
                      <TrendingUp className={`w-5 h-5 ${
                        insight.type === 'improvement' ? 'text-green-600' :
                        insight.type === 'trend' ? 'text-blue-600' :
                        'text-purple-600'
                      }`} />
                    ) : insight.type === 'trend' ? (
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                    ) : (
                      <Users className="w-5 h-5 text-purple-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{insight.title}</h3>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          insight.impact === 'High' ? 'border-red-200 text-red-700' :
                          insight.impact === 'Medium' ? 'border-yellow-200 text-yellow-700' :
                          'border-gray-200 text-gray-700'
                        }`}
                      >
                        {insight.impact} Impact
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-3">{insight.description}</p>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <p className="text-sm text-gray-700">
                        <strong>Recommended Action:</strong> {insight.action}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* How AI Works Tab */}
        {activeTab === 'how-it-works' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-4">
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 rounded-full p-2">
                  <Bot className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Understanding Our AI</h2>
                  <p className="text-gray-700">Learn how our AI works to help you make better hiring decisions while maintaining transparency and fairness.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {aiExplanations.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-4 shadow-sm">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 rounded-full p-2 mt-1">
                      <HelpCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">{item.question}</h3>
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
              <div className="flex items-start space-x-3">
                <Lightbulb className="w-5 h-5 text-yellow-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-1">Important Note</h3>
                  <p className="text-sm text-yellow-700">AI recommendations are tools to assist your decision-making process. Final hiring decisions should always consider human judgment, fairness, and institutional policies.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIInsightsScreen;

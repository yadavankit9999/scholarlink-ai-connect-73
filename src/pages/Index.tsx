
import React, { useState } from 'react';
import WelcomeScreen from '@/components/WelcomeScreen';
import OnboardingScreen from '@/components/OnboardingScreen';
import HomeDashboard from '@/components/HomeDashboard';
import ExpertSearch from '@/components/ExpertSearch';
import JobsScreen from '@/components/JobsScreen';
import ProfessorDashboard from '@/components/ProfessorDashboard';
import PostJobScreen from '@/components/PostJobScreen';
import AITalentMatchmaker from '@/components/AITalentMatchmaker';
import ConnectionsScreen from '@/components/ConnectionsScreen';
import MessagesScreen from '@/components/MessagesScreen';
import ProfileManagementScreen from '@/components/ProfileManagementScreen';
import AIInsightsScreen from '@/components/AIInsightsScreen';
import StudentProfilePage from '@/components/StudentProfilePage';
import ProfessorProfilePage from '@/components/ProfessorProfilePage';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [userType, setUserType] = useState<'student' | 'professor'>('student');

  const navigateToScreen = (screen: string) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onNext={() => setCurrentScreen('onboarding')} />;
      
      case 'onboarding':
        return (
          <OnboardingScreen 
            onNext={() => setCurrentScreen(userType === 'student' ? 'home' : 'professor-dashboard')}
            onBack={() => setCurrentScreen('welcome')}
          />
        );
      
      case 'home':
        return <HomeDashboard onNavigate={navigateToScreen} />;
      
      case 'experts':
        return <ExpertSearch onBack={() => setCurrentScreen('home')} />;
      
      case 'jobs':
        return <JobsScreen onBack={() => setCurrentScreen('home')} />;
      
      case 'professor-dashboard':
        return <ProfessorDashboard onNavigate={navigateToScreen} />;
      
      case 'post-job':
        return <PostJobScreen onBack={() => setCurrentScreen('professor-dashboard')} />;
      
      case 'ai-talent':
        return <AITalentMatchmaker onBack={() => setCurrentScreen('professor-dashboard')} />;
      
      case 'connections':
        return <ConnectionsScreen onBack={() => setCurrentScreen('professor-dashboard')} />;
      
      case 'messages':
        return <MessagesScreen onBack={() => setCurrentScreen('professor-dashboard')} />;
      
      case 'profile':
        return <ProfileManagementScreen onBack={() => setCurrentScreen('professor-dashboard')} />;
      
      case 'ai-insights':
        return <AIInsightsScreen onBack={() => setCurrentScreen('professor-dashboard')} />;
      
      case 'student-profile':
        return <StudentProfilePage onBack={() => setCurrentScreen(userType === 'student' ? 'home' : 'professor-dashboard')} />;
      
      case 'professor-profile':
        return <ProfessorProfilePage onBack={() => setCurrentScreen(userType === 'student' ? 'home' : 'professor-dashboard')} />;
      
      default:
        return <HomeDashboard onNavigate={navigateToScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderScreen()}
      
      {/* Navigation Header for Website */}
      {currentScreen !== 'welcome' && currentScreen !== 'onboarding' && (
        <div className="fixed top-4 left-4 right-4 bg-white rounded-2xl shadow-lg border border-gray-200 p-3 z-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold text-blue-600">ScholarLink</h1>
              <div className="hidden md:flex items-center space-x-1">
                <button
                  onClick={() => setCurrentScreen(userType === 'student' ? 'home' : 'professor-dashboard')}
                  className="px-3 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => setCurrentScreen('experts')}
                  className="px-3 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  Experts
                </button>
                <button
                  onClick={() => setCurrentScreen('jobs')}
                  className="px-3 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  Opportunities
                </button>
                <button
                  onClick={() => setCurrentScreen('student-profile')}
                  className="px-3 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  Student Profile
                </button>
                <button
                  onClick={() => setCurrentScreen('professor-profile')}
                  className="px-3 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  Professor Profile
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  setUserType(userType === 'student' ? 'professor' : 'student');
                  setCurrentScreen(userType === 'student' ? 'professor-dashboard' : 'home');
                }}
                className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Switch to {userType === 'student' ? 'Professor' : 'Student'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;

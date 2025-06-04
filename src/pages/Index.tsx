
import React, { useState } from 'react';
import WelcomeScreen from '@/components/WelcomeScreen';
import OnboardingScreen from '@/components/OnboardingScreen';
import HomeDashboard from '@/components/HomeDashboard';
import ExpertSearch from '@/components/ExpertSearch';
import JobsScreen from '@/components/JobsScreen';
import ProfessorDashboard from '@/components/ProfessorDashboard';

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
      
      default:
        return <HomeDashboard onNavigate={navigateToScreen} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderScreen()}
      
      {/* Demo Toggle - Remove in production */}
      {currentScreen !== 'welcome' && currentScreen !== 'onboarding' && (
        <div className="fixed bottom-4 right-4 bg-white rounded-full shadow-lg p-2 z-50">
          <button
            onClick={() => {
              setUserType(userType === 'student' ? 'professor' : 'student');
              setCurrentScreen(userType === 'student' ? 'professor-dashboard' : 'home');
            }}
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            Switch to {userType === 'student' ? 'Professor' : 'Student'} View
          </button>
        </div>
      )}
    </div>
  );
};

export default Index;

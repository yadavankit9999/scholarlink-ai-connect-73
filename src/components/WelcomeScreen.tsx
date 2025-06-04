
import React, { useState } from 'react';
import { ChevronRight, GraduationCap, Users, Briefcase, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WelcomeScreenProps {
  onNext: () => void;
}

const WelcomeScreen = ({ onNext }: WelcomeScreenProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: <GraduationCap className="w-16 h-16 text-blue-600" />,
      title: "Welcome to Scholarlinc",
      description: "Connect with professors, find research opportunities, and advance your academic career with AI-powered matching."
    },
    {
      icon: <Users className="w-16 h-16 text-blue-600" />,
      title: "Smart Connections",
      description: "Our AI analyzes your interests and connects you with the right professors and research opportunities."
    },
    {
      icon: <Briefcase className="w-16 h-16 text-blue-600" />,
      title: "Find Opportunities",
      description: "Discover research positions, internships, and academic jobs tailored to your field of study."
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onNext();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-blue-600 rounded-full p-3">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Scholarlinc</h1>
        </div>

        {/* Slide Content */}
        <div className="bg-white rounded-3xl p-8 shadow-lg text-center mb-8">
          <div className="flex justify-center mb-6">
            {slides[currentSlide].icon}
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {slides[currentSlide].title}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {slides[currentSlide].description}
          </p>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-blue-600 w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <Button 
          onClick={nextSlide}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl text-lg font-semibold"
        >
          {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default WelcomeScreen;

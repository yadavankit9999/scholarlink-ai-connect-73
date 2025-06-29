
import React from 'react';
import { ArrowLeft, Mail, MapPin, GraduationCap, BookOpen, Award, ExternalLink, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface StudentProfilePageProps {
  onBack: () => void;
}

const StudentProfilePage = ({ onBack }: StudentProfilePageProps) => {
  const studentData = {
    name: "Alex Chen",
    degree: "PhD in Computer Science",
    university: "Stanford University",
    year: "3rd Year",
    email: "alex.chen@stanford.edu",
    location: "Stanford, CA",
    avatar: "AC",
    researchInterests: ["Machine Learning", "Natural Language Processing", "Computer Vision", "AI Ethics"],
    about: "PhD student focused on developing ethical AI systems with applications in healthcare and education. Passionate about interdisciplinary research and making AI accessible to underrepresented communities.",
    education: [
      {
        degree: "PhD in Computer Science",
        institution: "Stanford University",
        period: "2022 - Present",
        gpa: "3.9/4.0"
      },
      {
        degree: "MS in Computer Science",
        institution: "UC Berkeley",
        period: "2020 - 2022",
        gpa: "3.8/4.0"
      },
      {
        degree: "BS in Computer Science",
        institution: "MIT",
        period: "2016 - 2020",
        gpa: "3.7/4.0"
      }
    ],
    experience: [
      {
        title: "Research Assistant",
        organization: "Stanford AI Lab",
        period: "2022 - Present",
        description: "Working on ethical AI frameworks under Prof. Wei Chen"
      },
      {
        title: "Software Engineering Intern",
        organization: "Google Research",
        period: "Summer 2023",
        description: "Developed ML models for language understanding"
      },
      {
        title: "Teaching Assistant",
        organization: "Stanford University",
        period: "2022 - 2023",
        description: "CS229 Machine Learning course"
      }
    ],
    publications: [
      {
        title: "Ethical Considerations in Large Language Models",
        venue: "NeurIPS 2023",
        authors: "A. Chen, W. Chen, et al.",
        year: 2023
      },
      {
        title: "Bias Detection in Computer Vision Systems",
        venue: "ICML 2023",
        authors: "A. Chen, L. Rodriguez, et al.",
        year: 2023
      }
    ],
    skills: ["Python", "TensorFlow", "PyTorch", "React", "Node.js", "SQL"],
    awards: [
      "NSF Graduate Research Fellowship (2022)",
      "Stanford Graduate Fellowship (2022)",
      "Best Paper Award - ICML 2023"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={onBack} className="p-2">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-bold text-gray-900">Student Profile</h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Profile Info */}
          <div className="space-y-6">
            {/* Basic Info Card */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    {studentData.avatar}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">{studentData.name}</h2>
                  <p className="text-lg text-gray-600 mb-2">{studentData.degree}</p>
                  <p className="text-gray-500 mb-4">{studentData.university} • {studentData.year}</p>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>{studentData.email}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{studentData.location}</span>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-2 mt-4">
                    <Button variant="outline" size="sm">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Contact
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Research Interests */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>Research Interests</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {studentData.researchInterests.map((interest, index) => (
                    <Badge key={index} variant="secondary">{interest}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {studentData.skills.map((skill, index) => (
                    <Badge key={index} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Awards */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span>Awards & Honors</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {studentData.awards.map((award, index) => (
                    <div key={index} className="text-sm text-gray-700">
                      • {award}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Detailed Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{studentData.about}</p>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="w-5 h-5" />
                  <span>Education</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studentData.education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-blue-200 pl-4">
                      <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                      <p className="text-gray-600">{edu.institution}</p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-sm text-gray-500">{edu.period}</span>
                        <span className="text-sm font-medium text-gray-700">GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card>
              <CardHeader>
                <CardTitle>Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studentData.experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-green-200 pl-4">
                      <h4 className="font-semibold text-gray-900">{exp.title}</h4>
                      <p className="text-gray-600">{exp.organization}</p>
                      <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                      <p className="text-sm text-gray-700">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Publications */}
            <Card>
              <CardHeader>
                <CardTitle>Publications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studentData.publications.map((pub, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-1">{pub.title}</h4>
                      <p className="text-sm text-gray-600 mb-1">{pub.authors}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-blue-600">{pub.venue} {pub.year}</span>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfilePage;

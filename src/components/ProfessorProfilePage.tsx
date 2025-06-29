
import React from 'react';
import { ArrowLeft, Mail, MapPin, GraduationCap, BookOpen, Award, ExternalLink, Users, Building, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ProfessorProfilePageProps {
  onBack: () => void;
}

const ProfessorProfilePage = ({ onBack }: ProfessorProfilePageProps) => {
  const professorData = {
    name: "Dr. Wei Chen",
    title: "Professor of Computer Science",
    university: "Stanford University",
    department: "Computer Science Department",
    lab: "AI Research Lab",
    email: "w.chen@stanford.edu",
    office: "Gates Building, Room 415",
    phone: "+1 (650) 123-4567",
    website: "https://cs.stanford.edu/~wchen",
    avatar: "WC",
    researchInterests: ["Machine Learning", "Computer Vision", "AI Ethics", "Deep Learning", "Robotics"],
    about: "Professor Chen leads research in ethical AI and computer vision applications. She has published 120+ papers in top-tier conferences including NIPS, ICML, and CVPR. Her work focuses on developing fair and transparent AI systems with real-world applications in healthcare, education, and autonomous systems.",
    education: [
      {
        degree: "PhD in Computer Science",
        institution: "MIT",
        year: "2008"
      },
      {
        degree: "MS in Electrical Engineering",
        institution: "Stanford University",
        year: "2004"
      },
      {
        degree: "BS in Computer Science",
        institution: "UC Berkeley",
        year: "2002"
      }
    ],
    positions: [
      {
        title: "Professor",
        institution: "Stanford University",
        department: "Computer Science",
        period: "2018 - Present"
      },
      {
        title: "Associate Professor",
        institution: "Stanford University",
        department: "Computer Science",
        period: "2014 - 2018"
      },
      {
        title: "Assistant Professor",
        institution: "Stanford University",
        department: "Computer Science",
        period: "2008 - 2014"
      },
      {
        title: "Research Scientist",
        institution: "Google Research",
        department: "AI Division",
        period: "2007 - 2008"
      }
    ],
    currentStudents: [
      {
        name: "Alex Chen",
        level: "PhD",
        year: "3rd Year",
        focus: "Ethical AI Frameworks"
      },
      {
        name: "Maria Rodriguez",
        level: "PhD",
        year: "2nd Year",
        focus: "Computer Vision for Healthcare"
      },
      {
        name: "James Kim",
        level: "MS",
        year: "1st Year",
        focus: "Deep Learning Applications"
      },
      {
        name: "Sarah Johnson",
        level: "PhD",
        year: "4th Year",
        focus: "AI Safety and Robustness"
      }
    ],
    pastStudents: [
      {
        name: "Dr. Michael Brown",
        level: "PhD",
        graduationYear: "2023",
        currentPosition: "Assistant Professor, UC Berkeley"
      },
      {
        name: "Dr. Lisa Wang",
        level: "PhD",
        graduationYear: "2022",
        currentPosition: "Research Scientist, Google DeepMind"
      },
      {
        name: "Dr. Robert Taylor",
        level: "PhD",
        graduationYear: "2021",
        currentPosition: "Senior ML Engineer, Tesla"
      },
      {
        name: "Jennifer Lee",
        level: "MS",
        graduationYear: "2023",
        currentPosition: "ML Engineer, OpenAI"
      }
    ],
    recentPublications: [
      {
        title: "Fairness-Aware Deep Learning: A Comprehensive Survey",
        venue: "Nature Machine Intelligence",
        year: 2024,
        citations: 156,
        authors: "W. Chen, A. Smith, M. Johnson"
      },
      {
        title: "Ethical Considerations in Large Language Models",
        venue: "NeurIPS 2023",
        year: 2023,
        citations: 89,
        authors: "W. Chen, A. Chen, et al."
      },
      {
        title: "Robust Computer Vision for Medical Diagnosis",
        venue: "ICML 2023",
        year: 2023,
        citations: 124,
        authors: "M. Rodriguez, W. Chen, L. Davis"
      }
    ],
    metrics: {
      publications: 125,
      hIndex: 42,
      citations: 8500,
      grants: 12
    },
    awards: [
      "IEEE Fellow (2020)",
      "NSF CAREER Award (2012)",
      "Best Paper Award - CVPR 2019",
      "Stanford Teaching Excellence Award (2016)"
    ],
    courses: [
      {
        code: "CS229",
        name: "Machine Learning",
        level: "Graduate",
        enrollment: 450
      },
      {
        code: "CS231N",
        name: "Convolutional Neural Networks",
        level: "Graduate",
        enrollment: 280
      },
      {
        code: "CS106A",
        name: "Programming Methodology",
        level: "Undergraduate",
        enrollment: 650
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={onBack} className="p-2">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-bold text-gray-900">Professor Profile</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Profile Info */}
          <div className="space-y-6">
            {/* Basic Info Card */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                    {professorData.avatar}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-1">{professorData.name}</h2>
                  <p className="text-gray-600 mb-2">{professorData.title}</p>
                  <p className="text-gray-500 mb-4">{professorData.university}</p>
                  
                  <div className="space-y-2 text-sm text-gray-600 text-left">
                    <div className="flex items-center space-x-2">
                      <Building className="w-4 h-4" />
                      <span>{professorData.department}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>{professorData.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{professorData.office}</span>
                    </div>
                  </div>

                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                    Contact Professor
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Research Metrics */}
            <Card>
              <CardHeader>
                <CardTitle>Research Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{professorData.metrics.publications}</div>
                    <div className="text-xs text-gray-600">Publications</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{professorData.metrics.hIndex}</div>
                    <div className="text-xs text-gray-600">h-index</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{professorData.metrics.citations}</div>
                    <div className="text-xs text-gray-600">Citations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">{professorData.metrics.grants}</div>
                    <div className="text-xs text-gray-600">Grants</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Research Interests */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Research Interests</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {professorData.researchInterests.map((interest, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">{interest}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{professorData.about}</p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Current Students */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>Current Students</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {professorData.currentStudents.map((student, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-gray-900">{student.name}</h4>
                            <p className="text-sm text-gray-600">{student.level} • {student.year}</p>
                            <p className="text-xs text-gray-500 mt-1">{student.focus}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
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
                  <div className="space-y-3">
                    {professorData.education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-blue-200 pl-3">
                        <h4 className="font-medium text-gray-900">{edu.degree}</h4>
                        <p className="text-sm text-gray-600">{edu.institution}</p>
                        <p className="text-xs text-gray-500">{edu.year}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Academic Positions */}
            <Card>
              <CardHeader>
                <CardTitle>Academic Positions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {professorData.positions.map((position, index) => (
                    <div key={index} className="border-l-2 border-green-200 pl-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-gray-900">{position.title}</h4>
                          <p className="text-gray-600">{position.institution}</p>
                          <p className="text-sm text-gray-500">{position.department}</p>
                        </div>
                        <span className="text-sm text-gray-500">{position.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Publications */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Publications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {professorData.recentPublications.map((pub, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{pub.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{pub.authors}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                          <span className="text-sm font-medium text-blue-600">{pub.venue} {pub.year}</span>
                          <span className="text-xs text-gray-500">{pub.citations} citations</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Past Students */}
            <Card>
              <CardHeader>
                <CardTitle>Notable Alumni</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {professorData.pastStudents.map((student, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-3">
                      <h4 className="font-medium text-gray-900">{student.name}</h4>
                      <p className="text-sm text-gray-600">{student.level} • {student.graduationYear}</p>
                      <p className="text-xs text-gray-500 mt-1">{student.currentPosition}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Current Courses */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Current Courses</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {professorData.courses.map((course, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-gray-900">{course.code}</h4>
                            <p className="text-sm text-gray-600">{course.name}</p>
                            <p className="text-xs text-gray-500">{course.level}</p>
                          </div>
                          <span className="text-xs text-gray-500">{course.enrollment} students</span>
                        </div>
                      </div>
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
                    {professorData.awards.map((award, index) => (
                      <div key={index} className="text-sm text-gray-700">
                        • {award}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessorProfilePage;

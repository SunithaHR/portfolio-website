// src/components/Portfolio.jsx
import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { 
  Code, Database, Smartphone, Cloud, Users, Briefcase, Award,
  Mail, Phone, MapPin, Calendar, ExternalLink, Github, Linkedin,
  BookOpen, Terminal, Server, Layers, Zap, Cpu
} from 'lucide-react';

// Import components
import FloatingIcons from './FloatingIcons';
import AnimatedTitle from './AnimatedTitle';
import ExperienceCounter from './ExperienceCounter';
import SkillBadge from './SkillBadge';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const sections = [
    { id: 'about', label: 'About', icon: <Users className="w-5 h-5" /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'projects', label: 'Projects', icon: <Layers className="w-5 h-5" /> },
    { id: 'skills', label: 'Skills', icon: <Zap className="w-5 h-5" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-5 h-5" /> }
  ];

  const skills = [
    { name: 'React.js', level: 90, icon: <Code className="w-6 h-6" />, color: 'from-cyan-500 to-blue-500' },
    { name: 'Node.js', level: 85, icon: <Terminal className="w-6 h-6" />, color: 'from-green-500 to-emerald-500' },
    { name: 'MongoDB', level: 80, icon: <Database className="w-6 h-6" />, color: 'from-green-400 to-teal-500' },
    { name: 'Next.js', level: 75, icon: <Server className="w-6 h-6" />, color: 'from-gray-700 to-gray-900' },
    { name: 'React Native', level: 70, icon: <Smartphone className="w-6 h-6" />, color: 'from-blue-400 to-indigo-500' },
    { name: 'Tailwind CSS', level: 95, icon: <Cpu className="w-6 h-6" />, color: 'from-cyan-400 to-teal-500' },
  ];

  const projects = [
    {
      title: 'FortuneOne – Enterprise Platform',
      description: 'Unified enterprise portal supporting workflows for 7 departments including HR, Sales, Legal, and Customer Support.',
      technologies: ['React.js', 'Node.js', 'MySQL', 'Tailwind CSS', 'React Native', 'WebSocket'],
      role: 'Full Stack Developer',
      features: [
        'Real-time Task Management System',
        'Attendance Tracker with geolocation',
        'Department-specific workflows',
        'Live Chat with file sharing',
        'Mobile App for on-the-go access'
      ]
    },
    {
      title: 'StrateHRM – HR Automation',
      description: 'End-to-end HR automation platform with recruiter dashboard and employee lifecycle management.',
      technologies: ['React.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT Auth'],
      role: 'Full Stack Developer',
      features: [
        'Recruiter Dashboard with analytics',
        'Automated Employee Onboarding',
        'Document approval workflows',
        'Real-time activity tracking',
        'Multi-level approval systems'
      ]
    },
    {
      title: 'StrateCRM – Sales CRM',
      description: 'Sales pipeline and lead management platform with custom dashboards and real-time updates.',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Chart.js'],
      role: 'Full Stack Developer',
      features: [
        'Lead Management with scoring',
        'Visual Sales Pipeline',
        'Automated follow-up scheduling',
        'Custom dashboard for executives',
        'Real-time sales progress tracking'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      {/* 3D Background Canvas */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <FloatingIcons />
          <AnimatedTitle />
          <Stars radius={100} depth={50} count={5000} factor={4} />
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={0.5}
            enablePan={false}
          />
        </Canvas>
      </div>

      {/* Mouse follow gradient */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x * 50 + 50}% ${mousePosition.y * 50 + 50}%, rgba(120, 119, 198, 0.15), transparent 80%)`
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-2 animate-pulse">
                SUNITHA HR
              </h1>
              <p className="text-xl text-gray-300">Full Stack Developer</p>
              <p className="text-gray-400 mt-2">Building scalable enterprise applications</p>
            </div>
            <ExperienceCounter />
          </div>
          
          {/* Navigation */}
          <nav className="mt-8">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105'
                      : 'glass-effect text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {section.icon}
                  <span>{section.label}</span>
                </button>
              ))}
            </div>
          </nav>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile & Contact */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <div className="glass-effect rounded-2xl p-6 transform transition-all duration-300 hover:scale-[1.02]">
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl font-bold mb-4 animate-spin-slow">
                  <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center">
                    SH
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold gradient-text">Sunitha HR</h3>
                  <p className="text-gray-300">Full Stack Developer</p>
                  <p className="text-gray-400 text-sm mt-1">1.8+ years experience</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <a href="mailto:sunithahr176@gmail.com" className="flex items-center space-x-3 p-3 glass-effect rounded-lg hover:bg-white/20 transition-colors">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>sunithahr176@gmail.com</span>
                </a>
                
                <a href="tel:+919739339305" className="flex items-center space-x-3 p-3 glass-effect rounded-lg hover:bg-white/20 transition-colors">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span>+91 97393 39305</span>
                </a>
                
                <div className="flex items-center space-x-3 p-3 glass-effect rounded-lg">
                  <MapPin className="w-5 h-5 text-yellow-400" />
                  <span>Bangalore, India</span>
                </div>
                
                <div className="flex items-center space-x-3 p-3 glass-effect rounded-lg">
                  <Calendar className="w-5 h-5 text-purple-400" />
                  <span>Born: June 17, 1999</span>
                </div>
              </div>

              {/* Languages & Certifications */}
              <div className="mt-6 pt-6 border-t border-white/20">
                <h4 className="font-bold mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-blue-400" />
                  Languages & Certifications
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Kannada & English</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Fluent</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-yellow-400" />
                    <span>Java Full Stack Certification</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-yellow-400" />
                    <span>ASP.NET Training</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com/in/sunithahr" 
                    target="_blank"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-lg text-center font-medium hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href="https://github.com/SunithaHR" 
                    target="_blank"
                    className="flex-1 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-3 rounded-lg text-center font-medium hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Skills Overview */}
            <div className="glass-effect rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                Technical Expertise
              </h3>
              <div className="space-y-4">
                {skills.map((skill, idx) => (
                  <SkillBadge key={idx} {...skill} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Section */}
            {activeSection === 'about' && (
              <div className="glass-effect rounded-2xl p-8 animate-fadeIn">
                <h2 className="text-3xl font-bold mb-6 gradient-text">
                  Professional Summary
                </h2>
                <div className="space-y-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Full Stack Developer with <span className="font-bold text-blue-300">1 year 8 months</span> of hands-on experience in building scalable enterprise applications for HR, Sales, Customer Support, and Operations teams.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-6 rounded-xl">
                      <h4 className="font-bold text-lg mb-4 flex items-center">
                        <Code className="w-5 h-5 mr-2" />
                        Frontend Stack
                      </h4>
                      <div className="space-y-2">
                        {['React.js', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Vite'].map((item) => (
                          <div key={item} className="flex items-center justify-between p-2 hover:bg-white/5 rounded">
                            <span className="text-gray-300">{item}</span>
                            <span className="text-blue-300 text-sm">Advanced</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-6 rounded-xl">
                      <h4 className="font-bold text-lg mb-4 flex items-center">
                        <Server className="w-5 h-5 mr-2" />
                        Backend Stack
                      </h4>
                      <div className="space-y-2">
                        {['Node.js', 'Express.js', 'REST APIs', 'MySQL/MongoDB', 'Git & CI/CD'].map((item) => (
                          <div key={item} className="flex items-center justify-between p-2 hover:bg-white/5 rounded">
                            <span className="text-gray-300">{item}</span>
                            <span className="text-green-300 text-sm">Advanced</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl">
                    <h4 className="font-bold text-lg mb-4">What I Bring</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                        Scalable architecture design
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                        Mobile-first development
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                        Cross-functional collaboration
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                        Enterprise application expertise
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Experience Section */}
            {activeSection === 'experience' && (
              <div className="glass-effect rounded-2xl p-8 animate-fadeIn">
                <h2 className="text-3xl font-bold mb-8 gradient-text">
                  Professional Experience
                </h2>
                
                <div className="space-y-8">
                  {/* Work Experience */}
                  <div className="relative pl-8 border-l-2 border-blue-400">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-400 rounded-full animate-pulse" />
                    <div className="bg-gradient-to-r from-blue-900/30 to-transparent p-6 rounded-xl">
                      <h3 className="text-2xl font-bold">Full Stack Developer</h3>
                      <p className="text-blue-300 mb-2">The Fortune Group, Bangalore</p>
                      <p className="text-gray-300 mb-4">April 2022 - Present</p>
                      <ul className="space-y-3">
                        {[
                          'Developing enterprise applications across 7 departments (HR, Sales, Legal, Accounts, etc.)',
                          'Building scalable frontends with React.js, Tailwind CSS, and Vite',
                          'Implementing backend APIs with Node.js & Express.js',
                          'Contributing to React Native mobile app for employee services',
                          'Collaborating with cross-functional teams for module design and deployment'
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start group">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:animate-ping" />
                            <span className="group-hover:text-white transition-colors">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="relative pl-8 border-l-2 border-green-400">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-green-400 rounded-full" />
                    <h3 className="text-2xl font-bold mb-6">Education</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-green-900/30 to-transparent p-6 rounded-xl">
                        <h4 className="font-bold text-lg">Bachelor of Engineering</h4>
                        <p className="text-green-300 mb-1">SKSJTI, Bangalore</p>
                        <p className="text-gray-300">2017 - 2020</p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-green-900/30 to-transparent p-6 rounded-xl">
                        <h4 className="font-bold text-lg">Diploma in Engineering</h4>
                        <p className="text-green-300 mb-1">Govt. Polytechnic for Women, Ramanagara</p>
                        <p className="text-gray-300">2014 - 2017</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Projects Section */}
            {activeSection === 'projects' && (
              <div className="space-y-6 animate-fadeIn">
                <h2 className="text-3xl font-bold mb-8 gradient-text">
                  Featured Projects
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  {projects.map((project, idx) => (
                    <ProjectCard key={idx} {...project} />
                  ))}
                </div>
              </div>
            )}

            {/* Skills Section */}
            {activeSection === 'skills' && (
              <div className="glass-effect rounded-2xl p-8 animate-fadeIn">
                <h2 className="text-3xl font-bold mb-8 gradient-text">
                  Technical Skills
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Frontend Skills */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-blue-300 flex items-center">
                      <Code className="w-5 h-5 mr-2" />
                      Frontend Development
                    </h3>
                    <div className="space-y-3">
                      {['React.js', 'Next.js', 'JavaScript', 'HTML5/CSS3', 'Tailwind CSS', 'Vite'].map((skill) => (
                        <div key={skill} className="p-4 glass-effect rounded-xl hover:scale-[1.02] transition-transform">
                          <div className="flex justify-between items-center mb-2">
                            <span>{skill}</span>
                            <span className="text-blue-300 font-medium">90%</span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full w-[90%]" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Backend Skills */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-green-300 flex items-center">
                      <Server className="w-5 h-5 mr-2" />
                      Backend & Databases
                    </h3>
                    <div className="space-y-3">
                      {['Node.js', 'Express.js', 'REST APIs', 'MySQL', 'MongoDB', 'PostgreSQL'].map((skill) => (
                        <div key={skill} className="p-4 glass-effect rounded-xl hover:scale-[1.02] transition-transform">
                          <div className="flex justify-between items-center mb-2">
                            <span>{skill}</span>
                            <span className="text-green-300 font-medium">85%</span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full w-[85%]" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tools */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-purple-300 flex items-center">
                      <Terminal className="w-5 h-5 mr-2" />
                      Tools & DevOps
                    </h3>
                    <div className="space-y-3">
                      {['Git & GitHub', 'CI/CD Pipelines', 'VS Code', 'Postman', 'React Native', 'Docker'].map((skill) => (
                        <div key={skill} className="p-4 glass-effect rounded-xl hover:scale-[1.02] transition-transform">
                          <div className="flex justify-between items-center mb-2">
                            <span>{skill}</span>
                            <span className="text-purple-300 font-medium">80%</span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-purple-500 to-pink-400 rounded-full w-[80%]" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Soft Skills */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-yellow-300 flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Soft Skills
                    </h3>
                    <div className="space-y-3">
                      {['Problem Solving', 'System Design', 'Team Collaboration', 'API Integration', 'Debugging', 'Requirements Analysis'].map((skill) => (
                        <div key={skill} className="p-4 glass-effect rounded-xl hover:scale-[1.02] transition-transform">
                          <div className="flex justify-between items-center mb-2">
                            <span>{skill}</span>
                            <span className="text-yellow-300 font-medium">Expert</span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-400 rounded-full w-[95%]" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Section */}
            {activeSection === 'contact' && (
              <div className="glass-effect rounded-2xl p-8 animate-fadeIn">
                <h2 className="text-3xl font-bold mb-8 gradient-text">
                  Get In Touch
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                    <div className="space-y-4">
                      <a href="mailto:sunithahr176@gmail.com" className="flex items-center space-x-4 p-4 glass-effect rounded-xl hover:scale-[1.02] transition-all group">
                        <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                          <Mail className="w-6 h-6 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Email</p>
                          <p className="group-hover:text-blue-300 transition-colors">sunithahr176@gmail.com</p>
                        </div>
                      </a>
                      
                      <a href="tel:+919739339305" className="flex items-center space-x-4 p-4 glass-effect rounded-xl hover:scale-[1.02] transition-all group">
                        <div className="p-3 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors">
                          <Phone className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Phone</p>
                          <p className="group-hover:text-green-300 transition-colors">+91 97393 39305</p>
                        </div>
                      </a>
                      
                      <div className="flex items-center space-x-4 p-4 glass-effect rounded-xl">
                        <div className="p-3 bg-yellow-500/20 rounded-lg">
                          <MapPin className="w-6 h-6 text-yellow-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Location</p>
                          <p>Bangalore, India</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-6">Connect Online</h3>
                    <div className="space-y-4">
                      <a 
                        href="https://linkedin.com/in/sunithahr" 
                        target="_blank"
                        className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:scale-[1.02] transition-all group"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-white/20 rounded-lg">
                            <Linkedin className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="font-medium">LinkedIn</p>
                            <p className="text-sm text-blue-100">/in/sunithahr</p>
                          </div>
                        </div>
                        <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                      
                      <a 
                        href="https://github.com/SunithaHR" 
                        target="_blank"
                        className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl hover:scale-[1.02] transition-all group"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-white/20 rounded-lg">
                            <Github className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="font-medium">GitHub</p>
                            <p className="text-sm text-gray-300">/SunithaHR</p>
                          </div>
                        </div>
                        <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </div>
                    
                    <div className="mt-8 p-6 glass-effect rounded-xl">
                      <h4 className="font-bold mb-4">Available For</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Full Stack Development', 'React Projects', 'Node.js Backend', 'Enterprise Applications', 'Mobile Apps'].map((item) => (
                          <span key={item} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-white/20">
          <div className="text-center text-gray-400">
            <p className="text-lg mb-2">© {new Date().getFullYear()} Sunitha HR. All rights reserved.</p>
            <p className="flex items-center justify-center space-x-2">
              <span>Built with</span>
              <Code className="w-4 h-4 text-blue-400" />
              <span>React.js,</span>
              <span className="text-blue-300">Three.js,</span>
              <span>and</span>
              <span className="text-cyan-300">Tailwind CSS</span>
            </p>
            <p className="mt-4 text-sm text-gray-500">
              This portfolio automatically updates experience duration and features real-time 3D animations
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
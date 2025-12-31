// src/App.jsx
import { useEffect, useRef, useState } from 'react';
import { 
  Code, 
  Sparkles, 
  Zap, 
  Rocket,
  Star,
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Layers,
  Database,
  Smartphone,
  Terminal,
  Cloud,
  Palette,
  Users,
  Award,
  ChevronRight,
  Cpu,
  Globe,
  Lock,
  TrendingUp,
  Brain,
  Heart,
  ShoppingBag,
  CheckSquare,
  BarChart,
  Moon,
  Sun,
  Circle,
  Orbit
} from 'lucide-react';

function App() {
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const sectionsRef = useRef([]);
  const [activeOrbit, setActiveOrbit] = useState(0);

  const texts = [
    "Full Stack Developer",
    "React Specialist",
    "Node.js Expert",
    "UI/UX Enthusiast",
    "Problem Solver"
  ];

  // Typing animation
  useEffect(() => {
    if (currentTextIndex < texts.length) {
      const currentText = texts[currentTextIndex];
      let i = 0;
      
      const typingInterval = setInterval(() => {
        if (i <= currentText.length) {
          setTypedText(currentText.substring(0, i));
          i++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
            setTypedText('');
          }, 1500);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }
  }, [currentTextIndex]);

  // Solar system animation for tech stack
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveOrbit(prev => (prev + 1) % 6);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Mouse trail effect
  useEffect(() => {
    const createSparkle = (x, y) => {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      sparkle.style.animation = `sparkleEffect 1s ease-out forwards`;
      document.body.appendChild(sparkle);
      
      setTimeout(() => sparkle.remove(), 1000);
    };

    const handleMouseMove = (e) => {
      if (Math.random() > 0.7) {
        createSparkle(e.clientX, e.clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSection(sectionId);
            
            // Add entrance animation
            entry.target.classList.add('section-entrance');
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Animated Gradient Text Component
  const AnimatedGradientText = ({ children, className = '' }) => (
    <div className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-xl opacity-70 animate-gradient-shift"></div>
    </div>
  );

  // Solar System Tech Stack
  const SolarSystemTechStack = () => {
    const technologies = [
      { name: 'React', icon: <Code className="w-6 h-6" />, color: 'text-cyan-400', speed: 15 },
      { name: 'Node.js', icon: <Terminal className="w-6 h-6" />, color: 'text-green-400', speed: 18 },
      { name: 'MongoDB', icon: <Database className="w-6 h-6" />, color: 'text-emerald-400', speed: 21 },
      { name: 'Tailwind', icon: <Palette className="w-6 h-6" />, color: 'text-blue-400', speed: 24 },
      { name: 'Next.js', icon: <Globe className="w-6 h-6" />, color: 'text-purple-400', speed: 27 },
      { name: 'PostgreSQL', icon: <Layers className="w-6 h-6" />, color: 'text-indigo-400', speed: 30 },
    ];

    return (
      <div className="relative w-72 h-72 mx-auto">
        {/* Outer orbits */}
        <div className="absolute inset-0">
          {technologies.map((_, index) => (
            <div
              key={index}
              className="absolute inset-0 border border-gray-700/30 rounded-full"
              style={{
                transform: `scale(${0.7 + index * 0.05})`,
              }}
            ></div>
          ))}
        </div>

        {/* Moving tech icons - only one moves at a time */}
        {technologies.map((tech, index) => {
          const angle = (Date.now() / 1000) * (360 / tech.speed);
          const radius = 80 + index * 20;
          const x = radius * Math.cos(angle * Math.PI / 180);
          const y = radius * Math.sin(angle * Math.PI / 180);
          const isActive = activeOrbit === index;
          
          return (
            <div
              key={tech.name}
              className={`absolute left-1/2 top-1/2 transition-all duration-1000 ${
                isActive ? 'z-20' : 'z-10'
              }`}
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
              onClick={() => setActiveOrbit(index)}
            >
              <div className={`relative group cursor-pointer transform transition-all duration-500 ${
                isActive ? 'scale-125' : 'scale-100'
              } ${tech.color}`}>
                {/* Trail effect for active orbit */}
                {isActive && (
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-sm animate-pulse"></div>
                )}
                
                <div className={`relative w-14 h-14 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-lg ${
                  isActive 
                    ? 'border-cyan-500 shadow-cyan-500/50' 
                    : 'border-gray-700 group-hover:border-cyan-300'
                }`}>
                  {tech.icon}
                  {isActive && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-500 rounded-full animate-ping"></div>
                  )}
                </div>
                
                <div className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
                  isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}>
                  <div className="bg-gray-900/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap border border-cyan-500/30 shadow-lg">
                    {tech.name}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-cyan-500 rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        
        {/* Sun at center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/40 via-orange-500/30 to-red-500/40 rounded-full animate-pulse"></div>
            <div className="absolute inset-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center border-2 border-yellow-500/30 shadow-lg">
              <div className="relative">
                <Circle className="w-8 h-8 text-yellow-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 to-orange-200/20 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Orbit indicators */}
        <div className="absolute -bottom-8 left-0 right-0 flex justify-center space-x-2">
          {technologies.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveOrbit(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeOrbit === index 
                  ? 'bg-cyan-500 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Select orbit ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  };

  // Stats Component
  const Stats = () => {
    const stats = [
      { value: '15+', label: 'Technologies', icon: <Cpu className="w-7 h-7" />, color: 'from-cyan-500 to-blue-500' },
      { value: '10+', label: 'Projects', icon: <Layers className="w-7 h-7" />, color: 'from-purple-500 to-pink-500' },
      { value: '99%', label: 'Satisfaction', icon: <Star className="w-7 h-7" />, color: 'from-yellow-500 to-orange-500' },
      { value: '24/7', label: 'Dedication', icon: <Zap className="w-7 h-7" />, color: 'from-green-500 to-emerald-500' },
    ];

    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative group"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
            
            <div className="relative bg-gray-900/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 group-hover:scale-105">
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-xl blur opacity-20`}></div>
                <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto transform group-hover:rotate-12 transition-transform duration-500`}>
                  {stat.icon}
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">
                  {stat.value}
                </div>
                <div className="text-gray-400 group-hover:text-cyan-300 transition-colors">
                  {stat.label}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Project Card Component
  const ProjectCard = ({ project, index }) => (
    <div
      className="group relative"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-700`}></div>
      
      <div className="relative bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/80 backdrop-blur-sm rounded-3xl border border-gray-700 overflow-hidden group-hover:border-cyan-500/50 transition-all duration-700 hover:scale-[1.03] h-full transform">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        
        <div className="p-8 h-full flex flex-col">
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className={`text-sm bg-gradient-to-r ${project.color} bg-clip-text text-transparent font-medium mb-3`}>
                {project.category}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                {project.title}
              </h3>
            </div>
            <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500`}>
              {project.icon}
            </div>
          </div>
          
          <p className="text-gray-300 mb-8 leading-relaxed flex-grow group-hover:text-gray-200 transition-colors">
            {project.description}
          </p>
          
          <div className="mb-8">
            <h4 className="font-medium mb-4 text-gray-400 flex items-center group-hover:text-cyan-400 transition-colors">
              <Star className="w-4 h-4 mr-2" />
              Key Features
            </h4>
            <ul className="space-y-3">
              {project.features.map((feature, idx) => (
                <li 
                  key={idx} 
                  className="flex items-center text-sm text-gray-300 group-hover:text-gray-200 transition-colors transform group-hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-3"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-auto">
            {project.tech.map((tech, idx) => (
              <span 
                key={idx}
                className="px-4 py-2 bg-gray-800/60 text-gray-300 rounded-full text-sm hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured online shopping platform with real-time inventory, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      features: ["Real-time updates", "Payment integration", "Admin dashboard", "Inventory management"],
      color: "from-cyan-500 to-blue-500",
      icon: <ShoppingBag className="w-6 h-6" />,
      category: "Full Stack"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, notifications, and team collaboration.",
      tech: ["Next.js", "Socket.io", "PostgreSQL", "Tailwind"],
      features: ["Real-time collaboration", "Team management", "Notifications", "Analytics"],
      color: "from-purple-500 to-pink-500",
      icon: <CheckSquare className="w-6 h-6" />,
      category: "Web Application"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather monitoring dashboard with interactive maps, forecasts, and historical data analysis.",
      tech: ["React", "D3.js", "Weather API", "Chart.js"],
      features: ["Real-time data", "Interactive maps", "Forecast charts", "Location tracking"],
      color: "from-orange-500 to-yellow-500",
      icon: <BarChart className="w-6 h-6" />,
      category: "Data Visualization"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-purple-900/10 to-blue-900/20"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      {/* Theme Toggle */}
      {/* <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed top-6 right-6 z-50 w-12 h-12 bg-gray-900/80 backdrop-blur-xl rounded-full border border-gray-700 flex items-center justify-center hover:border-cyan-500/50 hover:scale-110 transition-all duration-300 group"
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5 text-yellow-400 group-hover:rotate-180 transition-transform" />
        ) : (
          <Moon className="w-5 h-5 text-cyan-400 group-hover:rotate-180 transition-transform" />
        )}
      </button> */}

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-gray-900/60 backdrop-blur-xl border-b border-gray-800/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                  <Code className="w-6 h-6" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              </div>
              <div>
                <div className="font-bold text-xl tracking-tight bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Sunitha HR
                </div>
                <div className="text-sm text-gray-400">Full Stack Developer</div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {['home', 'skills', 'projects', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`relative group font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item 
                      ? 'text-cyan-400 bg-gray-800/50' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/30'
                  }`}
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    {activeSection === item && <Star className="w-3 h-3" />}
                    <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                  </span>
                  {activeSection === item && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg"></div>
                  )}
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="group relative px-6 py-2.5 rounded-full font-medium overflow-hidden transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-blue-600 animate-gradient-shift"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
              <span className="relative flex items-center space-x-2">
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        ref={(el) => sectionsRef.current[0] = el}
        className="relative min-h-screen flex items-center pt-32 pb-20"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center space-x-2 bg-gray-900/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700 animate-float-gentle">
                <div className="relative">
                  <Code className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Welcome to My Portfolio
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                <span className="block">Hi, I'm</span>
                <AnimatedGradientText className="block mt-4">
                  Sunitha HR
                </AnimatedGradientText>
              </h1>

              <div className="h-16 relative">
                <div className="text-3xl md:text-4xl font-medium">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    I'm a{' '}
                  </span>
                  <span className="text-white border-r-2 border-cyan-400 animate-pulse relative">
                    {typedText}
                  </span>
                </div>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed">
                I build <span className="text-cyan-400 font-semibold">modern web experiences</span> 
                that <span className="text-blue-400 font-semibold">engage users</span> and 
                <span className="text-purple-400 font-semibold"> bring ideas</span> to life. 
                Every line of code is crafted with precision and care.
              </p>

              <div className="flex flex-wrap gap-6 pt-8">
                <a
                  href="#projects"
                  className="group relative px-10 py-5 rounded-full font-medium overflow-hidden transition-all duration-700 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-blue-600 animate-gradient-shift"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                  <span className="relative flex items-center space-x-3 text-lg">
                    <span>View My Work</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </a>

                <a
                  href="https://github.com/SunithaHR"
                  target="_blank"
                  className="group px-10 py-5 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-full font-medium hover:border-cyan-500/50 hover:bg-gray-900/80 transition-all duration-500"
                >
                  <span className="flex items-center space-x-3 text-lg">
                    <Github className="w-5 h-5 group-hover:text-cyan-400 group-hover:rotate-12 transition-all" />
                    <span>View Code</span>
                  </span>
                </a>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <SolarSystemTechStack />
            </div>
          </div>

          <div className="mt-24">
            <Stats />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        id="skills" 
        ref={(el) => sectionsRef.current[1] = el}
        className="py-32 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-gray-950"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gray-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700 mb-8 animate-float-gentle">
              <Brain className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Technical Expertise
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <AnimatedGradientText>
                Core Skills
              </AnimatedGradientText>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each skill is carefully developed and mastered to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Frontend Development',
                icon: <Palette className="w-10 h-10" />,
                skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
                color: 'from-cyan-500 to-blue-500',
              },
              {
                title: 'Backend Development',
                icon: <Terminal className="w-10 h-10" />,
                skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Authentication'],
                color: 'from-purple-500 to-pink-500',
              },
              {
                title: 'Database Management',
                icon: <Database className="w-10 h-10" />,
                skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'AWS', 'Docker'],
                color: 'from-green-500 to-emerald-500',
              },
              {
                title: 'Mobile Development',
                icon: <Smartphone className="w-10 h-10" />,
                skills: ['React Native', 'Expo', 'Mobile UI/UX', 'Push Notifications'],
                color: 'from-orange-500 to-yellow-500',
              },
              {
                title: 'Development Tools',
                icon: <Cpu className="w-10 h-10" />,
                skills: ['Git', 'CI/CD', 'VS Code', 'Webpack', 'Testing'],
                color: 'from-blue-500 to-indigo-500',
              },
              {
                title: 'Soft Skills',
                icon: <Users className="w-10 h-10" />,
                skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Project Management'],
                color: 'from-pink-500 to-rose-500',
              },
            ].map((category, index) => (
              <div
                key={index}
                className="group relative animate-fadeInUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-700`}></div>
                
                <div className="relative bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-sm rounded-3xl border border-gray-700 p-8 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02] h-full">
                  <div className="relative mb-8">
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl blur opacity-20`}></div>
                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mx-auto transform group-hover:rotate-12 transition-transform duration-500`}>
                      {category.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-cyan-300 transition-colors">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all duration-300 group/skill transform hover:translate-x-2"
                      >
                        <span className="text-gray-300 group-hover/skill:text-white group-hover/skill:scale-105 transition-all">
                          {skill}
                        </span>
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full group-hover/skill:scale-150 transition-transform"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        ref={(el) => sectionsRef.current[2] = el}
        className="py-32 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-gray-950"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gray-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700 mb-8 animate-float-gentle">
              <Layers className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Featured Work
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <AnimatedGradientText>
                My Projects
              </AnimatedGradientText>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each project represents a unique challenge solved with innovative solutions and clean code.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        ref={(el) => sectionsRef.current[3] = el}
        className="py-32 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/15 to-gray-950"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 bg-gray-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700 mb-8 animate-float-gentle">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                <AnimatedGradientText>
                  Let's Work Together
                </AnimatedGradientText>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Ready to bring your ideas to life? Reach out and let's create something amazing!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  value: 'sunithahr176@gmail.com',
                  color: 'from-cyan-500 to-blue-500',
                  href: 'mailto:sunithahr176@gmail.com',
                  delay: '100ms',
                  action: 'Send Email'
                },
                {
                  icon: Linkedin,
                  title: 'LinkedIn',
                  value: '/in/sunithahr',
                  color: 'from-blue-500 to-indigo-500',
                  href: 'https://linkedin.com/in/sunithahr',
                  delay: '200ms',
                  action: 'Connect'
                },
                {
                  icon: Github,
                  title: 'GitHub',
                  value: '/SunithaHR',
                  color: 'from-gray-500 to-gray-700',
                  href: 'https://github.com/SunithaHR',
                  delay: '300ms',
                  action: 'View Profile'
                }
              ].map((contact, idx) => (
                <a
                  key={idx}
                  href={contact.href}
                  target={contact.title !== 'Email' ? '_blank' : '_self'}
                  className="group relative animate-fadeInUp"
                  style={{ animationDelay: contact.delay }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${contact.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-700`}></div>
                  
                  <div className="relative bg-gradient-to-br from-gray-900/70 to-gray-800/70 backdrop-blur-sm rounded-3xl border border-gray-700 p-10 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.05] h-full">
                    <div className="relative mb-8">
                      <div className={`absolute inset-0 bg-gradient-to-r ${contact.color} rounded-2xl blur opacity-20`}></div>
                      <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-r ${contact.color} flex items-center justify-center mx-auto transform group-hover:rotate-360 transition-transform duration-700`}>
                        <contact.icon className="w-10 h-10" />
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                        {contact.title}
                      </div>
                      <div className="text-gray-300 mb-6 group-hover:text-white transition-colors">
                        {contact.value}
                      </div>
                      <div className="inline-flex items-center space-x-2 text-cyan-400 text-sm font-medium">
                        <span>{contact.action}</span>
                        <ExternalLink className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Footer */}
            <div className="pt-12 border-t border-gray-800/50">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                <div className="flex items-center space-x-4 group">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center transform group-hover:rotate-360 transition-transform duration-1000">
                      <Code className="w-7 h-7" />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                  </div>
                  <div>
                    <div className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      Sunitha HR
                    </div>
                    <div className="text-sm text-gray-400">Full Stack Developer</div>
                  </div>
                </div>

                <div className="text-gray-400 text-sm flex items-center space-x-2">
                  <span>Built with</span>
                  <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                  <span>& React</span>
                </div>

                <div className="text-gray-400 text-sm text-center md:text-right">
                  <div>© {new Date().getFullYear()} All rights reserved</div>
                  <div className="mt-2 text-gray-500">React • Vite • Tailwind CSS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
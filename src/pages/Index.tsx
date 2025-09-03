import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ExternalLink, 
  ChevronDown,
  Code,
  Database,
  Globe,
  Cpu,
  Moon,
  Sun,
  Menu,
  X,
  Sparkles,
  Zap,
  Star
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [darkMode, setDarkMode] = useState(true); // Start in dark mode
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  // Initialize dark mode on component mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const projects = [
  {
    title: "Distraction Blocker Chrome Extension",
    description: "AI-powered Chrome extension that identifies and blocks distracting websites during work hours to improve productivity.",
    technologies: ["JavaScript", "HTML", "CSS", "Gemini API", "MongoDB"],
    date: "March 2025",
    github: "https://github.com/kevn-xo/Distraction-Blocker",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Face Emotion Recognition",
    description: "Machine learning model for real-time emotion detection using computer vision and deep learning techniques.",
    technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "FER-2013"],
    date: "December 2024",
    github: "https://github.com/kevn-xo/DL-Face-Emotion-Recognition",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "RFID Based Attendance Management System",
    description: "Automated attendance tracking system using RFID technology for seamless and accurate attendance management.",
    technologies: ["IoT"],
    date: "May 2024",
    github: "https://github.com/kevn-xo/RFID-Based-Attendance-Management-System",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Stocks Management Portfolio",
    description: "Web application for managing stock portfolios with real-time data tracking and comprehensive analytics.",
    technologies: ["Java", "Spring Boot", "IntelliJ IDE"],
    date: "March 2024",
    github: "https://github.com/kevn-xo/Stocks-Management",
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "Smart Energy Meter",
    description: "IoT-based energy monitoring system for real-time electricity consumption tracking and analysis.",
    technologies: ["IoT"],
    date: "November 2023",
    github: "https://github.com/kevn-xo/Smart-Energy-Meter",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    title: "Smart Home Automation",
    description: "Automated home control system using Arduino for managing various household devices and appliances.",
    technologies: ["Arduino", "C"],
    date: "February 2023",
    github: "https://github.com/kevn-xo/Smart-Home-Automation",
    gradient: "from-teal-500 to-blue-500"
  }
];


  const skills = {
    "Programming Languages": ["C", "C++", "Java", "Python"],
    "Web Development": ["HTML5", "CSS", "React", "Bootstrap", "Spring Boot"],
    "Tools & Technologies": ["MySQL", "PostgreSQL", "Eclipse", "Google Colab", "Git", "Arduino"],
    "Soft Skills": ["Team Leadership", "UI Design", "Research Writing","Communication"]
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl z-50 border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-gray-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Kevin Anand Raj
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)} 
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium capitalize relative group"
                >
                  {section}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleDarkMode}
                className="p-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-700 transition-all duration-300"
              >
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 animate-fade-in">
              <div className="flex flex-col space-y-2">
                {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                  <button 
                    key={section}
                    onClick={() => scrollToSection(section)} 
                    className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-gray-700"
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 pt-20 pb-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -right-4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6 leading-[1.2] md:leading-[1.4]">
              Kevin Anand Raj
            </h1>
            <h2 className="text-xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-light">
              Electrical and Electronics Engineer | Developer | IoT Enthusiast
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Engineering ideas into real-world solutions through innovative technology and creative problem-solving.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="w-5 h-5 mr-2" />
                View My Work
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-600 text-blue-600 hover:bg-gradient-to-r hover:from-green-600 hover:to-emerald-600 dark:hover:from-green-500 dark:hover:to-emerald-500 hover:text-white hover:border-transparent dark:border-blue-400 dark:text-blue-400 dark:hover:border-transparent px-8 py-4 text-lg font-medium transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="mt-16 animate-bounce">
            <ChevronDown className="h-8 w-8 text-gray-400 mx-auto cursor-pointer hover:text-blue-600 transition-colors duration-300" onClick={() => scrollToSection('about')} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white dark:bg-gray-900 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-sm font-medium text-blue-800 dark:text-blue-200 backdrop-blur-sm mb-6">
              <Star className="w-4 h-4 mr-2" />
              About Me
            </div>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6 leading-none"
              style={{ paddingBottom: '0.5rem' }}>
              Building Tomorrow's Solutions
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Electrical and Electronics Engineer driven by innovation, crafting impactful solutions through IoT, Web Development, and Machine Learning. From microcontrollers to web apps, I build systems that talk, learn, and help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 dark:from-gray-800 dark:to-blue-900/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mr-4"></div>
                  Education
                </h3>
                <div className="space-y-6">
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 w-2 h-2 bg-blue-600 rounded-full"></div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      Bachelor of Engineering - Electrical and Electronics
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Karpagam College of Engineering
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm">2022 – 2026</p>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 w-2 h-2 bg-purple-600 rounded-full"></div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">Higher Secondary</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Adwaith G.N.S Matriculation Higher Secondary School
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm">2021 – 2022</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-purple-50/50 dark:from-gray-800 dark:to-purple-900/20 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                  <div className="w-2 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full mr-4"></div>
                  Experience
                </h3>
                <div className="space-y-6">
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 w-2 h-2 bg-purple-600 rounded-full"></div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      Team Member & Developer
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Hackathon Team: Codohoclis
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm">Jan 2025</p>
                  </div>
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-2 w-2 h-2 bg-pink-600 rounded-full"></div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      Electrical Engineer Intern
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      L&T Construction, Sedarpet, Pondicherry
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-sm">June 2024</p>
                  </div>
                </div>
              </div>
                  <Button asChild className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <a href="/Kevin - Resume.pdf" download>
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
                    </a>
                  </Button>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full p-1 shadow-2xl animate-pulse">
                  <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20"></div>
                    <span className="text-8xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent relative z-10">KEV</span>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-gray-800 dark:to-blue-900/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-sm font-medium text-blue-800 dark:text-blue-200 backdrop-blur-sm mb-6">
              <Code className="w-4 h-4 mr-2" />
              My Work
            </div>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6 leading-none"
              style={{ paddingBottom: '0.5rem' }}
            >
              Featured Projects
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience in various technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm flex flex-col border-0 shadow-lg hover:scale-105 transform relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient}`}></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow relative z-10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="text-xs bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700 hover:shadow-md transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{project.date}</span>
                  </div>
                  <div className="flex gap-2 mt-auto">
                   <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white group-hover:border-transparent transition-all duration-300"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </a>

                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-sm font-medium text-blue-800 dark:text-blue-200 backdrop-blur-sm mb-6">
              <Cpu className="w-4 h-4 mr-2" />
              Skills & Expertise
            </div>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6 leading-none"style={{ paddingBottom: '0.5rem' }}>
              Technologies &amp; Tools
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life and solve complex problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => {
              const icons = [Code, Globe, Database, Cpu];
              const gradients = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500',
                'from-green-500 to-emerald-500',
                'from-orange-500 to-red-500'
              ];
              const Icon = icons[index % icons.length];
              const gradient = gradients[index % gradients.length];
              
              return (
                <Card key={category} className="text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-0 shadow-lg group relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradient}`}></div>
                  <CardHeader className="relative z-10">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${gradient} p-0.5 shadow-lg`}>
                      <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center">
                        <Icon className="h-8 w-8 text-gray-700 dark:text-gray-300" />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skillList.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="outline" 
                          className="text-xs hover:shadow-md transition-all duration-300 hover:scale-105 bg-gradient-to-r from-slate-50 to-blue-50/50 dark:from-gray-800 dark:to-blue-900/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 to-purple-50/30 dark:from-gray-800 dark:to-purple-900/10 pb-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-sm font-medium text-blue-800 dark:text-blue-200 backdrop-blur-sm mb-6">
              <Mail className="w-4 h-4 mr-2" />
              Let's Connect
            </div>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let's work together to bring your ideas to life and create something amazing.
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm max-w-md w-full shadow-2xl border-0 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className="mb-8">
                  <div className="relative inline-block">
                    <div className="w-40 h-40 rounded-full p-1 bg-gradient-to-br from-blue-500 to-purple-500 shadow-xl">
                      <img
                        src="/uploads/picture.png"
                        alt="Kevin Anand Raj"
                        className="w-full h-full rounded-full object-cover object-center"
                        style={{ objectFit: 'cover', imageRendering: 'auto' }}
                      />
                    </div>
                    <div className="absolute -top-4 -right-4 w-6 h-6 bg-green-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg animate-pulse"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4 mb-2">
                    Kevin Anand Raj
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Electrical & Electronics Engineer
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://github.com/kevn-xo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-slate-50 to-blue-50/50 dark:from-gray-800 dark:to-blue-900/20 text-gray-700 dark:text-gray-300 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/40 dark:hover:to-purple-900/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                  >
                    <Github className="h-5 w-5 group-hover:text-blue-600 transition-colors" />
                    <span className="font-medium">GitHub</span>
                    <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kevin-anand-raj/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-slate-50 to-purple-50/50 dark:from-gray-800 dark:to-purple-900/20 text-gray-700 dark:text-gray-300 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/40 dark:hover:to-purple-900/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                  >
                    <Linkedin className="h-5 w-5 group-hover:text-blue-600 transition-colors" />
                    <span className="font-medium">LinkedIn</span>
                    <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href="mailto:kevinanand2004@gmail.com"
                    className="flex items-center justify-center space-x-3 p-4 rounded-xl bg-gradient-to-r from-slate-50 to-pink-50/50 dark:from-gray-800 dark:to-pink-900/20 text-gray-700 dark:text-gray-300 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/40 dark:hover:to-purple-900/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                  >
                    <Mail className="h-5 w-5 group-hover:text-blue-600 transition-colors" />
                    <span className="font-medium">kevinanand2004@gmail.com</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-t border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              © 2025 Kevin Anand Raj. All rights reserved.
            </p>
          </div>
        </div>
        {/* Extra bottom spacing to prevent text cutoff */}
      </footer>
    </div>
  );
};

export default Index;
